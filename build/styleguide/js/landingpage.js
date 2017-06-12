/*******************************************
 * Copyright 2017
 *
 * vital-ui-kit, v0.0.4
 * UI Kit for GSS Vital Family
 *
 * By Neil Lin (https://github.com/Neil-Lin),Evan Wu (https://github.com/evanwu-tw),YuRu Lee (https://github.com/YuRu-Lee),Laura Lee (https://github.com/l443018),Patric,CJies Tan (https://github.com/cjies)
 *
 * License: Galaxy Software Services Corporation | 叡揚資訊股份有限公司 版權所有 © 2016
 *
 ******************************************/
!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.ScrollMagic=e()}(this,function(){"use strict";var t=function(){n.log(2,"(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")};t.version="2.0.5",window.addEventListener("mousewheel",function(){});var e="data-scrollmagic-pin-spacer";t.Controller=function(r){var s,o,a="ScrollMagic.Controller",l="FORWARD",h="REVERSE",c="PAUSED",u=i.defaults,p=this,f=n.extend({},u,r),d=[],_=!1,g=0,m=c,v=!0,y=0,w=!0,T=function(){for(var e in f)u.hasOwnProperty(e)||(M(2,'WARNING: Unknown option "'+e+'"'),delete f[e]);if(f.container=n.get.elements(f.container)[0],!f.container)throw M(1,"ERROR creating object "+a+": No valid scroll container supplied"),a+" init failed.";v=f.container===window||f.container===document.body||!document.body.contains(f.container),v&&(f.container=window),y=S(),f.container.addEventListener("resize",C),f.container.addEventListener("scroll",C),f.refreshInterval=parseInt(f.refreshInterval)||u.refreshInterval,x(),M(3,"added new "+a+" controller (v"+t.version+")")},x=function(){f.refreshInterval>0&&(o=window.setTimeout(k,f.refreshInterval))},b=function(){return f.vertical?n.get.scrollTop(f.container):n.get.scrollLeft(f.container)},S=function(){return f.vertical?n.get.height(f.container):n.get.width(f.container)},P=this._setScrollPos=function(t){f.vertical?v?window.scrollTo(n.get.scrollLeft(),t):f.container.scrollTop=t:v?window.scrollTo(t,n.get.scrollTop()):f.container.scrollLeft=t},R=function(){if(w&&_){var t=n.type.Array(_)?_:d.slice(0);_=!1;var e=g;g=p.scrollPos();var i=g-e;0!==i&&(m=i>0?l:h),m===h&&t.reverse(),t.forEach(function(e,i){M(3,"updating Scene "+(i+1)+"/"+t.length+" ("+d.length+" total)"),e.update(!0)}),0===t.length&&f.loglevel>=3&&M(3,"updating 0 Scenes (nothing added to controller)")}},O=function(){s=n.rAF(R)},C=function(t){M(3,"event fired causing an update:",t.type),"resize"==t.type&&(y=S(),m=c),_!==!0&&(_=!0,O())},k=function(){if(!v&&y!=S()){var t;try{t=new Event("resize",{bubbles:!1,cancelable:!1})}catch(e){t=document.createEvent("Event"),t.initEvent("resize",!1,!1)}f.container.dispatchEvent(t)}d.forEach(function(t,e){t.refresh()}),x()},M=this._log=function(t,e){f.loglevel>=t&&(Array.prototype.splice.call(arguments,1,0,"("+a+") ->"),n.log.apply(window,arguments))};this._options=f;var A=function(t){if(t.length<=1)return t;var e=t.slice(0);return e.sort(function(t,e){return t.scrollOffset()>e.scrollOffset()?1:-1}),e};return this.addScene=function(e){if(n.type.Array(e))e.forEach(function(t,e){p.addScene(t)});else if(e instanceof t.Scene){if(e.controller()!==p)e.addTo(p);else if(d.indexOf(e)<0){d.push(e),d=A(d),e.on("shift.controller_sort",function(){d=A(d)});for(var i in f.globalSceneOptions)e[i]&&e[i].call(e,f.globalSceneOptions[i]);M(3,"adding Scene (now "+d.length+" total)")}}else M(1,"ERROR: invalid argument supplied for '.addScene()'");return p},this.removeScene=function(t){if(n.type.Array(t))t.forEach(function(t,e){p.removeScene(t)});else{var e=d.indexOf(t);e>-1&&(t.off("shift.controller_sort"),d.splice(e,1),M(3,"removing Scene (now "+d.length+" left)"),t.remove())}return p},this.updateScene=function(e,i){return n.type.Array(e)?e.forEach(function(t,e){p.updateScene(t,i)}):i?e.update(!0):_!==!0&&e instanceof t.Scene&&(_=_||[],_.indexOf(e)==-1&&_.push(e),_=A(_),O()),p},this.update=function(t){return C({type:"resize"}),t&&R(),p},this.scrollTo=function(i,r){if(n.type.Number(i))P.call(f.container,i,r);else if(i instanceof t.Scene)i.controller()===p?p.scrollTo(i.scrollOffset(),r):M(2,"scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",i);else if(n.type.Function(i))P=i;else{var s=n.get.elements(i)[0];if(s){for(;s.parentNode.hasAttribute(e);)s=s.parentNode;var o=f.vertical?"top":"left",a=n.get.offset(f.container),l=n.get.offset(s);v||(a[o]-=p.scrollPos()),p.scrollTo(l[o]-a[o],r)}else M(2,"scrollTo(): The supplied argument is invalid. Scroll cancelled.",i)}return p},this.scrollPos=function(t){return arguments.length?(n.type.Function(t)?b=t:M(2,"Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."),p):b.call(p)},this.info=function(t){var e={size:y,vertical:f.vertical,scrollPos:g,scrollDirection:m,container:f.container,isDocument:v};return arguments.length?void 0!==e[t]?e[t]:void M(1,'ERROR: option "'+t+'" is not available'):e},this.loglevel=function(t){return arguments.length?(f.loglevel!=t&&(f.loglevel=t),p):f.loglevel},this.enabled=function(t){return arguments.length?(w!=t&&(w=!!t,p.updateScene(d,!0)),p):w},this.destroy=function(t){window.clearTimeout(o);for(var e=d.length;e--;)d[e].destroy(t);return f.container.removeEventListener("resize",C),f.container.removeEventListener("scroll",C),n.cAF(s),M(3,"destroyed "+a+" (reset: "+(t?"true":"false")+")"),null},T(),p};var i={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};t.Controller.addOption=function(t,e){i.defaults[t]=e},t.Controller.extend=function(e){var i=this;t.Controller=function(){return i.apply(this,arguments),this.$super=n.extend({},this),e.apply(this,arguments)||this},n.extend(t.Controller,i),t.Controller.prototype=i.prototype,t.Controller.prototype.constructor=t.Controller},t.Scene=function(i){var s,o,a="ScrollMagic.Scene",l="BEFORE",h="DURING",c="AFTER",u=r.defaults,p=this,f=n.extend({},u,i),d=l,_=0,g={start:0,end:0},m=0,v=!0,y=function(){for(var t in f)u.hasOwnProperty(t)||(T(2,'WARNING: Unknown option "'+t+'"'),delete f[t]);for(var e in u)k(e);O()},w={};this.on=function(t,e){return n.type.Function(e)?(t=t.trim().split(" "),t.forEach(function(t){var i=t.split("."),r=i[0],n=i[1];"*"!=r&&(w[r]||(w[r]=[]),w[r].push({namespace:n||"",callback:e}))})):T(1,"ERROR when calling '.on()': Supplied callback for '"+t+"' is not a valid function!"),p},this.off=function(t,e){return t?(t=t.trim().split(" "),t.forEach(function(t,i){var r=t.split("."),n=r[0],s=r[1]||"",o="*"===n?Object.keys(w):[n];o.forEach(function(t){for(var i=w[t]||[],r=i.length;r--;){var n=i[r];!n||s!==n.namespace&&"*"!==s||e&&e!=n.callback||i.splice(r,1)}i.length||delete w[t]})}),p):(T(1,"ERROR: Invalid event name supplied."),p)},this.trigger=function(e,i){if(e){var r=e.trim().split("."),n=r[0],s=r[1],o=w[n];T(3,"event fired:",n,i?"->":"",i||""),o&&o.forEach(function(e,r){s&&s!==e.namespace||e.callback.call(p,new t.Event(n,e.namespace,p,i))})}else T(1,"ERROR: Invalid event name supplied.");return p},p.on("change.internal",function(t){"loglevel"!==t.what&&"tweenChanges"!==t.what&&("triggerElement"===t.what?S():"reverse"===t.what&&p.update())}).on("shift.internal",function(t){x(),p.update()});var T=this._log=function(t,e){f.loglevel>=t&&(Array.prototype.splice.call(arguments,1,0,"("+a+") ->"),n.log.apply(window,arguments))};this.addTo=function(e){return e instanceof t.Controller?o!=e&&(o&&o.removeScene(p),o=e,O(),b(!0),S(!0),x(),o.info("container").addEventListener("resize",P),e.addScene(p),p.trigger("add",{controller:o}),T(3,"added "+a+" to controller"),p.update()):T(1,"ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"),p},this.enabled=function(t){return arguments.length?(v!=t&&(v=!!t,p.update(!0)),p):v},this.remove=function(){if(o){o.info("container").removeEventListener("resize",P);var t=o;o=void 0,t.removeScene(p),p.trigger("remove"),T(3,"removed "+a+" from controller")}return p},this.destroy=function(t){return p.trigger("destroy",{reset:t}),p.remove(),p.off("*.*"),T(3,"destroyed "+a+" (reset: "+(t?"true":"false")+")"),null},this.update=function(t){if(o)if(t)if(o.enabled()&&v){var e,i=o.info("scrollPos");e=f.duration>0?(i-g.start)/(g.end-g.start):i>=g.start?1:0,p.trigger("update",{startPos:g.start,endPos:g.end,scrollPos:i}),p.progress(e)}else M&&d===h&&E(!0);else o.updateScene(p,!1);return p},this.refresh=function(){return b(),S(),p},this.progress=function(t){if(arguments.length){var e=!1,i=d,r=o?o.info("scrollDirection"):"PAUSED",n=f.reverse||t>=_;if(0===f.duration?(e=_!=t,_=t<1&&n?0:1,d=0===_?l:h):t<0&&d!==l&&n?(_=0,d=l,e=!0):t>=0&&t<1&&n?(_=t,d=h,e=!0):t>=1&&d!==c?(_=1,d=c,e=!0):d!==h||n||E(),e){var s={progress:_,state:d,scrollDirection:r},a=d!=i,u=function(t){p.trigger(t,s)};a&&i!==h&&(u("enter"),u(i===l?"start":"end")),u("progress"),a&&d!==h&&(u(d===l?"start":"end"),u("leave"))}return p}return _};var x=function(){g={start:m+f.offset},o&&f.triggerElement&&(g.start-=o.info("size")*f.triggerHook),g.end=g.start+f.duration},b=function(t){if(s){var e="duration";C(e,s.call(p))&&!t&&(p.trigger("change",{what:e,newval:f[e]}),p.trigger("shift",{reason:e}))}},S=function(t){var i=0,r=f.triggerElement;if(o&&r){for(var s=o.info(),a=n.get.offset(s.container),l=s.vertical?"top":"left";r.parentNode.hasAttribute(e);)r=r.parentNode;var h=n.get.offset(r);s.isDocument||(a[l]-=o.scrollPos()),i=h[l]-a[l]}var c=i!=m;m=i,c&&!t&&p.trigger("shift",{reason:"triggerElementPosition"})},P=function(t){f.triggerHook>0&&p.trigger("shift",{reason:"containerResize"})},R=n.extend(r.validate,{duration:function(t){if(n.type.String(t)&&t.match(/^(\.|\d)*\d+%$/)){var e=parseFloat(t)/100;t=function(){return o?o.info("size")*e:0}}if(n.type.Function(t)){s=t;try{t=parseFloat(s())}catch(i){t=-1}}if(t=parseFloat(t),!n.type.Number(t)||t<0)throw s?(s=void 0,['Invalid return value of supplied function for option "duration":',t]):['Invalid value for option "duration":',t];return t}}),O=function(t){t=arguments.length?[t]:Object.keys(R),t.forEach(function(t,e){var i;if(R[t])try{i=R[t](f[t])}catch(r){i=u[t];var s=n.type.String(r)?[r]:r;n.type.Array(s)?(s[0]="ERROR: "+s[0],s.unshift(1),T.apply(this,s)):T(1,"ERROR: Problem executing validation callback for option '"+t+"':",r.message)}finally{f[t]=i}})},C=function(t,e){var i=!1,r=f[t];return f[t]!=e&&(f[t]=e,O(t),i=r!=f[t]),i},k=function(t){p[t]||(p[t]=function(e){return arguments.length?("duration"===t&&(s=void 0),C(t,e)&&(p.trigger("change",{what:t,newval:f[t]}),r.shifts.indexOf(t)>-1&&p.trigger("shift",{reason:t})),p):f[t]})};this.controller=function(){return o},this.state=function(){return d},this.scrollOffset=function(){return g.start},this.triggerPosition=function(){var t=f.offset;return o&&(t+=f.triggerElement?m:o.info("size")*p.triggerHook()),t};var M,A;p.on("shift.internal",function(t){var e="duration"===t.reason;(d===c&&e||d===h&&0===f.duration)&&E(),e&&D()}).on("progress.internal",function(t){E()}).on("add.internal",function(t){D()}).on("destroy.internal",function(t){p.removePin(t.reset)});var E=function(t){if(M&&o){var e=o.info(),i=A.spacer.firstChild;if(t||d!==h){var r={position:A.inFlow?"relative":"absolute",top:0,left:0},s=n.css(i,"position")!=r.position;A.pushFollowers?f.duration>0&&(d===c&&0===parseFloat(n.css(A.spacer,"padding-top"))?s=!0:d===l&&0===parseFloat(n.css(A.spacer,"padding-bottom"))&&(s=!0)):r[e.vertical?"top":"left"]=f.duration*_,n.css(i,r),s&&D()}else{"fixed"!=n.css(i,"position")&&(n.css(i,{position:"fixed"}),D());var a=n.get.offset(A.spacer,!0),u=f.reverse||0===f.duration?e.scrollPos-g.start:Math.round(_*f.duration*10)/10;a[e.vertical?"top":"left"]+=u,n.css(A.spacer.firstChild,{top:a.top,left:a.left})}}},D=function(){if(M&&o&&A.inFlow){var t=d===h,e=o.info("vertical"),i=A.spacer.firstChild,r=n.isMarginCollapseType(n.css(A.spacer,"display")),s={};A.relSize.width||A.relSize.autoFullWidth?t?n.css(M,{width:n.get.width(A.spacer)}):n.css(M,{width:"100%"}):(s["min-width"]=n.get.width(e?M:i,!0,!0),s.width=t?s["min-width"]:"auto"),A.relSize.height?t?n.css(M,{height:n.get.height(A.spacer)-(A.pushFollowers?f.duration:0)}):n.css(M,{height:"100%"}):(s["min-height"]=n.get.height(e?i:M,!0,!r),s.height=t?s["min-height"]:"auto"),A.pushFollowers&&(s["padding"+(e?"Top":"Left")]=f.duration*_,s["padding"+(e?"Bottom":"Right")]=f.duration*(1-_)),n.css(A.spacer,s)}},z=function(){o&&M&&d===h&&!o.info("isDocument")&&E()},I=function(){o&&M&&d===h&&((A.relSize.width||A.relSize.autoFullWidth)&&n.get.width(window)!=n.get.width(A.spacer.parentNode)||A.relSize.height&&n.get.height(window)!=n.get.height(A.spacer.parentNode))&&D()},L=function(t){o&&M&&d===h&&!o.info("isDocument")&&(t.preventDefault(),o._setScrollPos(o.info("scrollPos")-((t.wheelDelta||t[o.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-t.detail)))};this.setPin=function(t,i){var r={pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"};if(i=n.extend({},r,i),t=n.get.elements(t)[0],!t)return T(1,"ERROR calling method 'setPin()': Invalid pin element supplied."),p;if("fixed"===n.css(t,"position"))return T(1,"ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),p;if(M){if(M===t)return p;p.removePin()}M=t;var s=M.parentNode.style.display,o=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];M.parentNode.style.display="none";var a="absolute"!=n.css(M,"position"),l=n.css(M,o.concat(["display"])),h=n.css(M,["width","height"]);M.parentNode.style.display=s,!a&&i.pushFollowers&&(T(2,"WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."),i.pushFollowers=!1),window.setTimeout(function(){M&&0===f.duration&&i.pushFollowers&&T(2,"WARNING: pushFollowers =",!0,"has no effect, when scene duration is 0.")},0);var c=M.parentNode.insertBefore(document.createElement("div"),M),u=n.extend(l,{position:a?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(a||n.extend(u,n.css(M,["width","height"])),n.css(c,u),c.setAttribute(e,""),n.addClass(c,i.spacerClass),A={spacer:c,relSize:{width:"%"===h.width.slice(-1),height:"%"===h.height.slice(-1),autoFullWidth:"auto"===h.width&&a&&n.isMarginCollapseType(l.display)},pushFollowers:i.pushFollowers,inFlow:a},!M.___origStyle){M.___origStyle={};var d=M.style,_=o.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]);_.forEach(function(t){M.___origStyle[t]=d[t]||""})}return A.relSize.width&&n.css(c,{width:h.width}),A.relSize.height&&n.css(c,{height:h.height}),c.appendChild(M),n.css(M,{position:a?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(A.relSize.width||A.relSize.autoFullWidth)&&n.css(M,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",z),window.addEventListener("resize",z),window.addEventListener("resize",I),M.addEventListener("mousewheel",L),M.addEventListener("DOMMouseScroll",L),T(3,"added pin"),E(),p},this.removePin=function(t){if(M){if(d===h&&E(!0),t||!o){var i=A.spacer.firstChild;if(i.hasAttribute(e)){var r=A.spacer.style,s=["margin","marginLeft","marginRight","marginTop","marginBottom"];margins={},s.forEach(function(t){margins[t]=r[t]||""}),n.css(i,margins)}A.spacer.parentNode.insertBefore(i,A.spacer),A.spacer.parentNode.removeChild(A.spacer),M.parentNode.hasAttribute(e)||(n.css(M,M.___origStyle),delete M.___origStyle)}window.removeEventListener("scroll",z),window.removeEventListener("resize",z),window.removeEventListener("resize",I),M.removeEventListener("mousewheel",L),M.removeEventListener("DOMMouseScroll",L),M=void 0,T(3,"removed pin (reset: "+(t?"true":"false")+")")}return p};var F,N=[];return p.on("destroy.internal",function(t){p.removeClassToggle(t.reset)}),this.setClassToggle=function(t,e){var i=n.get.elements(t);return 0!==i.length&&n.type.String(e)?(N.length>0&&p.removeClassToggle(),F=e,N=i,p.on("enter.internal_class leave.internal_class",function(t){var e="enter"===t.type?n.addClass:n.removeClass;N.forEach(function(t,i){e(t,F)})}),p):(T(1,"ERROR calling method 'setClassToggle()': Invalid "+(0===i.length?"element":"classes")+" supplied."),p)},this.removeClassToggle=function(t){return t&&N.forEach(function(t,e){n.removeClass(t,F)}),p.off("start.internal_class end.internal_class"),F=void 0,N=[],p},y(),p};var r={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(t){if(t=parseFloat(t),!n.type.Number(t))throw['Invalid value for option "offset":',t];return t},triggerElement:function(t){if(t=t||void 0){var e=n.get.elements(t)[0];if(!e)throw['Element defined in option "triggerElement" was not found:',t];t=e}return t},triggerHook:function(t){var e={onCenter:.5,onEnter:1,onLeave:0};if(n.type.Number(t))t=Math.max(0,Math.min(parseFloat(t),1));else{if(!(t in e))throw['Invalid value for option "triggerHook": ',t];t=e[t]}return t},reverse:function(t){return!!t},loglevel:function(t){if(t=parseInt(t),!n.type.Number(t)||t<0||t>3)throw['Invalid value for option "loglevel":',t];return t}},shifts:["duration","offset","triggerHook"]};t.Scene.addOption=function(e,i,n,s){e in r.defaults?t._util.log(1,"[static] ScrollMagic.Scene -> Cannot add Scene option '"+e+"', because it already exists."):(r.defaults[e]=i,r.validate[e]=n,s&&r.shifts.push(e))},t.Scene.extend=function(e){var i=this;t.Scene=function(){return i.apply(this,arguments),this.$super=n.extend({},this),e.apply(this,arguments)||this},n.extend(t.Scene,i),t.Scene.prototype=i.prototype,t.Scene.prototype.constructor=t.Scene},t.Event=function(t,e,i,r){r=r||{};for(var n in r)this[n]=r[n];return this.type=t,this.target=this.currentTarget=i,this.namespace=e||"",this.timeStamp=this.timestamp=Date.now(),this};var n=t._util=function(t){var e,i={},r=function(t){return parseFloat(t)||0},n=function(e){return e.currentStyle?e.currentStyle:t.getComputedStyle(e)},s=function(e,i,s,o){if(i=i===document?t:i,i===t)o=!1;else if(!d.DomElement(i))return 0;e=e.charAt(0).toUpperCase()+e.substr(1).toLowerCase();var a=(s?i["offset"+e]||i["outer"+e]:i["client"+e]||i["inner"+e])||0;if(s&&o){var l=n(i);a+="Height"===e?r(l.marginTop)+r(l.marginBottom):r(l.marginLeft)+r(l.marginRight)}return a},o=function(t){return t.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(t){return t[1].toUpperCase()})};i.extend=function(t){for(t=t||{},e=1;e<arguments.length;e++)if(arguments[e])for(var i in arguments[e])arguments[e].hasOwnProperty(i)&&(t[i]=arguments[e][i]);return t},i.isMarginCollapseType=function(t){return["block","flex","list-item","table","-webkit-box"].indexOf(t)>-1};var a=0,l=["ms","moz","webkit","o"],h=t.requestAnimationFrame,c=t.cancelAnimationFrame;for(e=0;!h&&e<l.length;++e)h=t[l[e]+"RequestAnimationFrame"],c=t[l[e]+"CancelAnimationFrame"]||t[l[e]+"CancelRequestAnimationFrame"];h||(h=function(e){var i=(new Date).getTime(),r=Math.max(0,16-(i-a)),n=t.setTimeout(function(){e(i+r)},r);return a=i+r,n}),c||(c=function(e){t.clearTimeout(e)}),i.rAF=h.bind(t),i.cAF=c.bind(t);var u=["error","warn","log"],p=t.console||{};for(p.log=p.log||function(){},e=0;e<u.length;e++){var f=u[e];p[f]||(p[f]=p.log)}i.log=function(t){(t>u.length||t<=0)&&(t=u.length);var e=new Date,i=("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)+":"+("0"+e.getSeconds()).slice(-2)+":"+("00"+e.getMilliseconds()).slice(-3),r=u[t-1],n=Array.prototype.splice.call(arguments,1),s=Function.prototype.bind.call(p[r],p);n.unshift(i),s.apply(p,n)};var d=i.type=function(t){return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};d.String=function(t){return"string"===d(t)},d.Function=function(t){return"function"===d(t)},d.Array=function(t){return Array.isArray(t)},d.Number=function(t){return!d.Array(t)&&t-parseFloat(t)+1>=0},d.DomElement=function(t){return"object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName};var _=i.get={};return _.elements=function(e){var i=[];if(d.String(e))try{e=document.querySelectorAll(e)}catch(r){return i}if("nodelist"===d(e)||d.Array(e))for(var n=0,s=i.length=e.length;n<s;n++){var o=e[n];i[n]=d.DomElement(o)?o:_.elements(o)}else(d.DomElement(e)||e===document||e===t)&&(i=[e]);return i},_.scrollTop=function(e){return e&&"number"==typeof e.scrollTop?e.scrollTop:t.pageYOffset||0},_.scrollLeft=function(e){return e&&"number"==typeof e.scrollLeft?e.scrollLeft:t.pageXOffset||0},_.width=function(t,e,i){return s("width",t,e,i)},_.height=function(t,e,i){return s("height",t,e,i)},_.offset=function(t,e){var i={top:0,left:0};if(t&&t.getBoundingClientRect){var r=t.getBoundingClientRect();i.top=r.top,i.left=r.left,e||(i.top+=_.scrollTop(),i.left+=_.scrollLeft())}return i},i.addClass=function(t,e){e&&(t.classList?t.classList.add(e):t.className+=" "+e)},i.removeClass=function(t,e){e&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))},i.css=function(t,e){if(d.String(e))return n(t)[o(e)];if(d.Array(e)){var i={},r=n(t);return e.forEach(function(t,e){i[t]=r[o(t)]}),i}for(var s in e){var a=e[s];a==parseFloat(a)&&(a+="px"),t.style[o(s)]=a}},i}(window||{});return t.Scene.prototype.addIndicators=function(){return t._util.log(1,"(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},t.Scene.prototype.removeIndicators=function(){return t._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},t.Scene.prototype.setTween=function(){return t._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},t.Scene.prototype.removeTween=function(){return t._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},t.Scene.prototype.setVelocity=function(){return t._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},t.Scene.prototype.removeVelocity=function(){return t._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},t});var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var r=function(t){var e,i=[],r=t.length;for(e=0;e!==r;i.push(t[e++]));return i},n=function(t,e,r){i.call(this,t,e,r),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=n.prototype.render},s=1e-10,o=i._internals,a=o.isSelector,l=o.isArray,h=n.prototype=i.to({},.1,{}),c=[];n.version="1.15.1",h.constructor=n,h.kill()._gc=!1,n.killTweensOf=n.killDelayedCallsTo=i.killTweensOf,n.getTweensOf=i.getTweensOf,n.lagSmoothing=i.lagSmoothing,n.ticker=i.ticker,n.render=i.render,h.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},h.updateTo=function(t,e){var r,n=this.ratio,s=this.vars.immediateRender||t.immediateRender;e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(r in t)this.vars[r]=t[r];if(this._initted||s)if(e)this._initted=!1,s&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var o=this._time;this.render(0,!0,!1),this._initted=!1,this.render(o,!0,!1)}else if(this._time>0||s){this._initted=!1,this._init();for(var a,l=1/(1-n),h=this._firstPT;h;)a=h.s+h.c,h.c*=l,h.s=a-h.c,h=h._next}return this},h.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var r,n,a,l,h,u,p,f,d=this._dirty?this.totalDuration():this._totalDuration,_=this._time,g=this._totalTime,m=this._cycle,v=this._duration,y=this._rawPrevTime;if(t>=d?(this._totalTime=d,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=v,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(r=!0,n="onComplete"),0===v&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>y||y===s)&&y!==t&&(i=!0,y>s&&(n="onReverseComplete")),this._rawPrevTime=f=!e||t||y===t?t:s)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==g||0===v&&y>0&&y!==s)&&(n="onReverseComplete",r=this._reversed),0>t&&(this._active=!1,0===v&&(this._initted||!this.vars.lazy||i)&&(y>=0&&(i=!0),this._rawPrevTime=f=!e||t||y===t?t:s)),this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(l=v+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=v-this._time),this._time>v?this._time=v:0>this._time&&(this._time=0)),this._easeType?(h=this._time/v,u=this._easeType,p=this._easePower,(1===u||3===u&&h>=.5)&&(h=1-h),3===u&&(h*=2),1===p?h*=h:2===p?h*=h*h:3===p?h*=h*h*h:4===p&&(h*=h*h*h*h),this.ratio=1===u?1-h:2===u?h:.5>this._time/v?h/2:1-h/2):this.ratio=this._ease.getRatio(this._time/v)),_===this._time&&!i&&m===this._cycle)return void(g!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||c)));if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=_,this._totalTime=g,this._rawPrevTime=y,this._cycle=m,o.lazyTweens.push(this),void(this._lazy=[t,e]);this._time&&!r?this.ratio=this._ease.getRatio(this._time/v):r&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==_&&t>=0&&(this._active=!0),0===g&&(2===this._initted&&t>0&&this._init(),this._startAt&&(t>=0?this._startAt.render(t,e,i):n||(n="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===v)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||c))),a=this._firstPT;a;)a.f?a.t[a.p](a.c*this.ratio+a.s):a.t[a.p]=a.c*this.ratio+a.s,a=a._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._totalTime!==g||r)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||c)),this._cycle!==m&&(e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||c)),n&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),r&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[n]&&this.vars[n].apply(this.vars[n+"Scope"]||this,this.vars[n+"Params"]||c),0===v&&this._rawPrevTime===s&&f!==s&&(this._rawPrevTime=0))},n.to=function(t,e,i){return new n(t,e,i)},n.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new n(t,e,i)},n.fromTo=function(t,e,i,r){return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,new n(t,e,r)},n.staggerTo=n.allTo=function(t,e,s,o,h,u,p){o=o||0;var f,d,_,g,m=s.delay||0,v=[],y=function(){s.onComplete&&s.onComplete.apply(s.onCompleteScope||this,arguments),h.apply(p||this,u||c)};for(l(t)||("string"==typeof t&&(t=i.selector(t)||t),a(t)&&(t=r(t))),t=t||[],0>o&&(t=r(t),t.reverse(),o*=-1),f=t.length-1,_=0;f>=_;_++){d={};for(g in s)d[g]=s[g];d.delay=m,_===f&&h&&(d.onComplete=y),v[_]=new n(t[_],e,d),m+=o}return v},n.staggerFrom=n.allFrom=function(t,e,i,r,s,o,a){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,n.staggerTo(t,e,i,r,s,o,a)},n.staggerFromTo=n.allFromTo=function(t,e,i,r,s,o,a,l){return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,n.staggerTo(t,e,r,s,o,a,l)},n.delayedCall=function(t,e,i,r,s){return new n(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:r,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:r,immediateRender:!1,useFrames:s,overwrite:0})},n.set=function(t,e){return new n(t,0,e)},n.isTweening=function(t){return i.getTweensOf(t,!0).length>0};var u=function(t,e){for(var r=[],n=0,s=t._first;s;)s instanceof i?r[n++]=s:(e&&(r[n++]=s),r=r.concat(u(s,e)),n=r.length),s=s._next;return r},p=n.getAllTweens=function(e){return u(t._rootTimeline,e).concat(u(t._rootFramesTimeline,e))};n.killAll=function(t,i,r,n){null==i&&(i=!0),null==r&&(r=!0);var s,o,a,l=p(0!=n),h=l.length,c=i&&r&&n;for(a=0;h>a;a++)o=l[a],(c||o instanceof e||(s=o.target===o.vars.onComplete)&&r||i&&!s)&&(t?o.totalTime(o._reversed?0:o.totalDuration()):o._enabled(!1,!1))},n.killChildTweensOf=function(t,e){if(null!=t){var s,h,c,u,p,f=o.tweenLookup;if("string"==typeof t&&(t=i.selector(t)||t),a(t)&&(t=r(t)),l(t))for(u=t.length;--u>-1;)n.killChildTweensOf(t[u],e);else{s=[];for(c in f)for(h=f[c].target.parentNode;h;)h===t&&(s=s.concat(f[c].tweens)),h=h.parentNode;for(p=s.length,u=0;p>u;u++)e&&s[u].totalTime(s[u].totalDuration()),s[u]._enabled(!1,!1)}}};var f=function(t,i,r,n){i=i!==!1,r=r!==!1,n=n!==!1;for(var s,o,a=p(n),l=i&&r&&n,h=a.length;--h>-1;)o=a[h],(l||o instanceof e||(s=o.target===o.vars.onComplete)&&r||i&&!s)&&o.paused(t)};return n.pauseAll=function(t,e,i){f(!0,t,e,i)},n.resumeAll=function(t,e,i){f(!1,t,e,i)},n.globalTimeScale=function(e){var r=t._rootTimeline,n=i.ticker.time;return arguments.length?(e=e||s,r._startTime=n-(n-r._startTime)*r._timeScale/e,r=t._rootFramesTimeline,n=i.ticker.frame,r._startTime=n-(n-r._startTime)*r._timeScale/e,r._timeScale=t._rootTimeline._timeScale=e,e):r._timeScale},h.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},h.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},h.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},h.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},h.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},h.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},h.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},h.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},n},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var r=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,r,n=this.vars;for(r in n)i=n[r],l(i)&&-1!==i.join("").indexOf("{self}")&&(n[r]=this._swapSelfInParams(i));l(n.tweens)&&this.add(n.tweens,0,n.align,n.stagger)},n=1e-10,s=i._internals,o=r._internals={},a=s.isSelector,l=s.isArray,h=s.lazyTweens,c=s.lazyRender,u=[],p=_gsScope._gsDefine.globals,f=function(t){var e,i={};
for(e in t)i[e]=t[e];return i},d=o.pauseCallback=function(t,e,i,r){var n=t._timeline,s=n._totalTime;!e&&this._forcingPlayhead||n._rawPrevTime===t._startTime||(n.pause(t._startTime),e&&e.apply(r||n,i||u),this._forcingPlayhead&&n.seek(s))},_=function(t){var e,i=[],r=t.length;for(e=0;e!==r;i.push(t[e++]));return i},g=r.prototype=new e;return r.version="1.15.1",g.constructor=r,g.kill()._gc=g._forcingPlayhead=!1,g.to=function(t,e,r,n){var s=r.repeat&&p.TweenMax||i;return e?this.add(new s(t,e,r),n):this.set(t,r,n)},g.from=function(t,e,r,n){return this.add((r.repeat&&p.TweenMax||i).from(t,e,r),n)},g.fromTo=function(t,e,r,n,s){var o=n.repeat&&p.TweenMax||i;return e?this.add(o.fromTo(t,e,r,n),s):this.set(t,n,s)},g.staggerTo=function(t,e,n,s,o,l,h,c){var u,p=new r({onComplete:l,onCompleteParams:h,onCompleteScope:c,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],a(t)&&(t=_(t)),s=s||0,0>s&&(t=_(t),t.reverse(),s*=-1),u=0;t.length>u;u++)n.startAt&&(n.startAt=f(n.startAt)),p.to(t[u],e,f(n),u*s);return this.add(p,o)},g.staggerFrom=function(t,e,i,r,n,s,o,a){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,r,n,s,o,a)},g.staggerFromTo=function(t,e,i,r,n,s,o,a,l){return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,r,n,s,o,a,l)},g.call=function(t,e,r,n){return this.add(i.delayedCall(0,t,e,r),n)},g.set=function(t,e,r){return r=this._parseTimeOrLabel(r,0,!0),null==e.immediateRender&&(e.immediateRender=r===this._time&&!this._paused),this.add(new i(t,0,e),r)},r.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var n,s,o=new r(t),a=o._timeline;for(null==e&&(e=!0),a._remove(o,!0),o._startTime=0,o._rawPrevTime=o._time=o._totalTime=a._time,n=a._first;n;)s=n._next,e&&n instanceof i&&n.target===n.vars.onComplete||o.add(n,n._startTime-n._delay),n=s;return a.add(o,0),o},g.add=function(n,s,o,a){var h,c,u,p,f,d;if("number"!=typeof s&&(s=this._parseTimeOrLabel(s,0,!0,n)),!(n instanceof t)){if(n instanceof Array||n&&n.push&&l(n)){for(o=o||"normal",a=a||0,h=s,c=n.length,u=0;c>u;u++)l(p=n[u])&&(p=new r({tweens:p})),this.add(p,h),"string"!=typeof p&&"function"!=typeof p&&("sequence"===o?h=p._startTime+p.totalDuration()/p._timeScale:"start"===o&&(p._startTime-=p.delay())),h+=a;return this._uncache(!0)}if("string"==typeof n)return this.addLabel(n,s);if("function"!=typeof n)throw"Cannot add "+n+" into the timeline; it is not a tween, timeline, function, or string.";n=i.delayedCall(0,n)}if(e.prototype.add.call(this,n,s),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(f=this,d=f.rawTime()>n._startTime;f._timeline;)d&&f._timeline.smoothChildTiming?f.totalTime(f._totalTime,!0):f._gc&&f._enabled(!0,!1),f=f._timeline;return this},g.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&l(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},g._remove=function(t,i){e.prototype._remove.call(this,t,i);var r=this._last;return r?this._time>r._startTime+r._totalDuration/r._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},g.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},g.insert=g.insertMultiple=function(t,e,i,r){return this.add(t,e||0,i,r)},g.appendMultiple=function(t,e,i,r){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,r)},g.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},g.addPause=function(t,e,r,n){var s=i.delayedCall(0,d,["{self}",e,r,n],this);return s.data="isPause",this.add(s,t)},g.removeLabel=function(t){return delete this._labels[t],this},g.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},g._parseTimeOrLabel=function(e,i,r,n){var s;if(n instanceof t&&n.timeline===this)this.remove(n);else if(n&&(n instanceof Array||n.push&&l(n)))for(s=n.length;--s>-1;)n[s]instanceof t&&n[s].timeline===this&&this.remove(n[s]);if("string"==typeof i)return this._parseTimeOrLabel(i,r&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,r);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(s=e.indexOf("="),-1===s)return null==this._labels[e]?r?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(s-1)+"1",10)*Number(e.substr(s+1)),e=s>1?this._parseTimeOrLabel(e.substr(0,s-1),0,r):this.duration()}return Number(e)+i},g.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},g.stop=function(){return this.paused(!0)},g.gotoAndPlay=function(t,e){return this.play(t,e)},g.gotoAndStop=function(t,e){return this.pause(t,e)},g.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var r,s,o,a,l,p=this._dirty?this.totalDuration():this._totalDuration,f=this._time,d=this._startTime,_=this._timeScale,g=this._paused;if(t>=p?(this._totalTime=this._time=p,this._reversed||this._hasPausedChild()||(s=!0,a="onComplete",0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===n)&&this._rawPrevTime!==t&&this._first&&(l=!0,this._rawPrevTime>n&&(a="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:n,t=p+1e-4):1e-7>t?(this._totalTime=this._time=0,(0!==f||0===this._duration&&this._rawPrevTime!==n&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(a="onReverseComplete",s=this._reversed),0>t?(this._active=!1,this._rawPrevTime>=0&&this._first&&(l=!0),this._rawPrevTime=t):(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:n,t=0,this._initted||(l=!0))):this._totalTime=this._time=this._rawPrevTime=t,this._time!==f&&this._first||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==f&&t>0&&(this._active=!0),0===f&&this.vars.onStart&&0!==this._time&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||u)),this._time>=f)for(r=this._first;r&&(o=r._next,!this._paused||g);)(r._active||r._startTime<=this._time&&!r._paused&&!r._gc)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=o;else for(r=this._last;r&&(o=r._prev,!this._paused||g);)(r._active||f>=r._startTime&&!r._paused&&!r._gc)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=o;this._onUpdate&&(e||(h.length&&c(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||u))),a&&(this._gc||(d===this._startTime||_!==this._timeScale)&&(0===this._time||p>=this.totalDuration())&&(s&&(h.length&&c(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[a]&&this.vars[a].apply(this.vars[a+"Scope"]||this,this.vars[a+"Params"]||u)))}},g._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof r&&t._hasPausedChild())return!0;t=t._next}return!1},g.getChildren=function(t,e,r,n){n=n||-9999999999;for(var s=[],o=this._first,a=0;o;)n>o._startTime||(o instanceof i?e!==!1&&(s[a++]=o):(r!==!1&&(s[a++]=o),t!==!1&&(s=s.concat(o.getChildren(!0,e,r)),a=s.length))),o=o._next;return s},g.getTweensOf=function(t,e){var r,n,s=this._gc,o=[],a=0;for(s&&this._enabled(!0,!0),r=i.getTweensOf(t),n=r.length;--n>-1;)(r[n].timeline===this||e&&this._contains(r[n]))&&(o[a++]=r[n]);return s&&this._enabled(!1,!0),o},g.recent=function(){return this._recent},g._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},g.shiftChildren=function(t,e,i){i=i||0;for(var r,n=this._first,s=this._labels;n;)n._startTime>=i&&(n._startTime+=t),n=n._next;if(e)for(r in s)s[r]>=i&&(s[r]+=t);return this._uncache(!0)},g._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),r=i.length,n=!1;--r>-1;)i[r]._kill(t,e)&&(n=!0);return n},g.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},g.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},g._enabled=function(t,i){if(t===this._gc)for(var r=this._first;r;)r._enabled(t,!0),r=r._next;return e.prototype._enabled.call(this,t,i)},g.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},g.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},g.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,r=0,n=this._last,s=999999999999;n;)e=n._prev,n._dirty&&n.totalDuration(),n._startTime>s&&this._sortChildren&&!n._paused?this.add(n,n._startTime-n._delay):s=n._startTime,0>n._startTime&&!n._paused&&(r-=n._startTime,this._timeline.smoothChildTiming&&(this._startTime+=n._startTime/this._timeScale),this.shiftChildren(-n._startTime,!1,-9999999999),s=0),i=n._startTime+n._totalDuration/n._timeScale,i>r&&(r=i),n=e;this._duration=this._totalDuration=r,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},g.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},g.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},r},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var r=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},n=1e-10,s=[],o=e._internals,a=o.lazyTweens,l=o.lazyRender,h=new i(null,null,1,0),c=r.prototype=new t;return c.constructor=r,c.kill()._gc=!1,r.version="1.15.1",c.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},c.addCallback=function(t,i,r,n){return this.add(e.delayedCall(0,t,r,n),i)},c.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),r=i.length,n=this._parseTimeOrLabel(e);--r>-1;)i[r]._startTime===n&&i[r]._enabled(!1,!1);return this},c.removePause=function(e){return this.removeCallback(t._internals.pauseCallback,e)},c.tweenTo=function(t,i){i=i||{};var r,n,o,a={ease:h,useFrames:this.usesFrames(),immediateRender:!1};for(n in i)a[n]=i[n];return a.time=this._parseTimeOrLabel(t),r=Math.abs(Number(a.time)-this._time)/this._timeScale||.001,o=new e(this,r,a),a.onStart=function(){o.target.paused(!0),o.vars.time!==o.target.time()&&r===o.duration()&&o.duration(Math.abs(o.vars.time-o.target.time())/o.target._timeScale),i.onStart&&i.onStart.apply(i.onStartScope||o,i.onStartParams||s)},o},c.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],onCompleteScope:this},i.immediateRender=i.immediateRender!==!1;var r=this.tweenTo(e,i);return r.duration(Math.abs(r.vars.time-t)/this._timeScale||.001)},c.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var r,o,h,c,u,p,f=this._dirty?this.totalDuration():this._totalDuration,d=this._duration,_=this._time,g=this._totalTime,m=this._startTime,v=this._timeScale,y=this._rawPrevTime,w=this._paused,T=this._cycle;if(t>=f?(this._locked||(this._totalTime=f,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(o=!0,c="onComplete",0===this._duration&&(0===t||0>y||y===n)&&y!==t&&this._first&&(u=!0,y>n&&(c="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:n,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=d,t=d+1e-4)):1e-7>t?(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==_||0===d&&y!==n&&(y>0||0>t&&y>=0)&&!this._locked)&&(c="onReverseComplete",o=this._reversed),0>t?(this._active=!1,y>=0&&this._first&&(u=!0),this._rawPrevTime=t):(this._rawPrevTime=d||!e||t||this._rawPrevTime===t?t:n,t=0,this._initted||(u=!0))):(0===d&&0>y&&(u=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(p=d+this._repeatDelay,this._cycle=this._totalTime/p>>0,0!==this._cycle&&this._cycle===this._totalTime/p&&this._cycle--,this._time=this._totalTime-this._cycle*p,this._yoyo&&0!==(1&this._cycle)&&(this._time=d-this._time),this._time>d?(this._time=d,t=d+1e-4):0>this._time?this._time=t=0:t=this._time))),this._cycle!==T&&!this._locked){var x=this._yoyo&&0!==(1&T),b=x===(this._yoyo&&0!==(1&this._cycle)),S=this._totalTime,P=this._cycle,R=this._rawPrevTime,O=this._time;if(this._totalTime=T*d,T>this._cycle?x=!x:this._totalTime+=d,this._time=_,this._rawPrevTime=0===d?y-1e-4:y,this._cycle=T,this._locked=!0,_=x?0:d,this.render(_,e,0===d),e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||s),b&&(_=x?d+1e-4:-1e-4,this.render(_,!0,!1)),this._locked=!1,this._paused&&!w)return;this._time=O,this._totalTime=S,this._cycle=P,this._rawPrevTime=R}if(!(this._time!==_&&this._first||i||u))return void(g!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||s)));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==g&&t>0&&(this._active=!0),0===g&&this.vars.onStart&&0!==this._totalTime&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||s)),this._time>=_)for(r=this._first;r&&(h=r._next,!this._paused||w);)(r._active||r._startTime<=this._time&&!r._paused&&!r._gc)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=h;else for(r=this._last;r&&(h=r._prev,!this._paused||w);)(r._active||_>=r._startTime&&!r._paused&&!r._gc)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=h;this._onUpdate&&(e||(a.length&&l(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||s))),c&&(this._locked||this._gc||(m===this._startTime||v!==this._timeScale)&&(0===this._time||f>=this.totalDuration())&&(o&&(a.length&&l(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[c]&&this.vars[c].apply(this.vars[c+"Scope"]||this,this.vars[c+"Params"]||s)))},c.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var r,n,s=[],o=this.getChildren(t,e,i),a=0,l=o.length;for(r=0;l>r;r++)n=o[r],n.isActive()&&(s[a++]=n);return s},c.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),r=i.length;for(e=0;r>e;e++)if(i[e].time>t)return i[e].name;return null},c.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(t>e[i].time)return e[i].name;return null},c.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},c.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},c.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},c.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},c.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},c.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},c.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},c.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},c.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},r},!0),function(){var t=180/Math.PI,e=[],i=[],r=[],n={},s=_gsScope._gsDefine.globals,o=function(t,e,i,r){this.a=t,this.b=e,this.c=i,this.d=r,this.da=r-t,this.ca=i-t,this.ba=e-t},a=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",l=function(t,e,i,r){var n={a:t},s={},o={},a={c:r},l=(t+e)/2,h=(e+i)/2,c=(i+r)/2,u=(l+h)/2,p=(h+c)/2,f=(p-u)/8;return n.b=l+(t-l)/4,s.b=u+f,n.c=s.a=(n.b+s.b)/2,s.c=o.a=(u+p)/2,o.b=p-f,a.b=c+(r-c)/4,o.c=a.a=(o.b+a.b)/2,[n,s,o,a]},h=function(t,n,s,o,a){var h,c,u,p,f,d,_,g,m,v,y,w,T,x=t.length-1,b=0,S=t[0].a;for(h=0;x>h;h++)f=t[b],c=f.a,u=f.d,p=t[b+1].d,a?(y=e[h],w=i[h],T=.25*(w+y)*n/(o?.5:r[h]||.5),d=u-(u-c)*(o?.5*n:0!==y?T/y:0),_=u+(p-u)*(o?.5*n:0!==w?T/w:0),g=u-(d+((_-d)*(3*y/(y+w)+.5)/4||0))):(d=u-.5*(u-c)*n,_=u+.5*(p-u)*n,g=u-(d+_)/2),d+=g,_+=g,f.c=m=d,f.b=0!==h?S:S=f.a+.6*(f.c-f.a),f.da=u-c,f.ca=m-c,f.ba=S-c,s?(v=l(c,S,m,u),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,S=_;f=t[b],f.b=S,f.c=S+.4*(f.d-S),f.da=f.d-f.a,f.ca=f.c-f.a,f.ba=S-f.a,s&&(v=l(f.a,S,f.c,f.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},c=function(t,r,n,s){var a,l,h,c,u,p,f=[];if(s)for(t=[s].concat(t),l=t.length;--l>-1;)"string"==typeof(p=t[l][r])&&"="===p.charAt(1)&&(t[l][r]=s[r]+Number(p.charAt(0)+p.substr(2)));if(a=t.length-2,0>a)return f[0]=new o(t[0][r],0,0,t[-1>a?0:1][r]),f;for(l=0;a>l;l++)h=t[l][r],c=t[l+1][r],f[l]=new o(h,0,0,c),n&&(u=t[l+2][r],e[l]=(e[l]||0)+(c-h)*(c-h),i[l]=(i[l]||0)+(u-c)*(u-c));return f[l]=new o(t[l][r],0,0,t[l+1][r]),f},u=function(t,s,o,l,u,p){var f,d,_,g,m,v,y,w,T={},x=[],b=p||t[0];u="string"==typeof u?","+u+",":a,null==s&&(s=1);for(d in t[0])x.push(d);if(t.length>1){for(w=t[t.length-1],y=!0,f=x.length;--f>-1;)if(d=x[f],Math.abs(b[d]-w[d])>.05){y=!1;break}y&&(t=t.concat(),p&&t.unshift(p),t.push(t[1]),p=t[t.length-3])}for(e.length=i.length=r.length=0,f=x.length;--f>-1;)d=x[f],n[d]=-1!==u.indexOf(","+d+","),T[d]=c(t,d,n[d],p);for(f=e.length;--f>-1;)e[f]=Math.sqrt(e[f]),i[f]=Math.sqrt(i[f]);if(!l){for(f=x.length;--f>-1;)if(n[d])for(_=T[x[f]],v=_.length-1,g=0;v>g;g++)m=_[g+1].da/i[g]+_[g].da/e[g],r[g]=(r[g]||0)+m*m;for(f=r.length;--f>-1;)r[f]=Math.sqrt(r[f])}for(f=x.length,g=o?4:1;--f>-1;)d=x[f],_=T[d],h(_,s,o,l,n[d]),y&&(_.splice(0,g),_.splice(_.length-g,g));return T},p=function(t,e,i){e=e||"soft";var r,n,s,a,l,h,c,u,p,f,d,_={},g="cubic"===e?3:2,m="soft"===e,v=[];if(m&&i&&(t=[i].concat(t)),null==t||g+1>t.length)throw"invalid Bezier data";for(p in t[0])v.push(p);for(h=v.length;--h>-1;){for(p=v[h],_[p]=l=[],f=0,u=t.length,c=0;u>c;c++)r=null==i?t[c][p]:"string"==typeof(d=t[c][p])&&"="===d.charAt(1)?i[p]+Number(d.charAt(0)+d.substr(2)):Number(d),m&&c>1&&u-1>c&&(l[f++]=(r+l[f-2])/2),l[f++]=r;for(u=f-g+1,f=0,c=0;u>c;c+=g)r=l[c],n=l[c+1],s=l[c+2],a=2===g?0:l[c+3],l[f++]=d=3===g?new o(r,n,s,a):new o(r,(2*n+r)/3,(2*n+s)/3,s);l.length=f}return _},f=function(t,e,i){for(var r,n,s,o,a,l,h,c,u,p,f,d=1/i,_=t.length;--_>-1;)for(p=t[_],s=p.a,o=p.d-s,a=p.c-s,l=p.b-s,r=n=0,c=1;i>=c;c++)h=d*c,u=1-h,r=n-(n=(h*h*o+3*u*(h*a+u*l))*h),f=_*i+c-1,e[f]=(e[f]||0)+r*r},d=function(t,e){e=e>>0||6;var i,r,n,s,o=[],a=[],l=0,h=0,c=e-1,u=[],p=[];for(i in t)f(t[i],o,e);for(n=o.length,r=0;n>r;r++)l+=Math.sqrt(o[r]),s=r%e,p[s]=l,s===c&&(h+=l,s=r/e>>0,u[s]=p,a[s]=h,l=0,p=[]);return{length:h,lengths:a,segments:u}},_=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.4",API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var r,n,s,o,a,l=e.values||[],h={},c=l[0],f=e.autoRotate||i.vars.orientToBezier;this._autoRotate=f?f instanceof Array?f:[["x","y","rotation",f===!0?0:Number(f)||0]]:null;for(r in c)this._props.push(r);for(s=this._props.length;--s>-1;)r=this._props[s],this._overwriteProps.push(r),n=this._func[r]="function"==typeof t[r],h[r]=n?t[r.indexOf("set")||"function"!=typeof t["get"+r.substr(3)]?r:"get"+r.substr(3)]():parseFloat(t[r]),a||h[r]!==l[0][r]&&(a=h);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?u(l,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,a):p(l,e.type,h),this._segCount=this._beziers[r].length,this._timeRes){var _=d(this._beziers,this._timeRes);this._length=_.length,this._lengths=_.lengths,this._segments=_.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(f=this._autoRotate)for(this._initialRotations=[],f[0]instanceof Array||(this._autoRotate=f=[f]),s=f.length;--s>-1;){for(o=0;3>o;o++)r=f[s][o],this._func[r]="function"==typeof t[r]&&t[r.indexOf("set")||"function"!=typeof t["get"+r.substr(3)]?r:"get"+r.substr(3)];r=f[s][2],this._initialRotations[s]=this._func[r]?this._func[r].call(this._target):this._target[r]}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(e){var i,r,n,s,o,a,l,h,c,u,p=this._segCount,f=this._func,d=this._target,_=e!==this._startRatio;if(this._timeRes){if(c=this._lengths,u=this._curSeg,e*=this._length,n=this._li,e>this._l2&&p-1>n){for(h=p-1;h>n&&e>=(this._l2=c[++n]););this._l1=c[n-1],this._li=n,this._curSeg=u=this._segments[n],this._s2=u[this._s1=this._si=0]}else if(this._l1>e&&n>0){for(;n>0&&(this._l1=c[--n])>=e;);0===n&&this._l1>e?this._l1=0:n++,this._l2=c[n],this._li=n,this._curSeg=u=this._segments[n],this._s1=u[(this._si=u.length-1)-1]||0,this._s2=u[this._si]}if(i=n,e-=this._l1,n=this._si,e>this._s2&&u.length-1>n){for(h=u.length-1;h>n&&e>=(this._s2=u[++n]););this._s1=u[n-1],this._si=n}else if(this._s1>e&&n>0){for(;n>0&&(this._s1=u[--n])>=e;);0===n&&this._s1>e?this._s1=0:n++,this._s2=u[n],this._si=n}a=(n+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?p-1:p*e>>0,a=(e-i*(1/p))*p;for(r=1-a,n=this._props.length;--n>-1;)s=this._props[n],o=this._beziers[s][i],l=(a*a*o.da+3*r*(a*o.ca+r*o.ba))*a+o.a,this._round[s]&&(l=Math.round(l)),f[s]?d[s](l):d[s]=l;if(this._autoRotate){var g,m,v,y,w,T,x,b=this._autoRotate;for(n=b.length;--n>-1;)s=b[n][2],T=b[n][3]||0,x=b[n][4]===!0?1:t,o=this._beziers[b[n][0]],g=this._beziers[b[n][1]],o&&g&&(o=o[i],g=g[i],m=o.a+(o.b-o.a)*a,y=o.b+(o.c-o.b)*a,m+=(y-m)*a,y+=(o.c+(o.d-o.c)*a-y)*a,v=g.a+(g.b-g.a)*a,w=g.b+(g.c-g.b)*a,v+=(w-v)*a,w+=(g.c+(g.d-g.c)*a-w)*a,l=_?Math.atan2(w-v,y-m)*x+T:this._initialRotations[n],f[s]?d[s](l):d[s]=l)}}}),g=_.prototype;_.bezierThrough=u,_.cubicToQuadratic=l,_._autoCSS=!0,_.quadraticToCubic=function(t,e,i){return new o(t,(2*e+t)/3,(2*e+i)/3,i)},_._cssRegister=function(){var t=s.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,r=e._setPluginRatio,n=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,s,o,a,l){e instanceof Array&&(e={values:e}),l=new _;var h,c,u,p=e.values,f=p.length-1,d=[],g={};if(0>f)return a;for(h=0;f>=h;h++)u=i(t,p[h],o,a,l,f!==h),d[h]=u.end;for(c in e)g[c]=e[c];return g.values=d,a=new n(t,"bezier",0,0,u.pt,2),a.data=u,a.plugin=l,a.setRatio=r,0===g.autoRotate&&(g.autoRotate=!0),!g.autoRotate||g.autoRotate instanceof Array||(h=g.autoRotate===!0?0:Number(g.autoRotate),g.autoRotate=null!=u.end.left?[["left","top","rotation",h,!1]]:null!=u.end.x&&[["x","y","rotation",h,!1]]),g.autoRotate&&(o._transform||o._enableTransforms(!1),u.autoRotate=o._target._gsTransform),l._onInitTween(u.proxy,g,o._tween),a}})}},g._roundProps=function(t,e){for(var i=this._overwriteProps,r=i.length;--r>-1;)(t[i[r]]||t.bezier||t.bezierThrough)&&(this._round[i[r]]=e)},g._kill=function(t){var e,i,r=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=r.length;--i>-1;)r[i]===e&&r.splice(i,1);return this._super._kill.call(this,t)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,r,n,s,o=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=o.prototype.setRatio},a=_gsScope._gsDefine.globals,l={},h=o.prototype=new t("css");h.constructor=o,o.version="1.15.1",o.API=2,o.defaultTransformPerspective=0,o.defaultSkewType="compensated",h="px",o.suffixMap={top:h,right:h,bottom:h,left:h,width:h,height:h,fontSize:h,padding:h,margin:h,perspective:h,lineHeight:""};var c,u,p,f,d,_,g=/(?:\d|\-\d|\.\d|\-\.\d)+/g,m=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,v=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,y=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,w=/(?:\d|\-|\+|=|#|\.)*/g,T=/opacity *= *([^)]*)/i,x=/opacity:([^;]*)/i,b=/alpha\(opacity *=.+?\)/i,S=/^(rgb|hsl)/,P=/([A-Z])/g,R=/-([a-z])/gi,O=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,C=function(t,e){return e.toUpperCase()},k=/(?:Left|Right|Width)/i,M=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,A=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,E=/,(?=[^\)]*(?:\(|$))/gi,D=Math.PI/180,z=180/Math.PI,I={},L=document,F=function(t){return L.createElementNS?L.createElementNS("http://www.w3.org/1999/xhtml",t):L.createElement(t)},N=F("div"),X=F("img"),j=o._internals={_specialProps:l},B=navigator.userAgent,G=function(){var t=B.indexOf("Android"),e=F("a");return p=-1!==B.indexOf("Safari")&&-1===B.indexOf("Chrome")&&(-1===t||Number(B.substr(t+8,1))>3),d=p&&6>Number(B.substr(B.indexOf("Version/")+8,1)),f=-1!==B.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(B)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(B))&&(_=parseFloat(RegExp.$1)),!!e&&(e.style.cssText="top:1px;opacity:.55;",/^0.55/.test(e.style.opacity))}(),Y=function(t){return T.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},q=function(t){window.console&&console.log(t)},U="",$="",V=function(t,e){e=e||N;var i,r,n=e.style;if(void 0!==n[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],r=5;--r>-1&&void 0===n[i[r]+t];);return r>=0?($=3===r?"ms":i[r],U="-"+$.toLowerCase()+"-",$+t):null},W=L.defaultView?L.defaultView.getComputedStyle:function(){},H=o.getStyle=function(t,e,i,r,n){var s;return G||"opacity"!==e?(!r&&t.style[e]?s=t.style[e]:(i=i||W(t))?s=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(P,"-$1").toLowerCase()):t.currentStyle&&(s=t.currentStyle[e]),null==n||s&&"none"!==s&&"auto"!==s&&"auto auto"!==s?s:n):Y(t)},Q=j.convertToPixels=function(t,i,r,n,s){if("px"===n||!n)return r;if("auto"===n||!r)return 0;var a,l,h,c=k.test(i),u=t,p=N.style,f=0>r;if(f&&(r=-r),"%"===n&&-1!==i.indexOf("border"))a=r/100*(c?t.clientWidth:t.clientHeight);else{if(p.cssText="border:0 solid red;position:"+H(t,"position")+";line-height:0;","%"!==n&&u.appendChild)p[c?"borderLeftWidth":"borderTopWidth"]=r+n;else{if(u=t.parentNode||L.body,l=u._gsCache,h=e.ticker.frame,l&&c&&l.time===h)return l.width*r/100;p[c?"width":"height"]=r+n}u.appendChild(N),a=parseFloat(N[c?"offsetWidth":"offsetHeight"]),u.removeChild(N),c&&"%"===n&&o.cacheWidths!==!1&&(l=u._gsCache=u._gsCache||{},l.time=h,l.width=100*(a/r)),0!==a||s||(a=Q(t,i,r,n,!0))}return f?-a:a},Z=j.calculateOffset=function(t,e,i){if("absolute"!==H(t,"position",i))return 0;var r="left"===e?"Left":"Top",n=H(t,"margin"+r,i);return t["offset"+r]-(Q(t,e,parseFloat(n),n.replace(w,""))||0)},K=function(t,e){var i,r,n={};if(e=e||W(t,null))for(i in e)(-1===i.indexOf("Transform")||xt===i)&&(n[i]=e[i]);else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===n[i]&&(n[i.replace(R,C)]=e[i]);return G||(n.opacity=Y(t)),r=Et(t,e,!1),n.rotation=r.rotation,n.skewX=r.skewX,n.scaleX=r.scaleX,n.scaleY=r.scaleY,n.x=r.x,n.y=r.y,Pt&&(n.z=r.z,n.rotationX=r.rotationX,n.rotationY=r.rotationY,n.scaleZ=r.scaleZ),n.filters&&delete n.filters,n},J=function(t,e,i,r,n){var s,o,a,l={},h=t.style;for(o in i)"cssText"!==o&&"length"!==o&&isNaN(o)&&(e[o]!==(s=i[o])||n&&n[o])&&-1===o.indexOf("Origin")&&("number"==typeof s||"string"==typeof s)&&(l[o]="auto"!==s||"left"!==o&&"top"!==o?""!==s&&"auto"!==s&&"none"!==s||"string"!=typeof e[o]||""===e[o].replace(y,"")?s:0:Z(t,o),void 0!==h[o]&&(a=new ft(h,o,h[o],a)));if(r)for(o in r)"className"!==o&&(l[o]=r[o]);return{difs:l,firstMPT:a}},tt={width:["Left","Right"],height:["Top","Bottom"]},et=["marginLeft","marginRight","marginTop","marginBottom"],it=function(t,e,i){var r=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),n=tt[e],s=n.length;for(i=i||W(t,null);--s>-1;)r-=parseFloat(H(t,"padding"+n[s],i,!0))||0,r-=parseFloat(H(t,"border"+n[s]+"Width",i,!0))||0;return r},rt=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),r=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],n=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==n?n="center"===r?"50%":"0":"center"===n&&(n="50%"),("center"===r||isNaN(parseFloat(r))&&-1===(r+"").indexOf("="))&&(r="50%"),e&&(e.oxp=-1!==r.indexOf("%"),e.oyp=-1!==n.indexOf("%"),e.oxr="="===r.charAt(1),e.oyr="="===n.charAt(1),e.ox=parseFloat(r.replace(y,"")),e.oy=parseFloat(n.replace(y,""))),r+" "+n+(i.length>2?" "+i[2]:"")},nt=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},st=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)},ot=function(t,e,i,r){var n,s,o,a,l,h=1e-6;return null==t?a=e:"number"==typeof t?a=t:(n=360,s=t.split("_"),l="="===t.charAt(1),o=(l?parseInt(t.charAt(0)+"1",10)*parseFloat(s[0].substr(2)):parseFloat(s[0]))*(-1===t.indexOf("rad")?1:z)-(l?0:e),s.length&&(r&&(r[i]=e+o),-1!==t.indexOf("short")&&(o%=n,o!==o%(n/2)&&(o=0>o?o+n:o-n)),-1!==t.indexOf("_cw")&&0>o?o=(o+9999999999*n)%n-(0|o/n)*n:-1!==t.indexOf("ccw")&&o>0&&(o=(o-9999999999*n)%n-(0|o/n)*n)),a=e+o),h>a&&a>-h&&(a=0),a},at={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},lt=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},ht=o.parseColor=function(t){var e,i,r,n,s,o;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),at[t]?at[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),r=t.charAt(3),t="#"+e+e+i+i+r+r),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(g),n=Number(t[0])%360/360,s=Number(t[1])/100,o=Number(t[2])/100,i=.5>=o?o*(s+1):o+s-o*s,e=2*o-i,t.length>3&&(t[3]=Number(t[3])),t[0]=lt(n+1/3,e,i),t[1]=lt(n,e,i),t[2]=lt(n-1/3,e,i),t):(t=t.match(g)||at.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):at.black},ct="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(h in at)ct+="|"+h+"\\b";ct=RegExp(ct+")","gi");var ut=function(t,e,i,r){if(null==t)return function(t){return t};var n,s=e?(t.match(ct)||[""])[0]:"",o=t.split(s).join("").match(v)||[],a=t.substr(0,t.indexOf(o[0])),l=")"===t.charAt(t.length-1)?")":"",h=-1!==t.indexOf(" ")?" ":",",c=o.length,u=c>0?o[0].replace(g,""):"";return c?n=e?function(t){var e,p,f,d;
if("number"==typeof t)t+=u;else if(r&&E.test(t)){for(d=t.replace(E,"|").split("|"),f=0;d.length>f;f++)d[f]=n(d[f]);return d.join(",")}if(e=(t.match(ct)||[s])[0],p=t.split(e).join("").match(v)||[],f=p.length,c>f--)for(;c>++f;)p[f]=i?p[0|(f-1)/2]:o[f];return a+p.join(h)+h+e+l+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,s,p;if("number"==typeof t)t+=u;else if(r&&E.test(t)){for(s=t.replace(E,"|").split("|"),p=0;s.length>p;p++)s[p]=n(s[p]);return s.join(",")}if(e=t.match(v)||[],p=e.length,c>p--)for(;c>++p;)e[p]=i?e[0|(p-1)/2]:o[p];return a+e.join(h)+l}:function(t){return t}},pt=function(t){return t=t.split(","),function(e,i,r,n,s,o,a){var l,h=(i+"").split(" ");for(a={},l=0;4>l;l++)a[t[l]]=h[l]=h[l]||h[(l-1)/2>>0];return n.parse(e,a,s,o)}},ft=(j._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,r,n,s=this.data,o=s.proxy,a=s.firstMPT,l=1e-6;a;)e=o[a.v],a.r?e=Math.round(e):l>e&&e>-l&&(e=0),a.t[a.p]=e,a=a._next;if(s.autoRotate&&(s.autoRotate.rotation=o.rotation),1===t)for(a=s.firstMPT;a;){if(i=a.t,i.type){if(1===i.type){for(n=i.xs0+i.s+i.xs1,r=1;i.l>r;r++)n+=i["xn"+r]+i["xs"+(r+1)];i.e=n}}else i.e=i.s+i.xs0;a=a._next}},function(t,e,i,r,n){this.t=t,this.p=e,this.v=i,this.r=n,r&&(r._prev=this,this._next=r)}),dt=(j._parseToProxy=function(t,e,i,r,n,s){var o,a,l,h,c,u=r,p={},f={},d=i._transform,_=I;for(i._transform=null,I=e,r=c=i.parse(t,e,r,n),I=_,s&&(i._transform=d,u&&(u._prev=null,u._prev&&(u._prev._next=null)));r&&r!==u;){if(1>=r.type&&(a=r.p,f[a]=r.s+r.c,p[a]=r.s,s||(h=new ft(r,"s",a,h,r.r),r.c=0),1===r.type))for(o=r.l;--o>0;)l="xn"+o,a=r.p+"_"+l,f[a]=r.data[l],p[a]=r[l],s||(h=new ft(r,l,a,h,r.rxp[l]));r=r._next}return{proxy:p,end:f,firstMPT:h,pt:c}},j.CSSPropTween=function(t,e,r,n,o,a,l,h,c,u,p){this.t=t,this.p=e,this.s=r,this.c=n,this.n=l||e,t instanceof dt||s.push(this.n),this.r=h,this.type=a||0,c&&(this.pr=c,i=!0),this.b=void 0===u?r:u,this.e=void 0===p?r+n:p,o&&(this._next=o,o._prev=this)}),_t=o.parseComplex=function(t,e,i,r,n,s,o,a,l,h){i=i||s||"",o=new dt(t,e,0,0,o,h?2:1,null,(!1),a,i,r),r+="";var u,p,f,d,_,v,y,w,T,x,b,P,R=i.split(", ").join(",").split(" "),O=r.split(", ").join(",").split(" "),C=R.length,k=c!==!1;for((-1!==r.indexOf(",")||-1!==i.indexOf(","))&&(R=R.join(" ").replace(E,", ").split(" "),O=O.join(" ").replace(E,", ").split(" "),C=R.length),C!==O.length&&(R=(s||"").split(" "),C=R.length),o.plugin=l,o.setRatio=h,u=0;C>u;u++)if(d=R[u],_=O[u],w=parseFloat(d),w||0===w)o.appendXtra("",w,nt(_,w),_.replace(m,""),k&&-1!==_.indexOf("px"),!0);else if(n&&("#"===d.charAt(0)||at[d]||S.test(d)))P=","===_.charAt(_.length-1)?"),":")",d=ht(d),_=ht(_),T=d.length+_.length>6,T&&!G&&0===_[3]?(o["xs"+o.l]+=o.l?" transparent":"transparent",o.e=o.e.split(O[u]).join("transparent")):(G||(T=!1),o.appendXtra(T?"rgba(":"rgb(",d[0],_[0]-d[0],",",!0,!0).appendXtra("",d[1],_[1]-d[1],",",!0).appendXtra("",d[2],_[2]-d[2],T?",":P,!0),T&&(d=4>d.length?1:d[3],o.appendXtra("",d,(4>_.length?1:_[3])-d,P,!1)));else if(v=d.match(g)){if(y=_.match(m),!y||y.length!==v.length)return o;for(f=0,p=0;v.length>p;p++)b=v[p],x=d.indexOf(b,f),o.appendXtra(d.substr(f,x-f),Number(b),nt(y[p],b),"",k&&"px"===d.substr(x+b.length,2),0===p),f=x+b.length;o["xs"+o.l]+=d.substr(f)}else o["xs"+o.l]+=o.l?" "+d:d;if(-1!==r.indexOf("=")&&o.data){for(P=o.xs0+o.data.s,u=1;o.l>u;u++)P+=o["xs"+u]+o.data["xn"+u];o.e=P+o["xs"+u]}return o.l||(o.type=-1,o.xs0=o.e),o.xfirst||o},gt=9;for(h=dt.prototype,h.l=h.pr=0;--gt>0;)h["xn"+gt]=0,h["xs"+gt]="";h.xs0="",h._next=h._prev=h.xfirst=h.data=h.plugin=h.setRatio=h.rxp=null,h.appendXtra=function(t,e,i,r,n,s){var o=this,a=o.l;return o["xs"+a]+=s&&a?" "+t:t||"",i||0===a||o.plugin?(o.l++,o.type=o.setRatio?2:1,o["xs"+o.l]=r||"",a>0?(o.data["xn"+a]=e+i,o.rxp["xn"+a]=n,o["xn"+a]=e,o.plugin||(o.xfirst=new dt(o,"xn"+a,e,i,o.xfirst||o,0,o.n,n,o.pr),o.xfirst.xs0=0),o):(o.data={s:e+i},o.rxp={},o.s=e,o.c=i,o.r=n,o)):(o["xs"+a]+=e+(r||""),o)};var mt=function(t,e){e=e||{},this.p=e.prefix?V(t)||t:t,l[t]=l[this.p]=this,this.format=e.formatter||ut(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},vt=j._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var r,n,s=t.split(","),o=e.defaultValue;for(i=i||[o],r=0;s.length>r;r++)e.prefix=0===r&&e.prefix,e.defaultValue=i[r]||o,n=new mt(s[r],e)},yt=function(t){if(!l[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";vt(t,{parser:function(t,i,r,n,s,o,h){var c=a.com.greensock.plugins[e];return c?(c._cssRegister(),l[r].parse(t,i,r,n,s,o,h)):(q("Error: "+e+" js file not loaded."),s)}})}};h=mt.prototype,h.parseComplex=function(t,e,i,r,n,s){var o,a,l,h,c,u,p=this.keyword;if(this.multi&&(E.test(i)||E.test(e)?(a=e.replace(E,"|").split("|"),l=i.replace(E,"|").split("|")):p&&(a=[e],l=[i])),l){for(h=l.length>a.length?l.length:a.length,o=0;h>o;o++)e=a[o]=a[o]||this.dflt,i=l[o]=l[o]||this.dflt,p&&(c=e.indexOf(p),u=i.indexOf(p),c!==u&&(i=-1===u?l:a,i[o]+=" "+p));e=a.join(", "),i=l.join(", ")}return _t(t,this.p,e,i,this.clrs,this.dflt,r,this.pr,n,s)},h.parse=function(t,e,i,r,s,o){return this.parseComplex(t.style,this.format(H(t,this.p,n,!1,this.dflt)),this.format(e),s,o)},o.registerSpecialProp=function(t,e,i){vt(t,{parser:function(t,r,n,s,o,a){var l=new dt(t,n,0,0,o,2,n,(!1),i);return l.plugin=a,l.setRatio=e(t,r,s._tween,n),l},priority:i})};var wt,Tt="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),xt=V("transform"),bt=U+"transform",St=V("transformOrigin"),Pt=null!==V("perspective"),Rt=j.Transform=function(){this.perspective=parseFloat(o.defaultTransformPerspective)||0,this.force3D=!(o.defaultForce3D===!1||!Pt)&&(o.defaultForce3D||"auto")},Ot=window.SVGElement,Ct=function(t,e,i){var r,n=L.createElementNS("http://www.w3.org/2000/svg",t),s=/([a-z])([A-Z])/g;for(r in i)n.setAttributeNS(null,r.replace(s,"$1-$2").toLowerCase(),i[r]);return e.appendChild(n),n},kt=document.documentElement,Mt=function(){var t,e,i,r=_||/Android/i.test(B)&&!window.chrome;return L.createElementNS&&!r&&(t=Ct("svg",kt),e=Ct("rect",t,{width:100,height:50,x:100}),i=e.getBoundingClientRect().width,e.style[St]="50% 50%",e.style[xt]="scaleX(0.5)",r=i===e.getBoundingClientRect().width&&!(f&&Pt),kt.removeChild(t)),r}(),At=function(t,e,i){var r=t.getBBox();e=rt(e).split(" "),i.xOrigin=(-1!==e[0].indexOf("%")?parseFloat(e[0])/100*r.width:parseFloat(e[0]))+r.x,i.yOrigin=(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*r.height:parseFloat(e[1]))+r.y},Et=j.getTransform=function(t,e,i,r){if(t._gsTransform&&i&&!r)return t._gsTransform;var s,a,l,h,c,u,p,f,d,_,g=i?t._gsTransform||new Rt:new Rt,m=0>g.scaleX,v=2e-5,y=1e5,w=Pt?parseFloat(H(t,St,e,!1,"0 0 0").split(" ")[2])||g.zOrigin||0:0,T=parseFloat(o.defaultTransformPerspective)||0;if(xt?a=H(t,bt,e,!0):t.currentStyle&&(a=t.currentStyle.filter.match(M),a=a&&4===a.length?[a[0].substr(4),Number(a[2].substr(4)),Number(a[1].substr(4)),a[3].substr(4),g.x||0,g.y||0].join(","):""),s=!a||"none"===a||"matrix(1, 0, 0, 1, 0, 0)"===a,g.svg=!!(Ot&&"function"==typeof t.getBBox&&t.getCTM&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM)),g.svg&&(At(t,H(t,St,n,!1,"50% 50%")+"",g),wt=o.useSVGTransformAttr||Mt,l=t.getAttribute("transform"),s&&l&&-1!==l.indexOf("matrix")&&(a=l,s=0)),!s){for(l=(a||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],h=l.length;--h>-1;)c=Number(l[h]),l[h]=(u=c-(c|=0))?(0|u*y+(0>u?-.5:.5))/y+c:c;if(16===l.length){var x,b,S,P,R,O=l[0],C=l[1],k=l[2],A=l[3],E=l[4],D=l[5],I=l[6],L=l[7],F=l[8],N=l[9],X=l[10],j=l[12],B=l[13],G=l[14],Y=l[11],q=Math.atan2(I,X);g.zOrigin&&(G=-g.zOrigin,j=F*G-l[12],B=N*G-l[13],G=X*G+g.zOrigin-l[14]),g.rotationX=q*z,q&&(P=Math.cos(-q),R=Math.sin(-q),x=E*P+F*R,b=D*P+N*R,S=I*P+X*R,F=E*-R+F*P,N=D*-R+N*P,X=I*-R+X*P,Y=L*-R+Y*P,E=x,D=b,I=S),q=Math.atan2(F,X),g.rotationY=q*z,q&&(P=Math.cos(-q),R=Math.sin(-q),x=O*P-F*R,b=C*P-N*R,S=k*P-X*R,N=C*R+N*P,X=k*R+X*P,Y=A*R+Y*P,O=x,C=b,k=S),q=Math.atan2(C,O),g.rotation=q*z,q&&(P=Math.cos(-q),R=Math.sin(-q),O=O*P+E*R,b=C*P+D*R,D=C*-R+D*P,I=k*-R+I*P,C=b),g.rotationX&&Math.abs(g.rotationX)+Math.abs(g.rotation)>359.9&&(g.rotationX=g.rotation=0,g.rotationY+=180),g.scaleX=(0|Math.sqrt(O*O+C*C)*y+.5)/y,g.scaleY=(0|Math.sqrt(D*D+N*N)*y+.5)/y,g.scaleZ=(0|Math.sqrt(I*I+X*X)*y+.5)/y,g.skewX=0,g.perspective=Y?1/(0>Y?-Y:Y):0,g.x=j,g.y=B,g.z=G}else if(!(Pt&&!r&&l.length&&g.x===l[4]&&g.y===l[5]&&(g.rotationX||g.rotationY)||void 0!==g.x&&"none"===H(t,"display",e))){var U=l.length>=6,$=U?l[0]:1,V=l[1]||0,W=l[2]||0,Q=U?l[3]:1;g.x=l[4]||0,g.y=l[5]||0,p=Math.sqrt($*$+V*V),f=Math.sqrt(Q*Q+W*W),d=$||V?Math.atan2(V,$)*z:g.rotation||0,_=W||Q?Math.atan2(W,Q)*z+d:g.skewX||0,Math.abs(_)>90&&270>Math.abs(_)&&(m?(p*=-1,_+=0>=d?180:-180,d+=0>=d?180:-180):(f*=-1,_+=0>=_?180:-180)),g.scaleX=p,g.scaleY=f,g.rotation=d,g.skewX=_,Pt&&(g.rotationX=g.rotationY=g.z=0,g.perspective=T,g.scaleZ=1)}g.zOrigin=w;for(h in g)v>g[h]&&g[h]>-v&&(g[h]=0)}return i&&(t._gsTransform=g),g},Dt=function(t){var e,i,r=this.data,n=-r.rotation*D,s=n+r.skewX*D,o=1e5,a=(0|Math.cos(n)*r.scaleX*o)/o,l=(0|Math.sin(n)*r.scaleX*o)/o,h=(0|Math.sin(s)*-r.scaleY*o)/o,c=(0|Math.cos(s)*r.scaleY*o)/o,u=this.t.style,p=this.t.currentStyle;if(p){i=l,l=-h,h=-i,e=p.filter,u.filter="";var f,d,g=this.t.offsetWidth,m=this.t.offsetHeight,v="absolute"!==p.position,y="progid:DXImageTransform.Microsoft.Matrix(M11="+a+", M12="+l+", M21="+h+", M22="+c,x=r.x+g*r.xPercent/100,b=r.y+m*r.yPercent/100;if(null!=r.ox&&(f=(r.oxp?.01*g*r.ox:r.ox)-g/2,d=(r.oyp?.01*m*r.oy:r.oy)-m/2,x+=f-(f*a+d*l),b+=d-(f*h+d*c)),v?(f=g/2,d=m/2,y+=", Dx="+(f-(f*a+d*l)+x)+", Dy="+(d-(f*h+d*c)+b)+")"):y+=", sizingMethod='auto expand')",u.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(A,y):y+" "+e,(0===t||1===t)&&1===a&&0===l&&0===h&&1===c&&(v&&-1===y.indexOf("Dx=0, Dy=0")||T.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf(e.indexOf("Alpha"))&&u.removeAttribute("filter")),!v){var S,P,R,O=8>_?1:-1;for(f=r.ieOffsetX||0,d=r.ieOffsetY||0,r.ieOffsetX=Math.round((g-((0>a?-a:a)*g+(0>l?-l:l)*m))/2+x),r.ieOffsetY=Math.round((m-((0>c?-c:c)*m+(0>h?-h:h)*g))/2+b),gt=0;4>gt;gt++)P=et[gt],S=p[P],i=-1!==S.indexOf("px")?parseFloat(S):Q(this.t,P,parseFloat(S),S.replace(w,""))||0,R=i!==r[P]?2>gt?-r.ieOffsetX:-r.ieOffsetY:2>gt?f-r.ieOffsetX:d-r.ieOffsetY,u[P]=(r[P]=Math.round(i-R*(0===gt||2===gt?1:O)))+"px"}}},zt=j.set3DTransformRatio=function(t){var e,i,r,n,s,o,a,l,h,c,u,p,d,_,g,m,v,y,w,T,x,b=this.data,S=this.t.style,P=b.rotation*D,R=b.scaleX,O=b.scaleY,C=b.scaleZ,k=b.x,M=b.y,A=b.z,E=b.perspective;if(!(1!==t&&0!==t&&b.force3D||b.force3D===!0||b.rotationY||b.rotationX||1!==C||E||A))return void It.call(this,t);if(f&&(_=1e-4,_>R&&R>-_&&(R=C=2e-5),_>O&&O>-_&&(O=C=2e-5),!E||b.z||b.rotationX||b.rotationY||(E=0)),P||b.skewX)g=e=Math.cos(P),m=n=Math.sin(P),b.skewX&&(P-=b.skewX*D,g=Math.cos(P),m=Math.sin(P),"simple"===b.skewType&&(v=Math.tan(b.skewX*D),v=Math.sqrt(1+v*v),g*=v,m*=v)),i=-m,s=g;else{if(!(b.rotationY||b.rotationX||1!==C||E||b.svg))return void(S[xt]=(b.xPercent||b.yPercent?"translate("+b.xPercent+"%,"+b.yPercent+"%) translate3d(":"translate3d(")+k+"px,"+M+"px,"+A+"px)"+(1!==R||1!==O?" scale("+R+","+O+")":""));e=s=1,i=n=0}h=1,r=o=a=l=c=u=0,p=E?-1/E:0,d=b.zOrigin,_=1e-6,T=",",x="0",P=b.rotationY*D,P&&(g=Math.cos(P),m=Math.sin(P),a=-m,c=p*-m,r=e*m,o=n*m,h=g,p*=g,e*=g,n*=g),P=b.rotationX*D,P&&(g=Math.cos(P),m=Math.sin(P),v=i*g+r*m,y=s*g+o*m,l=h*m,u=p*m,r=i*-m+r*g,o=s*-m+o*g,h*=g,p*=g,i=v,s=y),1!==C&&(r*=C,o*=C,h*=C,p*=C),1!==O&&(i*=O,s*=O,l*=O,u*=O),1!==R&&(e*=R,n*=R,a*=R,c*=R),(d||b.svg)&&(d&&(k+=r*-d,M+=o*-d,A+=h*-d+d),b.svg&&(k+=b.xOrigin-(b.xOrigin*e+b.yOrigin*i),M+=b.yOrigin-(b.xOrigin*n+b.yOrigin*s)),_>k&&k>-_&&(k=x),_>M&&M>-_&&(M=x),_>A&&A>-_&&(A=0)),w=b.xPercent||b.yPercent?"translate("+b.xPercent+"%,"+b.yPercent+"%) matrix3d(":"matrix3d(",w+=(_>e&&e>-_?x:e)+T+(_>n&&n>-_?x:n)+T+(_>a&&a>-_?x:a),w+=T+(_>c&&c>-_?x:c)+T+(_>i&&i>-_?x:i)+T+(_>s&&s>-_?x:s),b.rotationX||b.rotationY?(w+=T+(_>l&&l>-_?x:l)+T+(_>u&&u>-_?x:u)+T+(_>r&&r>-_?x:r),w+=T+(_>o&&o>-_?x:o)+T+(_>h&&h>-_?x:h)+T+(_>p&&p>-_?x:p)+T):w+=",0,0,0,0,1,0,",w+=k+T+M+T+A+T+(E?1+-A/E:1)+")",S[xt]=w},It=j.set2DTransformRatio=function(t){var e,i,r,n,s,o,a,l,h,c,u,p=this.data,f=this.t,d=f.style,_=p.x,g=p.y;return!(p.rotationX||p.rotationY||p.z||p.force3D===!0||"auto"===p.force3D&&1!==t&&0!==t)||p.svg&&wt||!Pt?(n=p.scaleX,s=p.scaleY,void(p.rotation||p.skewX||p.svg?(e=p.rotation*D,i=e-p.skewX*D,r=1e5,o=Math.cos(e)*n,a=Math.sin(e)*n,l=Math.sin(i)*-s,h=Math.cos(i)*s,p.svg&&(_+=p.xOrigin-(p.xOrigin*o+p.yOrigin*l),g+=p.yOrigin-(p.xOrigin*a+p.yOrigin*h),u=1e-6,u>_&&_>-u&&(_=0),u>g&&g>-u&&(g=0)),c=(0|o*r)/r+","+(0|a*r)/r+","+(0|l*r)/r+","+(0|h*r)/r+","+_+","+g+")",p.svg&&wt?f.setAttribute("transform","matrix("+c):d[xt]=(p.xPercent||p.yPercent?"translate("+p.xPercent+"%,"+p.yPercent+"%) matrix(":"matrix(")+c):d[xt]=(p.xPercent||p.yPercent?"translate("+p.xPercent+"%,"+p.yPercent+"%) matrix(":"matrix(")+n+",0,0,"+s+","+_+","+g+")")):(this.setRatio=zt,void zt.call(this,t))};h=Rt.prototype,h.x=h.y=h.z=h.skewX=h.skewY=h.rotation=h.rotationX=h.rotationY=h.zOrigin=h.xPercent=h.yPercent=0,h.scaleX=h.scaleY=h.scaleZ=1,vt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent",{parser:function(t,e,i,r,s,a,l){if(r._lastParsedTransform===l)return s;r._lastParsedTransform=l;var h,c,u,p,f,d,_,g=r._transform=Et(t,n,!0,l.parseTransform),m=t.style,v=1e-6,y=Tt.length,w=l,T={};if("string"==typeof w.transform&&xt)u=N.style,u[xt]=w.transform,u.display="block",u.position="absolute",L.body.appendChild(N),h=Et(N,null,!1),L.body.removeChild(N);else if("object"==typeof w){if(h={scaleX:st(null!=w.scaleX?w.scaleX:w.scale,g.scaleX),scaleY:st(null!=w.scaleY?w.scaleY:w.scale,g.scaleY),scaleZ:st(w.scaleZ,g.scaleZ),x:st(w.x,g.x),y:st(w.y,g.y),z:st(w.z,g.z),xPercent:st(w.xPercent,g.xPercent),yPercent:st(w.yPercent,g.yPercent),perspective:st(w.transformPerspective,g.perspective)},_=w.directionalRotation,null!=_)if("object"==typeof _)for(u in _)w[u]=_[u];else w.rotation=_;"string"==typeof w.x&&-1!==w.x.indexOf("%")&&(h.x=0,h.xPercent=st(w.x,g.xPercent)),"string"==typeof w.y&&-1!==w.y.indexOf("%")&&(h.y=0,h.yPercent=st(w.y,g.yPercent)),h.rotation=ot("rotation"in w?w.rotation:"shortRotation"in w?w.shortRotation+"_short":"rotationZ"in w?w.rotationZ:g.rotation,g.rotation,"rotation",T),Pt&&(h.rotationX=ot("rotationX"in w?w.rotationX:"shortRotationX"in w?w.shortRotationX+"_short":g.rotationX||0,g.rotationX,"rotationX",T),h.rotationY=ot("rotationY"in w?w.rotationY:"shortRotationY"in w?w.shortRotationY+"_short":g.rotationY||0,g.rotationY,"rotationY",T)),h.skewX=null==w.skewX?g.skewX:ot(w.skewX,g.skewX),h.skewY=null==w.skewY?g.skewY:ot(w.skewY,g.skewY),(c=h.skewY-g.skewY)&&(h.skewX+=c,h.rotation+=c)}for(Pt&&null!=w.force3D&&(g.force3D=w.force3D,d=!0),g.skewType=w.skewType||g.skewType||o.defaultSkewType,f=g.force3D||g.z||g.rotationX||g.rotationY||h.z||h.rotationX||h.rotationY||h.perspective,f||null==w.scale||(h.scaleZ=1);--y>-1;)i=Tt[y],p=h[i]-g[i],(p>v||-v>p||null!=w[i]||null!=I[i])&&(d=!0,s=new dt(g,i,g[i],p,s),i in T&&(s.e=T[i]),s.xs0=0,s.plugin=a,r._overwriteProps.push(s.n));return p=w.transformOrigin,p&&g.svg&&(At(t,rt(p),h),s=new dt(g,"xOrigin",g.xOrigin,h.xOrigin-g.xOrigin,s,(-1),"transformOrigin"),s.b=g.xOrigin,s.e=s.xs0=h.xOrigin,s=new dt(g,"yOrigin",g.yOrigin,h.yOrigin-g.yOrigin,s,(-1),"transformOrigin"),s.b=g.yOrigin,s.e=s.xs0=h.yOrigin,p="0px 0px"),(p||Pt&&f&&g.zOrigin)&&(xt?(d=!0,i=St,p=(p||H(t,i,n,!1,"50% 50%"))+"",s=new dt(m,i,0,0,s,(-1),"transformOrigin"),s.b=m[i],s.plugin=a,Pt?(u=g.zOrigin,p=p.split(" "),g.zOrigin=(p.length>2&&(0===u||"0px"!==p[2])?parseFloat(p[2]):u)||0,s.xs0=s.e=p[0]+" "+(p[1]||"50%")+" 0px",s=new dt(g,"zOrigin",0,0,s,(-1),s.n),s.b=u,s.xs0=s.e=g.zOrigin):s.xs0=s.e=p):rt(p+"",g)),d&&(r._transformType=g.svg&&wt||!f&&3!==this._transformType?2:3),s},prefix:!0}),vt("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),vt("borderRadius",{defaultValue:"0px",parser:function(t,e,i,s,o){e=this.format(e);var a,l,h,c,u,p,f,d,_,g,m,v,y,w,T,x,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],S=t.style;for(_=parseFloat(t.offsetWidth),g=parseFloat(t.offsetHeight),a=e.split(" "),l=0;b.length>l;l++)this.p.indexOf("border")&&(b[l]=V(b[l])),u=c=H(t,b[l],n,!1,"0px"),-1!==u.indexOf(" ")&&(c=u.split(" "),u=c[0],c=c[1]),p=h=a[l],f=parseFloat(u),v=u.substr((f+"").length),y="="===p.charAt(1),y?(d=parseInt(p.charAt(0)+"1",10),p=p.substr(2),d*=parseFloat(p),m=p.substr((d+"").length-(0>d?1:0))||""):(d=parseFloat(p),m=p.substr((d+"").length)),""===m&&(m=r[i]||v),m!==v&&(w=Q(t,"borderLeft",f,v),T=Q(t,"borderTop",f,v),"%"===m?(u=100*(w/_)+"%",c=100*(T/g)+"%"):"em"===m?(x=Q(t,"borderLeft",1,"em"),u=w/x+"em",c=T/x+"em"):(u=w+"px",c=T+"px"),y&&(p=parseFloat(u)+d+m,h=parseFloat(c)+d+m)),o=_t(S,b[l],u+" "+c,p+" "+h,!1,"0px",o);return o},prefix:!0,formatter:ut("0px 0px 0px 0px",!1,!0)}),vt("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,r,s,o){var a,l,h,c,u,p,f="background-position",d=n||W(t,null),g=this.format((d?_?d.getPropertyValue(f+"-x")+" "+d.getPropertyValue(f+"-y"):d.getPropertyValue(f):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),m=this.format(e);if(-1!==g.indexOf("%")!=(-1!==m.indexOf("%"))&&(p=H(t,"backgroundImage").replace(O,""),p&&"none"!==p)){for(a=g.split(" "),l=m.split(" "),X.setAttribute("src",p),h=2;--h>-1;)g=a[h],c=-1!==g.indexOf("%"),c!==(-1!==l[h].indexOf("%"))&&(u=0===h?t.offsetWidth-X.width:t.offsetHeight-X.height,a[h]=c?parseFloat(g)/100*u+"px":100*(parseFloat(g)/u)+"%");g=a.join(" ")}return this.parseComplex(t.style,g,m,s,o)},formatter:rt}),vt("backgroundSize",{defaultValue:"0 0",formatter:rt}),vt("perspective",{defaultValue:"0px",prefix:!0}),vt("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),vt("transformStyle",{prefix:!0}),vt("backfaceVisibility",{prefix:!0}),vt("userSelect",{prefix:!0}),vt("margin",{parser:pt("marginTop,marginRight,marginBottom,marginLeft")}),vt("padding",{parser:pt("paddingTop,paddingRight,paddingBottom,paddingLeft")}),vt("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,r,s,o){var a,l,h;return 9>_?(l=t.currentStyle,h=8>_?" ":",",a="rect("+l.clipTop+h+l.clipRight+h+l.clipBottom+h+l.clipLeft+")",e=this.format(e).split(",").join(h)):(a=this.format(H(t,this.p,n,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,a,e,s,o)}}),vt("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),vt("autoRound,strictUnits",{parser:function(t,e,i,r,n){return n}}),vt("border",{defaultValue:"0px solid #000",parser:function(t,e,i,r,s,o){return this.parseComplex(t.style,this.format(H(t,"borderTopWidth",n,!1,"0px")+" "+H(t,"borderTopStyle",n,!1,"solid")+" "+H(t,"borderTopColor",n,!1,"#000")),this.format(e),s,o)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(ct)||["#000"])[0]}}),vt("borderWidth",{parser:pt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),vt("float,cssFloat,styleFloat",{parser:function(t,e,i,r,n){var s=t.style,o="cssFloat"in s?"cssFloat":"styleFloat";return new dt(s,o,0,0,n,(-1),i,(!1),0,s[o],e)}});var Lt=function(t){var e,i=this.t,r=i.filter||H(this.data,"filter")||"",n=0|this.s+this.c*t;100===n&&(-1===r.indexOf("atrix(")&&-1===r.indexOf("radient(")&&-1===r.indexOf("oader(")?(i.removeAttribute("filter"),e=!H(this.data,"filter")):(i.filter=r.replace(b,""),e=!0)),e||(this.xn1&&(i.filter=r=r||"alpha(opacity="+n+")"),-1===r.indexOf("pacity")?0===n&&this.xn1||(i.filter=r+" alpha(opacity="+n+")"):i.filter=r.replace(T,"opacity="+n))};vt("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,r,s,o){var a=parseFloat(H(t,"opacity",n,!1,"1")),l=t.style,h="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+a),h&&1===a&&"hidden"===H(t,"visibility",n)&&0!==e&&(a=0),G?s=new dt(l,"opacity",a,e-a,s):(s=new dt(l,"opacity",100*a,100*(e-a),s),s.xn1=h?1:0,l.zoom=1,s.type=2,s.b="alpha(opacity="+s.s+")",s.e="alpha(opacity="+(s.s+s.c)+")",s.data=t,s.plugin=o,s.setRatio=Lt),h&&(s=new dt(l,"visibility",0,0,s,(-1),null,(!1),0,0!==a?"inherit":"hidden",0===e?"hidden":"inherit"),s.xs0="inherit",r._overwriteProps.push(s.n),r._overwriteProps.push(i)),s}});var Ft=function(t,e){e&&(t.removeProperty?("ms"===e.substr(0,2)&&(e="M"+e.substr(1)),t.removeProperty(e.replace(P,"-$1").toLowerCase())):t.removeAttribute(e))},Nt=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ft(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};vt("className",{parser:function(t,e,r,s,o,a,l){var h,c,u,p,f,d=t.getAttribute("class")||"",_=t.style.cssText;if(o=s._classNamePT=new dt(t,r,0,0,o,2),o.setRatio=Nt,o.pr=-11,i=!0,o.b=d,c=K(t,n),u=t._gsClassPT){for(p={},f=u.data;f;)p[f.p]=1,f=f._next;u.setRatio(1)}return t._gsClassPT=o,o.e="="!==e.charAt(1)?e:d.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),s._tween._duration&&(t.setAttribute("class",o.e),h=J(t,c,K(t),l,p),t.setAttribute("class",d),o.data=h.firstMPT,t.style.cssText=_,o=o.xfirst=s.parse(t,h.difs,o,a)),o}});var Xt=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,r,n,s=this.t.style,o=l.transform.parse;if("all"===this.e)s.cssText="",n=!0;else for(e=this.e.split(" ").join("").split(","),r=e.length;--r>-1;)i=e[r],l[i]&&(l[i].parse===o?n=!0:i="transformOrigin"===i?St:l[i].p),Ft(s,i);n&&(Ft(s,xt),this.t._gsTransform&&delete this.t._gsTransform)}};for(vt("clearProps",{parser:function(t,e,r,n,s){return s=new dt(t,r,0,0,s,2),s.setRatio=Xt,s.e=e,s.pr=-10,s.data=n._tween,i=!0,s}}),h="bezier,throwProps,physicsProps,physics2D".split(","),gt=h.length;gt--;)yt(h[gt]);h=o.prototype,h._firstPT=h._lastParsedTransform=h._transform=null,h._onInitTween=function(t,e,a){if(!t.nodeType)return!1;this._target=t,this._tween=a,this._vars=e,c=e.autoRound,i=!1,r=e.suffixMap||o.suffixMap,n=W(t,""),s=this._overwriteProps;var l,h,f,_,g,m,v,y,w,T=t.style;if(u&&""===T.zIndex&&(l=H(t,"zIndex",n),("auto"===l||""===l)&&this._addLazySet(T,"zIndex",0)),"string"==typeof e&&(_=T.cssText,l=K(t,n),T.cssText=_+";"+e,l=J(t,l,K(t)).difs,!G&&x.test(e)&&(l.opacity=parseFloat(RegExp.$1)),e=l,T.cssText=_),this._firstPT=h=this.parse(t,e,null),this._transformType){for(w=3===this._transformType,xt?p&&(u=!0,""===T.zIndex&&(v=H(t,"zIndex",n),("auto"===v||""===v)&&this._addLazySet(T,"zIndex",0)),d&&this._addLazySet(T,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(w?"visible":"hidden"))):T.zoom=1,f=h;f&&f._next;)f=f._next;y=new dt(t,"transform",0,0,null,2),this._linkCSSP(y,null,f),y.setRatio=w&&Pt?zt:xt?It:Dt,y.data=this._transform||Et(t,n,!0),s.pop()}if(i){for(;h;){for(m=h._next,f=_;f&&f.pr>h.pr;)f=f._next;(h._prev=f?f._prev:g)?h._prev._next=h:_=h,(h._next=f)?f._prev=h:g=h,h=m}this._firstPT=_}return!0},h.parse=function(t,e,i,s){var o,a,h,u,p,f,d,_,g,m,v=t.style;for(o in e)f=e[o],a=l[o],a?i=a.parse(t,f,o,this,i,s,e):(p=H(t,o,n)+"",g="string"==typeof f,"color"===o||"fill"===o||"stroke"===o||-1!==o.indexOf("Color")||g&&S.test(f)?(g||(f=ht(f),f=(f.length>3?"rgba(":"rgb(")+f.join(",")+")"),i=_t(v,o,p,f,!0,"transparent",i,0,s)):!g||-1===f.indexOf(" ")&&-1===f.indexOf(",")?(h=parseFloat(p),d=h||0===h?p.substr((h+"").length):"",(""===p||"auto"===p)&&("width"===o||"height"===o?(h=it(t,o,n),d="px"):"left"===o||"top"===o?(h=Z(t,o,n),d="px"):(h="opacity"!==o?0:1,d="")),m=g&&"="===f.charAt(1),m?(u=parseInt(f.charAt(0)+"1",10),f=f.substr(2),u*=parseFloat(f),_=f.replace(w,"")):(u=parseFloat(f),_=g?f.replace(w,""):""),""===_&&(_=o in r?r[o]:d),f=u||0===u?(m?u+h:u)+_:e[o],d!==_&&""!==_&&(u||0===u)&&h&&(h=Q(t,o,h,d),"%"===_?(h/=Q(t,o,100,"%")/100,e.strictUnits!==!0&&(p=h+"%")):"em"===_?h/=Q(t,o,1,"em"):"px"!==_&&(u=Q(t,o,u,_),_="px"),m&&(u||0===u)&&(f=u+h+_)),m&&(u+=h),!h&&0!==h||!u&&0!==u?void 0!==v[o]&&(f||"NaN"!=f+""&&null!=f)?(i=new dt(v,o,u||h||0,0,i,(-1),o,(!1),0,p,f),i.xs0="none"!==f||"display"!==o&&-1===o.indexOf("Style")?f:p):q("invalid "+o+" tween value: "+e[o]):(i=new dt(v,o,h,u-h,i,0,o,c!==!1&&("px"===_||"zIndex"===o),0,p,f),i.xs0=_)):i=_t(v,o,p,f,!0,null,i,0,s)),s&&i&&!i.plugin&&(i.plugin=s);return i},h.setRatio=function(t){var e,i,r,n=this._firstPT,s=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;n;){if(e=n.c*t+n.s,n.r?e=Math.round(e):s>e&&e>-s&&(e=0),n.type)if(1===n.type)if(r=n.l,2===r)n.t[n.p]=n.xs0+e+n.xs1+n.xn1+n.xs2;else if(3===r)n.t[n.p]=n.xs0+e+n.xs1+n.xn1+n.xs2+n.xn2+n.xs3;else if(4===r)n.t[n.p]=n.xs0+e+n.xs1+n.xn1+n.xs2+n.xn2+n.xs3+n.xn3+n.xs4;else if(5===r)n.t[n.p]=n.xs0+e+n.xs1+n.xn1+n.xs2+n.xn2+n.xs3+n.xn3+n.xs4+n.xn4+n.xs5;else{for(i=n.xs0+e+n.xs1,r=1;n.l>r;r++)i+=n["xn"+r]+n["xs"+(r+1)];n.t[n.p]=i}else-1===n.type?n.t[n.p]=n.xs0:n.setRatio&&n.setRatio(t);else n.t[n.p]=e+n.xs0;n=n._next}else for(;n;)2!==n.type?n.t[n.p]=n.b:n.setRatio(t),n=n._next;else for(;n;)2!==n.type?n.t[n.p]=n.e:n.setRatio(t),n=n._next},h._enableTransforms=function(t){this._transform=this._transform||Et(this._target,n,!0),this._transformType=this._transform.svg&&wt||!t&&3!==this._transformType?2:3};var jt=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};h._addLazySet=function(t,e,i){var r=this._firstPT=new dt(t,e,0,0,this._firstPT,2);r.e=i,r.setRatio=jt,r.data=this},h._linkCSSP=function(t,e,i,r){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,r=!0),i?i._next=t:r||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},h._kill=function(e){var i,r,n,s=e;if(e.autoAlpha||e.alpha){s={};for(r in e)s[r]=e[r];s.opacity=1,s.autoAlpha&&(s.visibility=1)}return e.className&&(i=this._classNamePT)&&(n=i.xfirst,n&&n._prev?this._linkCSSP(n._prev,i._next,n._prev._prev):n===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,n._prev),this._classNamePT=null),t.prototype._kill.call(this,s)};var Bt=function(t,e,i){var r,n,s,o;if(t.slice)for(n=t.length;--n>-1;)Bt(t[n],e,i);else for(r=t.childNodes,n=r.length;--n>-1;)s=r[n],o=s.type,s.style&&(e.push(K(s)),i&&i.push(s)),1!==o&&9!==o&&11!==o||!s.childNodes.length||Bt(s,e,i)};return o.cascadeTo=function(t,i,r){var n,s,o,a=e.to(t,i,r),l=[a],h=[],c=[],u=[],p=e._internals.reservedProps;for(t=a._targets||a.target,Bt(t,h,u),a.render(i,!0),Bt(t,c),a.render(0,!0),a._enabled(!0),n=u.length;--n>-1;)if(s=J(u[n],h[n],c[n]),s.firstMPT){s=s.difs;for(o in r)p[o]&&(s[o]=r[o]);l.push(e.to(u[n],i,s))}return l},t.activate([o]),o},!0),function(){var t=_gsScope._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=t.prototype;e._onInitAllProps=function(){for(var t,e,i,r=this._tween,n=r.vars.roundProps instanceof Array?r.vars.roundProps:r.vars.roundProps.split(","),s=n.length,o={},a=r._propLookup.roundProps;--s>-1;)o[n[s]]=1;for(s=n.length;--s>-1;)for(t=n[s],e=r._firstPT;e;)i=e._next,e.pg?e.t._roundProps(o,!0):e.n===t&&(this._add(e.t,t,e.s,e.c),i&&(i._prev=e._prev),e._prev?e._prev._next=i:r._firstPT===e&&(r._firstPT=i),e._next=e._prev=null,r._propLookup[t]=a),e=i;return!1},e._add=function(t,e,i,r){this._addTween(t,e,i,i+r,e,!0),this._overwriteProps.push(e)}}(),_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.3.3",init:function(t,e){var i,r,n;if("function"!=typeof t.setAttribute)return!1;this._target=t,this._proxy={},this._start={},this._end={};for(i in e)this._start[i]=this._proxy[i]=r=t.getAttribute(i),n=this._addTween(this._proxy,i,parseFloat(r),e[i],i),this._end[i]=n?n.s+n.c:e[i],this._overwriteProps.push(i);return!0},set:function(t){this._super.setRatio.call(this,t);for(var e,i=this._overwriteProps,r=i.length,n=1===t?this._end:t?this._proxy:this._start;--r>-1;)e=i[r],this._target.setAttribute(e,n[e]+"")}}),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,r,n,s,o,a,l=e.useRadians===!0?2*Math.PI:360,h=1e-6;for(i in e)"useRadians"!==i&&(a=(e[i]+"").split("_"),r=a[0],n=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),s=this.finals[i]="string"==typeof r&&"="===r.charAt(1)?n+parseInt(r.charAt(0)+"1",10)*Number(r.substr(2)):Number(r)||0,o=s-n,a.length&&(r=a.join("_"),-1!==r.indexOf("short")&&(o%=l,o!==o%(l/2)&&(o=0>o?o+l:o-l)),-1!==r.indexOf("_cw")&&0>o?o=(o+9999999999*l)%l-(0|o/l)*l:-1!==r.indexOf("ccw")&&o>0&&(o=(o-9999999999*l)%l-(0|o/l)*l)),(o>h||-h>o)&&(this._addTween(t,i,n,n+o,i),this._overwriteProps.push(i)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,r,n=_gsScope.GreenSockGlobals||_gsScope,s=n.com.greensock,o=2*Math.PI,a=Math.PI/2,l=s._class,h=function(e,i){var r=l("easing."+e,function(){},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,r},c=t.register||function(){},u=function(t,e,i,r){var n=l("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new r},!0);return c(n,t),n},p=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},f=function(e,i){var r=l("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t){return new r(t)},r},d=u("Back",f("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),f("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),f("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),_=l("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),g=_.prototype=new t;return g.constructor=_,g.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},_.ease=new _(.7,.7),g.config=_.config=function(t,e,i){return new _(t,e,i)},e=l("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),g=e.prototype=new t,g.constructor=e,g.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},g.config=e.config=function(t){return new e(t)},i=l("easing.RoughEase",function(e){e=e||{};for(var i,r,n,s,o,a,l=e.taper||"none",h=[],c=0,u=0|(e.points||20),f=u,d=e.randomize!==!1,_=e.clamp===!0,g=e.template instanceof t?e.template:null,m="number"==typeof e.strength?.4*e.strength:.4;--f>-1;)i=d?Math.random():1/u*f,r=g?g.getRatio(i):i,"none"===l?n=m:"out"===l?(s=1-i,n=s*s*m):"in"===l?n=i*i*m:.5>i?(s=2*i,n=.5*s*s*m):(s=2*(1-i),n=.5*s*s*m),d?r+=Math.random()*n-.5*n:f%2?r+=.5*n:r-=.5*n,_&&(r>1?r=1:0>r&&(r=0)),h[c++]={x:i,y:r};for(h.sort(function(t,e){return t.x-e.x}),a=new p(1,1,null),f=u;--f>-1;)o=h[f],a=new p(o.x,o.y,a);this._prev=new p(0,0,0!==a.t?a:a.next)},!0),g=i.prototype=new t,g.constructor=i,g.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},g.config=function(t){return new i(t);
},i.ease=new i,u("Bounce",h("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),h("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),h("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",h("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),h("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),h("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),r=function(e,i,r){var n=l("easing."+e,function(t,e){this._p1=t||1,this._p2=e||r,this._p3=this._p2/o*(Math.asin(1/this._p1)||0)},!0),s=n.prototype=new t;return s.constructor=n,s.getRatio=i,s.config=function(t,e){return new n(t,e)},n},u("Elastic",r("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*o/this._p2)+1},.3),r("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*o/this._p2))},.3),r("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*o/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*o/this._p2)+1},.45)),u("Expo",h("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),h("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),h("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",h("SineOut",function(t){return Math.sin(t*a)}),h("SineIn",function(t){return-Math.cos(t*a)+1}),h("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),l("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),c(n.SlowMo,"SlowMo","ease,"),c(i,"RoughEase","ease,"),c(e,"SteppedEase","ease,"),d},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var r,n,s,o,a,l=function(t){var e,r=t.split("."),n=i;for(e=0;r.length>e;e++)n[r[e]]=n=n[r[e]]||{};return n},h=l("com.greensock"),c=1e-10,u=function(t){var e,i=[],r=t.length;for(e=0;e!==r;i.push(t[e++]));return i},p=function(){},f=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),d={},_=function(r,n,s,o){this.sc=d[r]?d[r].sc:[],d[r]=this,this.gsClass=null,this.func=s;var a=[];this.check=function(h){for(var c,u,p,f,g=n.length,m=g;--g>-1;)(c=d[n[g]]||new _(n[g],[])).gsClass?(a[g]=c.gsClass,m--):h&&c.sc.push(this);if(0===m&&s)for(u=("com.greensock."+r).split("."),p=u.pop(),f=l(u.join("."))[p]=this.gsClass=s.apply(s,a),o&&(i[p]=f,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+r.split(".").pop(),[],function(){return f}):r===e&&"undefined"!=typeof module&&module.exports&&(module.exports=f)),g=0;this.sc.length>g;g++)this.sc[g].check()},this.check(!0)},g=t._gsDefine=function(t,e,i,r){return new _(t,e,i,r)},m=h._class=function(t,e,i){return e=e||function(){},g(t,[],function(){return e},i),e};g.globals=i;var v=[0,0,1,1],y=[],w=m("easing.Ease",function(t,e,i,r){this._func=t,this._type=i||0,this._power=r||0,this._params=e?v.concat(e):v},!0),T=w.map={},x=w.register=function(t,e,i,r){for(var n,s,o,a,l=e.split(","),c=l.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--c>-1;)for(s=l[c],n=r?m("easing."+s,null,!0):h.easing[s]||{},o=u.length;--o>-1;)a=u[o],T[s+"."+a]=T[a+s]=n[a]=t.getRatio?t:t[a]||new t};for(s=w.prototype,s._calcEnd=!1,s.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,r=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?r*=r:2===i?r*=r*r:3===i?r*=r*r*r:4===i&&(r*=r*r*r*r),1===e?1-r:2===e?r:.5>t?r/2:1-r/2},r=["Linear","Quad","Cubic","Quart","Quint,Strong"],n=r.length;--n>-1;)s=r[n]+",Power"+n,x(new w(null,null,1,n),s,"easeOut",!0),x(new w(null,null,2,n),s,"easeIn"+(0===n?",easeNone":"")),x(new w(null,null,3,n),s,"easeInOut");T.linear=h.easing.Linear.easeIn,T.swing=h.easing.Quad.easeInOut;var b=m("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});s=b.prototype,s.addEventListener=function(t,e,i,r,n){n=n||0;var s,l,h=this._listeners[t],c=0;for(null==h&&(this._listeners[t]=h=[]),l=h.length;--l>-1;)s=h[l],s.c===e&&s.s===i?h.splice(l,1):0===c&&n>s.pr&&(c=l+1);h.splice(c,0,{c:e,s:i,up:r,pr:n}),this!==o||a||o.wake()},s.removeEventListener=function(t,e){var i,r=this._listeners[t];if(r)for(i=r.length;--i>-1;)if(r[i].c===e)return void r.splice(i,1)},s.dispatchEvent=function(t){var e,i,r,n=this._listeners[t];if(n)for(e=n.length,i=this._eventTarget;--e>-1;)r=n[e],r&&(r.up?r.c.call(r.s||i,{type:t,target:i}):r.c.call(r.s||i))};var S=t.requestAnimationFrame,P=t.cancelAnimationFrame,R=Date.now||function(){return(new Date).getTime()},O=R();for(r=["ms","moz","webkit","o"],n=r.length;--n>-1&&!S;)S=t[r[n]+"RequestAnimationFrame"],P=t[r[n]+"CancelAnimationFrame"]||t[r[n]+"CancelRequestAnimationFrame"];m("Ticker",function(t,e){var i,r,n,s,l,h=this,u=R(),f=e!==!1&&S,d=500,_=33,g="tick",m=function(t){var e,o,a=R()-O;a>d&&(u+=a-_),O+=a,h.time=(O-u)/1e3,e=h.time-l,(!i||e>0||t===!0)&&(h.frame++,l+=e+(e>=s?.004:s-e),o=!0),t!==!0&&(n=r(m)),o&&h.dispatchEvent(g)};b.call(h),h.time=h.frame=0,h.tick=function(){m(!0)},h.lagSmoothing=function(t,e){d=t||1/c,_=Math.min(e,d,0)},h.sleep=function(){null!=n&&(f&&P?P(n):clearTimeout(n),r=p,n=null,h===o&&(a=!1))},h.wake=function(){null!==n?h.sleep():h.frame>10&&(O=R()-d+5),r=0===i?p:f&&S?S:function(t){return setTimeout(t,0|1e3*(l-h.time)+1)},h===o&&(a=!0),m(2)},h.fps=function(t){return arguments.length?(i=t,s=1/(i||60),l=this.time+s,void h.wake()):i},h.useRAF=function(t){return arguments.length?(h.sleep(),f=t,void h.fps(i)):f},h.fps(t),setTimeout(function(){f&&(!n||5>h.frame)&&h.useRAF(!1)},1500)}),s=h.Ticker.prototype=new h.events.EventDispatcher,s.constructor=h.Ticker;var C=m("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,Y){a||o.wake();var i=this.vars.useFrames?G:Y;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});o=C.ticker=new h.Ticker,s=C.prototype,s._dirty=s._gc=s._initted=s._paused=!1,s._totalTime=s._time=0,s._rawPrevTime=-1,s._next=s._last=s._onUpdate=s._timeline=s.timeline=null,s._paused=!1;var k=function(){a&&R()-O>2e3&&o.wake(),setTimeout(k,2e3)};k(),s.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},s.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},s.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},s.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},s.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},s.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},s.render=function(){},s.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},s.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},s._enabled=function(t,e){return a||o.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},s._kill=function(){return this._enabled(!1,!1)},s.kill=function(t,e){return this._kill(t,e),this},s._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},s._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},s.eventCallback=function(t,e,i,r){if("on"===(t||"").substr(0,2)){var n=this.vars;if(1===arguments.length)return n[t];null==e?delete n[t]:(n[t]=e,n[t+"Params"]=f(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,n[t+"Scope"]=r),"onUpdate"===t&&(this._onUpdate=e)}return this},s.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},s.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},s.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},s.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},s.totalTime=function(t,e,i){if(a||o.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var r=this._totalDuration,n=this._timeline;if(t>r&&!i&&(t=r),this._startTime=(this._paused?this._pauseTime:n._time)-(this._reversed?r-t:t)/this._timeScale,n._dirty||this._uncache(!1),n._timeline)for(;n._timeline;)n._timeline._time!==(n._startTime+n._totalTime)/n._timeScale&&n.totalTime(n._totalTime,!0),n=n._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(this.render(t,e,!1),z.length&&q())}return this},s.progress=s.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},s.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},s.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},s.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||c,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},s.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},s.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){a||t||o.wake();var e=this._timeline,i=e.rawTime(),r=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=r,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==r&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var M=m("core.SimpleTimeline",function(t){C.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});s=M.prototype=new C,s.constructor=M,s.kill()._gc=!1,s._first=s._last=s._recent=null,s._sortChildren=!1,s.add=s.insert=function(t,e){var i,r;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(r=t._startTime;i&&i._startTime>r;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._recent=t,this._timeline&&this._uncache(!0),this},s._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},s.render=function(t,e,i){var r,n=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;n;)r=n._next,(n._active||t>=n._startTime&&!n._paused)&&(n._reversed?n.render((n._dirty?n.totalDuration():n._totalDuration)-(t-n._startTime)*n._timeScale,e,i):n.render((t-n._startTime)*n._timeScale,e,i)),n=r},s.rawTime=function(){return a||o.wake(),this._totalTime};var A=m("TweenLite",function(e,i,r){if(C.call(this,i,r),this.render=A.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:A.selector(e)||e;var n,s,o,a=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?B[A.defaultOverwrite]:"number"==typeof l?l>>0:B[l],(a||e instanceof Array||e.push&&f(e))&&"number"!=typeof e[0])for(this._targets=o=u(e),this._propLookup=[],this._siblings=[],n=0;o.length>n;n++)s=o[n],s?"string"!=typeof s?s.length&&s!==t&&s[0]&&(s[0]===t||s[0].nodeType&&s[0].style&&!s.nodeType)?(o.splice(n--,1),this._targets=o=o.concat(u(s))):(this._siblings[n]=U(s,this,!1),1===l&&this._siblings[n].length>1&&V(s,this,null,1,this._siblings[n])):(s=o[n--]=A.selector(s),"string"==typeof s&&o.splice(n+1,1)):o.splice(n--,1);else this._propLookup={},this._siblings=U(e,this,!1),1===l&&this._siblings.length>1&&V(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-c,this.render(-this._delay))},!0),E=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},D=function(t,e){var i,r={};for(i in t)j[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!F[i]||F[i]&&F[i]._autoCSS)||(r[i]=t[i],delete t[i]);t.css=r};s=A.prototype=new C,s.constructor=A,s.kill()._gc=!1,s.ratio=0,s._firstPT=s._targets=s._overwrittenProps=s._startAt=null,s._notifyPluginsOfEnabled=s._lazy=!1,A.version="1.15.1",A.defaultEase=s._ease=new w(null,null,1,1),A.defaultOverwrite="auto",A.ticker=o,A.autoSleep=!0,A.lagSmoothing=function(t,e){o.lagSmoothing(t,e)},A.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(A.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var z=[],I={},L=A._internals={isArray:f,isSelector:E,lazyTweens:z},F=A._plugins={},N=L.tweenLookup={},X=0,j=L.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1},B={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},G=C._rootFramesTimeline=new M,Y=C._rootTimeline=new M,q=L.lazyRender=function(){var t,e=z.length;for(I={};--e>-1;)t=z[e],t&&t._lazy!==!1&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);z.length=0};Y._startTime=o.time,G._startTime=o.frame,Y._active=G._active=!0,setTimeout(q,1),C._updateRoot=A.render=function(){var t,e,i;if(z.length&&q(),Y.render((o.time-Y._startTime)*Y._timeScale,!1,!1),G.render((o.frame-G._startTime)*G._timeScale,!1,!1),z.length&&q(),!(o.frame%120)){for(i in N){for(e=N[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete N[i]}if(i=Y._first,(!i||i._paused)&&A.autoSleep&&!G._first&&1===o._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||o.sleep()}}},o.addEventListener("tick",C._updateRoot);var U=function(t,e,i){var r,n,s=t._gsTweenID;if(N[s||(t._gsTweenID=s="t"+X++)]||(N[s]={target:t,tweens:[]}),e&&(r=N[s].tweens,r[n=r.length]=e,i))for(;--n>-1;)r[n]===e&&r.splice(n,1);return N[s].tweens},$=function(t,e,i,r){var n,s,o=t.vars.onOverwrite;return o&&(n=o(t,e,i,r)),o=A.onOverwrite,o&&(s=o(t,e,i,r)),n!==!1&&s!==!1},V=function(t,e,i,r,n){var s,o,a,l;if(1===r||r>=4){for(l=n.length,s=0;l>s;s++)if((a=n[s])!==e)a._gc||$(a,e)&&a._enabled(!1,!1)&&(o=!0);else if(5===r)break;return o}var h,u=e._startTime+c,p=[],f=0,d=0===e._duration;for(s=n.length;--s>-1;)(a=n[s])===e||a._gc||a._paused||(a._timeline!==e._timeline?(h=h||W(e,0,d),0===W(a,h,d)&&(p[f++]=a)):u>=a._startTime&&a._startTime+a.totalDuration()/a._timeScale>u&&((d||!a._initted)&&2e-10>=u-a._startTime||(p[f++]=a)));for(s=f;--s>-1;)if(a=p[s],2===r&&a._kill(i,t,e)&&(o=!0),2!==r||!a._firstPT&&a._initted){if(2!==r&&!$(a,e))continue;a._enabled(!1,!1)&&(o=!0)}return o},W=function(t,e,i){for(var r=t._timeline,n=r._timeScale,s=t._startTime;r._timeline;){if(s+=r._startTime,n*=r._timeScale,r._paused)return-100;r=r._timeline}return s/=n,s>e?s-e:i&&s===e||!t._initted&&2*c>s-e?c:(s+=t.totalDuration()/t._timeScale/n)>e+c?0:s-e-c};s._init=function(){var t,e,i,r,n,s=this.vars,o=this._overwrittenProps,a=this._duration,l=!!s.immediateRender,h=s.ease;if(s.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),n={};for(r in s.startAt)n[r]=s.startAt[r];if(n.overwrite=!1,n.immediateRender=!0,n.lazy=l&&s.lazy!==!1,n.startAt=n.delay=null,this._startAt=A.to(this.target,0,n),l)if(this._time>0)this._startAt=null;else if(0!==a)return}else if(s.runBackwards&&0!==a)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(l=!1),i={};for(r in s)j[r]&&"autoCSS"!==r||(i[r]=s[r]);if(i.overwrite=0,i.data="isFromStart",i.lazy=l&&s.lazy!==!1,i.immediateRender=l,this._startAt=A.to(this.target,0,i),l){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=h=h?h instanceof w?h:"function"==typeof h?new w(h,s.easeParams):T[h]||A.defaultEase:A.defaultEase,s.easeParams instanceof Array&&h.config&&(this._ease=h.config.apply(h,s.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],o?o[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,o);if(e&&A._onPluginEvent("_onInitAllProps",this),o&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),s.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=s.onUpdate,this._initted=!0},s._initProps=function(e,i,r,n){var s,o,a,l,h,c;if(null==e)return!1;I[e._gsTweenID]&&q(),this.vars.css||e.style&&e!==t&&e.nodeType&&F.css&&this.vars.autoCSS!==!1&&D(this.vars,e);for(s in this.vars){if(c=this.vars[s],j[s])c&&(c instanceof Array||c.push&&f(c))&&-1!==c.join("").indexOf("{self}")&&(this.vars[s]=c=this._swapSelfInParams(c,this));else if(F[s]&&(l=new F[s])._onInitTween(e,this.vars[s],this)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:!0,n:s,pg:!0,pr:l._priority},o=l._overwriteProps.length;--o>-1;)i[l._overwriteProps[o]]=this._firstPT;(l._priority||l._onInitAllProps)&&(a=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[s]=h={_next:this._firstPT,t:e,p:s,f:"function"==typeof e[s],n:s,pg:!1,pr:0},h.s=h.f?e[s.indexOf("set")||"function"!=typeof e["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(e[s]),h.c="string"==typeof c&&"="===c.charAt(1)?parseInt(c.charAt(0)+"1",10)*Number(c.substr(2)):Number(c)-h.s||0;h&&h._next&&(h._next._prev=h)}return n&&this._kill(n,e)?this._initProps(e,i,r,n):this._overwrite>1&&this._firstPT&&r.length>1&&V(e,this,i,this._overwrite,r)?(this._kill(i,e),this._initProps(e,i,r,n)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(I[e._gsTweenID]=!0),a)},s.render=function(t,e,i){var r,n,s,o,a=this._time,l=this._duration,h=this._rawPrevTime;if(t>=l)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(r=!0,n="onComplete"),0===l&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>h||h===c&&"isPause"!==this.data)&&h!==t&&(i=!0,h>c&&(n="onReverseComplete")),this._rawPrevTime=o=!e||t||h===t?t:c);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==a||0===l&&h>0&&h!==c)&&(n="onReverseComplete",r=this._reversed),0>t&&(this._active=!1,0===l&&(this._initted||!this.vars.lazy||i)&&(h>=0&&(h!==c||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=o=!e||t||h===t?t:c)),this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/l,p=this._easeType,f=this._easePower;(1===p||3===p&&u>=.5)&&(u=1-u),3===p&&(u*=2),1===f?u*=u:2===f?u*=u*u:3===f?u*=u*u*u:4===f&&(u*=u*u*u*u),this.ratio=1===p?1-u:2===p?u:.5>t/l?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==a||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=a,this._rawPrevTime=h,z.push(this),void(this._lazy=[t,e]);this._time&&!r?this.ratio=this._ease.getRatio(this._time/l):r&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==a&&t>=0&&(this._active=!0),0===a&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):n||(n="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||y))),s=this._firstPT;s;)s.f?s.t[s.p](s.c*this.ratio+s.s):s.t[s.p]=s.c*this.ratio+s.s,s=s._next;this._onUpdate&&(0>t&&this._startAt&&t!==-1e-4&&this._startAt.render(t,e,i),e||(this._time!==a||r)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||y)),n&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&t!==-1e-4&&this._startAt.render(t,e,i),r&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[n]&&this.vars[n].apply(this.vars[n+"Scope"]||this,this.vars[n+"Params"]||y),0===l&&this._rawPrevTime===c&&o!==c&&(this._rawPrevTime=0))}},s._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:A.selector(e)||e;var r,n,s,o,a,l,h,c,u;if((f(e)||E(e))&&"number"!=typeof e[0])for(r=e.length;--r>-1;)this._kill(t,e[r])&&(l=!0);else{if(this._targets){for(r=this._targets.length;--r>-1;)if(e===this._targets[r]){a=this._propLookup[r]||{},this._overwrittenProps=this._overwrittenProps||[],n=this._overwrittenProps[r]=t?this._overwrittenProps[r]||{}:"all";break}}else{if(e!==this.target)return!1;a=this._propLookup,n=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(a){if(h=t||a,c=t!==n&&"all"!==n&&t!==a&&("object"!=typeof t||!t._tempKill),i&&(A.onOverwrite||this.vars.onOverwrite)){for(s in h)a[s]&&(u||(u=[]),u.push(s));if(!$(this,i,e,u))return!1}for(s in h)(o=a[s])&&(o.pg&&o.t._kill(h)&&(l=!0),o.pg&&0!==o.t._overwriteProps.length||(o._prev?o._prev._next=o._next:o===this._firstPT&&(this._firstPT=o._next),o._next&&(o._next._prev=o._prev),o._next=o._prev=null),delete a[s]),c&&(n[s]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return l},s.invalidate=function(){return this._notifyPluginsOfEnabled&&A._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],C.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-c,this.render(-this._delay)),this},s._enabled=function(t,e){if(a||o.wake(),t&&this._gc){var i,r=this._targets;if(r)for(i=r.length;--i>-1;)this._siblings[i]=U(r[i],this,!0);else this._siblings=U(this.target,this,!0)}return C.prototype._enabled.call(this,t,e),!(!this._notifyPluginsOfEnabled||!this._firstPT)&&A._onPluginEvent(t?"_onEnable":"_onDisable",this)},A.to=function(t,e,i){return new A(t,e,i)},A.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new A(t,e,i)},A.fromTo=function(t,e,i,r){return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,new A(t,e,r)},A.delayedCall=function(t,e,i,r,n){return new A(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:r,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:r,immediateRender:!1,lazy:!1,useFrames:n,overwrite:0})},A.set=function(t,e){return new A(t,0,e)},A.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:A.selector(t)||t;var i,r,n,s;if((f(t)||E(t))&&"number"!=typeof t[0]){for(i=t.length,r=[];--i>-1;)r=r.concat(A.getTweensOf(t[i],e));for(i=r.length;--i>-1;)for(s=r[i],n=i;--n>-1;)s===r[n]&&r.splice(i,1)}else for(r=U(t).concat(),i=r.length;--i>-1;)(r[i]._gc||e&&!r[i].isActive())&&r.splice(i,1);return r},A.killTweensOf=A.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var r=A.getTweensOf(t,e),n=r.length;--n>-1;)r[n]._kill(i,t)};var H=m("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=H.prototype},!0);if(s=H.prototype,H.version="1.10.1",H.API=2,s._firstPT=null,s._addTween=function(t,e,i,r,n,s){var o,a;return null!=r&&(o="number"==typeof r||"="!==r.charAt(1)?Number(r)-i:parseInt(r.charAt(0)+"1",10)*Number(r.substr(2)))?(this._firstPT=a={_next:this._firstPT,t:t,p:e,s:i,c:o,f:"function"==typeof t[e],n:n||e,r:s},a._next&&(a._next._prev=a),a):void 0},s.setRatio=function(t){for(var e,i=this._firstPT,r=1e-6;i;)e=i.c*t+i.s,i.r?e=Math.round(e):r>e&&e>-r&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},s._kill=function(t){var e,i=this._overwriteProps,r=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;r;)null!=t[r.n]&&(r._next&&(r._next._prev=r._prev),r._prev?(r._prev._next=r._next,r._prev=null):this._firstPT===r&&(this._firstPT=r._next)),r=r._next;return!1},s._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},A._onPluginEvent=function(t,e){var i,r,n,s,o,a=e._firstPT;if("_onInitAllProps"===t){for(;a;){for(o=a._next,r=n;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:s)?a._prev._next=a:n=a,(a._next=r)?r._prev=a:s=a,a=o}a=e._firstPT=n}for(;a;)a.pg&&"function"==typeof a.t[t]&&a.t[t]()&&(i=!0),a=a._next;return i},H.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===H.API&&(F[(new t[e])._propName]=t[e]);return!0},g.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,r=t.priority||0,n=t.overwriteProps,s={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},o=m("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){H.call(this,i,r),this._overwriteProps=n||[]},t.global===!0),a=o.prototype=new H(i);a.constructor=o,o.API=t.API;for(e in s)"function"==typeof t[e]&&(a[s[e]]=t[e]);return o.version=t.version,H.activate([o]),o},r=t._gsQueue){for(n=0;r.length>n;n++)r[n]();for(s in d)d[s].func||t.console.log("GSAP encountered missing dependency: com.greensock."+s)}a=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax"),function(t,e){"function"==typeof define&&define.amd?define(["ScrollMagic","TweenMax","TimelineMax"],e):"object"==typeof exports?(require("gsap"),e(require("scrollmagic"),TweenMax,TimelineMax)):e(t.ScrollMagic||t.jQuery&&t.jQuery.ScrollMagic,t.TweenMax||t.TweenLite,t.TimelineMax||t.TimelineLite)}(this,function(t,e,i){"use strict";var r="animation.gsap",n=window.console||{},s=Function.prototype.bind.call(n.error||n.log||function(){},n);t||s("("+r+") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."),e||s("("+r+") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs."),t.Scene.addOption("tweenChanges",!1,function(t){return!!t}),t.Scene.extend(function(){var t,n=this,s=function(){n._log&&(Array.prototype.splice.call(arguments,1,0,"("+r+")","->"),n._log.apply(this,arguments))};n.on("progress.plugin_gsap",function(){o()}),n.on("destroy.plugin_gsap",function(t){n.removeTween(t.reset)});var o=function(){if(t){var e=n.progress(),i=n.state();t.repeat&&t.repeat()===-1?"DURING"===i&&t.paused()?t.play():"DURING"===i||t.paused()||t.pause():e!=t.progress()&&(0===n.duration()?e>0?t.play():t.reverse():n.tweenChanges()&&t.tweenTo?t.tweenTo(e*t.duration()):t.progress(e).pause())}};n.setTween=function(r,a,l){var h;arguments.length>1&&(arguments.length<3&&(l=a,a=1),r=e.to(r,a,l));try{h=i?new i({smoothChildTiming:!0}).add(r):r,h.pause()}catch(c){return s(1,"ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"),n}if(t&&n.removeTween(),t=h,r.repeat&&r.repeat()===-1&&(t.repeat(-1),t.yoyo(r.yoyo())),n.tweenChanges()&&!t.tweenTo&&s(2,"WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."),t&&n.controller()&&n.triggerElement()&&n.loglevel()>=2){var u=e.getTweensOf(n.triggerElement()),p=n.controller().info("vertical");u.forEach(function(t,e){var i=t.vars.css||t.vars,r=p?void 0!==i.top||void 0!==i.bottom:void 0!==i.left||void 0!==i.right;if(r)return s(2,"WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"),!1})}if(parseFloat(TweenLite.version)>=1.14)for(var f,d,_=t.getChildren?t.getChildren(!0,!0,!1):[t],g=function(){s(2,"WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another")},m=0;m<_.length;m++)f=_[m],d!==g&&(d=f.vars.onOverwrite,f.vars.onOverwrite=function(){d&&d.apply(this,arguments),g.apply(this,arguments)});return s(3,"added tween"),o(),n},n.removeTween=function(e){return t&&(e&&t.progress(0).pause(),t.kill(),t=void 0,s(3,"removed tween (reset: "+(e?"true":"false")+")")),n}})});var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,r,n=_gsScope.GreenSockGlobals||_gsScope,s=n.com.greensock,o=2*Math.PI,a=Math.PI/2,l=s._class,h=function(e,i){var r=l("easing."+e,function(){},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,r},c=t.register||function(){},u=function(t,e,i,r){var n=l("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new r},!0);return c(n,t),n},p=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},f=function(e,i){var r=l("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t){return new r(t)},r},d=u("Back",f("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),f("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),f("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),_=l("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),g=_.prototype=new t;return g.constructor=_,g.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e;
},_.ease=new _(.7,.7),g.config=_.config=function(t,e,i){return new _(t,e,i)},e=l("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),g=e.prototype=new t,g.constructor=e,g.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},g.config=e.config=function(t){return new e(t)},i=l("easing.RoughEase",function(e){e=e||{};for(var i,r,n,s,o,a,l=e.taper||"none",h=[],c=0,u=0|(e.points||20),f=u,d=e.randomize!==!1,_=e.clamp===!0,g=e.template instanceof t?e.template:null,m="number"==typeof e.strength?.4*e.strength:.4;--f>-1;)i=d?Math.random():1/u*f,r=g?g.getRatio(i):i,"none"===l?n=m:"out"===l?(s=1-i,n=s*s*m):"in"===l?n=i*i*m:.5>i?(s=2*i,n=.5*s*s*m):(s=2*(1-i),n=.5*s*s*m),d?r+=Math.random()*n-.5*n:f%2?r+=.5*n:r-=.5*n,_&&(r>1?r=1:0>r&&(r=0)),h[c++]={x:i,y:r};for(h.sort(function(t,e){return t.x-e.x}),a=new p(1,1,null),f=u;--f>-1;)o=h[f],a=new p(o.x,o.y,a);this._prev=new p(0,0,0!==a.t?a:a.next)},!0),g=i.prototype=new t,g.constructor=i,g.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},g.config=function(t){return new i(t)},i.ease=new i,u("Bounce",h("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),h("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),h("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",h("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),h("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),h("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),r=function(e,i,r){var n=l("easing."+e,function(t,e){this._p1=t||1,this._p2=e||r,this._p3=this._p2/o*(Math.asin(1/this._p1)||0)},!0),s=n.prototype=new t;return s.constructor=n,s.getRatio=i,s.config=function(t,e){return new n(t,e)},n},u("Elastic",r("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*o/this._p2)+1},.3),r("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*o/this._p2))},.3),r("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*o/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*o/this._p2)+1},.45)),u("Expo",h("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),h("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),h("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",h("SineOut",function(t){return Math.sin(t*a)}),h("SineIn",function(t){return-Math.cos(t*a)+1}),h("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),l("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),c(n.SlowMo,"SlowMo","ease,"),c(i,"RoughEase","ease,"),c(e,"SteppedEase","ease,"),d},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t,e){"function"==typeof define&&define.amd?define(["ScrollMagic","velocity"],e):"object"==typeof exports?e(require("scrollmagic"),require("velocity")):e(t.ScrollMagic||t.jQuery&&t.jQuery.ScrollMagic,t.Velocity||t.jQuery&&t.jQuery.Velocity)}(this,function(t,e){"use strict";var i="animation.velocity",r=window.console||{},n=Function.prototype.bind.call(r.error||r.log||function(){},r);t||n("("+i+") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."),e||n("("+i+") -> ERROR: Velocity could not be found. Please make sure it's loaded before ScrollMagic or use an asynchronous loader like requirejs.");var s=0;t.Scene.extend(function(){var r,n,o,a,l=this,h=t._util,c=0,u=function(){l._log&&(Array.prototype.splice.call(arguments,1,0,"("+i+")","->"),l._log.apply(this,arguments))};l.on("progress.plugin_velocity",function(){d()}),l.on("destroy.plugin_velocity",function(t){l.off("*.plugin_velocity"),l.removeVelocity(t.reset)});var p=function(t,i,r){h.type.Array(t)?t.forEach(function(t){p(t,i,r)}):(e.Utilities.data(t,a)||e.Utilities.data(t,a,{reverseProps:h.css(t,Object.keys(n))}),e(t,i,r),void 0!==r.queue&&e.Utilities.dequeue(t,r.queue))},f=function(t,i){if(h.type.Array(t))t.forEach(function(t){f(t,i)});else{var r=e.Utilities.data(t,a);r&&r.reverseProps&&(e(t,r.reverseProps,i),void 0!==i.queue&&e.Utilities.dequeue(t,i.queue))}},d=function(){if(r){var t=l.progress();t!=c&&(0===l.duration()&&(t>0?p(r,n,o):f(r,o)),c=t)}};l.setVelocity=function(t,e,c){r&&l.removeVelocity(),r=h.get.elements(t),n=e||{},o=c||{},a="ScrollMagic."+i+"["+s++ +"]",void 0!==o.queue&&(o.queue=a+"_queue");var p=function(){0!==l.duration()&&u(1,"ERROR: The Velocity animation plugin does not support scrollbound animations (scenes with duration) yet.")};return l.on("change.plugin_velocity",function(t){"duration"==t.what&&p()}),p(),u(3,"added animation"),d(),l},l.removeVelocity=function(t){return r&&(void 0!==o.queue&&e(r,"stop",o.queue),t&&f(r,{duration:0}),r.forEach(function(t){e.Utilities.removeData(t,a)}),r=n=o=a=void 0),l}})}),function(t,e){"function"==typeof define&&define.amd?define(["ScrollMagic"],e):e("object"==typeof exports?require("scrollmagic"):t.ScrollMagic||t.jQuery&&t.jQuery.ScrollMagic)}(this,function(t){"use strict";var e="debug.addIndicators",i=window.console||{},r=Function.prototype.bind.call(i.error||i.log||function(){},i);t||r("("+e+") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");var n="0.85em",s="9999",o=15,a=t._util,l=0;t.Scene.extend(function(){var t,e=this;e.addIndicators=function(i){if(!t){var r={name:"",indent:0,parent:void 0,colorStart:"green",colorEnd:"red",colorTrigger:"blue"};i=a.extend({},r,i),l++,t=new h(e,i),e.on("add.plugin_addIndicators",t.add),e.on("remove.plugin_addIndicators",t.remove),e.on("destroy.plugin_addIndicators",e.removeIndicators),e.controller()&&t.add()}return e},e.removeIndicators=function(){return t&&(t.remove(),this.off("*.plugin_addIndicators"),t=void 0),e}}),t.Controller.addOption("addIndicators",!1),t.Controller.extend(function(){var i=this,r=i.info(),n=r.container,s=r.isDocument,l=r.vertical,h={groups:[]},c=function(){i._log&&(Array.prototype.splice.call(arguments,1,0,"("+e+")","->"),i._log.apply(this,arguments))};i._indicators&&c(2,"WARNING: Scene already has a property '_indicators', which will be overwritten by plugin."),this._indicators=h;var u=function(){h.updateBoundsPositions()},p=function(){h.updateTriggerGroupPositions()};return n.addEventListener("resize",p),s||(window.addEventListener("resize",p),window.addEventListener("scroll",p)),n.addEventListener("resize",u),n.addEventListener("scroll",u),this._indicators.updateBoundsPositions=function(t){for(var e,i,r,s=t?[a.extend({},t.triggerGroup,{members:[t]})]:h.groups,c=s.length,u={},p=l?"left":"top",f=l?"width":"height",d=l?a.get.scrollLeft(n)+a.get.width(n)-o:a.get.scrollTop(n)+a.get.height(n)-o;c--;)for(r=s[c],e=r.members.length,i=a.get[f](r.element.firstChild);e--;)u[p]=d-i,a.css(r.members[e].bounds,u)},this._indicators.updateTriggerGroupPositions=function(t){for(var e,r,c,u,p,f=t?[t]:h.groups,d=f.length,_=s?document.body:n,g=s?{top:0,left:0}:a.get.offset(_,!0),m=l?a.get.width(n)-o:a.get.height(n)-o,v=l?"width":"height",y=l?"Y":"X";d--;)e=f[d],r=e.element,c=e.triggerHook*i.info("size"),u=a.get[v](r.firstChild.firstChild),p=c>u?"translate"+y+"(-100%)":"",a.css(r,{top:g.top+(l?c:m-e.members[0].options.indent),left:g.left+(l?m-e.members[0].options.indent:c)}),a.css(r.firstChild.firstChild,{"-ms-transform":p,"-webkit-transform":p,transform:p})},this._indicators.updateTriggerGroupLabel=function(t){var e="trigger"+(t.members.length>1?"":" "+t.members[0].options.name),i=t.element.firstChild.firstChild,r=i.textContent!==e;r&&(i.textContent=e,l&&h.updateBoundsPositions())},this.addScene=function(e){this._options.addIndicators&&e instanceof t.Scene&&e.controller()===i&&e.addIndicators(),this.$super.addScene.apply(this,arguments)},this.destroy=function(){n.removeEventListener("resize",p),s||(window.removeEventListener("resize",p),window.removeEventListener("scroll",p)),n.removeEventListener("resize",u),n.removeEventListener("scroll",u),this.$super.destroy.apply(this,arguments)},i});var h=function(t,i){var r,n,s=this,o=c.bounds(),h=c.start(i.colorStart),u=c.end(i.colorEnd),p=i.parent&&a.get.elements(i.parent)[0],f=function(){t._log&&(Array.prototype.splice.call(arguments,1,0,"("+e+")","->"),t._log.apply(this,arguments))};i.name=i.name||l,h.firstChild.textContent+=" "+i.name,u.textContent+=" "+i.name,o.appendChild(h),o.appendChild(u),s.options=i,s.bounds=o,s.triggerGroup=void 0,this.add=function(){n=t.controller(),r=n.info("vertical");var e=n.info("isDocument");p||(p=e?document.body:n.info("container")),e||"static"!==a.css(p,"position")||a.css(p,{position:"relative"}),t.on("change.plugin_addIndicators",_),t.on("shift.plugin_addIndicators",d),T(),v(),setTimeout(function(){n._indicators.updateBoundsPositions(s)},0),f(3,"added indicators")},this.remove=function(){if(s.triggerGroup){if(t.off("change.plugin_addIndicators",_),t.off("shift.plugin_addIndicators",d),s.triggerGroup.members.length>1){var e=s.triggerGroup;e.members.splice(e.members.indexOf(s),1),n._indicators.updateTriggerGroupLabel(e),n._indicators.updateTriggerGroupPositions(e),s.triggerGroup=void 0}else w();m(),f(3,"removed indicators")}};var d=function(){v()},_=function(t){"triggerHook"===t.what&&T()},g=function(){var t=n.info("vertical");a.css(h.firstChild,{"border-bottom-width":t?1:0,"border-right-width":t?0:1,bottom:t?-1:i.indent,right:t?i.indent:-1,padding:t?"0 8px":"2px 4px"}),a.css(u,{"border-top-width":t?1:0,"border-left-width":t?0:1,top:t?"100%":"",right:t?i.indent:"",bottom:t?"":i.indent,left:t?"":"100%",padding:t?"0 8px":"2px 4px"}),p.appendChild(o)},m=function(){o.parentNode.removeChild(o)},v=function(){o.parentNode!==p&&g();var e={};e[r?"top":"left"]=t.triggerPosition(),e[r?"height":"width"]=t.duration(),a.css(o,e),a.css(u,{display:t.duration()>0?"":"none"})},y=function(){var e=c.trigger(i.colorTrigger),o={};o[r?"right":"bottom"]=0,o[r?"border-top-width":"border-left-width"]=1,a.css(e.firstChild,o),a.css(e.firstChild.firstChild,{padding:r?"0 8px 3px 8px":"3px 4px"}),document.body.appendChild(e);var l={triggerHook:t.triggerHook(),element:e,members:[s]};n._indicators.groups.push(l),s.triggerGroup=l,n._indicators.updateTriggerGroupLabel(l),n._indicators.updateTriggerGroupPositions(l)},w=function(){n._indicators.groups.splice(n._indicators.groups.indexOf(s.triggerGroup),1),s.triggerGroup.element.parentNode.removeChild(s.triggerGroup.element),s.triggerGroup=void 0},T=function(){var e=t.triggerHook(),i=1e-4;if(!(s.triggerGroup&&Math.abs(s.triggerGroup.triggerHook-e)<i)){for(var r,o=n._indicators.groups,a=o.length;a--;)if(r=o[a],Math.abs(r.triggerHook-e)<i)return s.triggerGroup&&(1===s.triggerGroup.members.length?w():(s.triggerGroup.members.splice(s.triggerGroup.members.indexOf(s),1),n._indicators.updateTriggerGroupLabel(s.triggerGroup),n._indicators.updateTriggerGroupPositions(s.triggerGroup))),r.members.push(s),s.triggerGroup=r,void n._indicators.updateTriggerGroupLabel(r);if(s.triggerGroup){if(1===s.triggerGroup.members.length)return s.triggerGroup.triggerHook=e,void n._indicators.updateTriggerGroupPositions(s.triggerGroup);s.triggerGroup.members.splice(s.triggerGroup.members.indexOf(s),1),n._indicators.updateTriggerGroupLabel(s.triggerGroup),n._indicators.updateTriggerGroupPositions(s.triggerGroup),s.triggerGroup=void 0}y()}}},c={start:function(t){var e=document.createElement("div");e.textContent="start",a.css(e,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:t,"border-color":t});var i=document.createElement("div");return a.css(i,{position:"absolute",overflow:"visible",width:0,height:0}),i.appendChild(e),i},end:function(t){var e=document.createElement("div");return e.textContent="end",a.css(e,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:t,"border-color":t}),e},bounds:function(){var t=document.createElement("div");return a.css(t,{position:"absolute",overflow:"visible","white-space":"nowrap","pointer-events":"none","font-size":n}),t.style.zIndex=s,t},trigger:function(t){var e=document.createElement("div");e.textContent="trigger",a.css(e,{position:"relative"});var i=document.createElement("div");a.css(i,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:t,"border-color":t}),i.appendChild(e);var r=document.createElement("div");return a.css(r,{position:"fixed",overflow:"visible","white-space":"nowrap","pointer-events":"none","font-size":n}),r.style.zIndex=s,r.appendChild(i),r}}}),function(t,e){"function"==typeof define&&define.amd?define(["ScrollMagic","jquery"],e):"object"==typeof exports?e(require("scrollmagic"),require("jquery")):e(t.ScrollMagic,t.jQuery)}(this,function(t,e){"use strict";var i="jquery.ScrollMagic",r=window.console||{},n=Function.prototype.bind.call(r.error||r.log||function(){},r);t||n("("+i+") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."),e||n("("+i+") -> ERROR: jQuery could not be found. Please make sure it's loaded before ScrollMagic or use an asynchronous loader like requirejs."),t._util.get.elements=function(t){return e(t).toArray()},t._util.addClass=function(t,i){e(t).addClass(i)},t._util.removeClass=function(t,i){e(t).removeClass(i)},e.ScrollMagic=t}),$(document).ready(function(){var t=new ScrollMagic.Controller({globalSceneOptions:{triggerHook:"onEnter"}});new ScrollMagic.Scene({triggerElement:".landing-sec0",duration:"200%"}).setTween(".landing-sec0 > .cards-wrapper > div:not(.vital-logo,.vital-logo-font)",{y:"100%",ease:Linear.easeNone}).addTo(t),$(".landing-sec0 > .cards-wrapper  > div").not(".vital-logo,.vital-logo-font").each(function(){$(this).css("margin-top",$(this).height()/-2+"px")}),new ScrollMagic.Scene({triggerElement:".landing-sec0",duration:"200%"}).setTween(".bottom-layer  > div ",{y:"25%",ease:Linear.easeNone}).addTo(t),$(".bottom-layer  > div ").each(function(){$(this).css("margin-top",$(this).height()/-20+"px")}),new ScrollMagic.Scene({triggerElement:".landing-sec0",duration:"200%"}).setTween(".vital-logo",{y:"750%",ease:Linear.easeNone}).addTo(t),new ScrollMagic.Scene({triggerElement:".landing-sec0",duration:"200%"}).setTween(".vital-logo-font",{y:"750%",ease:Linear.easeNone}).addTo(t),$(".vital-logo-font").css("margin-top",$(".vital-logo-font").height()/-.267+"px"),new ScrollMagic.Scene({triggerElement:".landing-sec1 h2",duration:"350"}).setTween(".landing-sec1 h2",1,{scale:1.15,opacity:1,ease:Sine.easeInOut}).addTo(t),new ScrollMagic.Scene({triggerElement:".landing-sec1 h2",duration:"350"}).setTween(".landing-sec1 p",1,{scale:1.05,opacity:1,ease:Sine.easeInOut}).addTo(t),new ScrollMagic.Scene({triggerElement:".landing-sec4 .triggerbox",duration:350}).setTween(".landing-sec4 .vital-calendar-part1",{transform:"translateZ(45px)",ease:Circ.easeOut}).addTo(t),new ScrollMagic.Scene({triggerElement:".landing-sec4 .triggerbox",duration:350}).setTween(".landing-sec4 .vital-calendar-part3",{transform:"translateZ(70px)",ease:Circ.easeOut}).addTo(t),new ScrollMagic.Scene({triggerElement:".landing-sec4 .triggerbox",duration:350}).setTween(".landing-sec4 .vital-calendar-part4",{transform:"translateZ(70px)",ease:Circ.easeOut}).addTo(t),new ScrollMagic.Scene({triggerElement:".landing-sec4 .triggerbox",duration:350}).setTween(".landing-sec4 .vital-calendar-part2",{transform:"rotate3d(1.5, 0.9, -1.3, 70deg) translateZ(-25px)",ease:Circ.easeOut}).addTo(t),new ScrollMagic.Scene({triggerElement:".landing-sec4 .triggerbox",duration:450}).setTween(".landing-sec4 .vital-calendar-part5",{transform:"translateZ(50px)",ease:Circ.easeOut}).addTo(t),new ScrollMagic.Scene({triggerElement:".landing-sec6 .scroll-trigger",duration:500,offset:-30}).setTween(".landing-sec6 .triangle2, .landing-sec6 .triangle3, .landing-sec6 .rectangle",{bottom:"0"}).addTo(t),new ScrollMagic.Scene({triggerElement:".landing-sec6 .scroll-trigger",duration:400}).setTween(".landing-sec6 .vital-reciced-card0,             .landing-sec6 .vital-reciced-card1,             .landing-sec6 .vital-reciced-card2,             .landing-sec6 .vital-reciced-card3,             .landing-sec6 .vital-reciced-card4,             .landing-sec6 .vital-reciced-card5",{transform:"translateY(-120px)",ease:Power4.easeIn}).addTo(t)}),function(t){t.fn.macho=function(e){var i=t.extend({length:3,inline:!0},e);len=i.length;var r=i.inline?"<span class='macho' style='display: inline-block;'>$&</span>":"<span class='macho'>$&</span>",n=function(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},s=function(t,e,i){if(0===e)return new RegExp(t);var r=new RegExp("((\\w+)|(&\\w{1,5};))"+t),o=r.exec(i);return null!=o?null!=o[2]&&o[2].length>3?r:s(n(o[0])+"$",--e,i):s("\\W"+t,--e,i)},o=new RegExp("(&\\w{1,5};|[-,_\\|<.>/?;:'\"`~!@#$%&*()（）‧´・ωつдС；∀ﾟo彡★☆▽￣╮╭ノ╰〒皿～┴‵□′↗︴yΦθ↖，。？！：；＠m＃＄％︿＆＊＝＋╰╯崩潰艸凸∩＿ˍ▁▂▃▄▅▆▇◣◎█◢^]+)$");this.each(function(e){if(t(this).html().match(/</))return!0;var i=t(this).html().match(o);if(null!=i&&i[0].length>3)return t(this).html(t(this).html().replace(o,r))||!0;var a=null!=i?n(i[0])+"$":"$",l=s(a,len,t(this).html());return t(this).html(t(this).html().replace(l,r))||!0})}}(jQuery),$(".landing-sec1 h2").macho({length:2}),$(".landing-sec2 p").macho({length:4});(t[3]=Number(t[3])),t[0]=he(r+1/3,e,i),t[1]=he(r,e,i),t[2]=he(r-1/3,e,i),t):(t=t.match(d)||oe.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):oe.black},_e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(l in oe)_e+="|"+l+"\\b";_e=RegExp(_e+")","gi");var ue=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(_e)||[""])[0]:"",a=t.split(n).join("").match(v)||[],o=t.substr(0,t.indexOf(a[0])),h=")"===t.charAt(t.length-1)?")":"",l=-1!==t.indexOf(" ")?" ":",",_=a.length,u=_>0?a[0].replace(d,""):"";return _?r=e?function(t){var e,p,c,f;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(f=t.replace(M,"|").split("|"),c=0;f.length>c;c++)f[c]=r(f[c]);return f.join(",")}if(e=(t.match(_e)||[n])[0],p=t.split(e).join("").match(v)||[],c=p.length,_>c--)for(;_>++c;)p[c]=i?p[0|(c-1)/2]:a[c];return o+p.join(l)+l+e+h+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(n=t.replace(M,"|").split("|"),p=0;n.length>p;p++)n[p]=r(n[p]);return n.join(",")}if(e=t.match(v)||[],p=e.length,_>p--)for(;_>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(l)+h}:function(t){return t}},pe=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var h,l=(i+"").split(" ");for(o={},h=0;4>h;h++)o[t[h]]=l[h]=l[h]||l[(h-1)/2>>0];return r.parse(e,o,n,a)}},ce=(U._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,h=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):h>e&&e>-h&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),fe=(U._parseToProxy=function(t,e,i,s,r,n){var a,o,h,l,_,u=s,p={},c={},f=i._transform,m=F;for(i._transform=null,F=e,s=_=i.parse(t,e,s,r),F=m,n&&(i._transform=f,u&&(u._prev=null,u._prev&&(u._prev._next=null)));s&&s!==u;){if(1>=s.type&&(o=s.p,c[o]=s.s+s.c,p[o]=s.s,n||(l=new ce(s,"s",o,l,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)h="xn"+a,o=s.p+"_"+h,c[o]=s.data[h],p[o]=s[h],n||(l=new ce(s,h,o,l,s.rxp[h]));s=s._next}return{proxy:p,end:c,firstMPT:l,pt:_}},U.CSSPropTween=function(t,e,s,r,a,o,h,l,_,u,p){this.t=t,this.p=e,this.s=s,this.c=r,this.n=h||e,t instanceof fe||n.push(this.n),this.r=l,this.type=o||0,_&&(this.pr=_,i=!0),this.b=void 0===u?s:u,this.e=void 0===p?s+r:p,a&&(this._next=a,a._prev=this)}),me=a.parseComplex=function(t,e,i,s,r,n,a,o,h,l){i=i||n||"",a=new fe(t,e,0,0,a,l?2:1,null,!1,o,i,s),s+="";var u,p,c,f,m,v,y,T,w,x,b,S,k=i.split(", ").join(",").split(" "),R=s.split(", ").join(",").split(" "),A=k.length,C=_!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(k=k.join(" ").replace(M,", ").split(" "),R=R.join(" ").replace(M,", ").split(" "),A=k.length),A!==R.length&&(k=(n||"").split(" "),A=k.length),a.plugin=h,a.setRatio=l,u=0;A>u;u++)if(f=k[u],m=R[u],T=parseFloat(f),T||0===T)a.appendXtra("",T,re(m,T),m.replace(g,""),C&&-1!==m.indexOf("px"),!0);else if(r&&("#"===f.charAt(0)||oe[f]||P.test(f)))S=","===m.charAt(m.length-1)?"),":")",f=le(f),m=le(m),w=f.length+m.length>6,w&&!B&&0===m[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(R[u]).join("transparent")):(B||(w=!1),a.appendXtra(w?"rgba(":"rgb(",f[0],m[0]-f[0],",",!0,!0).appendXtra("",f[1],m[1]-f[1],",",!0).appendXtra("",f[2],m[2]-f[2],w?",":S,!0),w&&(f=4>f.length?1:f[3],a.appendXtra("",f,(4>m.length?1:m[3])-f,S,!1)));else if(v=f.match(d)){if(y=m.match(g),!y||y.length!==v.length)return a;for(c=0,p=0;v.length>p;p++)b=v[p],x=f.indexOf(b,c),a.appendXtra(f.substr(c,x-c),Number(b),re(y[p],b),"",C&&"px"===f.substr(x+b.length,2),0===p),c=x+b.length;a["xs"+a.l]+=f.substr(c)}else a["xs"+a.l]+=a.l?" "+f:f;if(-1!==s.indexOf("=")&&a.data){for(S=a.xs0+a.data.s,u=1;a.l>u;u++)S+=a["xs"+u]+a.data["xn"+u];a.e=S+a["xs"+u]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},de=9;for(l=fe.prototype,l.l=l.pr=0;--de>0;)l["xn"+de]=0,l["xs"+de]="";l.xs0="",l._next=l._prev=l.xfirst=l.data=l.plugin=l.setRatio=l.rxp=null,l.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new fe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var ge=function(t,e){e=e||{},this.p=e.prefix?W(t)||t:t,h[t]=h[this.p]=this,this.format=e.formatter||ue(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},ve=U._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new ge(n[s],e)},ye=function(t){if(!h[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";ve(t,{parser:function(t,i,s,r,n,a,l){var _=o.com.greensock.plugins[e];return _?(_._cssRegister(),h[s].parse(t,i,s,r,n,a,l)):(q("Error: "+e+" js file not loaded."),n)}})}};l=ge.prototype,l.parseComplex=function(t,e,i,s,r,n){var a,o,h,l,_,u,p=this.keyword;if(this.multi&&(M.test(i)||M.test(e)?(o=e.replace(M,"|").split("|"),h=i.replace(M,"|").split("|")):p&&(o=[e],h=[i])),h){for(l=h.length>o.length?h.length:o.length,a=0;l>a;a++)e=o[a]=o[a]||this.dflt,i=h[a]=h[a]||this.dflt,p&&(_=e.indexOf(p),u=i.indexOf(p),_!==u&&(i=-1===u?h:o,i[a]+=" "+p));e=o.join(", "),i=h.join(", ")}return me(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},l.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){ve(t,{parser:function(t,s,r,n,a,o){var h=new fe(t,r,0,0,a,2,r,!1,i);return h.plugin=o,h.setRatio=e(t,s,n._tween,r),h},priority:i})};var Te,we="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),xe=W("transform"),be=V+"transform",Pe=W("transformOrigin"),Se=null!==W("perspective"),ke=U.Transform=function(){this.perspective=parseFloat(a.defaultTransformPerspective)||0,this.force3D=a.defaultForce3D!==!1&&Se?a.defaultForce3D||"auto":!1},Re=window.SVGElement,Ae=function(t,e,i){var s,r=E.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(s in i)r.setAttributeNS(null,s.replace(n,"$1-$2").toLowerCase(),i[s]);return e.appendChild(r),r},Ce=document.documentElement,Oe=function(){var t,e,i,s=m||/Android/i.test(Y)&&!window.chrome;return E.createElementNS&&!s&&(t=Ae("svg",Ce),e=Ae("rect",t,{width:100,height:50,x:100}),i=e.getBoundingClientRect().width,e.style[Pe]="50% 50%",e.style[xe]="scaleX(0.5)",s=i===e.getBoundingClientRect().width&&!(c&&Se),Ce.removeChild(t)),s}(),De=function(t,e,i){var s=t.getBBox();e=se(e).split(" "),i.xOrigin=(-1!==e[0].indexOf("%")?parseFloat(e[0])/100*s.width:parseFloat(e[0]))+s.x,i.yOrigin=(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*s.height:parseFloat(e[1]))+s.y},Me=U.getTransform=function(t,e,i,s){if(t._gsTransform&&i&&!s)return t._gsTransform;var n,o,h,l,_,u,p,c,f,m,d=i?t._gsTransform||new ke:new ke,g=0>d.scaleX,v=2e-5,y=1e5,T=Se?parseFloat(Q(t,Pe,e,!1,"0 0 0").split(" ")[2])||d.zOrigin||0:0,w=parseFloat(a.defaultTransformPerspective)||0;if(xe?o=Q(t,be,e,!0):t.currentStyle&&(o=t.currentStyle.filter.match(O),o=o&&4===o.length?[o[0].substr(4),Number(o[2].substr(4)),Number(o[1].substr(4)),o[3].substr(4),d.x||0,d.y||0].join(","):""),n=!o||"none"===o||"matrix(1, 0, 0, 1, 0, 0)"===o,d.svg=!!(Re&&"function"==typeof t.getBBox&&t.getCTM&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM)),d.svg&&(De(t,Q(t,Pe,r,!1,"50% 50%")+"",d),Te=a.useSVGTransformAttr||Oe,h=t.getAttribute("transform"),n&&h&&-1!==h.indexOf("matrix")&&(o=h,n=0)),!n){for(h=(o||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],l=h.length;--l>-1;)_=Number(h[l]),h[l]=(u=_-(_|=0))?(0|u*y+(0>u?-.5:.5))/y+_:_;if(16===h.length){var x,b,P,S,k,R=h[0],A=h[1],C=h[2],D=h[3],M=h[4],z=h[5],F=h[6],E=h[7],N=h[8],L=h[9],X=h[10],U=h[12],Y=h[13],B=h[14],j=h[11],q=Math.atan2(F,X);d.zOrigin&&(B=-d.zOrigin,U=N*B-h[12],Y=L*B-h[13],B=X*B+d.zOrigin-h[14]),d.rotationX=q*I,q&&(S=Math.cos(-q),k=Math.sin(-q),x=M*S+N*k,b=z*S+L*k,P=F*S+X*k,N=M*-k+N*S,L=z*-k+L*S,X=F*-k+X*S,j=E*-k+j*S,M=x,z=b,F=P),q=Math.atan2(N,X),d.rotationY=q*I,q&&(S=Math.cos(-q),k=Math.sin(-q),x=R*S-N*k,b=A*S-L*k,P=C*S-X*k,L=A*k+L*S,X=C*k+X*S,j=D*k+j*S,R=x,A=b,C=P),q=Math.atan2(A,R),d.rotation=q*I,q&&(S=Math.cos(-q),k=Math.sin(-q),R=R*S+M*k,b=A*S+z*k,z=A*-k+z*S,F=C*-k+F*S,A=b),d.rotationX&&Math.abs(d.rotationX)+Math.abs(d.rotation)>359.9&&(d.rotationX=d.rotation=0,d.rotationY+=180),d.scaleX=(0|Math.sqrt(R*R+A*A)*y+.5)/y,d.scaleY=(0|Math.sqrt(z*z+L*L)*y+.5)/y,d.scaleZ=(0|Math.sqrt(F*F+X*X)*y+.5)/y,d.skewX=0,d.perspective=j?1/(0>j?-j:j):0,d.x=U,d.y=Y,d.z=B}else if(!(Se&&!s&&h.length&&d.x===h[4]&&d.y===h[5]&&(d.rotationX||d.rotationY)||void 0!==d.x&&"none"===Q(t,"display",e))){var V=h.length>=6,G=V?h[0]:1,W=h[1]||0,Z=h[2]||0,$=V?h[3]:1;d.x=h[4]||0,d.y=h[5]||0,p=Math.sqrt(G*G+W*W),c=Math.sqrt($*$+Z*Z),f=G||W?Math.atan2(W,G)*I:d.rotation||0,m=Z||$?Math.atan2(Z,$)*I+f:d.skewX||0,Math.abs(m)>90&&270>Math.abs(m)&&(g?(p*=-1,m+=0>=f?180:-180,f+=0>=f?180:-180):(c*=-1,m+=0>=m?180:-180)),d.scaleX=p,d.scaleY=c,d.rotation=f,d.skewX=m,Se&&(d.rotationX=d.rotationY=d.z=0,d.perspective=w,d.scaleZ=1)}d.zOrigin=T;for(l in d)v>d[l]&&d[l]>-v&&(d[l]=0)}return i&&(t._gsTransform=d),d},ze=function(t){var e,i,s=this.data,r=-s.rotation*z,n=r+s.skewX*z,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,h=(0|Math.sin(r)*s.scaleX*a)/a,l=(0|Math.sin(n)*-s.scaleY*a)/a,_=(0|Math.cos(n)*s.scaleY*a)/a,u=this.t.style,p=this.t.currentStyle;if(p){i=h,h=-l,l=-i,e=p.filter,u.filter="";var c,f,d=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,y="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+h+", M21="+l+", M22="+_,x=s.x+d*s.xPercent/100,b=s.y+g*s.yPercent/100;if(null!=s.ox&&(c=(s.oxp?.01*d*s.ox:s.ox)-d/2,f=(s.oyp?.01*g*s.oy:s.oy)-g/2,x+=c-(c*o+f*h),b+=f-(c*l+f*_)),v?(c=d/2,f=g/2,y+=", Dx="+(c-(c*o+f*h)+x)+", Dy="+(f-(c*l+f*_)+b)+")"):y+=", sizingMethod='auto expand')",u.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(D,y):y+" "+e,(0===t||1===t)&&1===o&&0===h&&0===l&&1===_&&(v&&-1===y.indexOf("Dx=0, Dy=0")||w.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&u.removeAttribute("filter")),!v){var P,S,k,R=8>m?1:-1;for(c=s.ieOffsetX||0,f=s.ieOffsetY||0,s.ieOffsetX=Math.round((d-((0>o?-o:o)*d+(0>h?-h:h)*g))/2+x),s.ieOffsetY=Math.round((g-((0>_?-_:_)*g+(0>l?-l:l)*d))/2+b),de=0;4>de;de++)S=ee[de],P=p[S],i=-1!==P.indexOf("px")?parseFloat(P):$(this.t,S,parseFloat(P),P.replace(T,""))||0,k=i!==s[S]?2>de?-s.ieOffsetX:-s.ieOffsetY:2>de?c-s.ieOffsetX:f-s.ieOffsetY,u[S]=(s[S]=Math.round(i-k*(0===de||2===de?1:R)))+"px"}}},Ie=U.set3DTransformRatio=function(t){var e,i,s,r,n,a,o,h,l,_,u,p,f,m,d,g,v,y,T,w,x,b=this.data,P=this.t.style,S=b.rotation*z,k=b.scaleX,R=b.scaleY,A=b.scaleZ,C=b.x,O=b.y,D=b.z,M=b.perspective;if(!(1!==t&&0!==t&&b.force3D||b.force3D===!0||b.rotationY||b.rotationX||1!==A||M||D))return Fe.call(this,t),void 0;if(c&&(m=1e-4,m>k&&k>-m&&(k=A=2e-5),m>R&&R>-m&&(R=A=2e-5),!M||b.z||b.rotationX||b.rotationY||(M=0)),S||b.skewX)d=e=Math.cos(S),g=r=Math.sin(S),b.skewX&&(S-=b.skewX*z,d=Math.cos(S),g=Math.sin(S),"simple"===b.skewType&&(v=Math.tan(b.skewX*z),v=Math.sqrt(1+v*v),d*=v,g*=v)),i=-g,n=d;else{if(!(b.rotationY||b.rotationX||1!==A||M||b.svg))return P[xe]=(b.xPercent||b.yPercent?"translate("+b.xPercent+"%,"+b.yPercent+"%) translate3d(":"translate3d(")+C+"px,"+O+"px,"+D+"px)"+(1!==k||1!==R?" scale("+k+","+R+")":""),void 0;e=n=1,i=r=0}l=1,s=a=o=h=_=u=0,p=M?-1/M:0,f=b.zOrigin,m=1e-6,w=",",x="0",S=b.rotationY*z,S&&(d=Math.cos(S),g=Math.sin(S),o=-g,_=p*-g,s=e*g,a=r*g,l=d,p*=d,e*=d,r*=d),S=b.rotationX*z,S&&(d=Math.cos(S),g=Math.sin(S),v=i*d+s*g,y=n*d+a*g,h=l*g,u=p*g,s=i*-g+s*d,a=n*-g+a*d,l*=d,p*=d,i=v,n=y),1!==A&&(s*=A,a*=A,l*=A,p*=A),1!==R&&(i*=R,n*=R,h*=R,u*=R),1!==k&&(e*=k,r*=k,o*=k,_*=k),(f||b.svg)&&(f&&(C+=s*-f,O+=a*-f,D+=l*-f+f),b.svg&&(C+=b.xOrigin-(b.xOrigin*e+b.yOrigin*i),O+=b.yOrigin-(b.xOrigin*r+b.yOrigin*n)),m>C&&C>-m&&(C=x),m>O&&O>-m&&(O=x),m>D&&D>-m&&(D=0)),T=b.xPercent||b.yPercent?"translate("+b.xPercent+"%,"+b.yPercent+"%) matrix3d(":"matrix3d(",T+=(m>e&&e>-m?x:e)+w+(m>r&&r>-m?x:r)+w+(m>o&&o>-m?x:o),T+=w+(m>_&&_>-m?x:_)+w+(m>i&&i>-m?x:i)+w+(m>n&&n>-m?x:n),b.rotationX||b.rotationY?(T+=w+(m>h&&h>-m?x:h)+w+(m>u&&u>-m?x:u)+w+(m>s&&s>-m?x:s),T+=w+(m>a&&a>-m?x:a)+w+(m>l&&l>-m?x:l)+w+(m>p&&p>-m?x:p)+w):T+=",0,0,0,0,1,0,",T+=C+w+O+w+D+w+(M?1+-D/M:1)+")",P[xe]=T},Fe=U.set2DTransformRatio=function(t){var e,i,s,r,n,a,o,h,l,_,u,p=this.data,c=this.t,f=c.style,m=p.x,d=p.y;return!(p.rotationX||p.rotationY||p.z||p.force3D===!0||"auto"===p.force3D&&1!==t&&0!==t)||p.svg&&Te||!Se?(r=p.scaleX,n=p.scaleY,p.rotation||p.skewX||p.svg?(e=p.rotation*z,i=e-p.skewX*z,s=1e5,a=Math.cos(e)*r,o=Math.sin(e)*r,h=Math.sin(i)*-n,l=Math.cos(i)*n,p.svg&&(m+=p.xOrigin-(p.xOrigin*a+p.yOrigin*h),d+=p.yOrigin-(p.xOrigin*o+p.yOrigin*l),u=1e-6,u>m&&m>-u&&(m=0),u>d&&d>-u&&(d=0)),_=(0|a*s)/s+","+(0|o*s)/s+","+(0|h*s)/s+","+(0|l*s)/s+","+m+","+d+")",p.svg&&Te?c.setAttribute("transform","matrix("+_):f[xe]=(p.xPercent||p.yPercent?"translate("+p.xPercent+"%,"+p.yPercent+"%) matrix(":"matrix(")+_):f[xe]=(p.xPercent||p.yPercent?"translate("+p.xPercent+"%,"+p.yPercent+"%) matrix(":"matrix(")+r+",0,0,"+n+","+m+","+d+")",void 0):(this.setRatio=Ie,Ie.call(this,t),void 0)};l=ke.prototype,l.x=l.y=l.z=l.skewX=l.skewY=l.rotation=l.rotationX=l.rotationY=l.zOrigin=l.xPercent=l.yPercent=0,l.scaleX=l.scaleY=l.scaleZ=1,ve("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent",{parser:function(t,e,i,s,n,o,h){if(s._lastParsedTransform===h)return n;s._lastParsedTransform=h;var l,_,u,p,c,f,m,d=s._transform=Me(t,r,!0,h.parseTransform),g=t.style,v=1e-6,y=we.length,T=h,w={};if("string"==typeof T.transform&&xe)u=L.style,u[xe]=T.transform,u.display="block",u.position="absolute",E.body.appendChild(L),l=Me(L,null,!1),E.body.removeChild(L);else if("object"==typeof T){if(l={scaleX:ne(null!=T.scaleX?T.scaleX:T.scale,d.scaleX),scaleY:ne(null!=T.scaleY?T.scaleY:T.scale,d.scaleY),scaleZ:ne(T.scaleZ,d.scaleZ),x:ne(T.x,d.x),y:ne(T.y,d.y),z:ne(T.z,d.z),xPercent:ne(T.xPercent,d.xPercent),yPercent:ne(T.yPercent,d.yPercent),perspective:ne(T.transformPerspective,d.perspective)},m=T.directionalRotation,null!=m)if("object"==typeof m)for(u in m)T[u]=m[u];else T.rotation=m;"string"==typeof T.x&&-1!==T.x.indexOf("%")&&(l.x=0,l.xPercent=ne(T.x,d.xPercent)),"string"==typeof T.y&&-1!==T.y.indexOf("%")&&(l.y=0,l.yPercent=ne(T.y,d.yPercent)),l.rotation=ae("rotation"in T?T.rotation:"shortRotation"in T?T.shortRotation+"_short":"rotationZ"in T?T.rotationZ:d.rotation,d.rotation,"rotation",w),Se&&(l.rotationX=ae("rotationX"in T?T.rotationX:"shortRotationX"in T?T.shortRotationX+"_short":d.rotationX||0,d.rotationX,"rotationX",w),l.rotationY=ae("rotationY"in T?T.rotationY:"shortRotationY"in T?T.shortRotationY+"_short":d.rotationY||0,d.rotationY,"rotationY",w)),l.skewX=null==T.skewX?d.skewX:ae(T.skewX,d.skewX),l.skewY=null==T.skewY?d.skewY:ae(T.skewY,d.skewY),(_=l.skewY-d.skewY)&&(l.skewX+=_,l.rotation+=_)}for(Se&&null!=T.force3D&&(d.force3D=T.force3D,f=!0),d.skewType=T.skewType||d.skewType||a.defaultSkewType,c=d.force3D||d.z||d.rotationX||d.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,c||null==T.scale||(l.scaleZ=1);--y>-1;)i=we[y],p=l[i]-d[i],(p>v||-v>p||null!=T[i]||null!=F[i])&&(f=!0,n=new fe(d,i,d[i],p,n),i in w&&(n.e=w[i]),n.xs0=0,n.plugin=o,s._overwriteProps.push(n.n));return p=T.transformOrigin,p&&d.svg&&(De(t,se(p),l),n=new fe(d,"xOrigin",d.xOrigin,l.xOrigin-d.xOrigin,n,-1,"transformOrigin"),n.b=d.xOrigin,n.e=n.xs0=l.xOrigin,n=new fe(d,"yOrigin",d.yOrigin,l.yOrigin-d.yOrigin,n,-1,"transformOrigin"),n.b=d.yOrigin,n.e=n.xs0=l.yOrigin,p="0px 0px"),(p||Se&&c&&d.zOrigin)&&(xe?(f=!0,i=Pe,p=(p||Q(t,i,r,!1,"50% 50%"))+"",n=new fe(g,i,0,0,n,-1,"transformOrigin"),n.b=g[i],n.plugin=o,Se?(u=d.zOrigin,p=p.split(" "),d.zOrigin=(p.length>2&&(0===u||"0px"!==p[2])?parseFloat(p[2]):u)||0,n.xs0=n.e=p[0]+" "+(p[1]||"50%")+" 0px",n=new fe(d,"zOrigin",0,0,n,-1,n.n),n.b=u,n.xs0=n.e=d.zOrigin):n.xs0=n.e=p):se(p+"",d)),f&&(s._transformType=d.svg&&Te||!c&&3!==this._transformType?2:3),n},prefix:!0}),ve("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ve("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,h,l,_,u,p,c,f,m,d,g,v,y,T,w,x,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(m=parseFloat(t.offsetWidth),d=parseFloat(t.offsetHeight),o=e.split(" "),h=0;b.length>h;h++)this.p.indexOf("border")&&(b[h]=W(b[h])),u=_=Q(t,b[h],r,!1,"0px"),-1!==u.indexOf(" ")&&(_=u.split(" "),u=_[0],_=_[1]),p=l=o[h],c=parseFloat(u),v=u.substr((c+"").length),y="="===p.charAt(1),y?(f=parseInt(p.charAt(0)+"1",10),p=p.substr(2),f*=parseFloat(p),g=p.substr((f+"").length-(0>f?1:0))||""):(f=parseFloat(p),g=p.substr((f+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=$(t,"borderLeft",c,v),w=$(t,"borderTop",c,v),"%"===g?(u=100*(T/m)+"%",_=100*(w/d)+"%"):"em"===g?(x=$(t,"borderLeft",1,"em"),u=T/x+"em",_=w/x+"em"):(u=T+"px",_=w+"px"),y&&(p=parseFloat(u)+f+g,l=parseFloat(_)+f+g)),a=me(P,b[h],u+" "+_,p+" "+l,!1,"0px",a);return a},prefix:!0,formatter:ue("0px 0px 0px 0px",!1,!0)}),ve("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,h,l,_,u,p,c="background-position",f=r||Z(t,null),d=this.format((f?m?f.getPropertyValue(c+"-x")+" "+f.getPropertyValue(c+"-y"):f.getPropertyValue(c):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==d.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=Q(t,"backgroundImage").replace(R,""),p&&"none"!==p)){for(o=d.split(" "),h=g.split(" "),X.setAttribute("src",p),l=2;--l>-1;)d=o[l],_=-1!==d.indexOf("%"),_!==(-1!==h[l].indexOf("%"))&&(u=0===l?t.offsetWidth-X.width:t.offsetHeight-X.height,o[l]=_?parseFloat(d)/100*u+"px":100*(parseFloat(d)/u)+"%");d=o.join(" ")}return this.parseComplex(t.style,d,g,n,a)},formatter:se}),ve("backgroundSize",{defaultValue:"0 0",formatter:se}),ve("perspective",{defaultValue:"0px",prefix:!0}),ve("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ve("transformStyle",{prefix:!0}),ve("backfaceVisibility",{prefix:!0}),ve("userSelect",{prefix:!0}),ve("margin",{parser:pe("marginTop,marginRight,marginBottom,marginLeft")}),ve("padding",{parser:pe("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ve("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,h,l;return 9>m?(h=t.currentStyle,l=8>m?" ":",",o="rect("+h.clipTop+l+h.clipRight+l+h.clipBottom+l+h.clipLeft+")",e=this.format(e).split(",").join(l)):(o=this.format(Q(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),ve("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ve("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),ve("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,"borderTopWidth",r,!1,"0px")+" "+Q(t,"borderTopStyle",r,!1,"solid")+" "+Q(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(_e)||["#000"])[0]}}),ve("borderWidth",{parser:pe("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ve("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new fe(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var Ee=function(t){var e,i=this.t,s=i.filter||Q(this.data,"filter")||"",r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!Q(this.data,"filter")):(i.filter=s.replace(b,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("pacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(w,"opacity="+r))};ve("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(Q(t,"opacity",r,!1,"1")),h=t.style,l="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),l&&1===o&&"hidden"===Q(t,"visibility",r)&&0!==e&&(o=0),B?n=new fe(h,"opacity",o,e-o,n):(n=new fe(h,"opacity",100*o,100*(e-o),n),n.xn1=l?1:0,h.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Ee),l&&(n=new fe(h,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n}});var Ne=function(t,e){e&&(t.removeProperty?("ms"===e.substr(0,2)&&(e="M"+e.substr(1)),t.removeProperty(e.replace(S,"-$1").toLowerCase())):t.removeAttribute(e))},Le=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ne(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ve("className",{parser:function(t,e,s,n,a,o,h){var l,_,u,p,c,f=t.getAttribute("class")||"",m=t.style.cssText;if(a=n._classNamePT=new fe(t,s,0,0,a,2),a.setRatio=Le,a.pr=-11,i=!0,a.b=f,_=K(t,r),u=t._gsClassPT){for(p={},c=u.data;c;)p[c.p]=1,c=c._next;u.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:f.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.setAttribute("class",a.e),l=J(t,_,K(t),h,p),t.setAttribute("class",f),a.data=l.firstMPT,t.style.cssText=m,a=a.xfirst=n.parse(t,l.difs,a,o)),a}});var Xe=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n=this.t.style,a=h.transform.parse;if("all"===this.e)n.cssText="",r=!0;else for(e=this.e.split(" ").join("").split(","),s=e.length;--s>-1;)i=e[s],h[i]&&(h[i].parse===a?r=!0:i="transformOrigin"===i?Pe:h[i].p),Ne(n,i);r&&(Ne(n,xe),this.t._gsTransform&&delete this.t._gsTransform)}};for(ve("clearProps",{parser:function(t,e,s,r,n){return n=new fe(t,s,0,0,n,2),n.setRatio=Xe,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),l="bezier,throwProps,physicsProps,physics2D".split(","),de=l.length;de--;)ye(l[de]);l=a.prototype,l._firstPT=l._lastParsedTransform=l._transform=null,l._onInitTween=function(t,e,o){if(!t.nodeType)return!1;
this._target=t,this._tween=o,this._vars=e,_=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=Z(t,""),n=this._overwriteProps;var h,l,c,m,d,g,v,y,T,w=t.style;if(u&&""===w.zIndex&&(h=Q(t,"zIndex",r),("auto"===h||""===h)&&this._addLazySet(w,"zIndex",0)),"string"==typeof e&&(m=w.cssText,h=K(t,r),w.cssText=m+";"+e,h=J(t,h,K(t)).difs,!B&&x.test(e)&&(h.opacity=parseFloat(RegExp.$1)),e=h,w.cssText=m),this._firstPT=l=this.parse(t,e,null),this._transformType){for(T=3===this._transformType,xe?p&&(u=!0,""===w.zIndex&&(v=Q(t,"zIndex",r),("auto"===v||""===v)&&this._addLazySet(w,"zIndex",0)),f&&this._addLazySet(w,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):w.zoom=1,c=l;c&&c._next;)c=c._next;y=new fe(t,"transform",0,0,null,2),this._linkCSSP(y,null,c),y.setRatio=T&&Se?Ie:xe?Fe:ze,y.data=this._transform||Me(t,r,!0),n.pop()}if(i){for(;l;){for(g=l._next,c=m;c&&c.pr>l.pr;)c=c._next;(l._prev=c?c._prev:d)?l._prev._next=l:m=l,(l._next=c)?c._prev=l:d=l,l=g}this._firstPT=m}return!0},l.parse=function(t,e,i,n){var a,o,l,u,p,c,f,m,d,g,v=t.style;for(a in e)c=e[a],o=h[a],o?i=o.parse(t,c,a,this,i,n,e):(p=Q(t,a,r)+"",d="string"==typeof c,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||d&&P.test(c)?(d||(c=le(c),c=(c.length>3?"rgba(":"rgb(")+c.join(",")+")"),i=me(v,a,p,c,!0,"transparent",i,0,n)):!d||-1===c.indexOf(" ")&&-1===c.indexOf(",")?(l=parseFloat(p),f=l||0===l?p.substr((l+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(l=ie(t,a,r),f="px"):"left"===a||"top"===a?(l=H(t,a,r),f="px"):(l="opacity"!==a?0:1,f="")),g=d&&"="===c.charAt(1),g?(u=parseInt(c.charAt(0)+"1",10),c=c.substr(2),u*=parseFloat(c),m=c.replace(T,"")):(u=parseFloat(c),m=d?c.replace(T,""):""),""===m&&(m=a in s?s[a]:f),c=u||0===u?(g?u+l:u)+m:e[a],f!==m&&""!==m&&(u||0===u)&&l&&(l=$(t,a,l,f),"%"===m?(l/=$(t,a,100,"%")/100,e.strictUnits!==!0&&(p=l+"%")):"em"===m?l/=$(t,a,1,"em"):"px"!==m&&(u=$(t,a,u,m),m="px"),g&&(u||0===u)&&(c=u+l+m)),g&&(u+=l),!l&&0!==l||!u&&0!==u?void 0!==v[a]&&(c||"NaN"!=c+""&&null!=c)?(i=new fe(v,a,u||l||0,0,i,-1,a,!1,0,p,c),i.xs0="none"!==c||"display"!==a&&-1===a.indexOf("Style")?c:p):q("invalid "+a+" tween value: "+e[a]):(i=new fe(v,a,l,u-l,i,0,a,_!==!1&&("px"===m||"zIndex"===a),0,p,c),i.xs0=m)):i=me(v,a,p,c,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},l.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=Math.round(e):n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;)2!==r.type?r.t[r.p]=r.e:r.setRatio(t),r=r._next},l._enableTransforms=function(t){this._transform=this._transform||Me(this._target,r,!0),this._transformType=this._transform.svg&&Te||!t&&3!==this._transformType?2:3};var Ue=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};l._addLazySet=function(t,e,i){var s=this._firstPT=new fe(t,e,0,0,this._firstPT,2);s.e=i,s.setRatio=Ue,s.data=this},l._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},l._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var Ye=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)Ye(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push(K(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||Ye(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o=e.to(t,i,s),h=[o],l=[],_=[],u=[],p=e._internals.reservedProps;for(t=o._targets||o.target,Ye(t,l,u),o.render(i,!0),Ye(t,_),o.render(0,!0),o._enabled(!0),r=u.length;--r>-1;)if(n=J(u[r],l[r],_[r]),n.firstMPT){n=n.difs;for(a in s)p[a]&&(n[a]=s[a]);h.push(e.to(u[r],i,n))}return h},t.activate([a]),a},!0),function(){var t=_gsScope._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=t.prototype;e._onInitAllProps=function(){for(var t,e,i,s=this._tween,r=s.vars.roundProps instanceof Array?s.vars.roundProps:s.vars.roundProps.split(","),n=r.length,a={},o=s._propLookup.roundProps;--n>-1;)a[r[n]]=1;for(n=r.length;--n>-1;)for(t=r[n],e=s._firstPT;e;)i=e._next,e.pg?e.t._roundProps(a,!0):e.n===t&&(this._add(e.t,t,e.s,e.c),i&&(i._prev=e._prev),e._prev?e._prev._next=i:s._firstPT===e&&(s._firstPT=i),e._next=e._prev=null,s._propLookup[t]=o),e=i;return!1},e._add=function(t,e,i,s){this._addTween(t,e,i,i+s,e,!0),this._overwriteProps.push(e)}}(),_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.3.3",init:function(t,e){var i,s,r;if("function"!=typeof t.setAttribute)return!1;this._target=t,this._proxy={},this._start={},this._end={};for(i in e)this._start[i]=this._proxy[i]=s=t.getAttribute(i),r=this._addTween(this._proxy,i,parseFloat(s),e[i],i),this._end[i]=r?r.s+r.c:e[i],this._overwriteProps.push(i);return!0},set:function(t){this._super.setRatio.call(this,t);for(var e,i=this._overwriteProps,s=i.length,r=1===t?this._end:t?this._proxy:this._start;--s>-1;)e=i[s],this._target.setAttribute(e,r[e]+"")}}),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,s,r,n,a,o,h=e.useRadians===!0?2*Math.PI:360,l=1e-6;for(i in e)"useRadians"!==i&&(o=(e[i]+"").split("_"),s=o[0],r=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),n=this.finals[i]="string"==typeof s&&"="===s.charAt(1)?r+parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)):Number(s)||0,a=n-r,o.length&&(s=o.join("_"),-1!==s.indexOf("short")&&(a%=h,a!==a%(h/2)&&(a=0>a?a+h:a-h)),-1!==s.indexOf("_cw")&&0>a?a=(a+9999999999*h)%h-(0|a/h)*h:-1!==s.indexOf("ccw")&&a>0&&(a=(a-9999999999*h)%h-(0|a/h)*h)),(a>l||-l>a)&&(this._addTween(t,i,r,r+a,i),this._overwriteProps.push(i)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},p=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},c=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},f=u("Back",c("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),c("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),c("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),c=u,f=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--c>-1;)i=f?Math.random():1/u*c,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),f?s+=Math.random()*r-.5*r:c%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new p(1,1,null),c=u;--c>-1;)a=l[c],o=new p(a.x,a.y,o);this._prev=new p(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),f},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,r,n,a,o,h=function(t){var e,s=t.split("."),r=i;for(e=0;s.length>e;e++)r[s[e]]=r=r[s[e]]||{};return r},l=h("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},p=function(){},c=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),f={},m=function(s,r,n,a){this.sc=f[s]?f[s].sc:[],f[s]=this,this.gsClass=null,this.func=n;var o=[];this.check=function(l){for(var _,u,p,c,d=r.length,g=d;--d>-1;)(_=f[r[d]]||new m(r[d],[])).gsClass?(o[d]=_.gsClass,g--):l&&_.sc.push(this);if(0===g&&n)for(u=("com.greensock."+s).split("."),p=u.pop(),c=h(u.join("."))[p]=this.gsClass=n.apply(n,o),a&&(i[p]=c,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return c}):s===e&&"undefined"!=typeof module&&module.exports&&(module.exports=c)),d=0;this.sc.length>d;d++)this.sc[d].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new m(t,e,i,s)},g=l._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var v=[0,0,1,1],y=[],T=g("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?v.concat(e):v},!0),w=T.map={},x=T.register=function(t,e,i,s){for(var r,n,a,o,h=e.split(","),_=h.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=h[_],r=s?g("easing."+n,null,!0):l.easing[n]||{},a=u.length;--a>-1;)o=u[a],w[n+"."+o]=w[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(n=T.prototype,n._calcEnd=!1,n.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],r=s.length;--r>-1;)n=s[r]+",Power"+r,x(new T(null,null,1,r),n,"easeOut",!0),x(new T(null,null,2,r),n,"easeIn"+(0===r?",easeNone":"")),x(new T(null,null,3,r),n,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var b=g("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});n=b.prototype,n.addEventListener=function(t,e,i,s,r){r=r||0;var n,h,l=this._listeners[t],_=0;for(null==l&&(this._listeners[t]=l=[]),h=l.length;--h>-1;)n=l[h],n.c===e&&n.s===i?l.splice(h,1):0===_&&r>n.pr&&(_=h+1);l.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==a||o||a.wake()},n.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},n.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var P=t.requestAnimationFrame,S=t.cancelAnimationFrame,k=Date.now||function(){return(new Date).getTime()},R=k();for(s=["ms","moz","webkit","o"],r=s.length;--r>-1&&!P;)P=t[s[r]+"RequestAnimationFrame"],S=t[s[r]+"CancelAnimationFrame"]||t[s[r]+"CancelRequestAnimationFrame"];g("Ticker",function(t,e){var i,s,r,n,h,l=this,u=k(),c=e!==!1&&P,f=500,m=33,d="tick",g=function(t){var e,a,o=k()-R;o>f&&(u+=o-m),R+=o,l.time=(R-u)/1e3,e=l.time-h,(!i||e>0||t===!0)&&(l.frame++,h+=e+(e>=n?.004:n-e),a=!0),t!==!0&&(r=s(g)),a&&l.dispatchEvent(d)};b.call(l),l.time=l.frame=0,l.tick=function(){g(!0)},l.lagSmoothing=function(t,e){f=t||1/_,m=Math.min(e,f,0)},l.sleep=function(){null!=r&&(c&&S?S(r):clearTimeout(r),s=p,r=null,l===a&&(o=!1))},l.wake=function(){null!==r?l.sleep():l.frame>10&&(R=k()-f+5),s=0===i?p:c&&P?P:function(t){return setTimeout(t,0|1e3*(h-l.time)+1)},l===a&&(o=!0),g(2)},l.fps=function(t){return arguments.length?(i=t,n=1/(i||60),h=this.time+n,l.wake(),void 0):i},l.useRAF=function(t){return arguments.length?(l.sleep(),c=t,l.fps(i),void 0):c},l.fps(t),setTimeout(function(){c&&(!r||5>l.frame)&&l.useRAF(!1)},1500)}),n=l.Ticker.prototype=new l.events.EventDispatcher,n.constructor=l.Ticker;var A=g("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,j){o||a.wake();var i=this.vars.useFrames?B:j;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=A.ticker=new l.Ticker,n=A.prototype,n._dirty=n._gc=n._initted=n._paused=!1,n._totalTime=n._time=0,n._rawPrevTime=-1,n._next=n._last=n._onUpdate=n._timeline=n.timeline=null,n._paused=!1;var C=function(){o&&k()-R>2e3&&a.wake(),setTimeout(C,2e3)};C(),n.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},n.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},n.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},n.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},n.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},n.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.render=function(){},n.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},n.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},n._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},n._kill=function(){return this._enabled(!1,!1)},n.kill=function(t,e){return this._kill(t,e),this},n._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},n._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},n.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=c(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},n.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},n.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},n.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},n.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},n.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(this.render(t,e,!1),I.length&&q())}return this},n.progress=n.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},n.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},n.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},n.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},n.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},n.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){o||t||a.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==s&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var O=g("core.SimpleTimeline",function(t){A.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});n=O.prototype=new A,n.constructor=O,n.kill()._gc=!1,n._first=n._last=n._recent=null,n._sortChildren=!1,n.add=n.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._recent=t,this._timeline&&this._uncache(!0),this},n._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},n.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},n.rawTime=function(){return o||a.wake(),this._totalTime};var D=g("TweenLite",function(e,i,s){if(A.call(this,i,s),this.render=D.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:D.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),h=this.vars.overwrite;if(this._overwrite=h=null==h?Y[D.defaultOverwrite]:"number"==typeof h?h>>0:Y[h],(o||e instanceof Array||e.push&&c(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(u(n))):(this._siblings[r]=V(n,this,!1),1===h&&this._siblings[r].length>1&&W(n,this,null,1,this._siblings[r])):(n=a[r--]=D.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=V(e,this,!1),1===h&&this._siblings.length>1&&W(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),M=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},z=function(t,e){var i,s={};for(i in t)U[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!N[i]||N[i]&&N[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};n=D.prototype=new A,n.constructor=D,n.kill()._gc=!1,n.ratio=0,n._firstPT=n._targets=n._overwrittenProps=n._startAt=null,n._notifyPluginsOfEnabled=n._lazy=!1,D.version="1.15.1",D.defaultEase=n._ease=new T(null,null,1,1),D.defaultOverwrite="auto",D.ticker=a,D.autoSleep=!0,D.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},D.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(D.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var I=[],F={},E=D._internals={isArray:c,isSelector:M,lazyTweens:I},N=D._plugins={},L=E.tweenLookup={},X=0,U=E.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1},Y={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},B=A._rootFramesTimeline=new O,j=A._rootTimeline=new O,q=E.lazyRender=function(){var t,e=I.length;for(F={};--e>-1;)t=I[e],t&&t._lazy!==!1&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);I.length=0};j._startTime=a.time,B._startTime=a.frame,j._active=B._active=!0,setTimeout(q,1),A._updateRoot=D.render=function(){var t,e,i;if(I.length&&q(),j.render((a.time-j._startTime)*j._timeScale,!1,!1),B.render((a.frame-B._startTime)*B._timeScale,!1,!1),I.length&&q(),!(a.frame%120)){for(i in L){for(e=L[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete L[i]}if(i=j._first,(!i||i._paused)&&D.autoSleep&&!B._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",A._updateRoot);var V=function(t,e,i){var s,r,n=t._gsTweenID;if(L[n||(t._gsTweenID=n="t"+X++)]||(L[n]={target:t,tweens:[]}),e&&(s=L[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return L[n].tweens},G=function(t,e,i,s){var r,n,a=t.vars.onOverwrite;return a&&(r=a(t,e,i,s)),a=D.onOverwrite,a&&(n=a(t,e,i,s)),r!==!1&&n!==!1},W=function(t,e,i,s,r){var n,a,o,h;if(1===s||s>=4){for(h=r.length,n=0;h>n;n++)if((o=r[n])!==e)o._gc||G(o,e)&&o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var l,u=e._startTime+_,p=[],c=0,f=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(l=l||Z(e,0,f),0===Z(o,l,f)&&(p[c++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((f||!o._initted)&&2e-10>=u-o._startTime||(p[c++]=o)));for(n=c;--n>-1;)if(o=p[n],2===s&&o._kill(i,t,e)&&(a=!0),2!==s||!o._firstPT&&o._initted){if(2!==s&&!G(o,e))continue;o._enabled(!1,!1)&&(a=!0)}return a},Z=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*_>n-e?_:(n+=t.totalDuration()/t._timeScale/r)>e+_?0:n-e-_};n._init=function(){var t,e,i,s,r,n=this.vars,a=this._overwrittenProps,o=this._duration,h=!!n.immediateRender,l=n.ease;if(n.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),r={};for(s in n.startAt)r[s]=n.startAt[s];if(r.overwrite=!1,r.immediateRender=!0,r.lazy=h&&n.lazy!==!1,r.startAt=r.delay=null,this._startAt=D.to(this.target,0,r),h)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(n.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(h=!1),i={};for(s in n)U[s]&&"autoCSS"!==s||(i[s]=n[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=h&&n.lazy!==!1,i.immediateRender=h,this._startAt=D.to(this.target,0,i),h){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=l=l?l instanceof T?l:"function"==typeof l?new T(l,n.easeParams):w[l]||D.defaultEase:D.defaultEase,n.easeParams instanceof Array&&l.config&&(this._ease=l.config.apply(l,n.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&D._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),n.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=n.onUpdate,this._initted=!0},n._initProps=function(e,i,s,r){var n,a,o,h,l,_;if(null==e)return!1;F[e._gsTweenID]&&q(),this.vars.css||e.style&&e!==t&&e.nodeType&&N.css&&this.vars.autoCSS!==!1&&z(this.vars,e);for(n in this.vars){if(_=this.vars[n],U[n])_&&(_ instanceof Array||_.push&&c(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(N[n]&&(h=new N[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=l={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:h._priority},a=h._overwriteProps.length;--a>-1;)i[h._overwriteProps[a]]=this._firstPT;(h._priority||h._onInitAllProps)&&(o=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=l={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},l.s=l.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),l.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-l.s||0;l&&l._next&&(l._next._prev=l)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&W(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(F[e._gsTweenID]=!0),o)},n.render=function(t,e,i){var s,r,n,a,o=this._time,h=this._duration,l=this._rawPrevTime;if(t>=h)this._totalTime=this._time=h,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete"),0===h&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>l||l===_&&"isPause"!==this.data)&&l!==t&&(i=!0,l>_&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||l===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===h&&l>0&&l!==_)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===h&&(this._initted||!this.vars.lazy||i)&&(l>=0&&(l!==_||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=a=!e||t||l===t?t:_)),this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/h,p=this._easeType,c=this._easePower;(1===p||3===p&&u>=.5)&&(u=1-u),3===p&&(u*=2),1===c?u*=u:2===c?u*=u*u:3===c?u*=u*u*u:4===c&&(u*=u*u*u*u),this.ratio=1===p?1-u:2===p?u:.5>t/h?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/h);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=l,I.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/h):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===h)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||y))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&t!==-1e-4&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||y)),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&t!==-1e-4&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||y),0===h&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))
}},n._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var s,r,n,a,o,h,l,_,u;if((c(e)||M(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s])&&(h=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],r=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,r=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(l=t||o,_=t!==r&&"all"!==r&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(D.onOverwrite||this.vars.onOverwrite)){for(n in l)o[n]&&(u||(u=[]),u.push(n));if(!G(this,i,e,u))return!1}for(n in l)(a=o[n])&&(a.pg&&a.t._kill(l)&&(h=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),_&&(r[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return h},n.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],A.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-_,this.render(-this._delay)),this},n._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=V(s[i],this,!0);else this._siblings=V(this.target,this,!0)}return A.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?D._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new D(t,e,s)},D.delayedCall=function(t,e,i,s,r){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,lazy:!1,useFrames:r,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:D.selector(t)||t;var i,s,r,n;if((c(t)||M(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(D.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=V(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=D.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var Q=g("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=Q.prototype},!0);if(n=Q.prototype,Q.version="1.10.1",Q.API=2,n._firstPT=null,n._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},n.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},n._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},n._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},D._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},Q.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===Q.API&&(N[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=g("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){Q.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new Q(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,Q.activate([a]),a},s=t._gsQueue){for(r=0;s.length>r;r++)s[r]();for(n in f)f[n].func||t.console.log("GSAP encountered missing dependency: com.greensock."+n)}o=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
/*!
 * ScrollMagic v2.0.5 (2015-04-29)
 * The javascript library for magical scroll interactions.
 * (c) 2015 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.5
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic GSAP Animation Plugin.
 *
 * requires: GSAP ~1.14
 * Powered by the Greensock Animation Platform (GSAP): http://www.greensock.com/js
 * Greensock License info at http://www.greensock.com/licensing/
 */
/**
 * This plugin is meant to be used in conjunction with the Greensock Animation Plattform.  
 * It offers an easy API to trigger Tweens or synchronize them to the scrollbar movement.
 *
 * Both the `lite` and the `max` versions of the GSAP library are supported.  
 * The most basic requirement is `TweenLite`.
 * 
 * To have access to this extension, please include `plugins/animation.gsap.js`.
 * @requires {@link http://greensock.com/gsap|GSAP ~1.14.x}
 * @mixin animation.GSAP
 */
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['ScrollMagic', 'TweenMax', 'TimelineMax'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		// Loads whole gsap package onto global scope.
		require('gsap');
		factory(require('scrollmagic'), TweenMax, TimelineMax);
	} else {
		// Browser globals
		factory(root.ScrollMagic || (root.jQuery && root.jQuery.ScrollMagic), root.TweenMax || root.TweenLite, root.TimelineMax || root.TimelineLite);
	}
}(this, function (ScrollMagic, Tween, Timeline) {
	"use strict";
	var NAMESPACE = "animation.gsap";

	var
	console = window.console || {},
		err = Function.prototype.bind.call(console.error || console.log ||
		function () {}, console);
	if (!ScrollMagic) {
		err("(" + NAMESPACE + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
	}
	if (!Tween) {
		err("(" + NAMESPACE + ") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs.");
	}

/*
	 * ----------------------------------------------------------------
	 * Extensions for Scene
	 * ----------------------------------------------------------------
	 */
	/**
	 * Every instance of ScrollMagic.Scene now accepts an additional option.  
	 * See {@link ScrollMagic.Scene} for a complete list of the standard options.
	 * @memberof! animation.GSAP#
	 * @method new ScrollMagic.Scene(options)
	 * @example
	 * var scene = new ScrollMagic.Scene({tweenChanges: true});
	 *
	 * @param {object} [options] - Options for the Scene. The options can be updated at any time.
	 * @param {boolean} [options.tweenChanges=false] - Tweens Animation to the progress target instead of setting it.  
	 Does not affect animations where duration is `0`.
	 */
	/**
	 * **Get** or **Set** the tweenChanges option value.  
	 * This only affects scenes with a duration. If `tweenChanges` is `true`, the progress update when scrolling will not be immediate, but instead the animation will smoothly animate to the target state.  
	 * For a better understanding, try enabling and disabling this option in the [Scene Manipulation Example](../examples/basic/scene_manipulation.html).
	 * @memberof! animation.GSAP#
	 * @method Scene.tweenChanges
	 * 
	 * @example
	 * // get the current tweenChanges option
	 * var tweenChanges = scene.tweenChanges();
	 *
	 * // set new tweenChanges option
	 * scene.tweenChanges(true);
	 *
	 * @fires {@link Scene.change}, when used as setter
	 * @param {boolean} [newTweenChanges] - The new tweenChanges setting of the scene.
	 * @returns {boolean} `get` -  Current tweenChanges option value.
	 * @returns {Scene} `set` -  Parent object for chaining.
	 */
	// add option (TODO: DOC (private for dev))
	ScrollMagic.Scene.addOption("tweenChanges", // name
	false, // default


	function (val) { // validation callback
		return !!val;
	});
	// extend scene
	ScrollMagic.Scene.extend(function () {
		var Scene = this,
			_tween;

		var log = function () {
			if (Scene._log) { // not available, when main source minified
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
				Scene._log.apply(this, arguments);
			}
		};

		// set listeners
		Scene.on("progress.plugin_gsap", function () {
			updateTweenProgress();
		});
		Scene.on("destroy.plugin_gsap", function (e) {
			Scene.removeTween(e.reset);
		});

		/**
		 * Update the tween progress to current position.
		 * @private
		 */
		var updateTweenProgress = function () {
			if (_tween) {
				var
				progress = Scene.progress(),
					state = Scene.state();
				if (_tween.repeat && _tween.repeat() === -1) {
					// infinite loop, so not in relation to progress
					if (state === 'DURING' && _tween.paused()) {
						_tween.play();
					} else if (state !== 'DURING' && !_tween.paused()) {
						_tween.pause();
					}
				} else if (progress != _tween.progress()) { // do we even need to update the progress?
					// no infinite loop - so should we just play or go to a specific point in time?
					if (Scene.duration() === 0) {
						// play the animation
						if (progress > 0) { // play from 0 to 1
							_tween.play();
						} else { // play from 1 to 0
							_tween.reverse();
						}
					} else {
						// go to a specific point in time
						if (Scene.tweenChanges() && _tween.tweenTo) {
							// go smooth
							_tween.tweenTo(progress * _tween.duration());
						} else {
							// just hard set it
							_tween.progress(progress).pause();
						}
					}
				}
			}
		};

		/**
		 * Add a tween to the scene.  
		 * If you want to add multiple tweens, add them into a GSAP Timeline object and supply it instead (see example below).  
		 * 
		 * If the scene has a duration, the tween's duration will be projected to the scroll distance of the scene, meaning its progress will be synced to scrollbar movement.  
		 * For a scene with a duration of `0`, the tween will be triggered when scrolling forward past the scene's trigger position and reversed, when scrolling back.  
		 * To gain better understanding, check out the [Simple Tweening example](../examples/basic/simple_tweening.html).
		 *
		 * Instead of supplying a tween this method can also be used as a shorthand for `TweenMax.to()` (see example below).
		 * @memberof! animation.GSAP#
		 *
		 * @example
		 * // add a single tween directly
		 * scene.setTween(TweenMax.to("obj"), 1, {x: 100});
		 *
		 * // add a single tween via variable
		 * var tween = TweenMax.to("obj"), 1, {x: 100};
		 * scene.setTween(tween);
		 *
		 * // add multiple tweens, wrapped in a timeline.
		 * var timeline = new TimelineMax();
		 * var tween1 = TweenMax.from("obj1", 1, {x: 100});
		 * var tween2 = TweenMax.to("obj2", 1, {y: 100});
		 * timeline
		 *		.add(tween1)
		 *		.add(tween2);
		 * scene.addTween(timeline);
		 *
		 * // short hand to add a TweenMax.to() tween
		 * scene.setTween("obj3", 0.5, {y: 100});
		 *
		 * // short hand to add a TweenMax.to() tween for 1 second
		 * // this is useful, when the scene has a duration and the tween duration isn't important anyway
		 * scene.setTween("obj3", {y: 100});
		 *
		 * @param {(object|string)} TweenObject - A TweenMax, TweenLite, TimelineMax or TimelineLite object that should be animated in the scene. Can also be a Dom Element or Selector, when using direct tween definition (see examples).
		 * @param {(number|object)} duration - A duration for the tween, or tween parameters. If an object containing parameters are supplied, a default duration of 1 will be used.
		 * @param {object} params - The parameters for the tween
		 * @returns {Scene} Parent object for chaining.
		 */
		Scene.setTween = function (TweenObject, duration, params) {
			var newTween;
			if (arguments.length > 1) {
				if (arguments.length < 3) {
					params = duration;
					duration = 1;
				}
				TweenObject = Tween.to(TweenObject, duration, params);
			}
			try {
				// wrap Tween into a Timeline Object if available to include delay and repeats in the duration and standardize methods.
				if (Timeline) {
					newTween = new Timeline({
						smoothChildTiming: true
					}).add(TweenObject);
				} else {
					newTween = TweenObject;
				}
				newTween.pause();
			} catch (e) {
				log(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject");
				return Scene;
			}
			if (_tween) { // kill old tween?
				Scene.removeTween();
			}
			_tween = newTween;

			// some properties need to be transferred it to the wrapper, otherwise they would get lost.
			if (TweenObject.repeat && TweenObject.repeat() === -1) { // TweenMax or TimelineMax Object?
				_tween.repeat(-1);
				_tween.yoyo(TweenObject.yoyo());
			}
			// Some tween validations and debugging helpers
			if (Scene.tweenChanges() && !_tween.tweenTo) {
				log(2, "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic.");
			}

			// check if there are position tweens defined for the trigger and warn about it :)
			if (_tween && Scene.controller() && Scene.triggerElement() && Scene.loglevel() >= 2) { // controller is needed to know scroll direction.
				var
				triggerTweens = Tween.getTweensOf(Scene.triggerElement()),
					vertical = Scene.controller().info("vertical");
				triggerTweens.forEach(function (value, index) {
					var
					tweenvars = value.vars.css || value.vars,
						condition = vertical ? (tweenvars.top !== undefined || tweenvars.bottom !== undefined) : (tweenvars.left !== undefined || tweenvars.right !== undefined);
					if (condition) {
						log(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!");
						return false;
					}
				});
			}

			// warn about tween overwrites, when an element is tweened multiple times
			if (parseFloat(TweenLite.version) >= 1.14) { // onOverwrite only present since GSAP v1.14.0
				var
				list = _tween.getChildren ? _tween.getChildren(true, true, false) : [_tween],
					// get all nested tween objects
					newCallback = function () {
						log(2, "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another");
					};
				for (var i = 0, thisTween, oldCallback; i < list.length; i++) { /*jshint loopfunc: true */
					thisTween = list[i];
					if (oldCallback !== newCallback) { // if tweens is added more than once
						oldCallback = thisTween.vars.onOverwrite;
						thisTween.vars.onOverwrite = function () {
							if (oldCallback) {
								oldCallback.apply(this, arguments);
							}
							newCallback.apply(this, arguments);
						};
					}
				}
			}
			log(3, "added tween");

			updateTweenProgress();
			return Scene;
		};

		/**
		 * Remove the tween from the scene.  
		 * This will terminate the control of the Scene over the tween.
		 *
		 * Using the reset option you can decide if the tween should remain in the current state or be rewound to set the target elements back to the state they were in before the tween was added to the scene.
		 * @memberof! animation.GSAP#
		 *
		 * @example
		 * // remove the tween from the scene without resetting it
		 * scene.removeTween();
		 *
		 * // remove the tween from the scene and reset it to initial position
		 * scene.removeTween(true);
		 *
		 * @param {boolean} [reset=false] - If `true` the tween will be reset to its initial values.
		 * @returns {Scene} Parent object for chaining.
		 */
		Scene.removeTween = function (reset) {
			if (_tween) {
				if (reset) {
					_tween.progress(0).pause();
				}
				_tween.kill();
				_tween = undefined;
				log(3, "removed tween (reset: " + (reset ? "true" : "false") + ")");
			}
			return Scene;
		};

	});
}));
/*!
 * VERSION: beta 1.9.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},p=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},f=u("Back",p("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),p("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),p("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),p=u,f=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--p>-1;)i=f?Math.random():1/u*p,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),f?s+=Math.random()*r-.5*r:p%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),p=u;--p>-1;)a=l[p],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),f},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
/*!
 * ScrollMagic v2.0.5 (2015-04-29)
 * The javascript library for magical scroll interactions.
 * (c) 2015 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.5
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic Velocity Animation Plugin.
 *
 * requires: velocity ~1.2
 * Powered by VelocityJS: http://VelocityJS.org
 * Velocity is published under MIT license.
 */
/**
 * This plugin is meant to be used in conjunction with the Velocity animation framework.  
 * It offers an easy API to __trigger__ Velocity animations.
 *
 * With the current version of Velocity scrollbound animations (scenes with duration) are not supported.  
 * This feature will be added as soon as Velocity provides the appropriate API.
 * 
 * To have access to this extension, please include `plugins/animation.velocity.js`.
 * @requires {@link http://julian.com/research/velocity/|Velocity ~1.2.0}
 * @mixin animation.Velocity
 */
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['ScrollMagic', 'velocity'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('scrollmagic'), require('velocity'));
	} else {
		// Browser globals
		factory(root.ScrollMagic || (root.jQuery && root.jQuery.ScrollMagic), root.Velocity || (root.jQuery && root.jQuery.Velocity));
	}
}(this, function (ScrollMagic, velocity) {
	"use strict";
	var NAMESPACE = "animation.velocity";

	var
	console = window.console || {},
		err = Function.prototype.bind.call(console.error || console.log ||
		function () {}, console);
	if (!ScrollMagic) {
		err("(" + NAMESPACE + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
	}
	if (!velocity) {
		err("(" + NAMESPACE + ") -> ERROR: Velocity could not be found. Please make sure it's loaded before ScrollMagic or use an asynchronous loader like requirejs.");
	}

	var autoindex = 0;

	ScrollMagic.Scene.extend(function () {
		var
		Scene = this,
			_util = ScrollMagic._util,
			_currentProgress = 0,
			_elems, _properties, _options, _dataID; // used to identify element data related to this scene, will be defined everytime a new velocity animation is added
		var log = function () {
			if (Scene._log) { // not available, when main source minified
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
				Scene._log.apply(this, arguments);
			}
		};

		// set listeners
		Scene.on("progress.plugin_velocity", function () {
			updateAnimationProgress();
		});
		Scene.on("destroy.plugin_velocity", function (e) {
			Scene.off("*.plugin_velocity");
			Scene.removeVelocity(e.reset);
		});

		var animate = function (elem, properties, options) {
			if (_util.type.Array(elem)) {
				elem.forEach(function (elem) {
					animate(elem, properties, options);
				});
			} else {
				// set reverse values
				if (!velocity.Utilities.data(elem, _dataID)) {
					velocity.Utilities.data(elem, _dataID, {
						reverseProps: _util.css(elem, Object.keys(_properties))
					});
				}
				// animate
				velocity(elem, properties, options);
				if (options.queue !== undefined) {
					velocity.Utilities.dequeue(elem, options.queue);
				}
			}
		};
		var reverse = function (elem, options) {
			if (_util.type.Array(elem)) {
				elem.forEach(function (elem) {
					reverse(elem, options);
				});
			} else {
				var data = velocity.Utilities.data(elem, _dataID);
				if (data && data.reverseProps) {
					velocity(elem, data.reverseProps, options);
					if (options.queue !== undefined) {
						velocity.Utilities.dequeue(elem, options.queue);
					}
				}
			}
		};

		/**
		 * Update the tween progress to current position.
		 * @private
		 */
		var updateAnimationProgress = function () {
			if (_elems) {
				var progress = Scene.progress();
				if (progress != _currentProgress) { // do we even need to update the progress?
					if (Scene.duration() === 0) {
						// play the animation
						if (progress > 0) { // play forward
							animate(_elems, _properties, _options);
						} else { // play reverse
							reverse(_elems, _options);
							// velocity(_elems, _propertiesReverse, _options);
							// velocity("reverse");
						}
					} else {
						// TODO: Scrollbound animations not supported yet...
					}
					_currentProgress = progress;
				}
			}
		};

		/**
		 * Add a Velocity animation to the scene.  
		 * The method accepts the same parameters as Velocity, with the first parameter being the target element.
		 *
		 * To gain better understanding, check out the [Velocity example](../examples/basic/simple_velocity.html).
		 * @memberof! animation.Velocity#
		 *
		 * @example
		 * // trigger a Velocity animation
		 * scene.setVelocity("#myElement", {opacity: 0.5}, {duration: 1000, easing: "linear"});
		 *
		 * @param {(object|string)} elems - One or more Dom Elements or a Selector that should be used as the target of the animation.
		 * @param {object} properties - The CSS properties that should be animated.
		 * @param {object} options - Options for the animation, like duration or easing.
		 * @returns {Scene} Parent object for chaining.
		 */
		Scene.setVelocity = function (elems, properties, options) {
			if (_elems) { // kill old ani?
				Scene.removeVelocity();
			}

			_elems = _util.get.elements(elems);
			_properties = properties || {};
			_options = options || {};
			_dataID = "ScrollMagic." + NAMESPACE + "[" + (autoindex++) + "]";

			if (_options.queue !== undefined) {
				// we'll use the queue to identify the animation. When defined it will always stop the previously running one.
				// if undefined the animation will always fully run, as is expected.
				// defining anything other than 'false' as the que doesn't make much sense, because ScrollMagic takes control over the trigger.
				// thus it is also overwritten.
				_options.queue = _dataID + "_queue";
			}

			var checkDuration = function () {
				if (Scene.duration() !== 0) {
					log(1, "ERROR: The Velocity animation plugin does not support scrollbound animations (scenes with duration) yet.");
				}
			};
			Scene.on("change.plugin_velocity", function (e) {
				if (e.what == 'duration') {
					checkDuration();
				}
			});
			checkDuration();
			log(3, "added animation");

			updateAnimationProgress();
			return Scene;
		};
		/**
		 * Remove the animation from the scene.  
		 * This will stop the scene from triggering the animation.
		 *
		 * Using the reset option you can decide if the animation should remain in the current state or be rewound to set the target elements back to the state they were in before the animation was added to the scene.
		 * @memberof! animation.Velocity#
		 *
		 * @example
		 * // remove the animation from the scene without resetting it
		 * scene.removeVelocity();
		 *
		 * // remove the animation from the scene and reset the elements to initial state
		 * scene.removeVelocity(true);
		 *
		 * @param {boolean} [reset=false] - If `true` the animation will rewound.
		 * @returns {Scene} Parent object for chaining.
		 */
		Scene.removeVelocity = function (reset) {
			if (_elems) {
				// stop running animations
				if (_options.queue !== undefined) {
					velocity(_elems, "stop", _options.queue);
				}
				if (reset) {
					reverse(_elems, {
						duration: 0
					});
				}

				_elems.forEach(function (elem) {
					velocity.Utilities.removeData(elem, _dataID);
				});
				_elems = _properties = _options = _dataID = undefined;
			}
			return Scene;
		};
	});
}));
/*!
 * ScrollMagic v2.0.5 (2015-04-29)
 * The javascript library for magical scroll interactions.
 * (c) 2015 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.5
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file Debug Extension for ScrollMagic.
 */
/**
 * This plugin was formerly known as the ScrollMagic debug extension.
 *
 * It enables you to add visual indicators to your page, to be able to see exactly when a scene is triggered.
 *
 * To have access to this extension, please include `plugins/debug.addIndicators.js`.
 * @mixin debug.addIndicators
 */
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['ScrollMagic'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('scrollmagic'));
	} else {
		// no browser global export needed, just execute
		factory(root.ScrollMagic || (root.jQuery && root.jQuery.ScrollMagic));
	}
}(this, function (ScrollMagic) {
	"use strict";
	var NAMESPACE = "debug.addIndicators";

	var
	console = window.console || {},
		err = Function.prototype.bind.call(console.error || console.log ||
		function () {}, console);
	if (!ScrollMagic) {
		err("(" + NAMESPACE + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
	}

	// plugin settings
	var
	FONT_SIZE = "0.85em",
		ZINDEX = "9999",
		EDGE_OFFSET = 15; // minimum edge distance, added to indentation

	// overall vars
	var
	_util = ScrollMagic._util,
		_autoindex = 0;



	ScrollMagic.Scene.extend(function () {
		var
		Scene = this,
			_indicator;

		var log = function () {
			if (Scene._log) { // not available, when main source minified
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
				Scene._log.apply(this, arguments);
			}
		};

		/**
		 * Add visual indicators for a ScrollMagic.Scene.  
		 * @memberof! debug.addIndicators#
		 *
		 * @example
		 * // add basic indicators
		 * scene.addIndicators()
		 *
		 * // passing options
		 * scene.addIndicators({name: "pin scene", colorEnd: "#FFFFFF"});
		 *
		 * @param {object} [options] - An object containing one or more options for the indicators.
		 * @param {(string|object)} [options.parent=undefined] - A selector, DOM Object or a jQuery object that the indicators should be added to.  
		 If undefined, the controller's container will be used.
		 * @param {number} [options.name=""] - This string will be displayed at the start and end indicators of the scene for identification purposes. If no name is supplied an automatic index will be used.
		 * @param {number} [options.indent=0] - Additional position offset for the indicators (useful, when having multiple scenes starting at the same position).
		 * @param {string} [options.colorStart=green] - CSS color definition for the start indicator.
		 * @param {string} [options.colorEnd=red] - CSS color definition for the end indicator.
		 * @param {string} [options.colorTrigger=blue] - CSS color definition for the trigger indicator.
		 */
		Scene.addIndicators = function (options) {
			if (!_indicator) {
				var
				DEFAULT_OPTIONS = {
					name: "",
					indent: 0,
					parent: undefined,
					colorStart: "green",
					colorEnd: "red",
					colorTrigger: "blue",
				};

				options = _util.extend({}, DEFAULT_OPTIONS, options);

				_autoindex++;
				_indicator = new Indicator(Scene, options);

				Scene.on("add.plugin_addIndicators", _indicator.add);
				Scene.on("remove.plugin_addIndicators", _indicator.remove);
				Scene.on("destroy.plugin_addIndicators", Scene.removeIndicators);

				// it the scene already has a controller we can start right away.
				if (Scene.controller()) {
					_indicator.add();
				}
			}
			return Scene;
		};

		/**
		 * Removes visual indicators from a ScrollMagic.Scene.
		 * @memberof! debug.addIndicators#
		 *
		 * @example
		 * // remove previously added indicators
		 * scene.removeIndicators()
		 *
		 */
		Scene.removeIndicators = function () {
			if (_indicator) {
				_indicator.remove();
				this.off("*.plugin_addIndicators");
				_indicator = undefined;
			}
			return Scene;
		};

	});


/*
	 * ----------------------------------------------------------------
	 * Extension for controller to store and update related indicators
	 * ----------------------------------------------------------------
	 */
	// add option to globally auto-add indicators to scenes
	/**
	 * Every ScrollMagic.Controller instance now accepts an additional option.  
	 * See {@link ScrollMagic.Controller} for a complete list of the standard options.
	 * @memberof! debug.addIndicators#
	 * @method new ScrollMagic.Controller(options)
	 * @example
	 * // make a controller and add indicators to all scenes attached
	 * var controller = new ScrollMagic.Controller({addIndicators: true});
	 * // this scene will automatically have indicators added to it
	 * new ScrollMagic.Scene()
	 *                .addTo(controller);
	 *
	 * @param {object} [options] - Options for the Controller.
	 * @param {boolean} [options.addIndicators=false] - If set to `true` every scene that is added to the controller will automatically get indicators added to it.
	 */
	ScrollMagic.Controller.addOption("addIndicators", false);
	// extend Controller
	ScrollMagic.Controller.extend(function () {
		var
		Controller = this,
			_info = Controller.info(),
			_container = _info.container,
			_isDocument = _info.isDocument,
			_vertical = _info.vertical,
			_indicators = { // container for all indicators and methods
				groups: []
			};

		var log = function () {
			if (Controller._log) { // not available, when main source minified
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
				Controller._log.apply(this, arguments);
			}
		};
		if (Controller._indicators) {
			log(2, "WARNING: Scene already has a property '_indicators', which will be overwritten by plugin.");
		}

		// add indicators container
		this._indicators = _indicators;
/*
			needed updates:
			+++++++++++++++
			start/end position on scene shift (handled in Indicator class)
			trigger parameters on triggerHook value change (handled in Indicator class)
			bounds position on container scroll or resize (to keep alignment to bottom/right)
			trigger position on container resize, window resize (if container isn't document) and window scroll (if container isn't document)
		*/

		// event handler for when associated bounds markers need to be repositioned
		var handleBoundsPositionChange = function () {
			_indicators.updateBoundsPositions();
		};

		// event handler for when associated trigger groups need to be repositioned
		var handleTriggerPositionChange = function () {
			_indicators.updateTriggerGroupPositions();
		};

		_container.addEventListener("resize", handleTriggerPositionChange);
		if (!_isDocument) {
			window.addEventListener("resize", handleTriggerPositionChange);
			window.addEventListener("scroll", handleTriggerPositionChange);
		}
		// update all related bounds containers
		_container.addEventListener("resize", handleBoundsPositionChange);
		_container.addEventListener("scroll", handleBoundsPositionChange);


		// updates the position of the bounds container to aligned to the right for vertical containers and to the bottom for horizontal
		this._indicators.updateBoundsPositions = function (specificIndicator) {
			var // constant for all bounds
			groups = specificIndicator ? [_util.extend({}, specificIndicator.triggerGroup, {
				members: [specificIndicator]
			})] : // create a group with only one element
			_indicators.groups,
				// use all
				g = groups.length,
				css = {},
				paramPos = _vertical ? "left" : "top",
				paramDimension = _vertical ? "width" : "height",
				edge = _vertical ? _util.get.scrollLeft(_container) + _util.get.width(_container) - EDGE_OFFSET : _util.get.scrollTop(_container) + _util.get.height(_container) - EDGE_OFFSET,
				b, triggerSize, group;
			while (g--) { // group loop
				group = groups[g];
				b = group.members.length;
				triggerSize = _util.get[paramDimension](group.element.firstChild);
				while (b--) { // indicators loop
					css[paramPos] = edge - triggerSize;
					_util.css(group.members[b].bounds, css);
				}
			}
		};

		// updates the positions of all trigger groups attached to a controller or a specific one, if provided
		this._indicators.updateTriggerGroupPositions = function (specificGroup) {
			var // constant vars
			groups = specificGroup ? [specificGroup] : _indicators.groups,
				i = groups.length,
				container = _isDocument ? document.body : _container,
				containerOffset = _isDocument ? {
					top: 0,
					left: 0
				} : _util.get.offset(container, true),
				edge = _vertical ? _util.get.width(_container) - EDGE_OFFSET : _util.get.height(_container) - EDGE_OFFSET,
				paramDimension = _vertical ? "width" : "height",
				paramTransform = _vertical ? "Y" : "X";
			var // changing vars
			group, elem, pos, elemSize, transform;
			while (i--) {
				group = groups[i];
				elem = group.element;
				pos = group.triggerHook * Controller.info("size");
				elemSize = _util.get[paramDimension](elem.firstChild.firstChild);
				transform = pos > elemSize ? "translate" + paramTransform + "(-100%)" : "";

				_util.css(elem, {
					top: containerOffset.top + (_vertical ? pos : edge - group.members[0].options.indent),
					left: containerOffset.left + (_vertical ? edge - group.members[0].options.indent : pos)
				});
				_util.css(elem.firstChild.firstChild, {
					"-ms-transform": transform,
					"-webkit-transform": transform,
					"transform": transform
				});
			}
		};

		// updates the label for the group to contain the name, if it only has one member
		this._indicators.updateTriggerGroupLabel = function (group) {
			var
			text = "trigger" + (group.members.length > 1 ? "" : " " + group.members[0].options.name),
				elem = group.element.firstChild.firstChild,
				doUpdate = elem.textContent !== text;
			if (doUpdate) {
				elem.textContent = text;
				if (_vertical) { // bounds position is dependent on text length, so update
					_indicators.updateBoundsPositions();
				}
			}
		};

		// add indicators if global option is set
		this.addScene = function (newScene) {

			if (this._options.addIndicators && newScene instanceof ScrollMagic.Scene && newScene.controller() === Controller) {
				newScene.addIndicators();
			}
			// call original destroy method
			this.$super.addScene.apply(this, arguments);
		};

		// remove all previously set listeners on destroy
		this.destroy = function () {
			_container.removeEventListener("resize", handleTriggerPositionChange);
			if (!_isDocument) {
				window.removeEventListener("resize", handleTriggerPositionChange);
				window.removeEventListener("scroll", handleTriggerPositionChange);
			}
			_container.removeEventListener("resize", handleBoundsPositionChange);
			_container.removeEventListener("scroll", handleBoundsPositionChange);
			// call original destroy method
			this.$super.destroy.apply(this, arguments);
		};
		return Controller;

	});

/*
	 * ----------------------------------------------------------------
	 * Internal class for the construction of Indicators
	 * ----------------------------------------------------------------
	 */
	var Indicator = function (Scene, options) {
		var
		Indicator = this,
			_elemBounds = TPL.bounds(),
			_elemStart = TPL.start(options.colorStart),
			_elemEnd = TPL.end(options.colorEnd),
			_boundsContainer = options.parent && _util.get.elements(options.parent)[0],
			_vertical, _ctrl;

		var log = function () {
			if (Scene._log) { // not available, when main source minified
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
				Scene._log.apply(this, arguments);
			}
		};

		options.name = options.name || _autoindex;

		// prepare bounds elements
		_elemStart.firstChild.textContent += " " + options.name;
		_elemEnd.textContent += " " + options.name;
		_elemBounds.appendChild(_elemStart);
		_elemBounds.appendChild(_elemEnd);

		// set public variables
		Indicator.options = options;
		Indicator.bounds = _elemBounds;
		// will be set later
		Indicator.triggerGroup = undefined;

		// add indicators to DOM
		this.add = function () {
			_ctrl = Scene.controller();
			_vertical = _ctrl.info("vertical");

			var isDocument = _ctrl.info("isDocument");

			if (!_boundsContainer) {
				// no parent supplied or doesnt exist
				_boundsContainer = isDocument ? document.body : _ctrl.info("container"); // check if window/document (then use body)
			}
			if (!isDocument && _util.css(_boundsContainer, "position") === 'static') {
				// position mode needed for correct positioning of indicators
				_util.css(_boundsContainer, {
					position: "relative"
				});
			}

			// add listeners for updates
			Scene.on("change.plugin_addIndicators", handleTriggerParamsChange);
			Scene.on("shift.plugin_addIndicators", handleBoundsParamsChange);

			// updates trigger & bounds (will add elements if needed)
			updateTriggerGroup();
			updateBounds();

			setTimeout(function () { // do after all execution is finished otherwise sometimes size calculations are off
				_ctrl._indicators.updateBoundsPositions(Indicator);
			}, 0);

			log(3, "added indicators");
		};

		// remove indicators from DOM
		this.remove = function () {
			if (Indicator.triggerGroup) { // if not set there's nothing to remove
				Scene.off("change.plugin_addIndicators", handleTriggerParamsChange);
				Scene.off("shift.plugin_addIndicators", handleBoundsParamsChange);

				if (Indicator.triggerGroup.members.length > 1) {
					// just remove from memberlist of old group
					var group = Indicator.triggerGroup;
					group.members.splice(group.members.indexOf(Indicator), 1);
					_ctrl._indicators.updateTriggerGroupLabel(group);
					_ctrl._indicators.updateTriggerGroupPositions(group);
					Indicator.triggerGroup = undefined;
				} else {
					// remove complete group
					removeTriggerGroup();
				}
				removeBounds();

				log(3, "removed indicators");
			}
		};

/*
		 * ----------------------------------------------------------------
		 * internal Event Handlers
		 * ----------------------------------------------------------------
		 */

		// event handler for when bounds params change
		var handleBoundsParamsChange = function () {
			updateBounds();
		};

		// event handler for when trigger params change
		var handleTriggerParamsChange = function (e) {
			if (e.what === "triggerHook") {
				updateTriggerGroup();
			}
		};

/*
		 * ----------------------------------------------------------------
		 * Bounds (start / stop) management
		 * ----------------------------------------------------------------
		 */

		// adds an new bounds elements to the array and to the DOM
		var addBounds = function () {
			var v = _ctrl.info("vertical");
			// apply stuff we didn't know before...
			_util.css(_elemStart.firstChild, {
				"border-bottom-width": v ? 1 : 0,
				"border-right-width": v ? 0 : 1,
				"bottom": v ? -1 : options.indent,
				"right": v ? options.indent : -1,
				"padding": v ? "0 8px" : "2px 4px",
			});
			_util.css(_elemEnd, {
				"border-top-width": v ? 1 : 0,
				"border-left-width": v ? 0 : 1,
				"top": v ? "100%" : "",
				"right": v ? options.indent : "",
				"bottom": v ? "" : options.indent,
				"left": v ? "" : "100%",
				"padding": v ? "0 8px" : "2px 4px"
			});
			// append
			_boundsContainer.appendChild(_elemBounds);
		};

		// remove bounds from list and DOM
		var removeBounds = function () {
			_elemBounds.parentNode.removeChild(_elemBounds);
		};

		// update the start and end positions of the scene
		var updateBounds = function () {
			if (_elemBounds.parentNode !== _boundsContainer) {
				addBounds(); // Add Bounds elements (start/end)
			}
			var css = {};
			css[_vertical ? "top" : "left"] = Scene.triggerPosition();
			css[_vertical ? "height" : "width"] = Scene.duration();
			_util.css(_elemBounds, css);
			_util.css(_elemEnd, {
				display: Scene.duration() > 0 ? "" : "none"
			});
		};

/*
		 * ----------------------------------------------------------------
		 * trigger and trigger group management
		 * ----------------------------------------------------------------
		 */

		// adds an new trigger group to the array and to the DOM
		var addTriggerGroup = function () {
			var triggerElem = TPL.trigger(options.colorTrigger); // new trigger element
			var css = {};
			css[_vertical ? "right" : "bottom"] = 0;
			css[_vertical ? "border-top-width" : "border-left-width"] = 1;
			_util.css(triggerElem.firstChild, css);
			_util.css(triggerElem.firstChild.firstChild, {
				padding: _vertical ? "0 8px 3px 8px" : "3px 4px"
			});
			document.body.appendChild(triggerElem); // directly add to body
			var newGroup = {
				triggerHook: Scene.triggerHook(),
				element: triggerElem,
				members: [Indicator]
			};
			_ctrl._indicators.groups.push(newGroup);
			Indicator.triggerGroup = newGroup;
			// update right away
			_ctrl._indicators.updateTriggerGroupLabel(newGroup);
			_ctrl._indicators.updateTriggerGroupPositions(newGroup);
		};

		var removeTriggerGroup = function () {
			_ctrl._indicators.groups.splice(_ctrl._indicators.groups.indexOf(Indicator.triggerGroup), 1);
			Indicator.triggerGroup.element.parentNode.removeChild(Indicator.triggerGroup.element);
			Indicator.triggerGroup = undefined;
		};

		// updates the trigger group -> either join existing or add new one
/*	
		 * Logic:
		 * 1 if a trigger group exist, check if it's in sync with Scene settings – if so, nothing else needs to happen
		 * 2 try to find an existing one that matches Scene parameters
		 * 	 2.1 If a match is found check if already assigned to an existing group
		 *			 If so:
		 *       A: it was the last member of existing group -> kill whole group
		 *       B: the existing group has other members -> just remove from member list
		 *	 2.2 Assign to matching group
		 * 3 if no new match could be found, check if assigned to existing group
		 *   A: yes, and it's the only member -> just update parameters and positions and keep using this group
		 *   B: yes but there are other members -> remove from member list and create a new one
		 *   C: no, so create a new one
		 */
		var updateTriggerGroup = function () {
			var
			triggerHook = Scene.triggerHook(),
				closeEnough = 0.0001;

			// Have a group, check if it still matches
			if (Indicator.triggerGroup) {
				if (Math.abs(Indicator.triggerGroup.triggerHook - triggerHook) < closeEnough) {
					// _util.log(0, "trigger", options.name, "->", "no need to change, still in sync");
					return; // all good
				}
			}
			// Don't have a group, check if a matching one exists
			// _util.log(0, "trigger", options.name, "->", "out of sync!");
			var
			groups = _ctrl._indicators.groups,
				group, i = groups.length;
			while (i--) {
				group = groups[i];
				if (Math.abs(group.triggerHook - triggerHook) < closeEnough) {
					// found a match!
					// _util.log(0, "trigger", options.name, "->", "found match");
					if (Indicator.triggerGroup) { // do I have an old group that is out of sync?
						if (Indicator.triggerGroup.members.length === 1) { // is it the only remaining group?
							// _util.log(0, "trigger", options.name, "->", "kill");
							// was the last member, remove the whole group
							removeTriggerGroup();
						} else {
							Indicator.triggerGroup.members.splice(Indicator.triggerGroup.members.indexOf(Indicator), 1); // just remove from memberlist of old group
							_ctrl._indicators.updateTriggerGroupLabel(Indicator.triggerGroup);
							_ctrl._indicators.updateTriggerGroupPositions(Indicator.triggerGroup);
							// _util.log(0, "trigger", options.name, "->", "removing from previous member list");
						}
					}
					// join new group
					group.members.push(Indicator);
					Indicator.triggerGroup = group;
					_ctrl._indicators.updateTriggerGroupLabel(group);
					return;
				}
			}

			// at this point I am obviously out of sync and don't match any other group
			if (Indicator.triggerGroup) {
				if (Indicator.triggerGroup.members.length === 1) {
					// _util.log(0, "trigger", options.name, "->", "updating existing");
					// out of sync but i'm the only member => just change and update
					Indicator.triggerGroup.triggerHook = triggerHook;
					_ctrl._indicators.updateTriggerGroupPositions(Indicator.triggerGroup);
					return;
				} else {
					// _util.log(0, "trigger", options.name, "->", "removing from previous member list");
					Indicator.triggerGroup.members.splice(Indicator.triggerGroup.members.indexOf(Indicator), 1); // just remove from memberlist of old group
					_ctrl._indicators.updateTriggerGroupLabel(Indicator.triggerGroup);
					_ctrl._indicators.updateTriggerGroupPositions(Indicator.triggerGroup);
					Indicator.triggerGroup = undefined; // need a brand new group...
				}
			}
			// _util.log(0, "trigger", options.name, "->", "add a new one");
			// did not find any match, make new trigger group
			addTriggerGroup();
		};
	};

/*
	 * ----------------------------------------------------------------
	 * Templates for the indicators
	 * ----------------------------------------------------------------
	 */
	var TPL = {
		start: function (color) {
			// inner element (for bottom offset -1, while keeping top position 0)
			var inner = document.createElement("div");
			inner.textContent = "start";
			_util.css(inner, {
				position: "absolute",
				overflow: "visible",
				"border-width": 0,
				"border-style": "solid",
				color: color,
				"border-color": color
			});
			var e = document.createElement('div');
			// wrapper
			_util.css(e, {
				position: "absolute",
				overflow: "visible",
				width: 0,
				height: 0
			});
			e.appendChild(inner);
			return e;
		},
		end: function (color) {
			var e = document.createElement('div');
			e.textContent = "end";
			_util.css(e, {
				position: "absolute",
				overflow: "visible",
				"border-width": 0,
				"border-style": "solid",
				color: color,
				"border-color": color
			});
			return e;
		},
		bounds: function () {
			var e = document.createElement('div');
			_util.css(e, {
				position: "absolute",
				overflow: "visible",
				"white-space": "nowrap",
				"pointer-events": "none",
				"font-size": FONT_SIZE
			});
			e.style.zIndex = ZINDEX;
			return e;
		},
		trigger: function (color) {
			// inner to be above or below line but keep position
			var inner = document.createElement('div');
			inner.textContent = "trigger";
			_util.css(inner, {
				position: "relative",
			});
			// inner wrapper for right: 0 and main element has no size
			var w = document.createElement('div');
			_util.css(w, {
				position: "absolute",
				overflow: "visible",
				"border-width": 0,
				"border-style": "solid",
				color: color,
				"border-color": color
			});
			w.appendChild(inner);
			// wrapper
			var e = document.createElement('div');
			_util.css(e, {
				position: "fixed",
				overflow: "visible",
				"white-space": "nowrap",
				"pointer-events": "none",
				"font-size": FONT_SIZE
			});
			e.style.zIndex = ZINDEX;
			e.appendChild(w);
			return e;
		},
	};

}));
/*!
 * ScrollMagic v2.0.5 (2015-04-29)
 * The javascript library for magical scroll interactions.
 * (c) 2015 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.5
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic jQuery plugin.
 *
 * requires: jQuery ~1.11 or ~2.1
 */
/**
 * This plugin is meant to be used in conjunction with jQuery.  
 * It enables ScrollMagic to make use of jQuery's advanced selector engine (sizzle) for all elements supplied to ScrollMagic objects, like scroll containers or trigger elements.  
 * ScrollMagic also accepts jQuery elements for all methods that expect references to DOM elements. Please note, that in most cases the first element of the matched set will be used.
 * 
 * Additionally it provides the ScrollMagic object within the jQuery namespace, so it can be accessed using `$.ScrollMagic`.
 *
 * In contrast to most other plugins it does not offer new API additions for ScrollMagic.
 *
 * To have access to this extension, please include `plugins/jquery.ScrollMagic.js`.
 * @example
 * // create a new scene making use of jQuery's advanced selector engine
 * var scene = new $.ScrollMagic.Scene({
 *   triggerElement: "#parent div.trigger[attr='thisone']:not(.notthisone)"
 * });
 * @requires {@link http://jquery.com/|jQuery ~1.11 or ~2.1}
 * @mixin framework.jQuery
 */
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['ScrollMagic', 'jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('scrollmagic'), require('jquery'));
	} else {
		// Browser global
		factory(root.ScrollMagic, root.jQuery);
	}
}(this, function (ScrollMagic, $) {
	"use strict";
	var NAMESPACE = "jquery.ScrollMagic";

	var
	console = window.console || {},
		err = Function.prototype.bind.call(console.error || console.log ||
		function () {}, console);
	if (!ScrollMagic) {
		err("(" + NAMESPACE + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
	}
	if (!$) {
		err("(" + NAMESPACE + ") -> ERROR: jQuery could not be found. Please make sure it's loaded before ScrollMagic or use an asynchronous loader like requirejs.");
	}

	ScrollMagic._util.get.elements = function (selector) {
		return $(selector).toArray();
	};
	ScrollMagic._util.addClass = function (elem, classname) {
		$(elem).addClass(classname);
	};
	ScrollMagic._util.removeClass = function (elem, classname) {
		$(elem).removeClass(classname);
	};
	$.ScrollMagic = ScrollMagic;
}));
$(document).ready(function() {
  var lastindex = 2;
  var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: 'onEnter'}});

  // -------------------------------------
  //   landing-sec0
  // -------------------------------------

  new ScrollMagic.Scene({triggerElement: '.landing-sec0', duration: '200%'})
          .setTween('.landing-sec0 > .cards-wrapper > div:not(.vital-logo,.vital-logo-font)', {y: '100%', ease: Linear.easeNone})
          .addTo(controller);

  //這套件會自動改變本來排好的卡片位置所以要依照比例把高度推回去 
  //依照他的特性 公式是 margin-top:(duration: '200%' / y: '100%')*-1
  $('.landing-sec0 > .cards-wrapper  > div').not('.vital-logo,.vital-logo-font').each(function(){
    $(this).css ( 'margin-top',$(this).height()/-2+'px');
  });


  new ScrollMagic.Scene({triggerElement: '.landing-sec0', duration: '200%'})
          .setTween('.bottom-layer  > div ', {y: '25%', ease: Linear.easeNone})
          .addTo(controller);
  //這套件會自動改變本來排好的卡片位置所以要依照比例把高度推回去 
  //依照他的特性 公式是 margin-top:(duration: '200%' / y: '25%')*-1
  $('.bottom-layer  > div ' ).each(function(){
    $(this).css ( 'margin-top',$(this).height()/-20+'px');
  });


  new ScrollMagic.Scene({triggerElement: '.landing-sec0', duration: '200%'})
          .setTween('.vital-logo', {y: '750%', ease: Linear.easeNone})
          .addTo(controller);

  new ScrollMagic.Scene({triggerElement: '.landing-sec0', duration: '200%'})
          .setTween('.vital-logo-font', {y:'750%',ease: Linear.easeNone})
          .addTo(controller);
  //這套件會自動改變本來排好的卡片位置所以要依照比例把高度推回去 
  //依照他的特性 公式是 margin-top:(duration: '200%' / y: '750%')*-1
  $('.vital-logo-font').css ( 'margin-top',$('.vital-logo-font').height()/-0.267+'px');

  //new ScrollMagic.Scene({triggerElement: '.vital-calendar-part2'})
          //.setTween('.vital-calendar-part1', {y: '-200%',ease: Linear.easeNone})
          //.addTo(controller);


  //--------------------------------------------------------------------------------------sec2
  //$('.vital-calendar-part1').css ( 'margin-top',$('.vital-calendar-part1').height()/1+'px');

  //new ScrollMagic.Scene({triggerElement: '.vital-calendar-part2', duration: '200%'})
          //.setTween('.vital-calendar-part3', {y: '-100%',ease: Linear.easeNone})
          //.addTo(controller);

  //$('.vital-calendar-part3').css ( 'margin-top',$('.vital-calendar-part3').height()/2+'px');


  //--------------------------------------------------------------------------------------sec3

  new ScrollMagic.Scene({triggerElement: '.landing-sec1 h2', duration: '350'})
            .setTween(".landing-sec1 h2", 1, { scale: 1.15, opacity: 1, ease:Sine.easeInOut}) // trigger a TweenMax.to tween
            .addTo(controller);

  new ScrollMagic.Scene({triggerElement: '.landing-sec1 h2', duration: '350'})
            .setTween(".landing-sec1 p", 1, { scale: 1.05, opacity: 1, ease:Sine.easeInOut}) // trigger a TweenMax.to tween
            .addTo(controller);



  // var tween = TweenMax.to(".landing-sec2 h2", 0.5, {scale: 1.05, repeat: 75, yoyo: true});


  // // build scene and set duration to window height
  // new ScrollMagic.Scene({triggerElement: ".landing-sec2", duration: "100%"})
  //         .setTween(tween)
  //         .addTo(controller);

  //--------------------------------------------------------------------------------------sec4
    new ScrollMagic.Scene({triggerElement: ".landing-sec4 .triggerbox", duration: 350})
          // animate color and top border in relation to scroll position
          .setTween(".landing-sec4 .vital-calendar-part1", {transform: "translateZ(45px)",ease: Circ.easeOut}) // the tween durtion can be omitted and defaults to 1
          //.addIndicators()
          .addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".landing-sec4 .triggerbox", duration: 350})
          // animate color and top border in relation to scroll position
          .setTween(".landing-sec4 .vital-calendar-part3", {transform: "translateZ(70px)",ease: Circ.easeOut}) // the tween durtion can be omitted and defaults to 1
          //.addIndicators()
          .addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".landing-sec4 .triggerbox", duration: 350})
          // animate color and top border in relation to scroll position
          .setTween(".landing-sec4 .vital-calendar-part4", {transform: "translateZ(70px)",ease: Circ.easeOut}) // the tween durtion can be omitted and defaults to 1
          //.addIndicators()
          .addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".landing-sec4 .triggerbox", duration: 350})
          // animate color and top border in relation to scroll position
          .setTween(".landing-sec4 .vital-calendar-part2", {transform: "rotate3d(1.5, 0.9, -1.3, 70deg) translateZ(-25px)",ease: Circ.easeOut,}) // the tween durtion can be omitted and defaults to 1
          //.addIndicators()
          .addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".landing-sec4 .triggerbox", duration: 450})
          // animate color and top border in relation to scroll position
          .setTween(".landing-sec4 .vital-calendar-part5", {transform: "translateZ(50px)",ease: Circ.easeOut}) // the tween durtion can be omitted and defaults to 1
          //.addIndicators()
          .addTo(controller);

  //--------------------------------------------------------------------------------------sec6

    new ScrollMagic.Scene({triggerElement: ".landing-sec6 .scroll-trigger", duration: 500, offset: -30})
          // animate color and top border in relation to scroll position
          .setTween(".landing-sec6 .triangle2, .landing-sec6 .triangle3, .landing-sec6 .rectangle", {bottom: "0"}) // the tween durtion can be omitted and defaults to 1
          //.addIndicators()
          .addTo(controller);

    // new ScrollMagic.Scene({triggerElement: ".landing-sec6 .scroll-trigger", duration: 600})
    //       .setTween('.landing-sec6 .vital-reciced-card', {top: '30vh'})
    //       //.addIndicators()
    //       .addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".landing-sec6 .scroll-trigger", duration: 400})
          .setTween('.landing-sec6 .vital-reciced-card0, \
            .landing-sec6 .vital-reciced-card1, \
            .landing-sec6 .vital-reciced-card2, \
            .landing-sec6 .vital-reciced-card3, \
            .landing-sec6 .vital-reciced-card4, \
            .landing-sec6 .vital-reciced-card5', {transform: 'translateY(-120px)',ease: Power4.easeIn})
          // .addIndicators()
          .addTo(controller);

  //--------------------------------------------------------------------------------------
});

/* Macho.js - Better CJK text wrapping V0.3 (Beta)
 * https://github.com/dryman/Macho.js
 * Author Felix Ren-Chyan Chern (idryman)
 * BSD License
 */

(function( $ ) {
  $.fn.macho = function (options) {
    var settings = $.extend({
      'length': 3,
      'inline': true
    }, options);
    len = settings.length;
    var output = settings.inline ?
      "<span class='macho' style='display: inline-block;'>$&</span>" :
      "<span class='macho'>$&</span>";

    var reg_escape = function (str) {
      return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    }
    var genReg = function (acc, len, html){
      if (len === 0) {
        return new RegExp(acc);
      }
      else {
        /* res[1] = ((\w+)|(&\w{1,5};))
         * res[2] = (\w+)
         * res[3] = (&\w{1,5};)  // will fail if there is '#' in \w
         */
        var reg = new RegExp("((\\w+)|(&\\w{1,5};))"+acc);
        var res = reg.exec(html);
        if (res != null) {
          if (res[2] != null && res[2].length > 3) { // Length of (\w+) > 3
            return reg;
          } else {
            // Short word or html escaped character are treated as one wide
            // character (like one Chinese character)
            return genReg(reg_escape(res[0])+"$", --len, html);
          }
        } else {
            // Add one non ascii charater to accumulator
          return genReg("\\W"+acc,--len, html)
        }
      }
    };


    var puncs_reg = new RegExp("(&\\w{1,5};|[-,_\\|<.>/?;:'\"`~!@#$%&*()（）‧´・ωつдС；∀ﾟo彡★☆▽￣╮╭ノ╰〒皿～┴‵□′↗︴yΦθ↖，。？！：；＠m＃＄％︿＆＊＝＋╰╯崩潰艸凸∩＿ˍ▁▂▃▄▅▆▇◣◎█◢^]+)$");
    this.each(function(idx){
      if ($(this).html().match(/</)) return true; // do nothing if other tags are found.

      var punc = $(this).html().match(puncs_reg);
      if (punc!=null && punc[0].length > 3)
        return $(this).html($(this).html().replace(puncs_reg,output)) || true; // works like continue

      var acc = punc != null ?  reg_escape(punc[0]) + "$" : "$";
      var reg = genReg(acc, len, $(this).html());
      return $(this).html($(this).html().replace(reg,output)) || true;

    });
  };
})( jQuery );


$('.landing-sec1 h2').macho({
  'length': 2
});

$('.landing-sec2 p').macho({
  'length': 4
});

