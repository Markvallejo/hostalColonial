/*! For license information please see fa4cb63c5ca40b3a60e4f1c0ad8fb6d3856a661c-318f16100e0b7195f1d1.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[68],{5764:function(e){var t=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=t},972:function(e,t,n){e.exports=n(90)},90:function(e,t,n){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var r=n(7294).createElement,s=n(5697),a=n(5950);e.exports=function(e){return function(){for(var t=arguments.length,n=Array(t),c=0;c<t;c++)n[c]=arguments[c];var o=function t(s){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=[].concat(i(Object.keys(t.propTypes||{})),["css"]),l=Object.assign({theme:c.theme||{}},s),u={};for(var d in s)o.includes(d)||(u[d]=s[d]);return u.className=[u.className].concat(i(n.map((function(e){return"function"==typeof e?e(l):e})).filter((function(e){return!!e})).map((function(e){return a(e)}))),[a(s.css||{})]).join(" ").trim(),r(e,u)};return o.contextTypes={theme:s.oneOfType([s.object,s.func])},o}},e.exports.css=a.css,e.exports.reset=a.reset},5950:function(e){"use strict";var t={},n="x",i=[],r=function(e){return i.push(e)},s=function(e,t){return t?t+"{"+e+"}":e},a=function(e,t,n){return"."+e+"{"+(t.replace(/[A-Z]|^ms/g,"-$&").toLowerCase()+":")+n+"}"},c=function(e){return e.replace(/&/g,"")},o=function e(o){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",u=arguments[2];return Object.keys(o).map((function(d){var p=o[d];if(null===p)return"";if("object"==typeof p){var m=/^@/.test(d)?d:null;return e(p,m?l:l+d,m||u)}var f=d+p+l+u;if(t[f])return t[f];var h=n+i.length.toString(36);return r(s(a(h+c(l),d,p),u)),t[f]=h,h})).join(" ")};if(e.exports=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map((function(e){return o(e)})).join(" ").trim()},e.exports.css=function(){return i.sort().join("")},e.exports.reset=function(){for(t={};i.length;)i.pop()},e.exports.prefix=function(e){return n=e},"undefined"!=typeof document){var l=document.head.appendChild(document.createElement("style")).sheet;r=function(e){i.push(e),l.insertRule(e,l.cssRules.length)}}},2273:function(e,t,n){var i;!function(e){var t,n,i,r,s,a,c,o=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(o)&&o.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(n=document.createElement("source"),i=function(e){var t,i,r=e.parentNode;"PICTURE"===r.nodeName.toUpperCase()?(t=n.cloneNode(),r.insertBefore(t,r.firstElementChild),setTimeout((function(){r.removeChild(t)}))):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,i=e.sizes,e.sizes+=",100vw",setTimeout((function(){e.sizes=i})))},r=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)i(t[e])},s=function(){clearTimeout(t),t=setTimeout(r,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),c=function(){s(),a&&a.addListener&&a.addListener(s)},n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?c():document.addEventListener("DOMContentLoaded",c),s))}(window),function(r,s,a){"use strict";var c,o,l;s.createElement("picture");var u={},d=!1,p=function(){},m=s.createElement("img"),f=m.getAttribute,h=m.setAttribute,g=m.removeAttribute,A=s.documentElement,x={},w={algorithm:""},L="data-pfsrc",M=L+"set",y=navigator.userAgent,v=/rident/.test(y)||/ecko/.test(y)&&y.match(/rv\:(\d+)/)&&RegExp.$1>35,j="currentSrc",b=/\s+\+?\d+(e\d+)?w/,N=/(\([^)]+\))?\s*(.+)/,C=r.picturefillCFG,E="font-size:100%!important;",z=!0,D={},S={},T=r.devicePixelRatio,k={px:1,in:96},U=s.createElement("a"),I=!1,O=/^[ \t\n\r\u000c]+/,_=/^[, \t\n\r\u000c]+/,Q=/^[^ \t\n\r\u000c]+/,R=/[,]+$/,B=/^\d+$/,W=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,Z=function(e,t,n,i){e.addEventListener?e.addEventListener(t,n,i||!1):e.attachEvent&&e.attachEvent("on"+t,n)},G=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}};function P(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var Y,H,J,F,$,X,K,V,q,ee,te,ne,ie,re,se,ae,ce=(Y=/^([\d\.]+)(em|vw|px)$/,H=G((function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"})),function(e,t){var n;if(!(e in D))if(D[e]=!1,t&&(n=e.match(Y)))D[e]=n[1]*k[n[2]];else try{D[e]=new Function("e",H(e))(k)}catch(i){}return D[e]}),oe=function(e,t){return e.w?(e.cWidth=u.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},le=function(e){if(d){var t,n,i,r=e||{};if(r.elements&&1===r.elements.nodeType&&("IMG"===r.elements.nodeName.toUpperCase()?r.elements=[r.elements]:(r.context=r.elements,r.elements=null)),i=(t=r.elements||u.qsa(r.context||s,r.reevaluate||r.reselect?u.sel:u.selShort)).length){for(u.setupRun(r),I=!0,n=0;n<i;n++)u.fillImg(t[n],r);u.teardownRun(r)}}};function ue(e,t){return e.res-t.res}function de(e,t){var n,i,r;if(e&&t)for(r=u.parseSet(t),e=u.makeUrl(e),n=0;n<r.length;n++)if(e===u.makeUrl(r[n].url)){i=r[n];break}return i}r.console&&console.warn,j in m||(j="src"),x["image/jpeg"]=!0,x["image/gif"]=!0,x["image/png"]=!0,x["image/svg+xml"]=s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),u.ns=("pf"+(new Date).getTime()).substr(0,9),u.supSrcset="srcset"in m,u.supSizes="sizes"in m,u.supPicture=!!r.HTMLPictureElement,u.supSrcset&&u.supPicture&&!u.supSizes&&(J=s.createElement("img"),m.srcset="data:,a",J.src="data:,a",u.supSrcset=m.complete===J.complete,u.supPicture=u.supSrcset&&u.supPicture),u.supSrcset&&!u.supSizes?(F="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",$=s.createElement("img"),X=function(){2===$.width&&(u.supSizes=!0),o=u.supSrcset&&!u.supSizes,d=!0,setTimeout(le)},$.onload=X,$.onerror=X,$.setAttribute("sizes","9px"),$.srcset=F+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",$.src=F):d=!0,u.selShort="picture>img,img[srcset]",u.sel=u.selShort,u.cfg=w,u.DPR=T||1,u.u=k,u.types=x,u.setSize=p,u.makeUrl=G((function(e){return U.href=e,U.href})),u.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},u.matchesMedia=function(){return r.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?u.matchesMedia=function(e){return!e||matchMedia(e).matches}:u.matchesMedia=u.mMQ,u.matchesMedia.apply(this,arguments)},u.mMQ=function(e){return!e||ce(e)},u.calcLength=function(e){var t=ce(e,!0)||!1;return t<0&&(t=!1),t},u.supportsType=function(e){return!e||x[e]},u.parseSize=G((function(e){var t=(e||"").match(N);return{media:t&&t[1],length:t&&t[2]}})),u.parseSet=function(e){return e.cands||(e.cands=function(e,t){function n(t){var n,i=t.exec(e.substring(l));if(i)return n=i[0],l+=n.length,n}var i,r,s,a,c,o=e.length,l=0,u=[];function d(){var e,n,s,a,c,o,l,d,p,m=!1,f={};for(a=0;a<r.length;a++)o=(c=r[a])[c.length-1],l=c.substring(0,c.length-1),d=parseInt(l,10),p=parseFloat(l),B.test(l)&&"w"===o?((e||n)&&(m=!0),0===d?m=!0:e=d):W.test(l)&&"x"===o?((e||n||s)&&(m=!0),p<0?m=!0:n=p):B.test(l)&&"h"===o?((s||n)&&(m=!0),0===d?m=!0:s=d):m=!0;m||(f.url=i,e&&(f.w=e),n&&(f.d=n),s&&(f.h=s),s||n||e||(f.d=1),1===f.d&&(t.has1x=!0),f.set=t,u.push(f))}function p(){for(n(O),s="",a="in descriptor";;){if(c=e.charAt(l),"in descriptor"===a)if(P(c))s&&(r.push(s),s="",a="after descriptor");else{if(","===c)return l+=1,s&&r.push(s),void d();if("("===c)s+=c,a="in parens";else{if(""===c)return s&&r.push(s),void d();s+=c}}else if("in parens"===a)if(")"===c)s+=c,a="in descriptor";else{if(""===c)return r.push(s),void d();s+=c}else if("after descriptor"===a)if(P(c));else{if(""===c)return void d();a="in descriptor",l-=1}l+=1}}for(;;){if(n(_),l>=o)return u;i=n(Q),r=[],","===i.slice(-1)?(i=i.replace(R,""),d()):p()}}(e.srcset,e)),e.cands},u.getEmValue=function(){var e;if(!c&&(e=s.body)){var t=s.createElement("div"),n=A.style.cssText,i=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",A.style.cssText=E,e.style.cssText=E,e.appendChild(t),c=t.offsetWidth,e.removeChild(t),c=parseFloat(c,10),A.style.cssText=n,e.style.cssText=i}return c||16},u.calcListLength=function(e){if(!(e in S)||w.uT){var t=u.calcLength(function(e){var t,n,i,r,s,a,c,o=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(i=(n=function(e){var t,n="",i=[],r=[],s=0,a=0,c=!1;function o(){n&&(i.push(n),n="")}function l(){i[0]&&(r.push(i),i=[])}for(;;){if(""===(t=e.charAt(a)))return o(),l(),r;if(c){if("*"===t&&"/"===e[a+1]){c=!1,a+=2,o();continue}a+=1}else{if(P(t)){if(e.charAt(a-1)&&P(e.charAt(a-1))||!n){a+=1;continue}if(0===s){o(),a+=1;continue}t=" "}else if("("===t)s+=1;else if(")"===t)s-=1;else{if(","===t){o(),l(),a+=1;continue}if("/"===t&&"*"===e.charAt(a+1)){c=!0,a+=2;continue}}n+=t,a+=1}}}(e)).length,t=0;t<i;t++)if(s=(r=n[t])[r.length-1],c=s,o.test(c)&&parseFloat(c)>=0||l.test(c)||"0"===c||"-0"===c||"+0"===c){if(a=s,r.pop(),0===r.length)return a;if(r=r.join(" "),u.matchesMedia(r))return a}return"100vw"}(e));S[e]=t||k.width}return S[e]},u.setRes=function(e){var t;if(e)for(var n=0,i=(t=u.parseSet(e)).length;n<i;n++)oe(t[n],e.sizes);return t},u.setRes.res=oe,u.applySetCandidate=function(e,t){if(e.length){var n,i,r,s,a,c,o,l,d,p,m,f,h,g,A,x,L=t[u.ns],M=u.DPR;if(c=L.curSrc||t[j],o=L.curCan||function(e,t,n){var i;return!n&&t&&(n=(n=e[u.ns].sets)&&n[n.length-1]),(i=de(t,n))&&(t=u.makeUrl(t),e[u.ns].curSrc=t,e[u.ns].curCan=i,i.res||oe(i,i.set.sizes)),i}(t,c,e[0].set),o&&o.set===e[0].set&&((d=v&&!t.complete&&o.res-.1>M)||(o.cached=!0,o.res>=M&&(a=o))),!a)for(e.sort(ue),a=e[(s=e.length)-1],i=0;i<s;i++)if((n=e[i]).res>=M){a=e[r=i-1]&&(d||c!==u.makeUrl(n.url))&&(p=e[r].res,m=n.res,f=M,h=e[r].cached,g=void 0,A=void 0,x=void 0,"saveData"===w.algorithm?p>2.7?x=f+1:(A=(m-f)*(g=Math.pow(p-.6,1.5)),h&&(A+=.1*g),x=p+A):x=f>1?Math.sqrt(p*m):p,x>f)?e[r]:n;break}a&&(l=u.makeUrl(a.url),L.curSrc=l,L.curCan=a,l!==c&&u.setSrc(t,a),u.setSize(t))}},u.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},u.getSet=function(e){var t,n,i,r=!1,s=e[u.ns].sets;for(t=0;t<s.length&&!r;t++)if((n=s[t]).srcset&&u.matchesMedia(n.media)&&(i=u.supportsType(n.type))){"pending"===i&&(n=i),r=n;break}return r},u.parseSets=function(e,t,n){var i,r,s,c,l=t&&"PICTURE"===t.nodeName.toUpperCase(),d=e[u.ns];(d.src===a||n.src)&&(d.src=f.call(e,"src"),d.src?h.call(e,L,d.src):g.call(e,L)),(d.srcset===a||n.srcset||!u.supSrcset||e.srcset)&&(i=f.call(e,"srcset"),d.srcset=i,c=!0),d.sets=[],l&&(d.pic=!0,function(e,t){var n,i,r,s,a=e.getElementsByTagName("source");for(n=0,i=a.length;n<i;n++)(r=a[n])[u.ns]=!0,(s=r.getAttribute("srcset"))&&t.push({srcset:s,media:r.getAttribute("media"),type:r.getAttribute("type"),sizes:r.getAttribute("sizes")})}(t,d.sets)),d.srcset?(r={srcset:d.srcset,sizes:f.call(e,"sizes")},d.sets.push(r),(s=(o||d.src)&&b.test(d.srcset||""))||!d.src||de(d.src,r)||r.has1x||(r.srcset+=", "+d.src,r.cands.push({url:d.src,d:1,set:r}))):d.src&&d.sets.push({srcset:d.src,sizes:null}),d.curCan=null,d.curSrc=a,d.supported=!(l||r&&!u.supSrcset||s&&!u.supSizes),c&&u.supSrcset&&!d.supported&&(i?(h.call(e,M,i),e.srcset=""):g.call(e,M)),d.supported&&!d.srcset&&(!d.src&&e.src||e.src!==u.makeUrl(d.src))&&(null===d.src?e.removeAttribute("src"):e.src=d.src),d.parsed=!0},u.fillImg=function(e,t){var n,i=t.reselect||t.reevaluate;e[u.ns]||(e[u.ns]={}),n=e[u.ns],(i||n.evaled!==l)&&(n.parsed&&!t.reevaluate||u.parseSets(e,e.parentNode,t),n.supported?n.evaled=l:function(e){var t,n=u.getSet(e),i=!1;"pending"!==n&&(i=l,n&&(t=u.setRes(n),u.applySetCandidate(t,e))),e[u.ns].evaled=i}(e))},u.setupRun=function(){I&&!z&&T===r.devicePixelRatio||(z=!1,T=r.devicePixelRatio,D={},S={},u.DPR=T||1,k.width=Math.max(r.innerWidth||0,A.clientWidth),k.height=Math.max(r.innerHeight||0,A.clientHeight),k.vw=k.width/100,k.vh=k.height/100,l=[k.height,k.width,T].join("-"),k.em=u.getEmValue(),k.rem=k.em)},u.supPicture?(le=p,u.fillImg=p):(ie=r.attachEvent?/d$|^c/:/d$|^c|^i/,re=function e(){var t=s.readyState||"";se=setTimeout(e,"loading"===t?200:999),s.body&&(u.fillImgs(),(K=K||ie.test(t))&&clearTimeout(se))},se=setTimeout(re,s.body?9:99),ae=A.clientHeight,Z(r,"resize",(V=function(){z=Math.max(r.innerWidth||0,A.clientWidth)!==k.width||A.clientHeight!==ae,ae=A.clientHeight,z&&u.fillImgs()},q=99,ne=function e(){var t=new Date-te;t<q?ee=setTimeout(e,q-t):(ee=null,V())},function(){te=new Date,ee||(ee=setTimeout(ne,q))})),Z(s,"readystatechange",re)),u.picturefill=le,u.fillImgs=le,u.teardownRun=p,le._=u,r.picturefillCFG={pf:u,push:function(e){var t=e.shift();"function"==typeof u[t]?u[t].apply(u,e):(w[t]=e[0],I&&u.fillImgs({reselect:!0}))}};for(;C&&C.length;)r.picturefillCFG.push(C.shift());r.picturefill=le,"object"==typeof e.exports?e.exports=le:(i=function(){return le}.call(t,n,t,e))===a||(e.exports=i),u.supPicture||(x["image/webp"]=function(e,t){var n=new r.Image;return n.onerror=function(){x[e]=!1,le()},n.onload=function(){x[e]=1===n.width,le()},n.src=t,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)},586:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var i=n(7294),r=n(5764),s=n.n(r);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}var o=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var l=o.prototype;return l.componentDidMount=function(){var e;try{e=n(2273)}catch(t){return}e&&e()},l.renderSources=function(){var e=s()&&document.documentMode?document.documentMode:-1,t=this.props.sources;if(null==t)return null;var n=t.map((function(e,t){return null==e.srcSet?null:i.createElement("source",{key:"sources-"+t,srcSet:e.srcSet,media:e.media,type:e.type})}));return 9===e?i.createElement("video",{style:{display:"none"}},n):n},l.renderImage=function(e,t){void 0===t&&(t=!1);var n=e.alt,r=void 0===n?"":n,s=e.src,o=void 0===s?"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==":s,l=e.sizes,u=c(e,["alt","src","sizes"]),d=t?null:{sizes:l};return i.createElement("img",a({alt:r,srcSet:o},d,u))},l.render=function(){var e=this.props,t=e.sources,n=c(e,["sources"]);return null!=t?i.createElement("picture",null,this.renderSources(),this.renderImage(n,!0)):this.renderImage(n)},o}(i.PureComponent),l=o,u=n(972),d=n.n(u);d()("div")({width:"100%",height:"100%",position:"relative"}),d()("div")({overflow:"hidden",top:0,left:0,right:0,bottom:0,position:"absolute"}),d()(l)((function(e){var t=e.cover,n=void 0===t?"both":t,i=e.center,r=void 0===i||i;return{position:"absolute",top:r?"50%":0,left:r?"50%":0,transform:r?"translate(-50%, -50%)":"none",width:"width"===n?"100%":"auto",height:"height"===n?"100%":"auto",minHeight:"both"===n?"100%":"none",minWidth:"both"===n?"100%":"none"}}));var p=n.p+"static/banner-95860a893087c5eefbe47533b27ce164.jpg",m=n.p+"static/banner_sm-7cbf47e6f2ffc7690b8d98fb0d646360.jpg",f=n(9),h=n(3904),g=f.default.div.withConfig({displayName:"bannerstyle__StyledBannerContainer",componentId:"sc-7bqixz-0"})(["width:100%;text-align:center;height:auto;position:relative;.banner__home{width:100%;position:relative;img{width:100%;height:300px;@media ","{height:400px;}@media ","{height:500px;}@media ","{height:600px;}}.storitelling_banner{font-size:24px;font-family:",";text-transform:uppercase;padding:0 20px;font-weight:",";position:absolute;top:40%;color:#f7f7f7;@media ","{width:400px;top:60%;font-size:26px;text-align:left;}@media ","{width:500px;font-size:30px;}@media ","{width:600px;font-size:36px;}}}"],h.Uh.sm,h.Uh.md,h.Uh.lg,(function(e){return e.theme.vars.heaters}),(function(e){return e.theme.vars.fontExtraBold}),h.Uh.sm,h.Uh.md,h.Uh.md),A=function(){return i.createElement(g,null,i.createElement("div",{className:"banner__home"},i.createElement(l,{className:"banner__img",sources:[{srcSet:m,media:"(max-width: 767px)"},{srcSet:p,media:"(max-width: 1023px)"},{srcSet:p,media:"(max-width: 1366px)"},{srcSet:p,media:"(min-width: 1367px)"}]}),i.createElement("p",{className:"storitelling_banner"},"El mejor espacio para tus eventos especiales")))},x=f.default.div.withConfig({displayName:"headerstyle__HeaderContainer",componentId:"sc-1yuklu2-0"})(["width:100%;height:60px;background-color:black;position:relative;display:flex;justify-content:space-between;align-items:center;@media ","{height:80px;}@media ","{height:100px;}img{width:80px;padding-left:10px;@media ","{width:100px;padding-left:20px;}@media ","{width:120px;}}h1{color:white;font-size:14px;padding-right:10px;@media ","{font-size:16px;padding-right:20px;}@media ","{font-size:18px;}}"],h.Uh.sm,h.Uh.lg,h.Uh.sm,h.Uh.lg,h.Uh.sm,h.Uh.lg),w=n.p+"static/Logo-a8cb14fe38fe008a073fd01a17d24ab7.png",L=function(){return i.createElement(x,null,i.createElement("img",{src:w,alt:"logo_hotel"}),i.createElement("h1",null,"Hostal Colonial"))},M=n(5444),y=f.default.div.withConfig({displayName:"menustyle__MenuContainer",componentId:"sc-1edbet-0"})(["width:100%;height:60px;display:flex;align-items:center;justify-content:space-evenly;background-color:#ffa500;@media ","{height:80px;}@media ","{height:100px;}a{text-decoration:none;color:white;font-weight:",";@media ","{font-size:18px;}@media ","{font-size:22px;}}"],h.Uh.sm,h.Uh.lg,(function(e){return e.theme.vars.fontSemiBold}),h.Uh.sm,h.Uh.lg),v=function(){return i.createElement(y,null,i.createElement(M.Link,{to:"/"}," ",i.createElement("p",null,"Inicio")," "),i.createElement(M.Link,{to:"/"}," ",i.createElement("p",null,"Reservar")," "),i.createElement(M.Link,{to:"/"},i.createElement("p",null,"Contacto")," "),i.createElement(M.Link,{to:"/"}," ",i.createElement("p",null,"Nosotros")," "))},j=f.default.div.withConfig({displayName:"card_servicesstyle__CardContainer",componentId:"sc-14tc3bb-0"})(["width:80%;height:300px;border:solid gray 2px;margin-bottom:20px;text-align:center;border-radius:5px;@media ","{width:300px;margin:0 20px 20px 20px;}@media ","{width:350px;}&:hover{background-color:#6f6f8c;}.title{padding-left:15px;font-size:18px;font-weight:bold;text-align:left;margin-top:10px;}.description{padding-left:15px;font-size:14px;font-weight:bold;opacity:0.7;margin-top:10px;text-align:left;}img{width:90%;height:202px;margin-top:15px;border-radius:5px;}"],h.Uh.sm,h.Uh.lg),b=function(e){var t=e.title,n=e.description,r=e.image;return i.createElement(j,null,i.createElement("p",{className:"title"},t),i.createElement("p",{className:"description"},n),i.createElement("img",{src:r,alt:"habitacion"}))},N=f.default.div.withConfig({displayName:"servicesstyle__ServiceContainer",componentId:"sc-1et7x4q-0"})(["width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;margin-top:20px;@media ","{flex-direction:row;flex-wrap:wrap;}"],h.Uh.sm),C=f.default.div.withConfig({displayName:"servicesstyle__ContainerReserva",componentId:"sc-1et7x4q-1"})(["text-align:center;font-size:18px;padding:0 20px;font-weight:",";color:#0b0b4c;margin:30px 0;@media ","{margin-bottom:50px;}@media ","{width:600px;margin:30px auto;}.description_reserva{padding-bottom:30px;width:90%;margin:0 auto;@media ","{font-size:20px;width:80%;}}.container_phone{width:90%;height:60px;margin:0 auto;display:flex;justify-content:space-evenly;align-items:center;background-color:#ffa500;@media ","{font-size:20px;width:50%;margin-bottom:30px;}@media ","{margin-bottom:60px;}a{text-decoration:none;color:#0b0b4c;}img{width:30px;}}"],(function(e){return e.theme.vars.fontBold}),h.Uh.sm,h.Uh.md,h.Uh.md,h.Uh.sm,h.Uh.md),E=n.p+"static/sencilla-088f51a253a51cc3638c7dc78491c77b.jpg",z=n.p+"static/doble-4011200a8f30229b057492c723d0365f.jpg",D=n.p+"static/triple-7bd94439f8031653a636a18787175de9.jpg",S=n.p+"static/cuadruple-85379b97b9981dde1ef9a4ddee111be5.jpg",T=n.p+"static/matrimonial-700123af5e631c4c4d59cd386a11b146.jpg",k=function(){var e=[{id:1,image:E,title:"Habitación Individual",description:"Con Aire Acondicionado o Abanico, incluye el Desayuno."},{id:2,image:z,title:"Habitación Doble",description:"Con Aire Acondicionado o Abanico, incluye 2 Desayunos."},{id:3,image:D,title:"Habitación Triple",description:"Con Aire Acondicionado o Abanico, incluye 3 Desayunos."},{id:4,image:S,title:"Habitación Cuadruple",description:"Con Abanico, incluye 4 Desayunos."},{id:5,image:T,title:"Habitación Matrimonial",description:"Con Aire Acondicionado o Abanico, incluye 2 Desayunos."}];return i.createElement(i.Fragment,null,i.createElement(C,null,i.createElement("p",{className:"description_reserva"}," Para reservar cualquiera de nuestros servicios, puedes llamar al numero: "),i.createElement("div",{className:"container_phone"},i.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4zLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTW9kb19kZV9haXNsYW1pZW50byIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayINCgkgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2MCA2MC4yOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjAgNjAuMjg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiMzM2QxNmE7fQ0KCS5zdDF7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojMzNkMTZhO30NCjwvc3R5bGU+DQo8Zz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTkuMTksMjMuMTFDNTUuOSw5LjQ3LDQ0LjE2LDAuMTYsMjkuOTgsMGMtMS44NywwLjAzLTMuODIsMC4xOC01Ljc2LDAuNTlDNC40Myw0LjYtNS44MywyNi41NCwzLjgyLDQ0LjI2DQoJCWMwLjI1LDAuNDcsMC4yNywwLjg2LDAuMTMsMS4zNWMtMS4yOCw0LjY3LTIuNTUsOS4zNC0zLjgzLDE0Yy0wLjIxLDAuNzctMC4yMSwwLjc3LDAuNTYsMC41N2M0Ljg0LTEuMjcsOS42OC0yLjUzLDE0LjUyLTMuODENCgkJYzAuNC0wLjExLDAuNzItMC4wNiwxLjA4LDAuMTJjNi4yMywzLjE4LDEyLjgsNC4xMiwxOS42NywyLjc5QzUyLjM4LDU2LjA4LDYzLjExLDM5LjM3LDU5LjE5LDIzLjExeiBNMzQuMTcsNTQuNDcNCgkJYy0xLjM1LDAuMjMtMi43MSwwLjM1LTMuNDMsMC4zNGMtNS4yNi0wLjAyLTkuNTYtMS4xOS0xMy41LTMuNThjLTAuNS0wLjMxLTAuOTUtMC4zOC0xLjU0LTAuMjNjLTIuNjUsMC43My01LjMzLDEuMzktNy45OCwyLjENCgkJYy0wLjU2LDAuMTctMC42MSwwLjA1LTAuNDctMC40NmMwLjctMi41MywxLjM3LTUuMDQsMi4wOS03LjUzYzAuMi0wLjcsMC4xMy0xLjI0LTAuMjctMS44N2MtNS40Ni04Ljc3LTUuMjMtMTkuNzEsMC44OC0yNy44Mg0KCQlDMTYuMyw2Ljk2LDI0LjkzLDMuNSwzNS4yNSw1LjdjMTAuMTcsMi4xNCwxNi42Niw4LjcxLDE5LjA1LDE4Ljg0QzU3LjU2LDM4LjM4LDQ4LjE2LDUyLjE0LDM0LjE3LDU0LjQ3eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNy44MSw0NC4yOWMtMS4wNywwLjA1LTIuMDktMC4yLTMuMTEtMC40OGMtNi44Ny0xLjk3LTEyLjAzLTYuMjgtMTYuMTctMTEuOTRjLTEuNTctMi4xMy0zLjAyLTQuMzMtMy41LTYuOTgNCgkJYy0wLjU4LTMuMTksMC4zNC01Ljg4LDIuNzEtOC4wOWMwLjc1LTAuNjksMy4wNS0wLjk5LDMuOTctMC41NWMwLjM0LDAuMTcsMC41NiwwLjQ4LDAuNywwLjhjMC44NywyLjA3LDEuNzMsNC4xLDIuNTgsNi4xNw0KCQljMC4xNiwwLjQsMC4wOSwwLjc4LTAuMDksMS4xOGMtMC40NCwwLjk1LTEuMTQsMS43MS0xLjg1LDIuNDZjLTAuNTQsMC41NS0wLjU2LDEuMDYtMC4xNiwxLjcyYzIuNDMsNC4wNCw1Ljc4LDYuOTgsMTAuMTgsOC43NA0KCQljMC42NSwwLjI2LDEuMTUsMC4xNywxLjU4LTAuMzhjMC43My0wLjksMS41LTEuODEsMi4yLTIuNzRjMC40Ny0wLjY2LDEuMDItMC43NSwxLjY5LTAuNDRjMS40NSwwLjY2LDIuOSwxLjM1LDQuMzUsMi4wNA0KCQljMC4zMywwLjE0LDAuNjUsMC4zMSwwLjk3LDAuNDZjMS40NywwLjc0LDEuNDYsMC43NSwxLjMzLDIuMzdjLTAuMjUsMy4xNy0yLjYyLDQuNzMtNS40NCw1LjUxQzM5LjEyLDQ0LjMsMzguNDYsNDQuMzIsMzcuODEsNDQuMjkNCgkJeiIvPg0KPC9nPg0KPC9zdmc+DQo=",alt:"icon"}),i.createElement("p",{className:"phone_number"}," ",i.createElement("a",{href:"tel:+505 2722 2040",target:"_blank"}," +505 2722 2040 ")))),i.createElement(N,null,e.map((function(e,t){return i.createElement(b,{key:t,title:e.title,description:e.description,image:e.image})}))))},U=f.default.div.withConfig({displayName:"footerstyle__FooterContainer",componentId:"sc-1d1g0sl-0"})(["width:100%;height:auto;background-color:black;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;@media ","{}.visitanos_text{font-size:14px;color:#f7f7f7;position:relative;margin-top:20px;height:30%;@media ","{font-size:16px;}@media ","{font-size:18px;}}.social_media--container{display:flex;width:80%;justify-content:space-evenly;align-items:center;height:70%;margin-top:20px;margin-bottom:30px;@media ","{justify-content:space-evenly;}@media ","{width:60%;margin-top:20px;}@media ","{width:40%;}img{width:40px;margin-top:20px;@media ","{width:60px;}}}"],h.Uh.sm,h.Uh.sm,h.Uh.lg,h.Uh.sm,h.Uh.md,h.Uh.lg,h.Uh.sm),I=n.p+"static/facebook-6b7b4a8fa9859161cc71c450cc03e24f.png",O=n.p+"static/twitter-b413b75b86f2262401103d41350cd6ca.png",_=n.p+"static/instagram-10d36429d61619377f9a160545e0f2e1.png",Q=function(){return i.createElement(U,null,i.createElement("p",{className:"visitanos_text"},"Visitanos en Nuestras Redes Sociales"),i.createElement("div",{className:"social_media--container"},i.createElement("a",{href:"https://es-la.facebook.com/pg/reservacionescolonial/services/",target:"_blank"},i.createElement("img",{src:I,alt:"facebook"})),i.createElement("a",{href:"https://es-la.facebook.com/pg/reservacionescolonial/services/",target:"_blank"},i.createElement("img",{src:O,alt:"twitter"})),i.createElement("a",{href:"https://es-la.facebook.com/pg/reservacionescolonial/services/",target:"_blank"},i.createElement("img",{src:_,alt:"instagram"}))))},R=function(){return i.createElement(i.Fragment,null,i.createElement(L,null),i.createElement(v,null),i.createElement(A,null),i.createElement(k,null),i.createElement(Q,null))}},3904:function(e,t,n){"use strict";n.d(t,{Uh:function(){return i}});var i={xs:"(max-width: "+(767+"px")+")",sm:"(min-width: "+(768+"px")+")",md:"(min-width: "+(1024+"px")+")",lg:"(min-width: "+(1360+"px")+")",xl:"(min-width: "+(1920+"px")+")"};i.xs,i.sm,i.md,i.lg,i.xl}}]);
//# sourceMappingURL=fa4cb63c5ca40b3a60e4f1c0ad8fb6d3856a661c-318f16100e0b7195f1d1.js.map