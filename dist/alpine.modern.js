var e={tasks:[],lowPriorityTasks:[],nextTicks:[],shouldFlush:!1,ignore:!1,ignore(e){this.ignore=!0,e(),this.ignore=!1},task(e){!0!==this.ignore&&(this.tasks.push(e),this.shouldFlushAtEndOfRequest())},nextTick(e){this.nextTicks.push(e),this.shouldFlushAtEndOfRequest()},holdNextTicks(){this.holdNextTicksOver=!0},releaseNextTicks(){for(;this.nextTicks.length>0;)this.nextTicks.shift()();this.holdNextTicksOver=!1},shouldFlushAtEndOfRequest(){this.shouldFlush=!0,queueMicrotask(()=>{this.shouldFlush&&this.flush(),this.shouldFlush=!1})},flushImmediately(){for(;this.tasks.length>0;)this.tasks.shift()();if(!this.holdNextTicksOver)for(;this.nextTicks.length>0;)this.nextTicks.shift()()},flush(){setTimeout(()=>{for(performance.now();this.tasks.length>0;){var e,t;if(null!=(e=navigator)&&null!=(t=e.scheduling)&&t.isInputPending())return void setTimeout(this.flush.bind(this));this.tasks.shift()()}this.holdNextTicksOver||setTimeout(()=>{for(;this.nextTicks.length>0;)this.nextTicks.shift()()})})}};const t={},n=Object.assign,i=Object.prototype.hasOwnProperty,r=(e,t)=>i.call(e,t),s=Array.isArray,a=e=>"[object Map]"===u(e),o=e=>"symbol"==typeof e,l=e=>null!==e&&"object"==typeof e,c=Object.prototype.toString,u=e=>c.call(e),d=e=>"string"==typeof e&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,f=(e,t)=>e!==t&&(e==e||t==t),h=new WeakMap,p=[];let m;const _=Symbol(""),v=Symbol("");function g(e,n=t){(function(e){return e&&!0===e._isEffect})(e)&&(e=e.raw);const i=function(e,t){const n=function(){if(!n.active)return t.scheduler?void 0:e();if(!p.includes(n)){!function(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}(n);try{return w(),p.push(n),m=n,e()}finally{p.pop(),E(),m=p[p.length-1]}}};return n.id=y++,n.allowRecurse=!!t.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}(e,n);return n.lazy||i(),i}let y=0,x=!0;const b=[];function k(){b.push(x),x=!1}function w(){b.push(x),x=!0}function E(){const e=b.pop();x=void 0===e||e}function A(e,t,n){if(!x||void 0===m)return;let i=h.get(e);i||h.set(e,i=new Map);let r=i.get(n);r||i.set(n,r=new Set),r.has(m)||(r.add(m),m.deps.push(r))}function O(e,t,n,i,r,o){const l=h.get(e);if(!l)return;const c=new Set,u=e=>{e&&e.forEach(e=>{(e!==m||e.allowRecurse)&&c.add(e)})};if("clear"===t)l.forEach(u);else if("length"===n&&s(e))l.forEach((e,t)=>{("length"===t||t>=i)&&u(e)});else switch(void 0!==n&&u(l.get(n)),t){case"add":s(e)?d(n)&&u(l.get("length")):(u(l.get(_)),a(e)&&u(l.get(v)));break;case"delete":s(e)||(u(l.get(_)),a(e)&&u(l.get(v)));break;case"set":a(e)&&u(l.get(_))}c.forEach(e=>{e.options.scheduler?e.options.scheduler(e):e()})}const S=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(o)),T=$(),C=$(!1,!0),N=$(!0),j=$(!0,!0),R={};function $(e=!1,t=!1){return function(n,i,a){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_raw"===i&&a===(e?re:ie).get(n))return n;const c=s(n);if(!e&&c&&r(R,i))return Reflect.get(R,i,a);const u=Reflect.get(n,i,a);return(o(i)?S.has(i):"__proto__"===i||"__v_isRef"===i)?u:(e||A(n,0,i),t?u:ce(u)?c&&d(i)?u:u.value:l(u)?e?ae(u):se(u):u)}}function M(e=!1){return function(t,n,i,a){const o=t[n];if(!e&&(i=le(i),!s(t)&&ce(o)&&!ce(i)))return o.value=i,!0;const l=s(t)&&d(n)?Number(n)<t.length:r(t,n),c=Reflect.set(t,n,i,a);return t===le(a)&&(l?f(i,o)&&O(t,"set",n,i):O(t,"add",n,i)),c}}["includes","indexOf","lastIndexOf"].forEach(e=>{const t=Array.prototype[e];R[e]=function(...e){const n=le(this);for(let e=0,t=this.length;e<t;e++)A(n,0,e+"");const i=t.apply(n,e);return-1===i||!1===i?t.apply(n,e.map(le)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{const t=Array.prototype[e];R[e]=function(...e){k();const n=t.apply(this,e);return E(),n}});const P={get:T,set:M(),deleteProperty:function(e,t){const n=r(e,t),i=Reflect.deleteProperty(e,t);return i&&n&&O(e,"delete",t,void 0),i},has:function(e,t){const n=Reflect.has(e,t);return o(t)&&S.has(t)||A(e,0,t),n},ownKeys:function(e){return A(e,0,s(e)?"length":_),Reflect.ownKeys(e)}},L={get:N,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},F=(n({},P,{get:C,set:M(!0)}),n({},L,{get:j}),e=>l(e)?se(e):e),q=e=>l(e)?ae(e):e,z=e=>e,D=e=>Reflect.getPrototypeOf(e);function W(e,t,n=!1,i=!1){const r=le(e=e.__v_raw),s=le(t);t!==s&&!n&&A(r,0,t),!n&&A(r,0,s);const{has:a}=D(r),o=n?q:i?z:F;return a.call(r,t)?o(e.get(t)):a.call(r,s)?o(e.get(s)):void 0}function B(e,t=!1){const n=this.__v_raw,i=le(n),r=le(e);return e!==r&&!t&&A(i,0,e),!t&&A(i,0,r),e===r?n.has(e):n.has(e)||n.has(r)}function I(e,t=!1){return e=e.__v_raw,!t&&A(le(e),0,_),Reflect.get(e,"size",e)}function U(e){e=le(e);const t=le(this),n=D(t).has.call(t,e);return t.add(e),n||O(t,"add",e,e),this}function K(e,t){t=le(t);const n=le(this),{has:i,get:r}=D(n);let s=i.call(n,e);s||(e=le(e),s=i.call(n,e));const a=r.call(n,e);return n.set(e,t),s?f(t,a)&&O(n,"set",e,t):O(n,"add",e,t),this}function H(e){const t=le(this),{has:n,get:i}=D(t);let r=n.call(t,e);r||(e=le(e),r=n.call(t,e)),i&&i.call(t,e);const s=t.delete(e);return r&&O(t,"delete",e,void 0),s}function Z(){const e=le(this),t=0!==e.size,n=e.clear();return t&&O(e,"clear",void 0,void 0),n}function G(e,t){return function(n,i){const r=this,s=r.__v_raw,a=le(s),o=e?q:t?z:F;return!e&&A(a,0,_),s.forEach((e,t)=>n.call(i,o(e),o(t),r))}}function J(e,t,n){return function(...i){const r=this.__v_raw,s=le(r),o=a(s),l="entries"===e||e===Symbol.iterator&&o,c="keys"===e&&o,u=r[e](...i),d=t?q:n?z:F;return!t&&A(s,0,c?v:_),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:l?[d(e[0]),d(e[1])]:d(e),done:t}},[Symbol.iterator](){return this}}}}function Q(e){return function(...t){return"delete"!==e&&this}}const V={get(e){return W(this,e)},get size(){return I(this)},has:B,add:U,set:K,delete:H,clear:Z,forEach:G(!1,!1)},X={get(e){return W(this,e,!1,!0)},get size(){return I(this)},has:B,add:U,set:K,delete:H,clear:Z,forEach:G(!1,!0)},Y={get(e){return W(this,e,!0)},get size(){return I(this,!0)},has(e){return B.call(this,e,!0)},add:Q("add"),set:Q("set"),delete:Q("delete"),clear:Q("clear"),forEach:G(!0,!1)};function ee(e,t){const n=t?X:e?Y:V;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get(r(n,i)&&i in t?n:t,i,s)}["keys","values","entries",Symbol.iterator].forEach(e=>{V[e]=J(e,!1,!1),Y[e]=J(e,!0,!1),X[e]=J(e,!1,!0)});const te={get:ee(!1,!1)},ne={get:ee(!0,!1)},ie=new WeakMap,re=new WeakMap;function se(e){return e&&e.__v_isReadonly?e:oe(e,!1,P,te)}function ae(e){return oe(e,!0,L,ne)}function oe(e,t,n,i){if(!l(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const r=t?re:ie,s=r.get(e);if(s)return s;const a=(o=e).__v_skip||!Object.isExtensible(o)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>u(e).slice(8,-1))(o));var o;if(0===a)return e;const c=new Proxy(e,2===a?i:n);return r.set(e,c),c}function le(e){return e&&le(e.__v_raw)||e}function ce(e){return Boolean(e&&!0===e.__v_isRef)}function ue(e,t){let n=t||Array.from(e.attributes).map(e=>({name:e.name,value:e.value}));return n=n.map(({name:e,value:t})=>function({name:e,value:t},n){return pe.push(({name:e,value:t})=>(e.startsWith("@")&&(e=e.replace("@","x-on:")),{name:e,value:t})),pe.push(({name:e,value:t})=>(e.startsWith(":")&&(e=e.replace(":","x-bind:")),{name:e,value:t})),pe.reduce((e,t)=>t(e,n),{name:e,value:t})}({name:e,value:t})),function(e){let t=["data","spread","ref","init","bind","for","model","transition","show","catch-all","element"];return e.sort((e,n)=>{let i=-1===t.indexOf(e.type)?"catch-all":e.type,r=-1===t.indexOf(n.type)?"catch-all":n.type;return t.indexOf(i)-t.indexOf(r)})}(n.filter(fe).map(he))}let de=/^x-([^:^.]+)\b/;function fe({name:e}){return de.test(e)}function he({name:e,value:t}){const n=e.match(de),i=e.match(/:([a-zA-Z0-9\-:]+)/),r=e.match(/\.[^.\]]+(?=[^\]]*$)/g)||[];return{type:n?n[1]:null,value:i?i[1]:null,modifiers:r.map(e=>e.replace(".","")),expression:t}}let pe=[];function me(e){return e.hasAttribute("x-data")||e.hasAttribute("x-data.append")?e:e.parentElement?me(e.parentElement):void 0}function _e(e){return e._x_dataStack?e._x_dataStack:e instanceof ShadowRoot?_e(e.host):e.parentNode?_e(e.parentNode):new Set}let ve={reactive:se,syncEffect:g,markRaw:function(e){return Object.defineProperty(e,"__v_skip",{configurable:!0,enumerable:!1,value:!0}),e},toRaw:le,scheduler:e,get effect(){return this.skipEffects?()=>{}:e=>g(()=>{e()})},get effectSync(){return this.skipEffects?()=>{}:e=>g(()=>{e()})},directives:{},magics:{},components:{},directive(e,t){this.directives[e]=t},magic(e,t){this.magics[e]=t},component(e,t){this.components[e]=t},stores:{},store(e,t){this.stores[e]=this.reactive(t)},getStore(e){return this.stores[e]},injectMagics(e,t){Object.entries(this.magics).forEach(([n,i])=>{Object.defineProperty(e,`$${n}`,{get:()=>i(t),enumerable:!0})})},start(){document.dispatchEvent(new CustomEvent("alpine:initializing"),{bubbles:!0}),this.listenForAndReactToDomManipulations(document.querySelector("body")),Array.from(document.querySelectorAll("[x-data], [x-data\\.append]")).filter(e=>!me(e.parentNode||me(e))).forEach(e=>this.initTree(e)),document.dispatchEvent(new CustomEvent("alpine:initialized"),{bubbles:!0})},initTree(e){e instanceof ShadowRoot?Array.from(e.children).forEach(e=>this.walk(e,e=>this.init(e))):this.walk(e,e=>this.init(e)),this.scheduler.flush()},init(e,t){(t||ue(e)).forEach(t=>{(ve.directives[t.type]||(()=>{}))(e,t.value,t.modifiers,t.expression,ve.effect)})},destroyCallbacks:new WeakMap,addDestroyCallback(e,t){this.destroyCallbacks.get(e)||this.destroyCallbacks.set(e,[]),this.destroyCallbacks.get(e).push(t)},destroyTree(e){this.walk(e,e=>this.destroy(e)),this.scheduler.flush()},destroy(e){let t=this.destroyCallbacks.get(e);t&&t.forEach(e=>e())},listenForAndReactToDomManipulations(t){new MutationObserver(t=>{for(let n of t)if("childList"===n.type){for(let e of n.addedNodes)1===e.nodeType&&(e._x_ignoreMutationObserver||this.initTree(e));for(let t of n.removedNodes)1===t.nodeType&&e.nextTick(()=>{this.destroyTree(t)})}}).observe(t,{subtree:!0,childList:!0,deep:!1})},walk(e,t){let n=!1;if(t(e,()=>n=!0),n)return;let i=e.firstElementChild;for(;i;)this.walk(i,t,!1),i=i.nextElementSibling}};function ge(e,t){var n,i;return("object"==typeof(n=t)&&!n instanceof String||Array.isArray(n))&&console.warn("Alpine: class bindings must return a string or a stringable type. Arrays and Objects are no longer supported."),!0===t&&(t=""),i=(t=>t.split(" ").filter(t=>!e.classList.contains(t)).filter(Boolean))(t||""),e.classList.add(...i),()=>{e.classList.remove(...i)}}function ye(e,{during:t="",start:n="",end:i=""}={},r=(()=>{}),s=(()=>{})){let a,o,l;e._x_transitioning&&e._x_transitioning.cancel(),ke(e,{start(){a=ge(e,n)},during(){o=ge(e,t)},before:r,end(){a(),l=ge(e,i)},after:s,cleanup(){o(),l()}})}function xe(e,{during:t={},start:n={},end:i={}},r=(()=>{}),s=(()=>{})){let a,o,l;e._x_transitioning&&e._x_transitioning.cancel(),ke(e,{start(){a=be(e,n)},during(){o=be(e,t)},before:r,end(){a(),l=be(e,i)},after:s,cleanup(){o(),l()}})}function be(e,t){let n={};return Object.entries(t).forEach(([t,i])=>{n[t]=e.style[t],e.style[t]=i}),()=>{be(e,n)}}function ke(t,n){let i=we(()=>{n.after(),t.isConnected&&n.cleanup(),delete t._x_transitioning});t._x_transitioning={beforeCancels:[],beforeCancel(e){this.beforeCancels.push(e)},cancel:we(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();i()}),finish:i},n.start(),n.during(),e.holdNextTicks(),requestAnimationFrame(()=>{let i=1e3*Number(getComputedStyle(t).transitionDuration.replace(/,.*/,"").replace("s",""));0===i&&(i=1e3*Number(getComputedStyle(t).animationDuration.replace("s",""))),n.before(),requestAnimationFrame(()=>{n.end(),e.releaseNextTicks(),setTimeout(t._x_transitioning.finish,i)})})}function we(e){let t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}function Ee(e,t,n){if(-1===e.indexOf(t))return n;const i=e[e.indexOf(t)+1];if(!i)return n;if("scale"===t&&!isNumeric(i))return n;if("duration"===t){let e=i.match(/([0-9]+)ms/);if(e)return e[1]}return"origin"===t&&["top","right","left","center","bottom"].includes(e[e.indexOf(t)+2])?[i,e[e.indexOf(t)+2]].join(" "):i}function Ae(e,t,n={},i=!0){let r=_e(e),s=n;ve.injectMagics(s,e);let a=[{}].concat(Array.from(r).concat([s])).reverse(),o=Object.getPrototypeOf(async function(){}).constructor;if("function"==typeof t){let e=function(...e){return new Proxy({},{get:(t,n)=>(e.find(e=>Object.keys(e).includes(n))||{})[n],set:(t,n,i)=>{let r=e.find(e=>Object.keys(e).includes(n));return r?r[n]=i:e[e.length-1][n]=i,!0}})}(...a),n=t.bind(e);return(...e)=>{let t=n(...e);return t instanceof Promise?e=>{t.then(t=>e(t))}:e=>e(t)}}let l=a.map((e,t)=>`$data${t}`),c=["$dataPlaceholder"].concat(l).reduce((e,t)=>`with (${t}) { ${e} }`,`${i?"__self.result = ":""}${t}`),u=l.concat(["$dataPlaceholder = {}"]),d=()=>{};d=Te(e,t,()=>(...e)=>{let t=new o(["__self",...u],`${c}; __self.finished = true; return __self.result;`);t.result=void 0,t.finished=!1;let n=t(t,...e);return e=>{t.finished?e(t.result):n.then(t=>{e(t)})}});let f=d.bind(null,...a);return Te.bind(null,e,t,f)}function Oe(e,t,n={},i=!0){return Ae(e,t,n,i)()}function Se(e,t,n={},i=!0){let r;return Ae(e,t,n,i)()(e=>r=e),r}function Te(e,t,n,...i){try{return n(...i)}catch(i){throw console.log(n.toString()),console.warn(`Alpine Expression Error: ${i.message}\n\nExpression: "${t}"\n\n`,e),i}}function Ce(e,t){e._x_dataStack=new Set(_e(e)),e._x_dataStack.add(t)}function Ne(e,t,n,i=[]){switch(e._x_bindings||(e._x_bindings=Alpine.reactive({})),e._x_bindings[t]=n,t=i.includes("camel")?t.toLowerCase().replace(/-(\w)/g,(e,t)=>t.toUpperCase()):t){case"value":!function(e,t){if("radio"===e.type)void 0===e.attributes.value&&(e.value=t),window.fromModel&&(e.checked=Re(e.value,t));else if("checkbox"===e.type)Number.isInteger(t)?e.value=t:Number.isInteger(t)||Array.isArray(t)||"boolean"==typeof t||[null,void 0].includes(t)?e.checked=Array.isArray(t)?t.some(t=>Re(t,e.value)):!!t:e.value=String(t);else if("SELECT"===e.tagName)!function(e,t){const n=[].concat(t).map(e=>e+"");Array.from(e.options).forEach(e=>{e.selected=n.includes(e.value)})}(e,t);else{if(e.value===t)return;e.value=t}}(e,n);break;case"class":!function(e,t){e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedClasses="object"==typeof t&&null!==t?function(e,t){let n=e=>e.split(" ").filter(Boolean),i=Object.entries(t).flatMap(([e,t])=>!!t&&n(e)).filter(Boolean),r=Object.entries(t).flatMap(([e,t])=>!t&&n(e)).filter(Boolean),s=[],a=[];return i.forEach(t=>{e.classList.contains(t)||(e.classList.add(t),s.push(t))}),r.forEach(t=>{e.classList.contains(t)&&(e.classList.remove(t),a.push(t))}),()=>{s.forEach(t=>e.classList.remove(t)),a.forEach(t=>e.classList.add(t))}}(e,t):ge(e,t)}(e,n);break;default:!function(e,t,n){[null,void 0,!1].includes(n)?e.removeAttribute(t):["disabled","checked","required","readonly","hidden","open","selected","autofocus","itemscope","multiple","novalidate","allowfullscreen","allowpaymentrequest","formnovalidate","autoplay","controls","loop","muted","playsinline","default","ismap","reversed","async","defer","nomodule"].includes(t)?je(e,t,t):je(e,t,n)}(e,t,n)}}function je(e,t,n){e.getAttribute(t)!=n&&e.setAttribute(t,n)}function Re(e,t){return e==t}function $e(e,t,n,i){let r={passive:n.includes("passive")};if(n.includes("camel")&&(t=t.toLowerCase().replace(/-(\w)/g,(e,t)=>t.toUpperCase())),n.includes("away"))return function(e,t,n,i,r){let s=a=>{e.contains(a.target)||e.offsetWidth<1&&e.offsetHeight<1||(i(a),n.includes("once")&&document.removeEventListener(t,s,r))};return document.addEventListener(t,s,r),()=>{document.removeEventListener(t,s,r)}}(e,t,n,i,r);{let s=n.includes("window")?window:n.includes("document")?document:e,a=o=>{(function(e){return["keydown","keyup"].includes(e)})(t)&&function(e,t){let n=t.filter(e=>!["window","document","prevent","stop"].includes(e));if(n.includes("debounce")){let e=n.indexOf("debounce");n.splice(e,Me((n[e+1]||"invalid-wait").split("ms")[0])?2:1)}if(0===n.length)return!1;if(1===n.length&&n[0]===Pe(e.key))return!1;const i=["ctrl","shift","alt","meta","cmd","super"].filter(e=>n.includes(e));return n=n.filter(e=>!i.includes(e)),!(i.length>0&&i.filter(t=>("cmd"!==t&&"super"!==t||(t="meta"),e[`${t}Key`])).length===i.length&&n[0]===Pe(e.key))}(o,n)||(n.includes("prevent")&&o.preventDefault(),n.includes("stop")&&o.stopPropagation(),n.includes("self")&&o.target!==e||(i(o),n.includes("once")&&s.removeEventListener(t,a,r)))};if(n.includes("debounce")){let e=n[n.indexOf("debounce")+1]||"invalid-wait",t=Me(e.split("ms")[0])?Number(e.split("ms")[0]):250;a=function(e,t){var n;return function(){var i=this,r=arguments,s=function(){n=null,e.apply(i,r)};clearTimeout(n),n=setTimeout(s,t)}}(a,t)}if(n.includes("throttle")){let e=n[n.indexOf("throttle")+1]||"invalid-wait",t=Me(e.split("ms")[0])?Number(e.split("ms")[0]):250;a=function(e,t){let n;return function(){n||(e.apply(this,arguments),n=!0,setTimeout(()=>n=!1,t))}}(a,t)}return s.addEventListener(t,a,r),()=>{s.removeEventListener(t,a,r)}}}function Me(e){return!Array.isArray(e)&&!isNaN(e)}function Pe(e){switch(e){case"/":return"slash";case" ":case"Spacebar":return"space";default:return e&&e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}}function Le(e){let t=e?parseFloat(e):null;return n=t,Array.isArray(n)||isNaN(n)?e:t;var n}function Fe(e){let t=e.parentNode;if(t)return t._x_do_hide?t:Fe(t)}function qe(){return(qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}ve.directive("transition",(e,t,n,i,r)=>{e._x_transition||(e._x_transition={enter:{during:"",start:"",end:""},leave:{during:"",start:"",end:""},in(t=(()=>{}),n=(()=>{})){return ye(e,{during:this.enter.during,start:this.enter.start,end:this.enter.end},t,n)},out(t=(()=>{}),n=(()=>{})){return ye(e,{during:this.leave.during,start:this.leave.start,end:this.leave.end},t,n)}}),{enter:t=>{e._x_transition.enter.during=t},"enter-start":t=>{e._x_transition.enter.start=t},"enter-end":t=>{e._x_transition.enter.end=t},leave:t=>{e._x_transition.leave.during=t},"leave-start":t=>{e._x_transition.leave.start=t},"leave-end":t=>{e._x_transition.leave.end=t}}[t](i)}),document.addEventListener("alpine:initializing",()=>{document.querySelectorAll("[x-element]").forEach(e=>{!function(e,t){customElements.define(e,class extends HTMLElement{constructor(){super();let n=t.hasAttribute("x-props")?Se(t,t.getAttribute("x-props")):{};this.setAttribute("x-element",e),this._x_defaultProps=n,this._x_template=t,queueMicrotask(()=>{0===_e(this).size&&console.log("not inside")})}})}(e.getAttribute("x-element"),e)})}),ve.directive("element",(e,t,n,i,r)=>{let s=e._x_template,a=e._x_defaultProps,o="string"==typeof(c=s)?document.createRange().createContextualFragment(c).firstElementChild:c.content.firstElementChild.cloneNode(!0),l=function(e,t){let n={};return e.hasAttribute("x-inject")?(e.getAttribute("x-inject").split(",").map(e=>e.trim()).forEach(e=>{let i=(t,n)=>t?t._x_provides&&void 0!==t._x_provides[e]?t._x_provides:i(t.parentNode):{},r=i(t);Object.defineProperty(n,e,{get:()=>r[e]})}),n):{}}(s,e);var c;o._x_dataStack=new Set([e._x_bindings||{},l]),function(e,t,n){if(Object.keys(n).forEach(t=>{e.hasAttribute(t)&&e.removeAttribute(t)}),e.hasAttribute("class")&&t.hasAttribute("class")){let n=e.getAttribute("class").split(" ").map(e=>e.trim()),i=t.getAttribute("class").split(" ").map(e=>e.trim());e.setAttribute("class",Array.from(new Set([...n,...i])).join(" "))}Array.from(e.attributes).forEach(e=>{t.setAttribute(e.name,e.value)})}(o,e,a),o._x_ignoreMutationObserver=!0,o._x_customElementRoot=!0,ve.initTree(o);let u=o.querySelector("slot"),d={};if(u&&e.hasAttribute("x-scope")){let t=e.getAttribute("x-scope");Object.defineProperty(d,t,{get:()=>u._x_bindings[t]})}e.childNodes.forEach(e=>{Ce(e,d)}),queueMicrotask(()=>{e.replaceWith(o),e.removeAttribute("x-element"),o.setAttribute("x-element",i),u&&u.replaceWith(...e.childNodes)})}),ve.directive("destroy",(e,t,n,i)=>{ve.addDestroyCallback(e,()=>Oe(e,i,{},!1))}),ve.directive("spread",(e,t,n,i,r)=>{let s=Se(e,i),a=ue(e,Object.entries(s).map(([e,t])=>({name:e,value:t})));ve.init(e,a)}),ve.directive("model",(e,t,n,i,r)=>{let s=Ae(e,i),a=Ae(e,`${i} = rightSideOfExpression($event, ${i})`);var o="select"===e.tagName.toLowerCase()||["checkbox","radio"].includes(e.type)||n.includes("lazy")?"change":"input";let l=function(e,t,n){return"radio"===e.type&&(e.hasAttribute("name")||e.setAttribute("name",n)),(n,i)=>{if(n instanceof CustomEvent&&void 0!==n.detail)return n.detail;if("checkbox"===e.type){if(Array.isArray(i)){let e=t.includes("number")?Le(n.target.value):n.target.value;return n.target.checked?i.concat([e]):i.filter(t=>!(t==e))}return n.target.checked}if("select"===e.tagName.toLowerCase()&&e.multiple)return t.includes("number")?Array.from(n.target.selectedOptions).map(e=>Le(e.value||e.text)):Array.from(n.target.selectedOptions).map(e=>e.value||e.text);{let e=n.target.value;return t.includes("number")?Le(e):t.includes("trim")?e.trim():e}}}(e,n,i);$e(e,o,n,e=>{a({$event:e,rightSideOfExpression:l})}),e._x_forceModelUpdate=()=>{s()(t=>{void 0===t&&i.match(/\./)&&(t=""),window.fromModel=!0,Ne(e,"value",t),delete window.fromModel})},r(()=>{n.includes("unintrusive")&&document.activeElement.isSameNode(e)||e._x_forceModelUpdate()})}),ve.directive("cloak",t=>{e.nextTick(()=>{t.removeAttribute("x-cloak")})}),ve.directive("watch",(e,t,n,i,r)=>{let s=Ae(e,`$watch('${t}', $value => ${i})`);setTimeout(()=>{s()})}),ve.directive("init",(e,t,n,i,r)=>{Oe(e,i,{},!1)}),ve.directive("text",(e,t,n,i,r)=>{let s=Ae(e,i);r(()=>{s()(t=>{e.textContent=t})})}),ve.directive("bind",(e,t,n,i,r)=>{let s=Ae(e,i);"key"!==t&&r(()=>s()(i=>{Ne(e,t,i,n)}))}),ve.directive("data",(e,t,n,i,r)=>{i=""===i?"{}":i;let s=ve.components,a=Object.keys(s).includes(i)?s[i]():Se(e,i);ve.injectMagics(a,e),Ce(e,se(a)),a.init&&Se(e,a.init.bind(a)),a.destroy&&ve.addDestroyCallback(e,()=>{Oe(e,a.destroy.bind(a))})}),ve.directive("show",(e,t,n,i,r)=>{let s=Ae(e,i,{},!0),a=()=>{e.style.display="none",e._x_is_shown=!1},o=()=>{1===e.style.length&&"none"===e.style.display?e.removeAttribute("style"):e.style.removeProperty("display"),e._x_is_shown=!0};n.includes("transition")&&function(e,t){e._x_transition={enter:{during:{},start:{},end:{}},leave:{during:{},start:{},end:{}},in(t=(()=>{}),n=(()=>{})){return xe(e,{during:this.enter.during,start:this.enter.start,end:this.enter.end},t,n)},out(t=(()=>{}),n=(()=>{})){return xe(e,{during:this.leave.during,start:this.leave.start,end:this.leave.end},t,n)}};let n=!t.includes("in")&&!t.includes("out"),i=n||t.includes("in"),r=n||t.includes("out");if(t.includes("in")&&!n&&(t=t.filter((e,n)=>n<t.indexOf("out"))),t.includes("out")&&!n&&(t=t.filter((e,n)=>n>t.indexOf("out"))),i&&(e._x_transition.enter.during={transitionOrigin:Ee(t,"origin","center"),transitionProperty:"opacity, transform",transitionDuration:Ee(t,"duration",150)/1e3+"s",transitionTimingFunction:"cubic-bezier(0.4, 0.0, 0.2, 1)"},e._x_transition.enter.start={opacity:0,transform:`scale(${Ee(t,"scale",95)/100})`},e._x_transition.enter.end={opacity:1,transform:"scale(1)"}),r){let n=Ee(t,"duration",150)/2;e._x_transition.leave.during={transitionOrigin:Ee(t,"origin","center"),transitionProperty:"opacity, transform",transitionDuration:n/1e3+"s",transitionTimingFunction:"cubic-bezier(0.4, 0.0, 0.2, 1)"},e._x_transition.leave.start={opacity:1,transform:"scale(1)"},e._x_transition.leave.end={opacity:0,transform:`scale(${Ee(t,"scale",95)/100})`}}}(e,n);let l=!0;r(()=>s()(t=>{l||n.includes("immediate")?function(e,t,n,i){t?n():i()}(0,t,o,a):function(e,t,n,i){t?e._x_transition?e._x_transition.in(n):n():(e._x_do_hide=e._x_transition?(t,n)=>{e._x_transition.out(()=>{},()=>t(i)),e._x_transitioning.beforeCancel(()=>n({isFromCancelledTransition:!0}))}:e=>e(i),queueMicrotask(()=>{let t=Fe(e);t?t._x_hide_child=e:queueMicrotask(()=>{let t=[],n=e;for(;n;)t.push(new Promise(n._x_do_hide)),n=n._x_hide_child;t.reverse().reduce((e,t)=>e.then(()=>t.then(e=>e())),Promise.resolve(()=>{})).catch(e=>{if(!e.isFromCancelledTransition)throw e})})}))}(e,t,o,a),l=!1}))}),ve.directive("for",(e,t,n,i,r)=>{var s;let a=function(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,n=e.match(/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/);if(!n)return;let i={};i.items=n[2].trim();let r=n[1].trim().replace(/^\(|\)$/g,""),s=r.match(t);return s?(i.item=r.replace(t,"").trim(),i.index=s[1].trim(),s[2]&&(i.collection=s[2].trim())):i.item=r,i}(i),o=Ae(e,a.items),l=function(e,t,n={},i=!0){let r=Ae(e,t,n,i);return e=>{let t;return r(e)(e=>t=e),t}}(e,(null==(s=function(e,t){return ue(e).filter(e=>"bind"===e.type)}(e).filter(e=>"key"===e.value)[0])?void 0:s.expression)||"index");r(()=>{!function(e,t,n,i){let r=e;n()(e=>{var n;n=e,!Array.isArray(n)&&!isNaN(n)&&e>0&&(e=Array.from(Array(e).keys(),e=>e+1));let s=r;e.forEach((n,a)=>{let o=function(e,t,n,i){let r={};return r[e.item]=t,e.index&&(r[e.index]=n),e.collection&&(r[e.collection]=i),r}(t,n,a,e),l=i(qe({index:a},o)),c=function(e,t){if(!e)return;if(e._x_for_key===t)return e;let n=e;for(;n;){if(!n._x_for_key)return;if(n._x_for_key===t)return n.parentElement.insertBefore(n,e);n=!(!n.nextElementSibling||void 0===n.nextElementSibling._x_for_key)&&n.nextElementSibling}}(s.nextElementSibling,l);c||(c=function(e,t){let n=document.importNode(e.content,!0);return t.parentElement.insertBefore(n,t.nextElementSibling),t.nextElementSibling}(r,s),Ce(c,se(o)),c._x_for=o),Object.entries(o).forEach(([e,t])=>{Array.from(c._x_dataStack).slice(-1)[0][e]=t}),s=c,s._x_for_key=l}),function(e){for(var t=!(!e.nextElementSibling||void 0===e.nextElementSibling._x_for_key)&&e.nextElementSibling;t;){let e=t.nextElementSibling;t.remove(),t=!(!e||void 0===e._x_for_key)&&e}}(s)})}(e,a,o,l)})});let ze=function(e,t,n,i,r,s){let a=me(e);a._x_refs||(a._x_refs={}),a._x_refs[i]=e};ze.immediate=!0,ve.directive("ref",ze),ve.directive("on",(e,t,n,i)=>{let r=Ae(e,i,{},!1),s=$e(e,t,n,e=>{r({$event:e})});ve.addDestroyCallback(e,s)}),ve.magic("nextTick",t=>t=>e.nextTick(t)),ve.magic("dispatch",e=>(t,n={})=>e._x_dispatch(t,n)),window.Element.prototype._x_dispatch=function(e,t={}){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))},ve.magic("watch",e=>(t,n)=>{let i=Ae(e,t),r=!0;ve.effect(()=>i()(e=>{document.createElement("div").dataset.hey=e,r||(k(),n(e),w()),r=!1}))}),ve.magic("store",()=>e=>ve.getStore(e)),ve.magic("root",e=>me(e)),ve.magic("refs",e=>me(e)._x_refs||{}),ve.magic("el",e=>e),window.Alpine=ve,ve.start();
