!function(){const s={layouts:document.getElementById("layouts"),status:document.getElementById("status"),dockl:document.getElementById("dockLeft"),dockr:document.getElementById("dockRight"),dockb:document.getElementById("dockBottom"),layoutDockl:document.querySelector(".layout__dockl"),layoutDockr:document.querySelector(".layout__dockr"),layoutDockb:document.querySelector(".layout__dockb"),toolbar:document.getElementById("toolbar"),barSync:document.getElementById("barSync"),barForward:document.getElementById("barForward"),toolbarVIP:document.getElementById("toolbarVIP"),drag:document.getElementById("drag"),barPlugins:document.getElementById("barPlugins"),barSearch:document.getElementById("barSearch"),barMode:document.getElementById("barMode")},u=-1<navigator.platform.indexOf("Mac"),a=-1<navigator.platform.indexOf("Linux"),r=document.getElementById("sidebar")&&document.getElementById("editor"),d=0<s.toolbar?.classList.contains("toolbar--browser"),c=0<document.body.classList.contains("body--window");var e="android"===window.siyuan.config.system.container,n=navigator.userAgent;const t=(/iOS/i.test(n)||/iPad/i.test(n))&&/AppleWebKit/i.test(n),l=window.siyuan.config.lang,o=CSS.supports("color","oklch(from red calc(l * 0.5) 0 h)"),m=[],i=[],b=[],p=(u&&(document.body.classList.add("body--mac"),m.push(".body--mac")),a&&(document.body.classList.add("body--linux"),m.push(".body--linux")),r&&(document.body.classList.add("body--mobile"),m.push(".body--mobile")),d&&(document.body.classList.add("body--browser"),m.push(".body--browser")),e&&(document.body.classList.add("body--android"),m.push(".body--android")),t&&(document.body.classList.add("body--iosApp"),m.push(".body--iosApp")),!r&&s.toolbar&&(T("AsriPluginsIconsDivider",void 0,s.drag),u&&!d?T("AsriTopbarLeftSpacing",void 0,s.barSync):T("AsriTopbarLeftSpacing",void 0,s.barForward),u||d?T("AsriTopbarRightSpacing"):T("AsriTopbarRightSpacing",s.barSearch)),document.getElementById("AsriPluginsIconsDivider")),O=document.getElementById("AsriTopbarLeftSpacing"),N=document.getElementById("AsriTopbarRightSpacing"),f=s.toolbar;function _(t,o){t.includes(o)||t.push(o)}const h={followSysAccentColor:"1",chroma:"1",userCustomColor:""},g={zh_CN:{followSysAccent:"跟随系统强调色",pickColor:"自定义主题色",asriChroma:"色度："},zh_CHT:{followSysAccent:"跟隨系統強調色",pickColor:"自定義主題色",asriChroma:"色度："},en_US:{followSysAccent:"Follow system accent color",pickColor:"Customize theme color",asriChroma:"Chroma: "}},y=("zh_CN"===l||"zh_CHT"===l?g[l]:g.en_US).asriChroma;let j,w,$,H;{async function v(){await async function(t,o,e=!1,n=Date.now()){o=new Blob([o]),o=new File([o],t.split("/").pop());let i=new FormData;i.append("path",t),i.append("file",o),i.append("isDir",e),i.append("modTime",n);const c=await fetch("/api/file/putFile",{body:i,method:"POST",headers:{Authorization:"Token ''"}});return 200===c.status?c.json():null}("/data/snippets/Asri.config.json",JSON.stringify(h,void 0,4))}function q(){let n,i,c;setTimeout(()=>{if(!document.querySelector(".asri-config")){const o=document.querySelector('#commonMenu[data-name="barmode"] .b3-menu__items');if(o){var t=`<button class="b3-menu__separator asri-config"></button><button class="b3-menu__item asri-config" id="pickColor"><svg class="b3-menu__icon"></svg><label for="asriColorPicker" class="be-menu__label">${("zh_CN"===l||"zh_CHT"===l?g[l]:g.en_US).pickColor}</label><input id="asriColorPicker" type="color" value="${h.userCustomColor}"></button><button class="b3-menu__item asri-config" id="followSysAccent"><svg class="b3-menu__icon"></svg><label for="" class="be-menu__label">${("zh_CN"===l||"zh_CHT"===l?g[l]:g.en_US).followSysAccent}</label></button><button class="b3-menu__item asri-config" data-type="nobg" id="asriChroma"><svg class="b3-menu__icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"d="m19 11l-8-8l-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0zM5 2l5 5m-8 6h15m5 7a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4c.3 1.6 2 2.4 2 4" /></svg><div aria-label="${y+c?.value||"1"}"class="b3-tooltips b3-tooltips__n"><input style="box-sizing: border-box" type="range" id="asriChromaSlider" class="b3-slider fn__block" min="0"max="5" step="0.1" value="1"></div></button>`,t=document.createRange().createContextualFragment(t);o.appendChild(t),_(m,".asri-config"),n=document.getElementById("followSysAccent"),i=document.getElementById("pickColor"),c=document.getElementById("asriChromaSlider"),colorPicker=i.lastElementChild,n.classList.toggle("b3-menu__item--selected",w),i.classList.toggle("b3-menu__item--selected",!w),c.value=h.chroma||"1",c.parentElement.ariaLabel=y+h.chroma,d||r||a?n.classList.add("fn__none"):n.addEventListener("click",()=>{w?(w=!1,n.classList.remove("b3-menu__item--selected"),i.classList.add("b3-menu__item--selected"),document.documentElement.style.setProperty("--asri-user-custom-accent",h.userCustomColor||j||"#3478f6"),k(h.chroma),h.followSysAccentColor="0"):(w=!0,n.classList.add("b3-menu__item--selected"),i.classList.remove("b3-menu__item--selected"),document.documentElement.style.removeProperty("--asri-user-custom-accent"),h.followSysAccentColor="1",B()),v()}),i.addEventListener("click",()=>{w&&(w=!1,n.classList.remove("b3-menu__item--selected"),i.classList.add("b3-menu__item--selected"),document.documentElement.style.setProperty("--asri-user-custom-accent",h.userCustomColor),k(h.chroma),h.userCustomColor=h.userCustomColor,h.followSysAccentColor="0",v())}),colorPicker.addEventListener("input",()=>{document.documentElement.style.setProperty("--asri-user-custom-accent",colorPicker.value)}),colorPicker.addEventListener("change",()=>{n.classList.remove("b3-menu__item--selected"),i.classList.add("b3-menu__item--selected"),h.userCustomColor=colorPicker.value,w=!1,h.followSysAccentColor="0",v()});const e=function(o,e){let n=null;return(...t)=>{n&&clearTimeout(n),n=setTimeout(()=>{o(...t)},e)}}(()=>v(),200);c.addEventListener("input",function(){var t=this.value;document.documentElement.style.setProperty("--asri-c-factor",t),this.parentElement.ariaLabel=y+t,h.chroma=t,$="0"===t,k(t),e()})}}},0)}function B(){if(!(d||r||a)){const e=require("@electron/remote").systemPreferences.getAccentColor();var t="#"+e.slice(0,6),o=function(o){if(o){var e=parseInt(o.substring(1,3),16)/255,n=parseInt(o.substring(3,5),16)/255,i=parseInt(o.substring(5,7),16)/255,o=Math.max(e,n,i),c=Math.min(e,n,i),a=(o+c)/2;if(o===c)return{h:0,s:0,l:a};let t;var r=o-c,c=.5<a?r/(2-o-c):r/(o+c);switch(o){case e:t=(n-i)/r+(n<i?6:0);break;case n:t=(i-e)/r+2;break;case i:t=(e-n)/r+4}return{h:t/=6,s:c,l:a}}}(t);j!==t&&(document.documentElement.style.setProperty("--asri-sys-accent",t),.28<o.s?document.documentElement.style.setProperty("--asri-sys-accent-accessible",t):document.documentElement.style.removeProperty("--asri-sys-accent-accessible"),H=0===o.s,document.body.classList.add("asri-mode-transition"),setTimeout(()=>{document.body.classList.remove("asri-mode-transition")},350),j=t),w&&k(o.s)}}t||(async function(){await async function(t){try{var o=await fetch("/api/file/getFile",{method:"POST",headers:{Authorization:"Token ''"},body:JSON.stringify({path:t})});return 200===o.status?o:null}catch(t){return console.error("An error occurred while fetching the file:",t),null}}("/data/snippets/Asri.config.json").then(t=>t&&200===t.status?t.json():null).then(t=>{w=Number(t?.followSysAccentColor||h.followSysAccentColor),h.followSysAccentColor=t?.followSysAccentColor||"1",h.chroma=t?.chroma||"1",h.userCustomColor=t?.userCustomColor||"#3478f6"})}().then(()=>{o&&(!(d||r||a)&&w?document.documentElement.style.removeProperty("--asri-user-custom-accent"):document.documentElement.style.setProperty("--asri-user-custom-accent",h.userCustomColor),document.documentElement.style.setProperty("--asri-c-factor",h.chroma),$="0"===h.chroma,k(h.chroma),B(),q())}),o&&s.barMode?.addEventListener("click",q))}function k(t){"0"===(chromaValue=String(t))||w&&H||$?document.documentElement.style.setProperty("--asri-c-0","0"):document.documentElement.style.removeProperty("--asri-c-0")}function x(t,o=t){require("@electron/remote").getCurrentWindow().setWindowButtonPosition({x:t,y:o})}if(u&&!d&&x(16),u&&c&&x(14),u||r)for(let t=0;t<document.styleSheets.length;t++){let e=document.styleSheets[t];try{for(let o=0;o<e.cssRules.length;o++){let t=e.cssRules[o];t.selectorText&&t.selectorText.includes("::-webkit-scrollbar")&&(t.style.width||t.style.height||t.style.backgroundColor)&&(i.push({styleSheet:e,rule:t.cssText}),e.deleteRule(o),o--)}}catch(t){console.log(t)}}function T(o,e=void 0,n=void 0){if(!document.getElementById(o)){let t=document.createElement("div");t.id=o,e?s.toolbar.insertBefore(t,e):n?s.toolbar.insertBefore(t,n.nextSibling):s.toolbar.appendChild(t)}}let V=!1,J,U,X,S=s.drag?.getBoundingClientRect().left,C=s.drag?.getBoundingClientRect().right,Y=s.toolbar?.getBoundingClientRect();function K(){V=!0,clearTimeout(J),J=setTimeout(function(){if(c)P(),setTimeout(()=>{z()},200);else{if(V=!1,u){let t=document.querySelector("#AsriTopbarLeftSpacing");X=!d&&require("@electron/remote").getCurrentWindow().isFullScreen()?(document.body.classList.add("body--fullscreen"),S-=X?0:88,!0):(document.body.classList.remove("body--fullscreen"),t?.style.setProperty("width","0px"),S=s.drag?.getBoundingClientRect().left,t.style.removeProperty("width"),!1)}A(),P(),E(),setTimeout(()=>{z()},200)}},200)}function A(r){if(!c){let t,o,e,n,i=(t=s.layouts.querySelector(".layout__center")?.getBoundingClientRect(),o=N.getBoundingClientRect(),e=s.barSync.getBoundingClientRect(),barForwardRect=s.barForward.getBoundingClientRect(),window.innerWidth),c=t.left,a=t.right;V?C+=r:(c>S+8?(f.style.setProperty("--topbar-left-spacing",0),S=X?S:s.drag.getBoundingClientRect().left,O.classList.remove("asri-expanded")):(u&&!d?f.style.setProperty("--topbar-left-spacing",c-e.right+4+"px"):f.style.setProperty("--topbar-left-spacing",c-barForwardRect.right+4+"px"),O.classList.add("asri-expanded")),a<C-8?(f.style.setProperty("--topbar-right-spacing",0),C=s.drag.getBoundingClientRect().right,s.dockr?.style.removeProperty("--avoid-topbar"),s.layoutDockr?.style.removeProperty("--avoid-topbar")):u||d?(f.style.setProperty("--topbar-right-spacing",o.right-a+5+"px"),s.dockr?.style.setProperty("--avoid-topbar","4px"),s.layoutDockr?.style.setProperty("--avoid-topbar","4px")):(f.style.setProperty("--topbar-right-spacing",o.right-a+7+"px"),s.dockr?.style.setProperty("--avoid-topbar","calc(var(--toolbar-height) - 6px)"),s.layoutDockr?.style.setProperty("--avoid-topbar","calc(var(--toolbar-height) - 6px)"))),a<C-8?(p.style.setProperty("--container-bg","var(--b3-list-hover)"),p.style.left=a+"px",p.style.right="0",p.style.removeProperty("height"),p.style.removeProperty("top")):(n=s.drag.getBoundingClientRect(),p.style.setProperty("--container-bg","var(--b3-border-color-trans)"),p.style.left=n.right-10+"px",p.style.right=i-n.right+8+"px",p.style.height="21px",p.style.top="13.5px")}}let W=[];function P(){W=s.layouts.querySelectorAll('[data-type="wnd"]')}function E(){c||W.forEach(t=>{let o=t.querySelector('.fn__flex-column[data-type="wnd"] > .fn__flex:first-child');var e,n,t=o.getBoundingClientRect(),i=s.drag.getBoundingClientRect();L(t,i)||L(t,Y)?(e=t.left<i.left?i.left-t.left-4:0,n=t.right>i.right?t.right-i.right+8:0,o.style.paddingLeft=e+"px",o.style.paddingRight=n+"px",t.right-n-240<i.left&&t.left<i.left||t.left+e+240>i.right&&t.right>i.right?(o.style.paddingTop="42px",o.style.paddingLeft=0,o.style.paddingRight=0):o.style.removeProperty("padding-top")):(o.style.removeProperty("padding-left"),o.style.removeProperty("padding-right"))})}function z(){W.forEach(t=>{let o=t.querySelector(".file-tree")?[]:t.querySelectorAll(".protyle-wysiwyg");0<o.length&&setTimeout(()=>{o.forEach(t=>{var o=t.style.paddingLeft;o!==t.dataset.prevpadding&&(t.style.setProperty("--protyle-spacing",o),t.dataset.prevpadding=o)})},300)})}if(!r){if(setTimeout(A,200),!c){let e=s.layouts.querySelector(".layout__center");const R=new ResizeObserver(t=>{for(var o of t){var e,n=o.contentBoxSize[0]["inlineSize"];o.target.dataset.prevWidth?(e=n-parseFloat(o.target.dataset.prevWidth),o.target.dataset.prevWidth=n,P(),clearTimeout(U),U=setTimeout(()=>{it(),z()},200),A(e),E(),D()):o.target.dataset.prevWidth=n}});if(e)R.observe(e),b.push(R);else{let t=0,o;function G(){s.layouts=document.getElementById("layouts"),e=s.layouts.querySelector(".layout__center"),10!==++t&&!e||(clearInterval(o),R.observe(e),b.push(R))}setTimeout(()=>{o=setInterval(G,1e3)},0)}}window.addEventListener("resize",K)}function Q(t="l"){return s["dock"+t]&&s["dock"+t].classList.contains("fn__none")}function Z(){return s.dockb&&!s.dockb.classList.contains("fn__none")}function tt(){var t=Z(),o=function(){if(!r){const t=s.layouts,o=t.querySelector(".layout__dockb");return t&&o?.classList.contains("layout--float")&&"0px"!==o?.style.height}}();s.toolbar?.nextElementSibling.classList.toggle("has-dockb",t),s.toolbar?.nextElementSibling.classList.toggle("has-layout-dockb-float",o),s.dockb?.classList.toggle("has-layout-dockb-float",o),_(m,".has-dockb"),_(m,".has-layout-dockb-float")}function ot(){return s.status&&s.status.classList.contains("fn__none")}function et(t){return t&&!t.classList.contains("layout--float")}function nt(t){return"0px"!==t?.style.width}function D(){if(s.dockl&&!r&&!c)for(var e of["l","r"]){let t=s["layoutDock"+e],o=s["dock"+e];if(et(t)&&nt(t)?(o.classList.add("dock-layout-expanded"),_(m,".dock-layout-expanded")):o.classList.remove("dock-layout-expanded"),!Q()&&(et(n=t)||!n?.style.cssText.includes("transform: translate"))&&nt(t))switch(e){case"l":case"r":o.style.setProperty("--border-clr","transparent")}else o.style.removeProperty("--border-clr")}var n}function it(){function t(t,o){s.status.style.transform=`translate(${t}px, ${o}px)`}var o,e,n,i;r||c||(Z()?(s.status?.style.removeProperty("max-width"),s.status?.style.removeProperty("transform")):(n=s.layouts.querySelector(".layout__center"))&&s.layoutDockr&&!s.status.classList.contains(".fn__none")&&(o=s.layoutDockr.clientWidth,n=n.clientWidth,s.layoutDockb=s.layouts.querySelector(".layout__dockb"),e=s.layoutDockb&&!s.layoutDockb.classList.contains(".fn__none")&&et(s.layoutDockb)?-1*s.layoutDockb.clientHeight:0,s.status.style.maxWidth=n-12+"px",n=Q("r"),i=function(t){let o=s["layoutDock"+t];return o&&(o.classList.contains("layout--float")||o.style.cssText.includes("width: 0px"))}("r"),n&&i?t(0,e):!n&&i?t(-40,e):n||i?n&&!i&&t(-1*o,e):t(-1*(o+40),e),s.status=document.getElementById("status")))}function ct(){ot()?document.body.style.setProperty("--status-height","0px"):document.body.style.setProperty("--status-height","32px")}function I(){if(!ot()){let t=s.layouts?.querySelectorAll(".layout__center .layout-tab-container"),e=s.status.getBoundingClientRect(),o=(t?.forEach(t=>{let o=t.querySelector(".file-tree");o&&!o.classList.contains("fn__none")&&L(t.getBoundingClientRect(),e)?t.style.paddingBottom="35px":t.style.removeProperty("padding-bottom")}),document.getElementById("searchList")),n=document.getElementById("searchPreview");var c,a;(o||n)&&(c=o.getBoundingClientRect(),a=n.getBoundingClientRect(),L(c,e)?o.style.paddingBottom="35px":o.style.removeProperty("padding-bottom"),L(a,e)?n.style.paddingBottom="35px":n.style.removeProperty("padding-bottom"));let i=document.getElementById("viewerContainer");i&&(L(i.getBoundingClientRect(),e)?i.style.paddingBottom="35px":i.style.removeProperty("padding-bottom")),s.layouts?.querySelectorAll(".card__main").forEach(t=>{t&&(L(t.getBoundingClientRect(),e)?t.style.paddingBottom="35px":t.style.removeProperty("padding-bottom"))})}}function L(t,o){return t&&o&&(t.right>o.left&&t.bottom>o.top&&t.left<o.left+o.width&&t.top<o.top+o.height)}function at(){if(!r){let t=document.querySelectorAll(".file-tree .b3-list-item--focus");document.querySelectorAll(".file-tree .has-focus").forEach(t=>t.classList.remove("has-focus")),t.forEach(t=>{t.nextElementSibling&&"UL"===t.nextElementSibling.tagName&&!t.nextElementSibling.classList.contains("fn__none")||(t.parentNode.classList.add("has-focus"),_(m,".has-focus"))})}}function rt(e,n){return new MutationObserver(function(t,o){t.forEach(t=>{t.type===e&&n(t,o)})})}function ut(e,n=void 0,i=void 0){return new MutationObserver(function(t,o){t.forEach(t=>{e&&"childList"===t.type?e(t,o):n&&"attributes"===t.type?n(t,o):i&&"characterData"===t.type&&i(t,o)})})}function st(e,t,o=void 0,n=void 0,i=!1){let c={},a=(t&&(c.childList=!0),o&&(c.attributes=!0),n&&(c.characterData=!0),t&&i&&(c.subtree=!0),s["layoutDock"+e]),r=ut(t,o,n);if(a)r.observe(a,c),b.push(r);else{let t=0,o;function u(){a=s.layouts.querySelector(".layout__dock"+e),10!==++t&&!a||(clearInterval(o),s["layoutDock"+e]=a,D(),r.observe(a,c),b.push(r))}setTimeout(()=>{o=setInterval(u,1e3)},0)}}tt(),D(),ct(),I(),at();{var[n,e=void 0,F=!1]=[()=>{{let t=document.querySelectorAll(".b3-dialog--open .b3-dialog");t.forEach(t=>{t.querySelector(".emojis")&&(t.classList.add("emojis-container"),_(m,".emojis-container"))})}tt()}];let t={},o=(n&&(t.childList=!0),e&&(t.attributes=!0),n&&F&&(t.subtree=!0),ut(n,e));o.observe(document.body,t),b.push(o)}if(!r&&!c){st("l",void 0,()=>{setTimeout(()=>{I()},200),D()}),st("r",void 0,()=>{setTimeout(()=>{I()},200),D()});{F="attributes";n=ct;e=s.status;let t=rt(F,n);e&&(t.observe(e,{[F]:!0}),b.push(t))}}function M(){r||setTimeout(()=>{P();{let t=document.querySelector("#AsriTopbarLeftSpacing"),o=document.querySelector("#AsriTopbarRightSpacing");t?.style.setProperty("width","0px"),o?.style.setProperty("width","0px"),S=s.drag?.getBoundingClientRect().left,C=s.drag?.getBoundingClientRect().right,t?.style.removeProperty("width"),o?.style.removeProperty("width")}A(),E(),z(),at();{let t=s.layouts?.querySelectorAll(".protyle .protyle-background");t.forEach(t=>{!t.querySelector(".protyle-background__img img")?.classList.contains("fn__none")&&t.querySelector(".protyle-background__icon.fn__none")?(t.classList.add("without-icon"),_(m,".without-icon")):t.classList.remove("without-icon")})}I(),tt(),it(),!t&&w&&o&&B()},200)}function dt(t){"Control"!==t.key&&"Alt"!==t.key&&"Shift"!==t.key&&"Meta"!==t.key||M()}function lt(t){document.body.style.setProperty("--mouseX",t.clientX+"px"),document.body.style.setProperty("--mouseY",t.clientY+"px")}M(),window.addEventListener("mouseup",M),window.addEventListener("dragend",M),window.addEventListener("keyup",dt),window.addEventListener("dblclick",lt),window.destroyTheme=()=>{if(window.removeEventListener("mouseup",M),window.removeEventListener("keyup",dt),window.removeEventListener("dragend",M),window.removeEventListener("dblclick",lt),window.removeEventListener("resize",K),s.barMode?.removeEventListener("click",q),b.forEach(t=>t.disconnect()),u&&!d&&x(8),u&&c&&x(8,13),m.forEach(o=>{document.querySelectorAll(o).forEach(t=>t.classList.remove(o.slice(1)))}),document.querySelector("#AsriTopbarLeftSpacing")?.remove(),document.querySelector("#AsriTopbarRightSpacing")?.remove(),document.querySelector("#AsriPluginsIconsDivider")?.remove(),document.body.style.removeProperty("--mouseX"),document.body.style.removeProperty("--mouseY"),document.body.style.removeProperty("--status-height"),document.documentElement.style.removeProperty("--asri-sys-accent"),document.documentElement.style.removeProperty("--asri-sys-accent-accessible"),document.documentElement.style.removeProperty("--asri-sys-accent-grayscale"),document.documentElement.style.removeProperty("--asri-user-custom-accent"),document.documentElement.style.removeProperty("--asri-c-factor"),document.documentElement.style.removeProperty("--asri-c-0"),document.querySelectorAll(".dock").forEach(t=>{t.style.removeProperty("--border-clr")}),setTimeout(()=>{s.toolbar?.style.removeProperty("--topbar-left-spacing"),s.toolbar?.style.removeProperty("--topbar-right-spacing"),s.dockr?.style.removeProperty("--avoid-topbar"),s.layoutDockr?.style.removeProperty("--avoid-topbar"),s.status?.style.removeProperty("max-width"),s.status?.style.removeProperty("transform");const t=document.body.querySelectorAll('[data-type="wnd"]'),o=(t.forEach(t=>{const o=t.firstElementChild,e=t.querySelectorAll(".protyle-wysiwyg");o?.style.removeProperty("padding-left"),o?.style.removeProperty("padding-right"),o?.style.removeProperty("padding-top"),e.forEach(t=>{t.style.removeProperty("--protyle-spacing"),t.dataset.prevpadding=void 0})}),s.layouts?.querySelectorAll(".layout__center .layout-tab-container"));o.forEach(t=>{t.style.removeProperty("padding-bottom")})},200),document.getElementById("searchList")?.style.removeProperty("padding-bottom"),document.getElementById("searchPreview")?.style.removeProperty("padding-bottom"),document.getElementById("viewerContainer")?.style.removeProperty("padding-bottom"),s.layouts.querySelectorAll(".card__main").forEach(t=>{t.style.removeProperty("padding-bottom")}),i)for(let o=0;o<i.length;o++){let t=i[o];t.styleSheet.insertRule(t.rule,t.styleSheet.cssRules.length)}document.body.classList.add("asri-mode-transition"),setTimeout(()=>{document.body.classList.remove("asri-mode-transition")},350)}}();