/* JS */ gapi.loaded_0(function(_){var window=this;
var ba,ea,ia,ja,ma,qa,na,ta,ra,xa,Aa,Ba,Pa,Qa;_.q=function(a){return function(){return _.aa[a].apply(this,arguments)}};_._DumpException=function(a){throw a;};_.aa=[];ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global?window.global:this;ea={};ia=function(a,b){(ea[a]=ea[a]||[]).push(b);for(var c=ba,d=a.split("."),e=0;e<d.length-1&&c;e++)c=c[d[e]];d=d[d.length-1];c&&c[d]instanceof Function&&(c[d]=b(c[d]))};
ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
ma=function(){ma=function(){};if(!ba.Symbol){ba.Symbol=na;var a=[],b=function(b){return function(d){a=[];d=b(d);for(var e=[],f=0,g=d.length;f<g;f++){var k;a:if(k=d[f],14>k.length)k=!1;else{for(var l=0;14>l;l++)if(k[l]!="jscomp_symbol_"[l]){k=!1;break a}k=!0}k?a.push(d[f]):e.push(d[f])}return e}};ia("Object.keys",b);ia("Object.getOwnPropertyNames",b);ia("Object.getOwnPropertySymbols",function(c){return function(d){b.R=Object.getOwnPropertyNames(d);a.push.apply(c(d));return a}})}};qa=0;
na=function(a){return"jscomp_symbol_"+a+qa++};ta=function(){ma();var a=ba.Symbol.iterator;a||(a=ba.Symbol.iterator=ba.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ra(this)}});ta=function(){}};ra=function(a){var b=0;return xa(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};xa=function(a){ta();a={next:a};a[ba.Symbol.iterator]=function(){return this};return a};
Aa=function(a,b){ta();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[window.Symbol.iterator]=function(){return d};return d};Ba=function(a,b){if(b){for(var c=ba,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);if(f!=e&&null!=f){for(var g=ea[a]||[],e=0;e<g.length;e++)f=g[e](f);ja(c,d,{configurable:!0,writable:!0,value:f})}}};
Ba("Array.prototype.keys",function(a){return a?a:function(){return Aa(this,function(a){return a})}});var Da=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
Ba("String.prototype.repeat",function(a){return a?a:function(a){var c=Da(this,null,"repeat");if(0>a||1342177279<a)throw new window.RangeError("Invalid count value");a|=0;for(var d="";a;)if(a&1&&(d+=c),a>>>=1)c+=c;return d}});Ba("Math.sign",function(a){return a?a:function(a){a=Number(a);return 0===a||(0,window.isNaN)(a)?a:0<a?1:-1}});Ba("Array.prototype.values",function(a){return a?a:function(){return Aa(this,function(a,c){return c})}});
Ba("String.prototype.startsWith",function(a){return a?a:function(a,c){var d=Da(this,a,"startsWith");a+="";for(var e=d.length,f=a.length,g=Math.max(0,Math.min(c|0,d.length)),k=0;k<f&&g<e;)if(d[g++]!=a[k++])return!1;return k>=f}});Ba("Array.prototype.entries",function(a){return a?a:function(){return Aa(this,function(a,c){return[a,c]})}});
Ba("String.prototype.endsWith",function(a){return a?a:function(a,c){var d=Da(this,a,"endsWith");a+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=a.length;0<f&&0<e;)if(d[--e]!=a[--f])return!1;return 0>=f}});_.Ea=_.Ea||{};_.r=this;_.Ga=function(a){return void 0!==a};_.Ha=function(){};
_.Ja=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};_.Ka=function(a){return"array"==_.Ja(a)};_.t=function(a){return"string"==typeof a};_.Ma="closure_uid_"+(1E9*Math.random()>>>0);Pa=function(a,b,c){return a.call.apply(a.bind,arguments)};
Qa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};_.u=function(a,b,c){_.u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Pa:Qa;return _.u.apply(null,arguments)};
_.Sa=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};_.Ta=Date.now||function(){return+new Date};_.A=function(a,b){var c=a.split("."),d=_.r;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&_.Ga(b)?d[e]=b:d[e]?d=d[e]:d=d[e]={}};
_.B=function(a,b){function c(){}c.prototype=b.prototype;a.ma=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Nw=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g)}};
_.Va=function(a,b){return b};_.C=function(a,b){b=_.Va(a,b);_.A(a,b)};_.Wa=window.gadgets||{};_.Xa=window.osapi=window.osapi||{};_.google=window.google||{};window.___jsl=window.___jsl||{};
(window.___jsl.cd=window.___jsl.cd||[]).push({gwidget:{parsetags:"explicit"},appsapi:{plus_one_service:"/plus/v1"},client:{rms:"migrated"},csi:{rate:.01},poshare:{hangoutContactPickerServer:"https://plus.google.com"},gappsutil:{required_scopes:["https://www.googleapis.com/auth/plus.me","https://www.googleapis.com/auth/plus.people.recommended"],display_on_page_ready:!1},appsutil:{required_scopes:["https://www.googleapis.com/auth/plus.me","https://www.googleapis.com/auth/plus.people.recommended"],display_on_page_ready:!1},
"oauth-flow":{authUrl:"https://accounts.google.com/o/oauth2/auth",proxyUrl:"https://accounts.google.com/o/oauth2/postmessageRelay",redirectUri:"postmessage"},iframes:{sharebox:{params:{json:"&"},url:":socialhost:/:session_prefix:_/sharebox/dialog"},plus:{url:":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"},":socialhost:":"https://apis.google.com",":im_socialhost:":"https://plus.googleapis.com",domains_suggest:{url:"https://domains.google.com/suggest/flow"},card:{params:{s:"#",userid:"&"},
url:":socialhost:/:session_prefix:_/hovercard/internalcard"},":signuphost:":"https://plus.google.com",":gplus_url:":"https://plus.google.com",plusone:{url:":socialhost:/:session_prefix:_/+1/fastbutton?usegapi=1"},plus_share:{url:":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&usegapi=1"},plus_circle:{url:":socialhost:/:session_prefix:_/widget/plus/circle?usegapi=1"},plus_followers:{url:":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"},configurator:{url:":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"},
appcirclepicker:{url:":socialhost:/:session_prefix:_/widget/render/appcirclepicker"},page:{url:":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"},person:{url:":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"},community:{url:":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"},follow:{url:":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"},commentcount:{url:":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"},comments:{url:":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1"},
youtube:{url:":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1"},reportabuse:{url:":socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi=1"},additnow:{url:":socialhost:/additnow/additnow.html"},udc_webconsentflow:{url:"https://myaccount.google.com/webconsent?usegapi=1"},":source:":"1p"},poclient:{update_session:"google.updateSessionCallback"},"googleapis.config":{methods:{"pos.plusones.list":!0,"pos.plusones.get":!0,"pos.plusones.insert":!0,"pos.plusones.delete":!0,"pos.plusones.getSignupState":!0},
requestCache:{enabled:!0},versions:{pos:"v1"},rpc:"/rpc",root:"https://content.googleapis.com","root-1p":"https://clients6.google.com",sessionCache:{enabled:!0},transport:{isProxyShared:!0},xd3:"/static/proxy.html",developerKey:"AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ",auth:{useInterimAuth:!1}},report:{apis:["iframes\\..*","gadgets\\..*","gapi\\.appcirclepicker\\..*","gapi\\.client\\..*"],rate:1E-4}});
_.Ya=window;_.Za=window.document;_.ab=_.Ya.location;_.bb=/\[native code\]/;_.cb=function(a,b,c){return a[b]=a[b]||c};_.db=function(){var a;if((a=Object.create)&&_.bb.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a};_.eb=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};_.fb=function(a,b){if(!a)throw Error(b||"");};_.hb=_.cb(_.Ya,"gapi",{});
_.ib=function(a,b,c){var d=new RegExp("([#].*&|[#])"+b+"=([^&#]*)","g");b=new RegExp("([?#].*&|[?#])"+b+"=([^&#]*)","g");if(a=a&&(d.exec(a)||b.exec(a)))try{c=(0,window.decodeURIComponent)(a[2])}catch(e){}return c};_.mb=function(a,b,c){_.jb(a,b,c,"add","at")};_.jb=function(a,b,c,d,e){if(a[d+"EventListener"])a[d+"EventListener"](b,c,!1);else if(a[e+"tachEvent"])a[e+"tachEvent"]("on"+b,c)};_.nb=_.cb(_.Ya,"___jsl",_.db());_.cb(_.nb,"I",0);_.cb(_.nb,"hel",10);var ob,rb,sb,tb,ub,xb;ob=function(a){var b=window.___jsl=window.___jsl||{};b[a]=b[a]||[];return b[a]};rb=function(a){var b=window.___jsl=window.___jsl||{};b.cfg=!a&&b.cfg||{};return b.cfg};sb=function(a){return"object"===typeof a&&/\[native code\]/.test(a.push)};tb=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]&&b[c]&&"object"===typeof a[c]&&"object"===typeof b[c]&&!sb(a[c])&&!sb(b[c])?tb(a[c],b[c]):b[c]&&"object"===typeof b[c]?(a[c]=sb(b[c])?[]:{},tb(a[c],b[c])):a[c]=b[c])};
ub=function(a){if(a&&!/^\s+$/.test(a)){for(;0==a.charCodeAt(a.length-1);)a=a.substring(0,a.length-1);var b;try{b=window.JSON.parse(a)}catch(c){}if("object"===typeof b)return b;try{b=(new Function("return ("+a+"\n)"))()}catch(c){}if("object"===typeof b)return b;try{b=(new Function("return ({"+a+"\n})"))()}catch(c){}return"object"===typeof b?b:{}}};
xb=function(a){rb(!0);var b=window.___gcfg,c=ob("cu");if(b&&b!==window.___gu){var d={};tb(d,b);c.push(d);window.___gu=b}var b=ob("cu"),e=window.document.scripts||window.document.getElementsByTagName("script")||[],d=[],f=[];f.push.apply(f,ob("us"));for(var g=0;g<e.length;++g)for(var k=e[g],l=0;l<f.length;++l)k.src&&0==k.src.indexOf(f[l])&&d.push(k);0==d.length&&0<e.length&&e[e.length-1].src&&d.push(e[e.length-1]);for(e=0;e<d.length;++e)d[e].getAttribute("gapi_processed")||(d[e].setAttribute("gapi_processed",
!0),(f=d[e])?(g=f.nodeType,f=3==g||4==g?f.nodeValue:f.textContent||f.innerText||f.innerHTML||""):f=void 0,(f=ub(f))&&b.push(f));a&&(d={},tb(d,a),c.push(d));d=ob("cd");a=0;for(b=d.length;a<b;++a)tb(rb(),d[a]);d=ob("ci");a=0;for(b=d.length;a<b;++a)tb(rb(),d[a]);a=0;for(b=c.length;a<b;++a)tb(rb(),c[a])};_.D=function(a,b){if(!a)return rb();for(var c=a.split("/"),d=rb(),e=0,f=c.length;d&&"object"===typeof d&&e<f;++e)d=d[c[e]];return e===c.length&&void 0!==d?d:b}; _.yb=function(a,b){var c=a;if("string"===typeof a){for(var d=c={},e=a.split("/"),f=0,g=e.length;f<g-1;++f)var k={},d=d[e[f]]=k;d[e[f]]=b}xb(c)};
var Ab=function(){var a=window.__GOOGLEAPIS;a&&(a.googleapis&&!a["googleapis.config"]&&(a["googleapis.config"]=a.googleapis),_.cb(_.nb,"ci",[]).push(a),window.__GOOGLEAPIS=void 0)};Ab&&Ab();xb();_.C("gapi.config.get",_.D);_.C("gapi.config.update",_.yb);
var Eb,Gb,Kb,Lb,Mb,Nb,Ob,Pb,Qb,Rb,Sb,Tb,Wb,Xb,$b;_.Bb=function(a){return!!a&&"object"===typeof a&&_.bb.test(a.push)};_.Cb=function(a,b,c){if(a){_.fb(_.Bb(a),"arrayForEach was called with a non array value");for(var d=0;d<a.length;d++)b.call(c,a[d],d)}};_.Db=function(a,b,c){if(a)if(_.Bb(a))_.Cb(a,b,c);else{_.fb("object"===typeof a,"objectForEach was called with a non object value");c=c||a;for(var d in a)_.eb(a,d)&&void 0!==a[d]&&b.call(c,a[d],d)}};
Eb=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b};Gb=function(){var a=[],b=_.nb.H;b&&_.Db(b,function(b){a.push.apply(a,b.L)});return Eb(a)};_.Hb=function(a){if(_.bb.test(Object.keys))return Object.keys(a);var b=[],c;for(c in a)_.eb(a,c)&&b.push(c);return b};Pb={};Qb=0;Rb=_.db();Sb=_.db();Tb=function(a){return"number"===typeof a&&a>Math.random()};
_.Vb=function(a){if("undefined"===typeof Kb){var b=_.D("report")||{},c=b.rate;Nb=b.timeout||1E3;Lb=b.host||"https://plus.google.com";Mb=b.path||"/_/widget/report";Kb=[];Tb(c)&&(Kb=b.apis||[]);var b=b.apiRate||{},d;for(d in b)Tb(b[d])&&Kb.push(d)}for(d=0;d<Kb.length;++d)if((new RegExp("^"+Kb[d]+"$")).test(a))return!0;return!1};Wb=function(a){delete Pb[a]};
Xb=function(){Ob&&(_.Ya.clearTimeout(Ob),Ob=0);Ob=_.Ya.setTimeout(function(){var a;a=window.document.location;a=a.protocol+"//"+a.host+a.pathname;var b=_.Hb(Sb).join(":");a=[Lb,Mb,"?api=",(0,window.encodeURIComponent)(b),"&url=",(0,window.encodeURIComponent)(a),"&loaded=",(0,window.encodeURIComponent)(Gb().join(":"))].join("");Sb=_.db();var b=new window.Image,c=Qb++;Pb[c]=b;b.onload=b.onerror=_.Sa(Wb,c);b.src=a;Ob=0},Nb)};_.Yb=function(a){Rb[a]||(Sb[a]=!0,Rb[a]=!0,Xb())};$b=_.Va; _.Va=function(a,b){var c=$b(a,b);"function"===typeof b&&_.Vb(a)&&(c=function(c){_.Yb(a);return b.apply(this,arguments)});return c};

_.Ij=window.googleapis&&window.googleapis.server||{};
_.yk=function(){var a=/\s*;\s*/;return{get:function(b,c){for(var d=b+"=",e=(window.document.cookie||"").split(a),f=0,g;g=e[f];++f)if(0==g.indexOf(d))return g.substr(d.length);return c}}}();
_.dc=function(){function a(a,b){if(!(a<c)&&d)if(2===a&&d.warn)d.warn(b);else if(3===a&&d.error)try{d.error(b)}catch(g){}else d.log&&d.log(b)}var b=function(b){a(1,b)};_.bc=function(b){a(2,b)};_.ac=function(b){a(3,b)};_.cc=function(){};b.INFO=1;b.WARNING=2;b.NONE=4;var c=1,d=window.console?window.console:window.opera?window.opera.postError:void 0;return b}();

_.I=_.I||{};
_.I=_.I||{};(function(){var a=[];_.I.QX=function(b){a.push(b)};_.I.bY=function(){for(var b=0,c=a.length;b<c;++b)a[b]()}})();
_.ec=function(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1};_.fc=function(a,b){var c=_.cb(_.nb,"watt",_.db());_.cb(c,a,b)};_.I=_.I||{};
(function(){var a=null;_.I.mc=function(b){var c="undefined"===typeof b;if(null!==a&&c)return a;var d={};b=b||window.location.href;var e=b.indexOf("?"),f=b.indexOf("#");b=(-1===f?b.substr(e+1):[b.substr(e+1,f-e-1),"&",b.substr(f+1)].join("")).split("&");for(var e=window.decodeURIComponent?window.decodeURIComponent:window.unescape,f=0,g=b.length;f<g;++f){var k=b[f].indexOf("=");if(-1!==k){var l=b[f].substring(0,k),k=b[f].substring(k+1),k=k.replace(/\+/g," ");try{d[l]=e(k)}catch(m){}}}c&&(a=d);return d}; _.I.mc()})();
_.C("gadgets.util.getUrlParameters",_.I.mc);
_.gc=window.console;_.hc=function(a){_.gc&&_.gc.log&&_.gc.log(a)};_.ic=function(){};
_.jc=function(){var a=window.gadgets&&window.gadgets.config&&window.gadgets.config.get;a&&_.yb(a());return{register:function(a,c,d){d&&d(_.D())},get:function(a){return _.D(a)},update:function(a,c){if(c)throw"Config replacement is not supported";_.yb(a)},jc:function(){}}}();
_.C("gadgets.config.register",_.jc.register);_.C("gadgets.config.get",_.jc.get);_.C("gadgets.config.init",_.jc.jc);_.C("gadgets.config.update",_.jc.update);
var kc=function(a){return 10>a?"0"+a:a},lc={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},mc=function(a){var b,c,d;b=/[\"\\\x00-\x1f\x7f-\x9f]/g;if(void 0!==a){switch(typeof a){case "string":return b.test(a)?'"'+a.replace(b,function(a){var b=lc[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)})+'"':'"'+a+'"';case "number":return(0,window.isFinite)(a)?String(a):"null";case "boolean":case "null":return String(a);case "object":if(!a)return"null";
b=[];if("number"===typeof a.length&&!a.propertyIsEnumerable("length")){d=a.length;for(c=0;c<d;c+=1)b.push(mc(a[c])||"null");return"["+b.join(",")+"]"}for(c in a)!/___$/.test(c)&&_.eb(a,c)&&"string"===typeof c&&(d=mc(a[c]))&&b.push(mc(c)+":"+d);return"{"+b.join(",")+"}"}return""}},nc=function(a){if(!a)return!1;if(/^[\],:{}\s]*$/.test(a.replace(/\\["\\\/b-u]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))try{return eval("("+
a+")")}catch(b){}return!1},oc=!1,pc;try{oc=!!window.JSON&&'["a"]'===window.JSON.stringify(["a"])&&"a"===window.JSON.parse('["a"]')[0]}catch(a){}pc=function(a){try{return window.JSON.parse(a)}catch(b){return!1}};_.qc=oc?window.JSON.stringify:mc;_.rc=oc?pc:nc;pc||(Date.prototype.toJSON=function(){return[this.getUTCFullYear(),"-",kc(this.getUTCMonth()+1),"-",kc(this.getUTCDate()),"T",kc(this.getUTCHours()),":",kc(this.getUTCMinutes()),":",kc(this.getUTCSeconds()),"Z"].join("")});

_.C("gadgets.json.stringify",_.qc);_.C("gadgets.json.parse",_.rc);_.ib(_.Ya.location.href,"rpctoken")&&_.mb(_.Za,"unload",function(){});
var sc,vc;sc=function(){var a=_.Za.readyState;return"complete"===a||"interactive"===a&&-1==window.navigator.userAgent.indexOf("MSIE")};_.tc=function(a){if(sc())a();else{var b=!1,c=function(){if(!b)return b=!0,a.apply(this,arguments)};_.Ya.addEventListener?(_.Ya.addEventListener("load",c,!1),_.Ya.addEventListener("DOMContentLoaded",c,!1)):_.Ya.attachEvent&&(_.Ya.attachEvent("onreadystatechange",function(){sc()&&c.apply(this,arguments)}),_.Ya.attachEvent("onload",c))}};_.uc=function(a,b){if(!sc())try{a()}catch(c){}_.tc(b)}; vc=vc||{};vc.fB=null;vc.Vz=null;vc.io=null;vc.frameElement=null;
vc=vc||{};
vc.Wu||(vc.Wu=function(){function a(a){"undefined"!=typeof window.addEventListener?window.addEventListener("message",a,!1):"undefined"!=typeof window.attachEvent&&window.attachEvent("onmessage",a);window.___jsl=window.___jsl||{};var b=window.___jsl;b.RPMQ=b.RPMQ||[];b.RPMQ.push(a)}function b(a){var b=(0,_.rc)(a.data);if(b&&b.f){(0,_.cc)("gadgets.rpc.receive("+window.name+"): "+a.data);var d=_.K.fh(b.f);e&&("undefined"!==typeof a.origin?a.origin!==d:a.domain!==/^.+:\/\/([^:]+).*/.exec(d)[1])?_.ac("Invalid rpc message origin. "+
d+" vs "+(a.origin||"")):c(b,a.origin)}}var c,d,e=!0;return{lj:function(){return"wpm"},R:function(){return!0},jc:function(f,g){_.jc.register("rpc",null,function(a){"true"===String((a&&a.rpc||{}).disableForceSecure)&&(e=!1)});c=f;d=g;a(b);d("..",!0);return!0},wc:function(a){d(a,!0);return!0},call:function(a,b,c){var d=_.K.fh(a),e=_.K.Cw(a);d?window.setTimeout(function(){var a=(0,_.qc)(c);(0,_.cc)("gadgets.rpc.send("+window.name+"): "+a);e.postMessage(a,d)},0):".."!=a&&_.ac("No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message"); return!0}}}());
vc=vc||{};
vc.yn||(vc.yn=function(){function a(a,b){J[b]=J[b]||function(){a.apply({},arguments)}}function b(){if(null===v&&window.document.body&&l){var a=l+"?cb="+Math.random()+"&origin="+E+"&jsl=1",c=window.document.createElement("div");c.style.height="1px";c.style.width="1px";a='<object height="1" width="1" id="___xpcswf" type="application/x-shockwave-flash"><param name="allowScriptAccess" value="always"></param><param name="movie" value="'+a+'"></param><embed type="application/x-shockwave-flash" allowScriptAccess="always" src="'+a+
'" height="1" width="1"></embed></object>';window.document.body.appendChild(c);c.innerHTML=a;v=c.firstChild}++w;null!==x&&(null!==v||50<=w)?window.clearTimeout(x):x=window.setTimeout(b,100)}function c(){F[".."]||(k(".."),z++,50<=z&&null!==G?(window.clearTimeout(G),G=null):G=window.setTimeout(c,100))}function d(){if(null!==v&&v.setup)for(;0<y.length;){var a=y.shift(),b=a.BN;v.setup(a.Qj,".."===b?_.K.Wp:b,".."===b?"INNER":"OUTER")}null!==x&&window.clearTimeout(x);x=null}function e(){F[".."]||null!==
G||(G=window.setTimeout(c,100))}function f(a,b,c){b=_.K.fh(a);var d=_.K.Zg(a);v["sendMessage_"+(".."===a?_.K.Wp:a)+"_"+d+"_"+(".."===a?"INNER":"OUTER")].call(v,(0,_.qc)(c),b);return!0}function g(a,b){var c=(0,_.rc)(a),d=c._scr;d?(p(d,!0),F[d]=!0,".."!==d&&k(d,!0)):window.setTimeout(function(){n(c,b)},0)}function k(a,b){var c=_.K.Wp,d={};d._scr=b?"..":c;d._pnt=c;f(a,0,d)}var l=null,m=!1,n=null,p=null,v=null,y=[],x=null,w=0,z=0,G=null,F={},E=window.location.protocol+"//"+window.location.host,J;window.___jsl=
window.___jsl||{};J=window.___jsl._fm={};_.jc.register("rpc",null,function(a){m&&(l=a&&a.rpc&&a.rpc.commSwf||"//xpc.googleusercontent.com/gadgets/xpc.swf")});a(d,"ready");a(e,"setupDone");a(g,"receiveMessage");return{lj:function(){return"flash"},R:function(){return!0},jc:function(a,b){n=a;p=b;return m=!0},wc:function(a,c){y.push({Qj:c,BN:a});null===v&&null===x&&(x=window.setTimeout(b,100));return!0},call:f,MF:g,S:d,T:e}}());
if(window.gadgets&&window.gadgets.rpc)"undefined"!=typeof _.K&&_.K||(_.K=window.gadgets.rpc,_.K.config=_.K.config,_.K.register=_.K.register,_.K.unregister=_.K.unregister,_.K.UA=_.K.registerDefault,_.K.sC=_.K.unregisterDefault,_.K.zx=_.K.forceParentVerifiable,_.K.call=_.K.call,_.K.fl=_.K.getRelayUrl,_.K.hg=_.K.setRelayUrl,_.K.ep=_.K.setAuthToken,_.K.Zl=_.K.setupReceiver,_.K.Zg=_.K.getAuthToken,_.K.It=_.K.removeReceiver,_.K.ey=_.K.getRelayChannel,_.K.Vo=_.K.receive,_.K.RA=_.K.receiveSameDomain,_.K.tb=
_.K.getOrigin,_.K.fh=_.K.getTargetOrigin,_.K.Cw=_.K._getTargetWin,_.K.LF=_.K._parseSiblingId);else{_.K=function(){function a(a,b){if(!la[a]){var c=za;b||(c=La);la[a]=c;for(var d=fa[a]||[],e=0;e<d.length;++e){var f=d[e];f.t=F[a];c.call(a,f.f,f)}fa[a]=[]}}function b(){function a(){ca=!0}Y||("undefined"!=typeof window.addEventListener?window.addEventListener("unload",a,!1):"undefined"!=typeof window.attachEvent&&window.attachEvent("onunload",a),Y=!0)}function c(a,c,d,e,f){F[c]&&F[c]===d||(_.ac("Invalid gadgets.rpc token. "+
F[c]+" vs "+d),Ia(c,2));f.onunload=function(){H[c]&&!ca&&(Ia(c,1),_.K.It(c))};b();e=(0,_.rc)((0,window.decodeURIComponent)(e))}function d(b,c){if(b&&"string"===typeof b.s&&"string"===typeof b.f&&b.a instanceof Array)if(F[b.f]&&F[b.f]!==b.t&&(_.ac("Invalid gadgets.rpc token. "+F[b.f]+" vs "+b.t),Ia(b.f,2)),"__ack"===b.s)window.setTimeout(function(){a(b.f,!0)},0);else{b.c&&(b.callback=function(a){_.K.call(b.f,(b.g?"legacy__":"")+"__cb",null,b.c,a)});if(c){var d=e(c);b.origin=c;var f=b.r,g;try{g=e(f)}catch(k){}f&&
g==d||(f=c);b.referer=f}d=(w[b.s]||w[""]).apply(b,b.a);b.c&&"undefined"!==typeof d&&_.K.call(b.f,"__cb",null,b.c,d)}}function e(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);-1==a.indexOf("://")&&(a=window.location.protocol+"//"+a);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a)throw Error("b");
var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1),b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}function f(a){if("/"==a.charAt(0)){var b=a.indexOf("|");return{id:0<b?a.substring(1,b):a.substring(1),origin:0<b?a.substring(b+1):null}}return null}function g(a){if("undefined"===typeof a||".."===a)return window.parent;var b=f(a);if(b)return window.top.frames[b.id];a=String(a);return(b=window.frames[a])?b:(b=window.document.getElementById(a))&&b.contentWindow?
b.contentWindow:null}function k(a,b){if(!0!==H[a]){"undefined"===typeof H[a]&&(H[a]=0);var c=g(a);".."!==a&&null==c||!0!==za.wc(a,b)?!0!==H[a]&&10>H[a]++?window.setTimeout(function(){k(a,b)},500):(la[a]=La,H[a]=!0):H[a]=!0}}function l(a){(a=z[a])&&"/"===a.substring(0,1)&&(a="/"===a.substring(1,2)?window.document.location.protocol+a:window.document.location.protocol+"//"+window.document.location.host+a);return a}function m(a,b,c){b&&!/http(s)?:\/\/.+/.test(b)&&(0==b.indexOf("//")?b=window.location.protocol+
b:"/"==b.charAt(0)?b=window.location.protocol+"//"+window.location.host+b:-1==b.indexOf("://")&&(b=window.location.protocol+"//"+b));z[a]=b;"undefined"!==typeof c&&(G[a]=!!c)}function n(a,b){b=b||"";F[a]=String(b);k(a,b)}function p(a){a=(a.passReferrer||"").split(":",2);Oa=a[0]||"none";da=a[1]||"origin"}function v(b){"true"===String(b.useLegacyProtocol)&&(za=vc.io||La,za.jc(d,a))}function y(a,b){function c(d){d=d&&d.rpc||{};p(d);var f=d.parentRelayUrl||"",f=e(W.parent||b)+f;m("..",f,"true"===String(d.useLegacyProtocol));
v(d);n("..",a)}!W.parent&&b?c({}):_.jc.register("rpc",null,c)}function x(a,b,c){if(".."===a)y(c||W.rpctoken||W.ifpctok||"",b);else a:{var d=null;if("/"!=a.charAt(0)){if(!_.I)break a;d=window.document.getElementById(a);if(!d)throw Error("c`"+a);}d=d&&d.src;b=b||_.K.tb(d);m(a,b);b=_.I.mc(d);n(a,c||b.rpctoken)}}var w={},z={},G={},F={},E=0,J={},H={},W={},la={},fa={},Oa=null,da=null,Z=window.top!==window.self,wa=window.name,Ia=function(){},pa=window.console,Fa=pa&&pa.log&&function(a){pa.log(a)}||function(){},
La=function(){function a(b){return function(){Fa(b+": call ignored")}}return{getCode:function(){return"noop"},isParentVerifiable:function(){return!0},init:a("init"),setup:a("setup"),call:a("call")}}();_.I&&(W=_.I.mc());var ca=!1,Y=!1,za=function(){if("flash"==W.rpctx)return vc.yn;if("rmr"==W.rpctx)return vc.fB;var a="function"===typeof window.postMessage?vc.Wu:"object"===typeof window.postMessage?vc.Wu:window.ActiveXObject?vc.yn?vc.yn:vc.Vz?vc.Vz:vc.io:0<window.navigator.userAgent.indexOf("WebKit")?
vc.fB:"Gecko"===window.navigator.product?vc.frameElement:vc.io;a||(a=La);return a}();w[""]=function(){Fa("Unknown RPC service: "+this.s)};w.__cb=function(a,b){var c=J[a];c&&(delete J[a],c.call(this,b))};return{config:function(a){"function"===typeof a.lB&&(Ia=a.lB)},register:function(a,b){if("__cb"===a||"__ack"===a)throw Error("d");if(""===a)throw Error("e");w[a]=b},unregister:function(a){if("__cb"===a||"__ack"===a)throw Error("f");if(""===a)throw Error("g");delete w[a]},UA:function(a){w[""]=a},sC:function(){delete w[""]},
zx:function(){},call:function(a,b,c,d){a=a||"..";var e="..";".."===a?e=wa:"/"==a.charAt(0)&&(e=_.K.tb(window.location.href),e="/"+wa+(e?"|"+e:""));++E;c&&(J[E]=c);var g={s:b,f:e,c:c?E:0,a:Array.prototype.slice.call(arguments,3),t:F[a],l:!!G[a]},k;a:if("bidir"===Oa||"c2p"===Oa&&".."===a||"p2c"===Oa&&".."!==a){k=window.location.href;var l="?";if("query"===da)l="#";else if("hash"===da)break a;l=k.lastIndexOf(l);l=-1===l?k.length:l;k=k.substring(0,l)}else k=null;k&&(g.r=k);if(".."===a||null!=f(a)||window.document.getElementById(a))(k=
la[a])||null===f(a)||(k=za),0===b.indexOf("legacy__")&&(k=za,g.s=b.substring(8),g.c=g.c?g.c:E),g.g=!0,g.r=e,k?(G[a]&&(k=vc.io),!1===k.call(a,e,g)&&(la[a]=La,za.call(a,e,g))):fa[a]?fa[a].push(g):fa[a]=[g]},fl:l,hg:m,ep:n,Zl:x,Zg:function(a){return F[a]},It:function(a){delete z[a];delete G[a];delete F[a];delete H[a];delete la[a]},ey:function(){return za.lj()},Vo:function(a,b){4<a.length?za.MF(a,d):c.apply(null,a.concat(b))},RA:function(a){a.a=Array.prototype.slice.call(a.a);window.setTimeout(function(){d(a)},
0)},tb:e,fh:function(a){var b=null,c=l(a);c?b=c:(c=f(a))?b=c.origin:b=".."==a?W.parent:window.document.getElementById(a).src;return e(b)},jc:function(){!1===za.jc(d,a)&&(za=La);Z?x(".."):_.jc.register("rpc",null,function(a){a=a.rpc||{};p(a);v(a)})},Cw:g,LF:f,R:"__ack",Wp:wa||"..",U:0,T:1,S:2}}();_.K.jc()};
_.K.config({lB:function(a){throw Error("h`"+a);}});_.cc=_.ic;_.C("gadgets.rpc.config",_.K.config);_.C("gadgets.rpc.register",_.K.register);_.C("gadgets.rpc.unregister",_.K.unregister);_.C("gadgets.rpc.registerDefault",_.K.UA);_.C("gadgets.rpc.unregisterDefault",_.K.sC);_.C("gadgets.rpc.forceParentVerifiable",_.K.zx);_.C("gadgets.rpc.call",_.K.call);_.C("gadgets.rpc.getRelayUrl",_.K.fl);_.C("gadgets.rpc.setRelayUrl",_.K.hg);_.C("gadgets.rpc.setAuthToken",_.K.ep);_.C("gadgets.rpc.setupReceiver",_.K.Zl);_.C("gadgets.rpc.getAuthToken",_.K.Zg); _.C("gadgets.rpc.removeReceiver",_.K.It);_.C("gadgets.rpc.getRelayChannel",_.K.ey);_.C("gadgets.rpc.receive",_.K.Vo);_.C("gadgets.rpc.receiveSameDomain",_.K.RA);_.C("gadgets.rpc.getOrigin",_.K.tb);_.C("gadgets.rpc.getTargetOrigin",_.K.fh);

_.L={};_.ed={};window.iframer=_.ed;
_.fd=function(a){var b=_.Ja(a);return"array"==b||"object"==b&&"number"==typeof a.length};_.gd=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};_.hd=function(a){return"number"==typeof a};_.id=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};_.jd=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};_.kd=2147483648*Math.random()|0;
_.Zh=function(a){return(0,window.encodeURIComponent)(String(a))};_.$h=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;_.ai=function(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")};_.bi=function(a,b,c){if(_.Ka(b))for(var d=0;d<b.length;d++)_.bi(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",_.Zh(b))}; _.ci=function(a,b){for(var c in b)_.bi(c,b[c],a);return a};

var Zk;_.Xk=function(a){if(!_.fd(a))return null;for(var b={},c=0;c<a.length;c++)b[a[c]]=a[c];return b};_.Yk=function(a,b){var c=a.length;if(c!=b.length)return!1;for(var d=0;d<c;++d){var e=a.charCodeAt(d),f=b.charCodeAt(d);65<=e&&90>=e&&(e+=32);65<=f&&90>=f&&(f+=32);if(e!=f)return!1}return!0};Zk=null;
_.$k=function(a){if(null===Zk){var b=_.D("client/headers/response");b||(b=_.D("googleapis/headers/response"));Zk=_.Xk(b)}if(null!=Zk){if(Zk.hasOwnProperty(a))return!0;for(var c in Zk)if(Zk.hasOwnProperty(c)&&_.Yk(c,a))return!0}return!1};
_.al=function(a){a=String(a||"").split("\x00").join("");for(var b=[],c=!0,d=0,e=a.length;d<e;++d){var f=a.charAt(d),g=a.charCodeAt(d);if(55296<=g&&56319>=g&&d+1<e){var k=a.charAt(d+1),l=a.charCodeAt(d+1);56320<=l&&57343>=l&&(f+=k,g=65536+(g-55296<<10)+(l-56320),++d)}if(!(0<=g&&1114109>=g)||55296<=g&&57343>=g||64976<=g&&65007>=g||65534==(g&65534))g=65533,f=String.fromCharCode(g);k=!(32<=g&&126>=g)||" "==f||c&&":"==f||"\\"==f;!c||"/"!=f&&"?"!=f||(c=!1);"%"==f&&(d+2>=e?k=!0:(l=16*(0,window.parseInt)(a.charAt(d+
1),16)+(0,window.parseInt)(a.charAt(d+2),16),0<=l&&255>=l?(g=l,f=0==g?"":"%"+(256+l).toString(16).toUpperCase().substr(1),d+=2):k=!0));k&&(f=(0,window.encodeURIComponent)(f),1>=f.length&&(0<=g&&127>=g?f="%"+(256+g).toString(16).toUpperCase().substr(1):(g=65533,f=(0,window.encodeURIComponent)(String.fromCharCode(g)))));b.push(f)}a=b.join("");a=a.split("#")[0];a=a.split("?");b=a[0].split("/");c=[];d=0;for(e=b.length;d<e;++d)f=b[d],g=f.split("%2E").join("."),g=g.split((0,window.encodeURIComponent)("\uff0e")).join("."),
"."==g?d+1==e&&c.push(""):".."==g?(0<c.length&&c.pop(),d+1==e&&c.push("")):c.push(f);a[0]=c.join("/");for(a=a.join("?");a&&"/"==a.charAt(0);)a=a.substr(1);return"/"+a};_.cl=function(a){var b=_.al(a);if(String(a)!=b)throw Error("G");(a=b)&&"/"==a.charAt(a.length-1)||(a=(a||"")+"/");_.K.register("init",function(){_.cl(a)});_.bl=a;_.I.mc(window.location.href)};
_.dl="function"==typeof window.atob;
var el,fl,gl,hl,il,jl,kl,ll,ml;el=null;fl=function(a,b){if(null!=a)for(var c in a)if(a.hasOwnProperty(c)&&_.Yk(c,b))return{name:c,value:a[c]}};gl=null;
hl=function(a,b,c,d){var e=fl(b,"X-Goog-Safety-Encoding");if(null!=e){if(_.dl)a=window.atob(a);else{if(!el){var f="ABCDEFGHIJKLMNOPQRSTUVWXYZ",f=f+(f.toLowerCase()+"0123456789+/=");el={};for(var g=0;g<f.length;g++)el[f.charAt(g)]=g}for(var f=el,g=[],k=0;k<a.length;){var l=f[a.charAt(k++)],m=k<a.length?f[a.charAt(k)]:0;++k;var n=k<a.length?f[a.charAt(k)]:0;++k;var p=k<a.length?f[a.charAt(k)]:0;++k;if(null==l||null==m||null==n||null==p)throw Error();g.push(l<<2|m>>4);64!=n&&(g.push(m<<4&240|n>>2),64!=
p&&g.push(n<<6&192|p))}a=String.fromCharCode.apply(null,g)}f=fl(b,"X-Goog-Safety-Content-Type");b["Content-Type"]=f.value;delete b[e.name];delete b[f.name]}return{body:a,headers:b,status:c,statusText:d}};il=function(){try{return new window.XMLHttpRequest}catch(a){}try{return new window.ActiveXObject("Msxml2.XMLHTTP")}catch(a){}return null};jl=function(a,b){b=b||"0.1";var c=[];c.push(a||"google-api-javascript-client");b&&(c.push("/"),c.push(b));return c.join("")};
kl=function(a,b){if(!a||!b)return!1;for(var c=0,d=b.length;c<d;++c){var e=b.charCodeAt(c);if(!(32<=e&&126>=e))return!1}null===gl&&((c=_.D("client/headers/request"))||(c=_.D("googleapis/headers/request")),gl=_.Xk(c));return null!=gl?gl.hasOwnProperty(a):!1};
ll=function(a,b,c,d){a=a||{};var e=a.headers||{},f=a.httpMethod||"GET",g=String(a.url||""),k=a.urlParams||null,l=a.body||null,m=a.clientName||null,n=a.clientVersion||null;c=c||null;d=d||null;g=_.al(g);g=_.bl+String(g||"/").substr(1);g=_.ai(_.ci([g],k));e["X-JavaScript-User-Agent"]=jl(m,n);delete e["X-Origin"];c&&(e["X-Origin"]=c);delete e["X-Referer"];d&&(e["X-Referer"]=d);e["X-Goog-Encode-Response-If-Executable"]="base64";l&&"object"===typeof l&&(l=(0,_.qc)(l));var p=il();if(!p)throw Error("H");
p.open(f,g);p.onreadystatechange=function(){if(4==p.readyState&&0!==p.status){var a=p.responseText;var c=p.getAllResponseHeaders(),d={};if(c)for(var c=c.split("\r\n"),e=0;e<c.length;e++){var f=c[e],g=f.indexOf(": ");if(0<g){var k=f.substring(0,g),f=f.substring(g+2);_.$k(k)&&(d[k]=f)}}a=hl(a,d,p.status,p.statusText);b(a)}};p.onerror=function(){var c;c={error:{code:-1,message:"A network error occurred, and the request could not be completed."}};if("/rpc"==a.url){for(var d=a.body,e=[],f=0;f<d.length;f++){var g=
(0,_.qc)(c),g=(0,_.rc)(g);g.id=d[f].id;e.push(g)}c=e}c=(0,_.qc)(c);c=hl(c);b(c)};for(var v in e)e.hasOwnProperty(v)&&(f=e[v],kl(v,f)&&p.setRequestHeader(v,f));p.send(l?l:null)};ml=function(a,b,c,d){var e={},f=0;if(0==a.length)b(e);else{var g=function(k){var l=k.key;ll(k.params,function(c){e[l]={data:c};f++;a.length==f?b((0,_.qc)(e)):g(a[f])},c,d)};g(a[f])}};_.Ij=_.Ij||{};
_.Ij.aM=function(){_.K.register("makeHttpRequests",function(a){".."==this.f&&this.t==_.K.Zg("..")&&this.origin==_.K.fh("..")&&ml.call(this,a,this.callback,this.origin,this.referer)})};_.Ij.jc=function(){var a=String(window.location.pathname);18<=a.length&&"/static/proxy.html"==a.substr(a.length-18)&&(a=a.substr(0,a.length-18));a||(a="/");_.Ij.rz(a)};_.Ij.rz=function(a){var b=_.al(a);if(String(a)!=b)throw Error("G");_.Ij.aM();_.cl(a);_.K.call("..","ready:"+_.K.Zg(".."))};
_.C("googleapis.ApiServer.makeHttpRequests",ml);_.C("googleapis.ApiServer.initWithPath",_.cl);_.C("googleapis.server.init",_.Ij.jc);_.C("googleapis.server.initWithPath",_.Ij.rz);
});
// Google Inc.