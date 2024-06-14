var e=require("react"),t=require("@react-three/fiber"),r=require("@react-three/drei"),i=require("@14islands/r3f-scroll-rig"),n=require("three");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=/*#__PURE__*/o(e);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},u.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)t.indexOf(r=o[i])>=0||(n[r]=e[r]);return n}var a=["el","children","material","scale","font","fontOffsetY","fontOffsetX","overrideEmissive","color"],c=["el","scale","scrollState","vertexShader","fragmentShader","invalidateFrameLoop","widthSegments","heightSegments"],m=e.forwardRef(function(r,o){var a=r.el,m=r.scale,h=r.scrollState,f=r.vertexShader,d=r.fragmentShader,p=r.invalidateFrameLoop,v=void 0!==p&&p,g=r.widthSegments,y=void 0===g?128:g,w=r.heightSegments,b=void 0===w?128:w,S=s(r,c),E=e.useRef(null),x=e.useRef(null);e.useImperativeHandle(o,function(){return x.current});var A=t.useThree(),T=A.invalidate,M=A.gl,_=A.size,N=t.useThree(function(e){return e.viewport.dpr}),R=i.useScrollbar().scroll,z=i.useScrollRig().scaleMultiplier,k=i.useImageAsTexture(a),V=e.useMemo(function(){return{u_color:{value:new n.Color("black")},u_time:{value:0},u_pixelRatio:{value:N},u_progress:{value:0},u_visibility:{value:0},u_viewport:{value:0},u_velocity:{value:0},u_res:{value:new n.Vector2},u_rect:{value:new n.Vector2},u_size:{value:new n.Vector2},u_texture:{value:null},u_loaded:{value:!1},u_scaleMultiplier:{value:z}}},[N]);e.useEffect(function(){k&&E.current&&(E.current.uniforms.u_texture.value=k,E.current.uniforms.u_size.value.set(k.image.width,k.image.height),E.current.uniforms.u_loaded.value=!0)},[k,M]),e.useEffect(function(){E.current&&(E.current.uniforms.u_res.value.set(_.width,_.height),E.current.uniforms.u_rect.value.set(null==m?void 0:m[0],null==m?void 0:m[1]))},[_,m]),t.useFrame(function(e,t){h.inViewport&&x.current&&E.current&&E.current.uniforms.u_loaded.value&&(E.current.uniforms.u_time.value+=t,E.current.uniforms.u_rect.value.set(x.current.scale.x,x.current.scale.y),E.current.uniforms.u_velocity.value=R.velocity,E.current.uniforms.u_progress.value=h.progress,E.current.uniforms.u_visibility.value=h.visibility,E.current.uniforms.u_viewport.value=h.viewport,v&&T())});var F=e.useMemo(function(){return[{vertexShader:f,fragmentShader:d}]},[f,d]);return l.default.createElement(l.default.Fragment,null,l.default.createElement("mesh",u({ref:x},S),l.default.createElement("planeGeometry",{attach:"geometry",args:[1,1,y,b]}),l.default.createElement("shaderMaterial",{ref:E,args:F,transparent:!0,uniforms:V})))}),h=["children","speed"],f=function(r){var n=r.children,o=r.scrollState,u=r.parallax,s=e.useRef(null),a=t.useThree(function(e){return e.size}),c=i.useScrollRig().scaleMultiplier;return t.useFrame(function(){o.inViewport&&(s.current.position.y=u*(2*o.progress-1)*c*a.height)}),l.default.createElement("mesh",{ref:s},n)};let d=new Proxy({},{get:function(e,t){return e.hasOwnProperty(t)||(e[t]=g(t)),e[t]}});class p extends Array{constructor(e,t){if(!(t=S(t)).every(e=>"Number"===x(e)))throw new TypeError("All arguments must be numbers.");if(t.length>1&&t.length!==e)throw new Error("Argument list must be empty, have a single number, or have a length equal to the dimension.");0===t.length&&(t=[0]),1===t.length&&"Number"===x(t[0])&&(t=Array(e).fill(t[0])),e>1?super(...t):(super(1),this[0]=t[0]),Reflect.defineProperty(this,"pop",{value:void 0,enumerable:!1}),Reflect.defineProperty(this,"push",{value:void 0,enumerable:!1}),Reflect.defineProperty(this,"shift",{value:void 0,enumerable:!1}),Reflect.defineProperty(this,"unshift",{value:void 0,enumerable:!1})}get magnitude(){return this.pnorm(2)}div(e){b(e,this.dim,!0),"Number"===x(e)&&(e=new Array(this.dim).fill(e));let t=[];for(let r=0;r<this.length;++r)t[r]=this[r]/e[r];return d[this.dim](t)}minus(e){b(e,this.dim,!0),"Number"===x(e)&&(e=new Array(this.dim).fill(e));let t=[];for(let r=0;r<this.dim;++r)t[r]=this[r]-e[r];return d[this.dim](t)}neg(){return d[this.dim](this.times(-1))}plus(e){b(e,this.dim,!0),"Number"===x(e)&&(e=new Array(this.dim).fill(e));let t=[];for(let r=0;r<this.dim;++r)t[r]=this[r]+e[r];return d[this.dim](t)}pow(e){let t=[];for(let r=0;r<this.dim;++r)t[r]=Math.pow(this[r],e);return d[this.dim](t)}times(e){b(e,this.dim,!0),"Number"===x(e)&&(e=new Array(this.dim).fill(e));let t=[];for(let r=0;r<this.dim;++r)t[r]=this[r]*e[r];return d[this.dim](t)}dot(e){b(e,this.dim);let t=0;for(let r=0;r<this.dim;++r)t+=this[r]*e[r];return t}normalize(){return this.div(this.magnitude)}pnorm(e){let t=0;for(let r=0;r<this.dim;++r)t+=Math.pow(Math.abs(this[r]),e);return Math.pow(t,1/e)}reflect(e){const t=e.normalize();return this.minus(t.times(2*this.dot(t)))}argmax(){const e=this.max();return this.reduce((t,r,i)=>r===e?t.concat([i]):t,[])}argmin(){const e=this.min();return this.reduce((t,r,i)=>r===e?t.concat([i]):t,[])}choose(e){if(!Array.isArray(e))throw new TypeError("Argument must be a list of indices.");if(!e.every(e=>e<this.dim&&E(e.toString())))throw new RangeError("All elements of argument must be valid indices.");let t=[];return e.forEach(e=>t.push(this[e])),d[t.length](t)}copy(){return d[this.dim](this)}equals(e){return e.length===this.dim&&e.every((e,t)=>this[t]===e)}approximatelyEquals(e,t=1e-8){return e.length===this.dim&&e.every((e,r)=>Math.abs(this[r]-e)<t)}max(){return Math.max(...this)}min(){return Math.min(...this)}sum(){return this.reduce((e,t)=>e+t,0)}toArray(){return Array.from(this)}concat(...e){const t=super.concat.apply(this.toArray(),e);return d[t.length](t)}filter(...e){const t=super.filter.apply(this.toArray(),e);return t.length>0?d[t.length](t):t}map(...e){const t=super.map(...e);return t.every(e=>"Number"===x(e))?t:t.toArray()}slice(...e){const t=super.slice.apply(this.toArray(),e);return t.length>0?d[t.length](t):t}splice(...e){let t=this.toArray();if(t.splice(...e),t.length!==this.dim)throw new Error("All removed elements must be replaced.");if(!t.every(e=>"Number"===x(e)))throw new TypeError("All elements must be numbers.");t.forEach((e,t)=>{this[t]=e})}toString(){return this.reduce((e,t,r)=>e+t+(r===this.dim-1?" ":", "),"[ ")+"]"}}const v={set:function(e,t,r){if("length"===t)return!1;if(E(t)){if(Number(t)>=e.dim)throw new RangeError("Vector may not have more elements than dimension.");if("Number"!==x(r))throw new TypeError("Vectors may only contain numbers.");return e[t]=r,!0}const i=w(t.toString());return!!(e.dim<=4&&i)&&(function(e,t,r,i){if(1===t.length){if("Number"!==x(i))throw new TypeError("Must set to a number");return void(e[r[t]]=i)}if(!Array.isArray(i))throw new TypeError("Right-hand side must be an array.");if(t.length!==i.length)throw new TypeError("Right-hand side must have matching length.");if(!i.every(e=>"Number"===x(e)))throw new TypeError("All new values must be numbers.");if(t.split("").some(t=>r[t]>=e.dim))return;let n=!0;for(let e=0,r={};e<t.length;++e){if(r.hasOwnProperty(t[e])){n=!1;break}r[t[e]]=!0}if(!n)throw new SyntaxError("Swizzle assignment does not allow symbols to be repeated.");t.split("").map(e=>r[e]).forEach((t,r)=>{e[t]=i[r]})}(e,t.toString(),i,r),!0)},get:function(e,t){const r=w(t.toString());return e.dim<=4&&r?function(e,t,r){const i=t.length;if(1===i)return e[r[t]];let n=t.split("").reduce((t,i)=>{let n=r[i];return t&&n<e.dim?t.concat([e[n]]):void 0},[]);return n?new d[i](...n):void 0}(e,t,r):e[t]}};function g(e){if(!((e=Number(e))in d)){if(isNaN(e))throw new TypeError("Dimension must be coercible to a number.");if(e<=0)throw new RangeError("Dimension must be positive.");if(!Number.isInteger(e))throw new RangeError("Dimension must be positive.");let t="vec"+e,r={[t]:class extends p{constructor(...t){if(1===t.length&&t[0]instanceof p){if(t[0].dim>e)throw new TypeError("Cannot demote vectors.");t=function(e,t){return[...Array(t)].map((t,r)=>r<e.length?e[r]:0)}(t[0].toArray(),e)}super(e,t),Reflect.defineProperty(this,"dim",{value:e,writable:!1,enumerable:!1})}}}[t];d[e]=function(...e){let t=new r(...e);return Object.preventExtensions(t),new Proxy(t,v)}}return d[e]}const y=[{x:0,y:1,z:2,w:3},{r:0,g:1,b:2,a:3},{s:0,t:1,p:2,q:3}];function w(e){return y.find(t=>e.split("").every(e=>e in t))}function b(e,t,r=!1){if(!(r&&"Number"===x(e)||e.length&&e.length===t))throw new TypeError(`Invalid argument. Input must have matching dimension${r?"or be a scalar":""}.`)}function S(e){return e instanceof Array&&1===e.length&&e[0]instanceof Array?S(e[0]):e}function E(e){return!isNaN(e)&&Number(e).toString()===e&&Number.isInteger(Number(e))&&Number(e)>=0}function x(e){return Object.prototype.toString.call(e).slice(8,-1)}var A={getVecType:g,isVec:function(e){return e instanceof p},vec2:d[2],vec3:d[3],vec4:d[4],add:function(...e){const t=e[0].dim;if(!e.every(e=>e.dim===t))throw new TypeError("All vectors must have the same dimension.");return e.reduce((e,t)=>e.plus(t),d[t]())},multiply:function(...e){const t=e[0].dim;if(!e.every(e=>e.dim===t))throw new TypeError("All vectors must have the same dimension.");return e.reduce((e,t)=>e.times(t),d[t](1))},lerp:function(e,t,r){if(e.dim!==t.dim)throw new TypeError("Vectors must have the same dimension.");return r=r<0?0:r>1?1:r,e.plus(t.minus(e).times(r))},slerp:function(e,t,r){if(e.dim!==t.dim)throw new TypeError("Vectors must have the same dimension.");r=r<0?0:r>1?1:r;let i=e.normalize().dot(t.normalize());i=i<-1?-1:i>1?1:i;const n=Math.acos(i)*r,o=t.minus(e.times(i)).normalize(),l=e.magnitude+(t.magnitude-e.magnitude)*r;return e.times(Math.cos(n)).plus(o.times(Math.sin(n))).normalize().times(l)}},T=["scale"],M=["children","track","stickyLerp","fillViewport"],_=function(r){var i=r.children,n=r.childTop,o=r.childBottom,u=r.scrollState,s=r.parentScale,a=r.childScale,c=r.scaleMultiplier,m=r.priority,h=r.stickyLerp,f=void 0===h?1:h,d=r.offsetTop,p=void 0===d?0:d,v=e.useRef(null),g=t.useThree(function(e){return e.size});return t.useFrame(function(e,t){if(u.inViewport){var r=.5*s[1]-.5*a[1]-p*c;v.current.position.y=function(e,t,r,i,n=60){return o=t,e*(1-(l=void 0===i?r:1-Math.pow(1-r,i/(1/n))))+o*l;var o,l}(v.current.position.y,u.viewport+(n-p)/g.height<1?r:u.visibility-o/s[1]*c<1?-n*c+r-(u.viewport-1)*g.height*c+p*c:.5*-s[1]+.5*a[1],f,t)}},m),l.default.createElement("group",{ref:v},i)};exports.ParallaxScrollScene=function(e){var t=e.children,r=e.speed,n=void 0===r?1:r,o=s(e,h),a=n-1;return l.default.createElement(i.ScrollScene,u({scissor:!1,inViewportMargin:200*Math.max(0,.5)+50+"%"},o),function(e){return l.default.createElement(f,u({parallax:a},e),t(e))})},exports.StickyScrollScene=function(r){var n=r.children,o=r.track,a=r.stickyLerp,c=r.fillViewport,m=s(r,M),h=t.useThree(function(e){return e.size}),f=i.useScrollRig().scaleMultiplier,d=e.useRef(o.current),p=e.useMemo(function(){var e=getComputedStyle(o.current);return"sticky"===e.position?(d.current=o.current.parentElement,"static"===getComputedStyle(d.current).position&&console.error("StickyScrollScene: parent of position:sticky needs to be position:relative or position:absolute (currently set to position:static)")):console.error("StickyScrollScene: tracked element is not position:sticky"),e},[o]);return l.default.createElement(i.ScrollScene,u({track:d},m),function(t,r,i,n,o,a){var c=a.stickyLerp,m=a.fillViewport;return function(a){var h=a.scale,f=s(a,T),d=A.vec3(parseFloat(n.width),parseFloat(n.height),1),p=parseFloat(n.top),v=i.height-p-d[1];m&&(d=A.vec3(i.width,i.height,1),p=0,v=0);var g=e.useRef(t.current.offsetTop).current;return l.default.createElement(_,u({offsetTop:g,parentScale:h,childScale:d.times(o),stickyLerp:c,childTop:p,childBottom:v,scaleMultiplier:o},f),r(u({scale:d.times(o),parentScale:h},f)))}}(o,n,h,p,f,{stickyLerp:a,fillViewport:c}))},exports.WebGLImage=m,exports.WebGLText=function(n){var o=n.el,c=n.children,m=n.material,h=n.scale,f=n.font,d=n.fontOffsetY,p=void 0===d?0:d,v=n.fontOffsetX,g=void 0===v?0:v,y=n.overrideEmissive,w=void 0!==y&&y,b=n.color,S=s(n,a),E=t.useThree().size,x=i.useScrollRig().scaleMultiplier,A=e.useMemo(function(){if(!o.current)return{};var e=window.getComputedStyle(o.current),t=b||e.color;return!b&&"rgba(0, 0, 0, 0)"===e.color&&o.current.parentElement&&(t=window.getComputedStyle(o.current.parentElement).color),{letterSpacing:(parseFloat(e.letterSpacing)||0)/parseFloat(e.fontSize),lineHeight:(parseFloat(e.lineHeight)||0)/parseFloat(e.fontSize),textColor:t,fontSize:parseFloat(e.fontSize)*x,textAlign:e.textAlign}},[o,E,h,b,x]),T=A.textColor,M=A.fontSize,_=A.textAlign,N=A.lineHeight,R=A.letterSpacing;e.useEffect(function(){m&&w&&(m.emissive=b)},[m,b,w]);var z=0;return"left"===_||"start"===_?z=-.5*h[0]:"right"!==_&&"end"!==_||(z=.5*h[0]),l.default.createElement(r.Text,u({fontSize:M,maxWidth:h?h[0]:E.width,lineHeight:N,textAlign:_,letterSpacing:R,overflowWrap:"break-word",font:f,color:T,anchorX:_,anchorY:"top",position:[z+M*g,(h?.5*h[1]:.5*E.height)+M*p,0],material:m},S),c)};
//# sourceMappingURL=powerups.cjs.map
