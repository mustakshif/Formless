import { AsriEventListener } from "../util/eventListeners";
import { debounce, querySelectorPromise } from "../util/misc";
import { AsriMutationObserver, AsriResizeObserver, MOConfigForClassNames } from "../util/observers";
import { asriDoms, environment as env } from "../util/rsc";
import { doesTopBarOverflow, updateTopbarOverflow, updateWndEls } from "../util/state";
import { calcProtyleSpacings, debouncedCalcProtyleSpacings, removeProtyleSpacings } from "./afwd";
import { followSysAccentColor, getSystemAccentColor, makeConfigMenuItems, removeConfigMenuItems } from "./configsMenu/makeItems";
import { docBodyMoCallback } from "./dialog";
import { addDockbClassName, destroyDockBg, removeDockbClassName, updateDockLBgAndBorder } from "./docks";
import { debouncedFormatProtyleWithBgImageOnly, removeProtyleWithBgImageOnlyClassName } from "./editor";
import { addEnvClassNames, removeEnvClassNames } from "./env";
import { restoreDefaultSiyuanScrollbar, useMacSysScrollbar } from "./scrollbar";
import { debouncedFormatIndentGuidesForFocusedItems, removeIndentGuidesFormatClassName } from "./sidepanels";
import { avoidOverlappingWithStatus, debouncedStatusPosition, removeStatusStyles, setStatusHeightVar, unloadAvoidOverlappingWithStatus } from "./status";
import { calcTabbarSpacings, calcTopbarSpacings, handleMacFullScreen, loadTopbarFusion, recalcDragInitials, unloadTopbarFusion, updateDragRect } from "./topbarFusion";
import { applyTrafficLightPosition, restoreTrafficLightPosition } from "./trafficLights";

const globalClickEventListener = new AsriEventListener(lowFreqEventsCallback);
const globalDragEventListener = new AsriEventListener(lowFreqEventsCallback);
const globalKeyupEventListener = new AsriEventListener(lowFreqEventsCallback);
const watchImgExportMo = new AsriMutationObserver(debounce(docBodyMoCallback, 500));
const globalClassNameMo = new AsriMutationObserver(globalClassNameMoCallback);
const lytCenterRo = new AsriResizeObserver(lytCenterRoCallback);
const winRo = new AsriResizeObserver(winRoCallback);

export let isWinResizing = false, fromFullscreen: boolean;
export let protyleWidthChange = 0;

export async function loadAsriJSModules() {
    addEnvClassNames();
    useMacSysScrollbar();
    applyTrafficLightPosition();
    setStatusHeightVar();
    makeConfigMenuItems(); // https://github.com/mustakshif/Asri/issues/85
    if (!env.isMobile) {
        await updateWndEls();
        await updateDragRect('initials');
        loadTopbarFusion();
    }
    updateStyles();
    addDockbClassName();
    avoidOverlappingWithStatus();
    globalClickEventListener.start(document, 'mouseup');
    globalDragEventListener.start(document, 'dragend');
    globalKeyupEventListener.start(document, 'keyup');
    globalClassNameMo.observe(document.body, MOConfigForClassNames);
    watchImgExportMo.observe(document.body, { childList: true });
    asriDoms.layoutCenter || await querySelectorPromise('.layout__center');
    if (!env.isMobile) {
        lytCenterRo.observe(asriDoms.layoutCenter);
        winRo.observe(document.body);
    }
}

export async function unloadAsriJSModules() {
    removeEnvClassNames();
    restoreDefaultSiyuanScrollbar();
    restoreTrafficLightPosition();
    removeStatusStyles();
    if (!env.isMobile) await unloadTopbarFusion();
    destroyStyleUpdates();
    removeDockbClassName();
    unloadAvoidOverlappingWithStatus();
    globalClickEventListener.remove(document, 'mouseup');
    globalDragEventListener.remove(document, 'dragend');
    globalKeyupEventListener.remove(document, 'keyup');
    globalClassNameMo.disconnect();
    watchImgExportMo.disconnect(() => {
        document.body.classList.remove("has-exportimg")
    });
    document.body.classList.remove('body-asri--fullscreen');
    if (!env.isMobile) {
        lytCenterRo.disconnect();
        winRo.disconnect();
    }
    removeConfigMenuItems();
}
function lowFreqEventsCallback(e: Event) {
    // console.log(e);
    updateStyles(e);
}

async function updateStyles(e?: Event | KeyboardEvent) {

    // run on first load
    if (!e) {
        lowFreqStyleUpdates();
        calcTopbarSpacings().then(calcTabbarSpacings);
    }

    // run on mouse events
    else if (
        (e.type.startsWith('mouse') || e.type.startsWith('drag')) ||
        (e instanceof KeyboardEvent && (e.key === 'Control' || e.key === 'Alt' || e.key === 'Shift' || e.key === 'Meta'))
    ) {
        lowFreqStyleUpdates();

        setTimeout(() => {
            recalcDragInitials();
            calcTopbarSpacings(0, false, doesTopBarOverflow).then(calcTabbarSpacings);
        }, 0);
    }

    function lowFreqStyleUpdates() {
        setTimeout(async () => {
            updateDockLBgAndBorder();
            debouncedFormatProtyleWithBgImageOnly();
            debouncedStatusPosition();
            setStatusHeightVar();
            await updateWndEls();
            calcProtyleSpacings();
            addDockbClassName();
            avoidOverlappingWithStatus();
            !env.isIOSApp && followSysAccentColor && env.supportOklch && getSystemAccentColor();
        }, 0);
    }
}

function destroyStyleUpdates() {
    destroyDockBg();
    removeIndentGuidesFormatClassName();
    removeProtyleWithBgImageOnlyClassName();
    removeProtyleSpacings();
}

function globalClassNameMoCallback(mutationList: MutationRecord[], observer: MutationObserver) {
    for (let mutation of mutationList) {
        if ((mutation.target as HTMLElement).classList.contains('b3-list-item--focus')) {
            debouncedFormatIndentGuidesForFocusedItems();
            debouncedFormatProtyleWithBgImageOnly();
        }

        if (
            mutation.target === document.body &&
            (
                mutation.oldValue?.includes('body--blur') ||
                (mutation.target as HTMLElement).className.includes('body--blur')
            )
        ) {
            updateWndEls().then(() => {
                updateStyles();
                !env.isIOSApp && followSysAccentColor && env.supportOklch && getSystemAccentColor();
                // console.log(mutation, 'Class changed from', mutation.oldValue?.split(' '), 'to', (mutation.target as HTMLElement).className.split(' '), isWinResizing)
            });
        } // make sure to only update styles when the body class changes; don't know why window resizing also cause class mutations on body element
    }
}

function lytCenterRoCallback(entries: ResizeObserverEntry[], observer: ResizeObserver) {
    // debouncedHandleWinResizeEnd();
    calcTopbarSpacings(0, isWinResizing, doesTopBarOverflow).then(calcTabbarSpacings);
    debouncedCalcProtyleSpacings();
    debouncedStatusPosition();
    // console.log('lytCenterRoCallback', isWinResizing)
}

function winRoCallback(entries: ResizeObserverEntry[], observer: ResizeObserver) {
    for (let entry of entries) {
        isWinResizing = true;
        debouncedHandleWinResizeEnd();

        const { inlineSize } = entry.contentBoxSize[0];

        if (entry.target instanceof HTMLElement) {
            // check if it's the first time to trigger resize event, if so, skip the calculation
            if (!entry.target.dataset.prevWidth) {
                entry.target.dataset.prevWidth = inlineSize + '';
                continue;
            }
            // get previous width
            const prevWidth = parseFloat(entry.target.dataset.prevWidth);
            const widthChange = inlineSize - prevWidth;
            entry.target.dataset.prevWidth = inlineSize + '';
            protyleWidthChange = widthChange;
        };  // make sure to capture width change after the size change is completely done
        // console.log('winRoCallback', isWinResizing)
    }
}

const debouncedHandleWinResizeEnd = debounce(() => {
    isWinResizing = false;
    handleMacFullScreen();

    updateTopbarOverflow();
    if (!doesTopBarOverflow) recalcDragInitials();
    calcTopbarSpacings(protyleWidthChange, isWinResizing, doesTopBarOverflow).then(calcTabbarSpacings);
    protyleWidthChange = 0;
    // console.log('debouncedwinRoCallback', isWinResizing);
}, 200);