import{o as Me,r as ge}from"../static/index-dc0286d9.js";const ze="modulepreload",Le=function(e){return"/"+e},ue={},je=function(r,t,n){if(!t||t.length===0)return r();const s=document.getElementsByTagName("link");return Promise.all(t.map(o=>{if(o=Le(o),o in ue)return;ue[o]=!0;const i=o.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!n)for(let c=s.length-1;c>=0;c--){const y=s[c];if(y.href===o&&(!i||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const d=document.createElement("link");if(d.rel=i?"stylesheet":ze,i||(d.as="script",d.crossOrigin=""),d.href=o,document.head.appendChild(d),i)return new Promise((c,y)=>{d.addEventListener("load",c),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>r())};var Se={exports:{}},R={};/** @license React v17.0.2
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=Me,D=ge.exports;function m(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var G=60106,A=60107,K=60108,J=60114,U=60109,ee=60110,te=60112,q=60113,re=60120,ne=60115,oe=60116,ke=60121,_e=60117,Fe=60119,Ee=60129,be=60131;if(typeof Symbol=="function"&&Symbol.for){var x=Symbol.for;G=x("react.portal"),A=x("react.fragment"),K=x("react.strict_mode"),J=x("react.profiler"),U=x("react.provider"),ee=x("react.context"),te=x("react.forward_ref"),q=x("react.suspense"),re=x("react.suspense_list"),ne=x("react.memo"),oe=x("react.lazy"),ke=x("react.block"),_e=x("react.fundamental"),Fe=x("react.scope"),Ee=x("react.debug_trace_mode"),be=x("react.legacy_hidden")}function z(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case G:return"Portal";case J:return"Profiler";case K:return"StrictMode";case q:return"Suspense";case re:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ee:return(e.displayName||"Context")+".Consumer";case U:return(e._context.displayName||"Context")+".Provider";case te:var r=e.render;return r=r.displayName||r.name||"",e.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case ne:return z(e.type);case ke:return z(e._render);case oe:r=e._payload,e=e._init;try{return z(e(r))}catch{}}return null}var Ve=D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Te={};function j(e,r){for(var t=e._threadCount|0;t<=r;t++)e[t]=e._currentValue2,e._threadCount=t+1}function We(e,r,t,n){if(n&&(n=e.contextType,typeof n=="object"&&n!==null))return j(n,t),n[t];if(e=e.contextTypes){t={};for(var s in e)t[s]=r[s];r=t}else r=Te;return r}for(var g=new Uint16Array(16),V=0;15>V;V++)g[V]=V+1;g[15]=0;var Ae=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ce=Object.prototype.hasOwnProperty,fe={},he={};function De(e){return ce.call(he,e)?!0:ce.call(fe,e)?!1:Ae.test(e)?he[e]=!0:(fe[e]=!0,!1)}function Ue(e,r,t,n){if(t!==null&&t.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return n?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qe(e,r,t,n){if(r===null||typeof r>"u"||Ue(e,r,t,n))return!0;if(n)return!1;if(t!==null)switch(t.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function k(e,r,t,n,s,o,i){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=n,this.attributeNamespace=s,this.mustUseProperty=t,this.propertyName=e,this.type=r,this.sanitizeURL=o,this.removeEmptyString=i}var w={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){w[e]=new k(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];w[r]=new k(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){w[e]=new k(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){w[e]=new k(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){w[e]=new k(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){w[e]=new k(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){w[e]=new k(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){w[e]=new k(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){w[e]=new k(e,5,!1,e.toLowerCase(),null,!1,!1)});var ie=/[\-:]([a-z])/g;function se(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(ie,se);w[r]=new k(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(ie,se);w[r]=new k(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(ie,se);w[r]=new k(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){w[e]=new k(e,1,!1,e.toLowerCase(),null,!1,!1)});w.xlinkHref=new k("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){w[e]=new k(e,1,!1,e.toLowerCase(),null,!0,!0)});var He=/["'&<>]/;function N(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var r=He.exec(e);if(r){var t="",n,s=0;for(n=r.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#x27;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}s!==n&&(t+=e.substring(s,n)),s=n+1,t+=r}e=s!==n?t+e.substring(s,n):t}return e}function Be(e,r){var t=w.hasOwnProperty(e)?w[e]:null,n;return(n=e!=="style")&&(n=t!==null?t.type===0:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")),n||qe(e,r,t,!1)?"":t!==null?(e=t.attributeName,n=t.type,n===3||n===4&&r===!0?e+'=""':(t.sanitizeURL&&(r=""+r),e+'="'+(N(r)+'"'))):De(e)?e+'="'+(N(r)+'"'):""}function Ze(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Ye=typeof Object.is=="function"?Object.is:Ze,T=null,W=null,f=null,M=!1,H=!1,$=null,B=0;function O(){if(T===null)throw Error(m(321));return T}function pe(){if(0<B)throw Error(m(312));return{memoizedState:null,queue:null,next:null}}function le(){return f===null?W===null?(M=!1,W=f=pe()):(M=!0,f=W):f.next===null?(M=!1,f=f.next=pe()):(M=!0,f=f.next),f}function Pe(e,r,t,n){for(;H;)H=!1,B+=1,f=null,t=e(r,n);return Ie(),t}function Ie(){T=null,H=!1,W=null,B=0,f=$=null}function $e(e,r){return typeof r=="function"?r(e):r}function de(e,r,t){if(T=O(),f=le(),M){var n=f.queue;if(r=n.dispatch,$!==null&&(t=$.get(n),t!==void 0)){$.delete(n),n=f.memoizedState;do n=e(n,t.action),t=t.next;while(t!==null);return f.memoizedState=n,[n,r]}return[f.memoizedState,r]}return e=e===$e?typeof r=="function"?r():r:t!==void 0?t(r):r,f.memoizedState=e,e=f.queue={last:null,dispatch:null},e=e.dispatch=Xe.bind(null,T,e),[f.memoizedState,e]}function me(e,r){if(T=O(),f=le(),r=r===void 0?null:r,f!==null){var t=f.memoizedState;if(t!==null&&r!==null){var n=t[1];e:if(n===null)n=!1;else{for(var s=0;s<n.length&&s<r.length;s++)if(!Ye(r[s],n[s])){n=!1;break e}n=!0}if(n)return t[0]}}return e=e(),f.memoizedState=[e,r],e}function Xe(e,r,t){if(!(25>B))throw Error(m(301));if(e===T)if(H=!0,e={action:t,next:null},$===null&&($=new Map),t=$.get(r),t===void 0)$.set(r,e);else{for(r=t;r.next!==null;)r=r.next;r.next=e}}function Y(){}var C=null,Qe={readContext:function(e){var r=C.threadID;return j(e,r),e[r]},useContext:function(e){O();var r=C.threadID;return j(e,r),e[r]},useMemo:me,useReducer:de,useRef:function(e){T=O(),f=le();var r=f.memoizedState;return r===null?(e={current:e},f.memoizedState=e):r},useState:function(e){return de($e,e)},useLayoutEffect:function(){},useCallback:function(e,r){return me(function(){return e},r)},useImperativeHandle:Y,useEffect:Y,useDebugValue:Y,useDeferredValue:function(e){return O(),e},useTransition:function(){return O(),[function(e){e()},!1]},useOpaqueIdentifier:function(){return(C.identifierPrefix||"")+"R:"+(C.uniqueID++).toString(36)},useMutableSource:function(e,r){return O(),r(e._source)}},Ge={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Ke(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var Ne={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Je=b({menuitem:!0},Ne),L={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},et=["Webkit","ms","Moz","O"];Object.keys(L).forEach(function(e){et.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),L[r]=L[e]})});var tt=/([A-Z])/g,rt=/^ms-/,I=D.Children.toArray,X=Ve.ReactCurrentDispatcher,nt={listing:!0,pre:!0,textarea:!0},ot=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,ye={},Q={};function it(e){if(e==null)return e;var r="";return D.Children.forEach(e,function(t){t!=null&&(r+=t)}),r}var st=Object.prototype.hasOwnProperty,lt={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function we(e,r){if(e===void 0)throw Error(m(152,z(r)||"Component"))}function at(e,r,t){function n(i,a){var l=a.prototype&&a.prototype.isReactComponent,d=We(a,r,t,l),c=[],y=!1,h={isMounted:function(){return!1},enqueueForceUpdate:function(){if(c===null)return null},enqueueReplaceState:function(Z,v){y=!0,c=[v]},enqueueSetState:function(Z,v){if(c===null)return null;c.push(v)}};if(l){if(l=new a(i.props,d,h),typeof a.getDerivedStateFromProps=="function"){var u=a.getDerivedStateFromProps.call(null,i.props,l.state);u!=null&&(l.state=b({},l.state,u))}}else if(T={},l=a(i.props,d,h),l=Pe(a,i.props,l,d),l==null||l.render==null){e=l,we(e,a);return}if(l.props=i.props,l.context=d,l.updater=h,h=l.state,h===void 0&&(l.state=h=null),typeof l.UNSAFE_componentWillMount=="function"||typeof l.componentWillMount=="function")if(typeof l.componentWillMount=="function"&&typeof a.getDerivedStateFromProps!="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&typeof a.getDerivedStateFromProps!="function"&&l.UNSAFE_componentWillMount(),c.length){h=c;var S=y;if(c=null,y=!1,S&&h.length===1)l.state=h[0];else{u=S?h[0]:l.state;var P=!0;for(S=S?1:0;S<h.length;S++){var _=h[S];_=typeof _=="function"?_.call(l,u,i.props,d):_,_!=null&&(P?(P=!1,u=b({},u,_)):b(u,_))}l.state=u}}else c=null;if(e=l.render(),we(e,a),typeof l.getChildContext=="function"&&(i=a.childContextTypes,typeof i=="object")){var F=l.getChildContext();for(var E in F)if(!(E in i))throw Error(m(108,z(a)||"Unknown",E))}F&&(r=b({},r,F))}for(;D.isValidElement(e);){var s=e,o=s.type;if(typeof o!="function")break;n(s,o)}return{child:e,context:r}}var Oe=function(){function e(t,n,s){D.isValidElement(t)?t.type!==A?t=[t]:(t=t.props.children,t=D.isValidElement(t)?[t]:I(t)):t=I(t),t={type:null,domNamespace:Ge.html,children:t,childIndex:0,context:Te,footer:""};var o=g[0];if(o===0){var i=g;o=i.length;var a=2*o;if(!(65536>=a))throw Error(m(304));var l=new Uint16Array(a);for(l.set(i),g=l,g[0]=o+1,i=o;i<a-1;i++)g[i]=i+1;g[a-1]=0}else g[0]=g[o];this.threadID=o,this.stack=[t],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=n,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[],this.uniqueID=0,this.identifierPrefix=s&&s.identifierPrefix||""}var r=e.prototype;return r.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var t=this.threadID;g[t]=g[0],g[0]=t}},r.pushProvider=function(t){var n=++this.contextIndex,s=t.type._context,o=this.threadID;j(s,o);var i=s[o];this.contextStack[n]=s,this.contextValueStack[n]=i,s[o]=t.props.value},r.popProvider=function(){var t=this.contextIndex,n=this.contextStack[t],s=this.contextValueStack[t];this.contextStack[t]=null,this.contextValueStack[t]=null,this.contextIndex--,n[this.threadID]=s},r.clearProviders=function(){for(var t=this.contextIndex;0<=t;t--)this.contextStack[t][this.threadID]=this.contextValueStack[t]},r.read=function(t){if(this.exhausted)return null;var n=C;C=this;var s=X.current;X.current=Qe;try{for(var o=[""],i=!1;o[0].length<t;){if(this.stack.length===0){this.exhausted=!0;var a=this.threadID;g[a]=g[0],g[0]=a;break}var l=this.stack[this.stack.length-1];if(i||l.childIndex>=l.children.length){var d=l.footer;if(d!==""&&(this.previousWasTextNode=!1),this.stack.pop(),l.type==="select")this.currentSelectValue=null;else if(l.type!=null&&l.type.type!=null&&l.type.type.$$typeof===U)this.popProvider(l.type);else if(l.type===q){this.suspenseDepth--;var c=o.pop();if(i){i=!1;var y=l.fallbackFrame;if(!y)throw Error(m(303));this.stack.push(y),o[this.suspenseDepth]+="<!--$!-->";continue}else o[this.suspenseDepth]+=c}o[this.suspenseDepth]+=d}else{var h=l.children[l.childIndex++],u="";try{u+=this.render(h,l.context,l.domNamespace)}catch(S){throw S!=null&&typeof S.then=="function"?Error(m(294)):S}finally{}o.length<=this.suspenseDepth&&o.push(""),o[this.suspenseDepth]+=u}}return o[0]}finally{X.current=s,C=n,Ie()}},r.render=function(t,n,s){if(typeof t=="string"||typeof t=="number")return s=""+t,s===""?"":this.makeStaticMarkup?N(s):this.previousWasTextNode?"<!-- -->"+N(s):(this.previousWasTextNode=!0,N(s));if(n=at(t,n,this.threadID),t=n.child,n=n.context,t===null||t===!1)return"";if(!D.isValidElement(t)){if(t!=null&&t.$$typeof!=null)throw s=t.$$typeof,Error(s===G?m(257):m(258,s.toString()));return t=I(t),this.stack.push({type:null,domNamespace:s,children:t,childIndex:0,context:n,footer:""}),""}var o=t.type;if(typeof o=="string")return this.renderDOM(t,n,s);switch(o){case be:case Ee:case K:case J:case re:case A:return t=I(t.props.children),this.stack.push({type:null,domNamespace:s,children:t,childIndex:0,context:n,footer:""}),"";case q:throw Error(m(294));case Fe:throw Error(m(343))}if(typeof o=="object"&&o!==null)switch(o.$$typeof){case te:T={};var i=o.render(t.props,t.ref);return i=Pe(o.render,t.props,i,t.ref),i=I(i),this.stack.push({type:null,domNamespace:s,children:i,childIndex:0,context:n,footer:""}),"";case ne:return t=[D.createElement(o.type,b({ref:t.ref},t.props))],this.stack.push({type:null,domNamespace:s,children:t,childIndex:0,context:n,footer:""}),"";case U:return o=I(t.props.children),s={type:t,domNamespace:s,children:o,childIndex:0,context:n,footer:""},this.pushProvider(t),this.stack.push(s),"";case ee:o=t.type,i=t.props;var a=this.threadID;return j(o,a),o=I(i.children(o[a])),this.stack.push({type:t,domNamespace:s,children:o,childIndex:0,context:n,footer:""}),"";case _e:throw Error(m(338));case oe:return o=t.type,i=o._init,o=i(o._payload),t=[D.createElement(o,b({ref:t.ref},t.props))],this.stack.push({type:null,domNamespace:s,children:t,childIndex:0,context:n,footer:""}),""}throw Error(m(130,o==null?o:typeof o,""))},r.renderDOM=function(t,n,s){var o=t.type.toLowerCase();if(!ye.hasOwnProperty(o)){if(!ot.test(o))throw Error(m(65,o));ye[o]=!0}var i=t.props;if(o==="input")i=b({type:void 0},i,{defaultChecked:void 0,defaultValue:void 0,value:i.value!=null?i.value:i.defaultValue,checked:i.checked!=null?i.checked:i.defaultChecked});else if(o==="textarea"){var a=i.value;if(a==null){a=i.defaultValue;var l=i.children;if(l!=null){if(a!=null)throw Error(m(92));if(Array.isArray(l)){if(!(1>=l.length))throw Error(m(93));l=l[0]}a=""+l}a==null&&(a="")}i=b({},i,{value:void 0,children:""+a})}else if(o==="select")this.currentSelectValue=i.value!=null?i.value:i.defaultValue,i=b({},i,{value:void 0});else if(o==="option"){l=this.currentSelectValue;var d=it(i.children);if(l!=null){var c=i.value!=null?i.value+"":d;if(a=!1,Array.isArray(l)){for(var y=0;y<l.length;y++)if(""+l[y]===c){a=!0;break}}else a=""+l===c;i=b({selected:void 0,children:void 0},i,{selected:a,children:d})}}if(a=i){if(Je[o]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(m(137,o));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(m(60));if(!(typeof a.dangerouslySetInnerHTML=="object"&&"__html"in a.dangerouslySetInnerHTML))throw Error(m(61))}if(a.style!=null&&typeof a.style!="object")throw Error(m(62))}a=i,l=this.makeStaticMarkup,d=this.stack.length===1,c="<"+t.type;e:if(o.indexOf("-")===-1)y=typeof a.is=="string";else switch(o){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":y=!1;break e;default:y=!0}for(v in a)if(st.call(a,v)){var h=a[v];if(h!=null){if(v==="style"){var u=void 0,S="",P="";for(u in h)if(h.hasOwnProperty(u)){var _=u.indexOf("--")===0,F=h[u];if(F!=null){if(_)var E=u;else if(E=u,Q.hasOwnProperty(E))E=Q[E];else{var Z=E.replace(tt,"-$1").toLowerCase().replace(rt,"-ms-");E=Q[E]=Z}S+=P+E+":",P=u,_=F==null||typeof F=="boolean"||F===""?"":_||typeof F!="number"||F===0||L.hasOwnProperty(P)&&L[P]?(""+F).trim():F+"px",S+=_,P=";"}}h=S||null}u=null,y?lt.hasOwnProperty(v)||(u=v,u=De(u)&&h!=null?u+'="'+(N(h)+'"'):""):u=Be(v,h),u&&(c+=" "+u)}}l||d&&(c+=' data-reactroot=""');var v=c;a="",Ne.hasOwnProperty(o)?v+="/>":(v+=">",a="</"+t.type+">");e:{if(l=i.dangerouslySetInnerHTML,l!=null){if(l.__html!=null){l=l.__html;break e}}else if(l=i.children,typeof l=="string"||typeof l=="number"){l=N(l);break e}l=null}return l!=null?(i=[],nt.hasOwnProperty(o)&&l.charAt(0)===`
`&&(v+=`
`),v+=l):i=I(i.children),t=t.type,s=s==null||s==="http://www.w3.org/1999/xhtml"?Ke(t):s==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":s,this.stack.push({domNamespace:s,type:o,children:i,childIndex:0,context:n,footer:a}),this.previousWasTextNode=!1,v},e}();R.renderToNodeStream=function(){throw Error(m(207))};R.renderToStaticMarkup=function(e,r){e=new Oe(e,!0,r);try{return e.read(1/0)}finally{e.destroy()}};R.renderToStaticNodeStream=function(){throw Error(m(208))};R.renderToString=function(e,r){e=new Oe(e,!1,r);try{return e.read(1/0)}finally{e.destroy()}};R.version="17.0.2";(function(e){e.exports=R})(Se);const ut=e=>{const r=e.split("/");return r.pop(),r.map(()=>"../").reduce((t,n)=>t+n,"")};var ae={exports:{}},p=String,Ce=function(){return{isColorSupported:!1,reset:p,bold:p,dim:p,italic:p,underline:p,inverse:p,hidden:p,strikethrough:p,black:p,red:p,green:p,yellow:p,blue:p,magenta:p,cyan:p,white:p,gray:p,bgBlack:p,bgRed:p,bgGreen:p,bgYellow:p,bgBlue:p,bgMagenta:p,bgCyan:p,bgWhite:p}};ae.exports=Ce();ae.exports.createColors=Ce;const ct=e=>`<title>${e.title?e.title:"Yext Pages Site"}</title>
    <meta charset="${e.charset||"UTF-8"}">
    <meta name="viewport" content="${e.viewport||"width=device-width, initial-scale=1"}">
    ${e.tags?e.tags.map(ft).join(`
`):""}
    ${e.other?e.other:""}`.split(`
`).filter(r=>r.trim()!="").join(`
`),ft=e=>{switch(e.type){case"base":case"link":case"meta":return`<${e.type} ${ve(e.attributes)}>`;case"style":case"script":case"noscript":case"template":return`<${e.type} ${ve(e.attributes)}></${e.type}>`;default:return console.log(ae.exports.yellow(`[WARNING]: Tag type ${e.type} is unsupported by the Tag interface. Please use "other" to render this tag.`)),""}},ve=e=>Object.keys(e).map(r=>`${r}="${e[r]}"`).join(" "),ht=(e,r)=>{var t,n;return e!=null&&e.lang?e.lang:(t=r==null?void 0:r.document)!=null&&t.locale?(n=r==null?void 0:r.document)==null?void 0:n.locale:"en"},pt=(e,r,t,n,s)=>{if(!e.__meta.manifest)throw new Error("Manifest is undefined");const o=e.__meta.manifest.projectFilepaths,i=s?s(e):void 0,a=ht(i,e),l=e.__meta.manifest.bundlerManifest,d=`${o.templatesRoot}/${r.templateName}.tsx`,c=`${o.scopedTemplatesPath}/${r.templateName}.tsx`,y=!!o.scopedTemplatesPath&&l[c]?c:d;return`<!DOCTYPE html>
    <html lang=${a}>
    <head>
        <script>window.__INITIAL__DATA__ = ${JSON.stringify(e)}<\/script>
        ${Array.from(Re(y,e.__meta.manifest.bundlerManifest,new Set)).map(h=>`<link rel="stylesheet" href="${e.relativePrefixToRoot+h}"/>`).join(`
`)}
        ${i?ct(i):""}
    </head>
    <body>
        <div id="reactele">${t}</div>${n?`<script type="module" src="${e.relativePrefixToRoot+dt(`${o.hydrationBundleOutputRoot}/${r.templateName}.tsx`,e)}" defer><\/script>`:""}
    </body>
    </html>`},Re=(e,r,t)=>{const n=structuredClone(Object.entries(r).find(([a])=>a===e));if(!n)return new Set;const[s,o]=n;t.add(s);const i=new Set(o.css);return(o.imports||[]).flatMap(a=>Array.from(Re(a,r,t))).forEach(a=>i.add(a)),i},dt=(e,r)=>{const{__meta:t}=r;for(const[n,s]of Object.entries(t.manifest.bundlerManifest))if(n===e)return s.file},mt=e=>{if(yt(e.filename,e.config),!e.getPath)throw new Error(`Template ${e.filename} is missing an exported getPath function.`);if(!e.default&&!e.render)throw new Error(`Module ${e.filename} does not have the necessary exports to produce page. A module should either have a React component as a default export or a render function.`)},yt=(e,r)=>{if(!r.name)throw new Error(`Template ${e} is missing a "name" in the config function.`);if(r.streamId&&r.stream)throw new Error(`Template ${e} must not define both a "streamId" and a "stream".`)},wt=(e,r)=>{let t=e.split("/")[e.split("/").length-1];const n=t.slice(t.lastIndexOf("."));let s=t.slice(0,t.lastIndexOf("."));return r&&(t=t.split(n)[0].slice(0,t.split(n)[0].lastIndexOf("."))+n,s=s.slice(0,s.lastIndexOf("."))),{base:t,name:s}},vt=(e,r,t)=>{const n=wt(e,t),s={...r,config:xt(n.name,r.config),path:e,filename:n.base,templateName:n.name};return mt(s),s},xt=(e,r)=>{var t;return{name:(t=r==null?void 0:r.name)!=null?t:e,...r}},xe=new Map,gt=async(e,r)=>{const t=r.bundlePaths[e].replace("assets","..");if(!t)throw new Error(`Could not find path for feature ${e}`);let n=xe.get(t);n||(n=await je(()=>import(t),[]));const s=vt(t,n,!0);return xe.set(t,s),s},St=async(e,r)=>{var o,i;e.transformProps&&(r=await e.transformProps(r));const t=e.getPath(r);if(!t)throw new Error(`getPath does not return a valid string in template '${e.templateName}'`);const n={...r,path:t,relativePrefixToRoot:ut(t)};return{content:kt(e,n),path:t,redirects:(i=(o=e.getRedirects)==null?void 0:o.call(e,n))!=null?i:[]}},kt=(e,r)=>{const{default:t,render:n,getHeadConfig:s}=e;if(!t&&!n)throw new Error(`Cannot render html from template '${e.config.name}'. Template is missing render function or default export.`);return n?(s&&console.warn(`getHeadConfig for template ${e.config.name} will not be called since a custom render function is defined.`),n(r)):pt(r,e,Se.exports.renderToString(ge.exports.createElement(t,r)),!0,s)};var Ft=async e=>{const r=e.__meta.manifest,t=await gt(e.document.__.name,r);return await St(t,e)};export{Ft as default};
