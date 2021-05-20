/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-appearance-boxsizing-cssanimations-cssgradients-flexboxtweener-unicode-video-prefixes-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,a;for(var l in b)if(b.hasOwnProperty(l)){if(e=[],n=b[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),w.push((o?"":"no-")+a.join("-"))}}function i(e){var n=T.className,t=Modernizr._config.classPrefix||"";if(S&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),S?T.className.baseVal=n:T.className=n)}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):S?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=s(S?"svg":"body"),e.fake=!0),e}function l(e,t,r,o){var i,l,f,d,c="modernizr",u=s("div"),p=a();if(parseInt(r,10))for(;r--;)f=s("div"),f.id=o?o[r]:c+(r+1),u.appendChild(f);return i=s("style"),i.type="text/css",i.id="s"+c,(p.fake?p:u).appendChild(i),p.appendChild(u),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),u.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",d=T.style.overflow,T.style.overflow="hidden",T.appendChild(p)),l=t(u,e),p.fake?(p.parentNode.removeChild(p),T.style.overflow=d,T.offsetHeight):u.parentNode.removeChild(u),!!l}function f(e,n){return!!~(""+e).indexOf(n)}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function c(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?c(o,t||n):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function g(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(n[o])+":"+r+")");return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return t}function v(e,n,o,i){function a(){c&&(delete N.style,delete N.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var l=g(e,o);if(!r(l,"undefined"))return l}for(var c,u,p,m,v,y=["modernizr","tspan","samp"];!N.style&&y.length;)c=!0,N.modElem=s(y.shift()),N.style=N.modElem.style;for(p=e.length,u=0;p>u;u++)if(m=e[u],v=N.style[m],f(m,"-")&&(m=d(m)),N.style[m]!==t){if(i||r(o,"undefined"))return a(),"pfx"==n?m:!0;try{N.style[m]=o}catch(h){}if(N.style[m]!=v)return a(),"pfx"==n?m:!0}return a(),!1}function y(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,o,i):(a=(e+" "+E.join(s+" ")+s).split(" "),u(a,n,t))}function h(e,n,r){return y(e,t,t,n,r)}var w=[],b=[],C={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){b.push({name:e,fn:n,options:t})},addAsyncTest:function(e){b.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var x=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];C._prefixes=x;var T=n.documentElement,S="svg"===T.nodeName.toLowerCase();Modernizr.addTest("video",function(){var e=s("video"),n=!1;try{n=!!e.canPlayType,n&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),n.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),n.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(t){}return n}),Modernizr.addTest("cssgradients",function(){for(var e,n="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",o=0,i=x.length-1;i>o;o++)e=0===o?"to ":"",r+=n+x[o]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=n+"-webkit-"+t);var a=s("a"),l=a.style;return l.cssText=r,(""+l.backgroundImage).indexOf("gradient")>-1});var _=C.testStyles=l;Modernizr.addTest("unicode",function(){var e,n=s("span"),t=s("span");return _("#modernizr{font-family:Arial,sans;font-size:300em;}",function(r){n.innerHTML=S?"妇":"&#5987;",t.innerHTML=S?"☆":"&#9734;",r.appendChild(n),r.appendChild(t),e="offsetWidth"in n&&n.offsetWidth!==t.offsetWidth}),e});var P="Moz O ms Webkit",z=C._config.usePrefixes?P.split(" "):[];C._cssomPrefixes=z;var E=C._config.usePrefixes?P.toLowerCase().split(" "):[];C._domPrefixes=E;var k={elem:s("modernizr")};Modernizr._q.push(function(){delete k.elem});var N={style:k.elem.style};Modernizr._q.unshift(function(){delete N.style}),C.testAllProps=y,C.testAllProps=h,Modernizr.addTest("appearance",h("appearance")),Modernizr.addTest("boxsizing",h("boxSizing","border-box",!0)&&(n.documentMode===t||n.documentMode>7)),Modernizr.addTest("flexboxtweener",h("flexAlign","end",!0)),Modernizr.addTest("cssanimations",h("animationName","a",!0)),o(),i(w),delete C.addTest,delete C.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);