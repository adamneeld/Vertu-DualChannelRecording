!function(e){var t={};function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="C:\\Users\\adam_\\Downloads\\flex-dual-channel-recording-master\\Nov2022\\flex-dual-channel-recording-master\\plugin-dual-channel-recording\\public",__webpack_require__(__webpack_require__.s=4)}([function(e,t,r){e.exports=r(9)},function(e,t){let r=window.Twilio.Flex;window.Twilio&&window.Twilio.FlexProxy&&window.Twilio.FlexProxy["plugin-dual-channel-recording"]&&(r=window.Twilio.FlexProxy["plugin-dual-channel-recording"]),e.exports=r},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadCSS=t.loadJS=t.getRuntimeUrl=t.getAssetsUrl=t.FlexPlugin=t.loadPlugin=void 0;var n=r(5);Object.defineProperty(t,"loadPlugin",{enumerable:!0,get:function(){return n.loadPlugin}}),Object.defineProperty(t,"FlexPlugin",{enumerable:!0,get:function(){return n.FlexPlugin}});var o=r(6);Object.defineProperty(t,"getAssetsUrl",{enumerable:!0,get:function(){return o.getAssetsUrl}}),Object.defineProperty(t,"getRuntimeUrl",{enumerable:!0,get:function(){return o.getRuntimeUrl}});var a=r(7);Object.defineProperty(t,"loadJS",{enumerable:!0,get:function(){return a.loadJS}});var i=r(8);Object.defineProperty(t,"loadCSS",{enumerable:!0,get:function(){return i.loadCSS}})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return Math.random().toString(26).slice(2)}},function(e,t,r){e.exports=r(10)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadPlugin=t.FlexPlugin=void 0;var n=function n(e){this.uniqueName="plugin-dual-channel-recording",this.version="3.5.0",this.dependencies={"@twilio/flex-plugin-scripts":"6.0.3","@twilio/flex-plugin":"6.0.3","flex-ui":"1.32.1",react:"16.14.0","react-dom":"16.14.0"},this.name=e,console.log("loading "+this.name+"@"+this.version+" plugin")};t.FlexPlugin=n;t.loadPlugin=function(e){Twilio&&Twilio.Flex&&Twilio.Flex.Plugins?Twilio.Flex.Plugins.init(e):console.warn("This version of Flex does not appear to support plugins.")}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getAssetsUrl=t.getRuntimeUrl=void 0;t.getRuntimeUrl=function(){if(document&&document.currentScript){var e=document.currentScript;if("string"===typeof e.src){var t=e.src;return t.substr(0,t.lastIndexOf("/"))}}return""};t.getAssetsUrl=function(){return t.getRuntimeUrl()+"/assets"}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.loadJS=void 0;var o=n(r(3));t.loadJS=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];e.forEach((function(e){var t=document.createElement("script");t.id="external-js-"+o.default(),t.type="text/javascript",t.src=e,document.body.appendChild(t)}))}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.loadCSS=void 0;var o=n(r(3));t.loadCSS=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];e.forEach((function(e){var t=document.createElement("link");t.id="external-css-"+o.default(),t.rel="stylesheet",t.type="text/css",t.media="all",t.href=e,document.head.appendChild(t)}))}},function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function define(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{define({},"")}catch(d){define=function(e,t,r){return e[t]=r}}function wrap(e,t,r,n){var o=t&&t.prototype instanceof Generator?t:Generator,a=Object.create(o.prototype),i=new Context(n||[]);return a._invoke=function makeInvokeMethod(e,t,r){var n="suspendedStart";return function invoke(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return doneResult()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=maybeInvokeDelegate(i,r);if(u){if(u===c)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=tryCatch(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===c)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),a}function tryCatch(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(d){return{type:"throw",arg:d}}}e.wrap=wrap;var c={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var u={};define(u,o,(function(){return this}));var l=Object.getPrototypeOf,s=l&&l(l(values([])));s&&s!==t&&r.call(s,o)&&(u=s);var f=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(u);function defineIteratorMethods(e){["next","throw","return"].forEach((function(t){define(e,t,(function(e){return this._invoke(t,e)}))}))}function AsyncIterator(e,t){var n;this._invoke=function enqueue(o,a){function callInvokeWithMethodAndArg(){return new t((function(n,i){!function invoke(n,o,a,i){var c=tryCatch(e[n],e,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"===typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){invoke("next",e,a,i)}),(function(e){invoke("throw",e,a,i)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return invoke("throw",e,a,i)}))}i(c.arg)}(o,a,n,i)}))}return n=n?n.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}}function maybeInvokeDelegate(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,maybeInvokeDelegate(e,t),"throw"===t.method))return c;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var n=tryCatch(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,c;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,c):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,c)}function pushTryEntry(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function resetTryEntry(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function Context(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e){var t=e[o];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function next(){for(;++n<e.length;)if(r.call(e,n))return next.value=e[n],next.done=!1,next;return next.value=void 0,next.done=!0,next};return a.next=a}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,define(f,"constructor",GeneratorFunctionPrototype),define(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===GeneratorFunction||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,define(e,i,"GeneratorFunction")),e.prototype=Object.create(f),e},e.awrap=function(e){return{__await:e}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,a,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new AsyncIterator(wrap(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},defineIteratorMethods(f),define(f,i,"Generator"),define(f,o,(function(){return this})),define(f,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function next(){for(;t.length;){var r=t.pop();if(r in e)return next.value=r,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function handle(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return handle("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0);if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,c):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),c},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),c}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:values(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),c}},e}(e.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},function(e,t,r){"use strict";r.r(t);var n=r(2);function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _typeof(e){return(_typeof="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!==typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var o=r(0),a=r.n(o);function asyncGeneratorStep(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(l){return void r(l)}c.done?t(u):Promise.resolve(u).then(n,o)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function _next(e){asyncGeneratorStep(a,n,o,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(a,n,o,_next,_throw,"throw",e)}_next(void 0)}))}}var i=r(1),c="customer",u="worker",l={accepted:"accepted",rejected:"rejected",timeout:"timeout",canceled:"canceled",rescinded:"rescinded",completed:"completed",wrapup:"wrapup"},s=i.Manager.getInstance(),f=new Map,d="worker".toLowerCase();if("No"===s.workerClient.attributes.RecordCalls);else{var p=function(){var e=_asyncToGenerator(a.a.mark((function _callee(e){var t,r,n,o,i;return a.a.wrap((function _callee$(a){for(;;)switch(a.prev=a.next){case 0:return console.debug("startCallRecording"),console.debug("Creating recording for call SID:",e),t="https://".concat("dual-channel-rec-serverless-9257-dev.twil.io","/create-recording"),r={Token:s.store.getState().flex.session.ssoTokenPayload.token,callSid:e},n={method:"POST",body:new URLSearchParams(r),headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}},a.prev=5,a.next=8,fetch(t,n);case 8:return i=a.sent,a.next=11,i.json();case 11:o=a.sent,console.debug("Created recording",o),a.next=18;break;case 15:a.prev=15,a.t0=a.catch(5),console.debug("Error creating recording for call SID ".concat(e,"."),a.t0);case 18:return a.abrupt("return",o);case 19:case"end":return a.stop()}}),_callee,null,[[5,15]])})));return function startCallRecording(t){return e.apply(this,arguments)}}(),h=function(){var e=_asyncToGenerator(a.a.mark((function _callee2(e,t,r){var n,o,c,u,l,f,p,h,y,v,_,g,b,w,m,x,k,P,O;return a.a.wrap((function _callee2$(a){for(;;)switch(a.prev=a.next){case 0:if(console.debug("addCallDataToTask"),n=e.attributes,o=e.conference,c=_objectSpread2({},n),u=!1,i.TaskHelper.isOutboundCallTask(e)&&(u=!0,c.conference={sid:o.conferenceSid},c.call_sid=t),!r){a.next=29;break}l=e.dateUpdated,f=e.sid,u=!0,p=n.conversations||{},h=s.store.getState(),y=h&&h.flex,v=y&&y.worker,_=v&&v.source.accountSid,g=r.sid,b="https://api.twilio.com/2010-04-01/Accounts/".concat(_),w="".concat(b,"/Recordings/").concat(g),m=n.reservation_attributes||{},x=new Date(l).valueOf()-1e3,k={url:w,type:"VoiceRecording",start_time:x,channels:["customer","others"]},P={attributes:v.attributes,WorkerSid:v.source.sid},a.t0=d,a.next="worker"===a.t0?23:"customer"===a.t0?27:29;break;case 23:return(O={})[f]={media:[k],worker:P,call_sid:t},c=_objectSpread2(_objectSpread2({},n),{},{reservation_attributes:_objectSpread2(_objectSpread2({},m),O),conversations:_objectSpread2(_objectSpread2({},p),{},{media:[k]})}),a.abrupt("break",29);case 27:return c.conversations=_objectSpread2(_objectSpread2({},p),{},{media:[k]}),a.abrupt("break",29);case 29:if(!u){a.next=32;break}return a.next=32,e.setAttributes(c);case 32:case"end":return a.stop()}}),_callee2)})));return function addCallDataToTask(t,r,n){return e.apply(this,arguments)}}(),y=function isTaskActive(e){console.debug("isTaskActive");var t=e.sid;return"canceled"!==e.taskStatus&&s.workerClient.reservations.has(t)},v=function waitForConferenceParticipants(e){return new Promise((function(t){console.debug("waitForConferenceParticipants");var r=setInterval(_asyncToGenerator(a.a.mark((function _callee3(){var n,o,i,l;return a.a.wrap((function _callee3$(a){for(;;)switch(a.prev=a.next){case 0:if(n=e.conference,y(e)){a.next=5;break}return console.debug("Call canceled, clearing waitForConferenceInterval"),r=clearInterval(r),a.abrupt("return");case 5:if(void 0!==n){a.next=7;break}return a.abrupt("return");case 7:if(o=n.participants,!(Array.isArray(o)&&o.length<2)){a.next=10;break}return a.abrupt("return");case 10:if(i=o.find((function(e){return e.participantType===u})),l=o.find((function(e){return e.participantType===c})),i&&l){a.next=14;break}return a.abrupt("return");case 14:console.debug("Worker and customer participants joined conference"),r=clearInterval(r),t(o);case 17:case"end":return a.stop()}}),_callee3)}))),100);setTimeout((function(){r&&(console.debug("Customer participant didn't show up within ".concat(60," seconds")),clearInterval(r),t([]))}),6e4)}))},_=function(){var e=_asyncToGenerator(a.a.mark((function _callee4(e){var t,r;return a.a.wrap((function _callee4$(n){for(;;)switch(n.prev=n.next){case 0:if(console.debug("addMissingCallDataIfNeeded"),t=e.attributes,r=t.conference,!i.TaskHelper.isOutboundCallTask(e)||r){n.next=6;break}return n.next=6,h(e);case 6:case"end":return n.stop()}}),_callee4)})));return function addMissingCallDataIfNeeded(t){return e.apply(this,arguments)}}();i.Actions.addListener("beforeCompleteTask",function(){var e=_asyncToGenerator(a.a.mark((function _callee5(e){return a.a.wrap((function _callee5$(t){for(;;)switch(t.prev=t.next){case 0:console.debug("beforeCompleteTask"),_(e.task);case 2:case"end":return t.stop()}}),_callee5)})));return function(t){return e.apply(this,arguments)}}()),i.Actions.addListener("beforeHangupCall",function(){var e=_asyncToGenerator(a.a.mark((function _callee6(e){return a.a.wrap((function _callee6$(t){for(;;)switch(t.prev=t.next){case 0:console.debug("beforeHangupCall"),_(e.task);case 2:case"end":return t.stop()}}),_callee6)})));return function(t){return e.apply(this,arguments)}}());var g=function(){var e=_asyncToGenerator(a.a.mark((function _callee8(e){var t,r;return a.a.wrap((function _callee8$(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.attributes,!(r=t.conversations)||!r.media||"customer"!=d){n.next=4;break}return n.abrupt("return");case 4:console.debug("Waiting for customer and worker to join the conference"),setTimeout(function(){var t=_asyncToGenerator(a.a.mark((function _callee7(){var t,r,n,o;return a.a.wrap((function _callee7$(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v(e);case 2:t=a.sent,console.debug("participants",t),a.t0=d,a.next="customer"===a.t0?7:"worker"===a.t0?9:11;break;case 7:return r=t.find((function(e){return"customer"===e.participantType})),a.abrupt("break",11);case 9:return r=t.find((function(t){return"worker"===t.participantType&&"joined"===t._source.status&&e.workerSid===t.workerSid})),a.abrupt("break",11);case 11:if(console.debug("Recorded Participant: ",r),r){a.next=15;break}return console.debug("No customer or worker participant. Not starting the call recording"),a.abrupt("return");case 15:return n=r.callSid,console.debug("callSid: ",n),a.next=19,p(n);case 19:return o=a.sent,a.next=22,h(e,n,o);case 22:case"end":return a.stop()}}),_callee7)})));return function getpart(){return t.apply(this,arguments)}}(),2e3);case 6:case"end":return n.stop()}}),_callee8)})));return function handleAcceptedCall(t){return e.apply(this,arguments)}}(),b=function(){var e=_asyncToGenerator(a.a.mark((function _callee9(e){var t;return a.a.wrap((function _callee9$(r){for(;;)switch(r.prev=r.next){case 0:if(t=i.TaskHelper.getTaskByTaskSid(e.sid),!i.TaskHelper.isCallTask(t)){r.next=4;break}return r.next=4,g(t);case 4:case"end":return r.stop()}}),_callee9)})));return function handleReservationAccepted(t){return e.apply(this,arguments)}}(),w=function stopReservationListeners(e){console.debug("stopReservationListeners");var t=f.get(e);t&&(t.forEach((function(t){e.removeListener(t.event,t.callback)})),f.delete(e))},m=function initReservationListeners(e){console.debug("initReservationListeners");var t=e.addListener?e:e.source;console.debug("irl, trueReservation",t),w(t);var r=[];Object.values(l).forEach((function(e){console.debug(e);var n=function callback(){return function handleReservationUpdated(e,t){switch(console.debug("Event, reservation updated",e,t),e){case l.accepted:b(t);break;case l.wrapup:case l.completed:case l.rejected:case l.timeout:case l.canceled:case l.rescinded:w(t)}}(e,t)};t.addListener(e,n),r.push({event:e,callback:n})})),f.set(t,r)},x=function handleReservationCreated(e){console.debug("handleReservationCreated"),function handleNewReservation(e){console.debug("handleNewReservation",e),m(e)}(e)};s.workerClient.on("reservationCreated",(function(e){x(e)}))}var k=function(e){!function _inherits(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(DualChannelRecordingPlugin,e);var t=_createSuper(DualChannelRecordingPlugin);function DualChannelRecordingPlugin(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DualChannelRecordingPlugin),t.call(this,"DualChannelRecordingPlugin")}return function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(DualChannelRecordingPlugin,[{key:"init",value:function init(e,t){"worker"!="worker".toLowerCase()&&"customer"!="worker".toLowerCase()&&(e.Notifications.registerNotification({id:"brokenVar",content:"The Dual Channel Recording plugin will not work because the .env file has not been configured correctly.",type:"error",timeout:0}),e.Notifications.showNotification("brokenVar",null),console.error("ERROR: REACT_APP_RECORD_CHANNEL env variable does not have the correct value. Refer to your .env file to fix."))}}]),DualChannelRecordingPlugin}(n.FlexPlugin);n.loadPlugin(k)}]);
//# sourceMappingURL=bundle.js.map