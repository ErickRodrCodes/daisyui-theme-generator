import{A as I,m,s as b,B as _,C as P,D as S,E as T}from"./entry-dc391e8a.mjs";function O(e){return _()?(P(e),!0):!1}const A=typeof window!="undefined",J=e=>typeof e=="string",v=()=>{};function W(e,r){function n(...t){e(()=>r.apply(this,t),{fn:r,thisArg:this,args:t})}return n}const R=e=>e();var N=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,M=(e,r)=>{var n={};for(var t in e)C.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&N)for(var t of N(e))r.indexOf(t)<0&&D.call(e,t)&&(n[t]=e[t]);return n};function $(e,r,n={}){const t=n,{eventFilter:o=R}=t,a=M(t,["eventFilter"]);return b(e,W(o,r),a)}function U(e=!1){if(I(e))return r=>{e.value=typeof r=="boolean"?r:!e.value};{const r=m(e);return[r,t=>{r.value=typeof t=="boolean"?t:!r.value}]}}const f=A?window:void 0;function z(...e){let r,n,t,o;if(J(e[0])?([n,t,o]=e,r=f):[r,n,t,o]=e,!r)return v;let a=v;const u=b(()=>S(r),c=>{a(),!!c&&(c.addEventListener(n,t,o),a=()=>{c.removeEventListener(n,t,o),a=v})},{immediate:!0,flush:"post"}),p=()=>{u(),a()};return O(p),p}function x(e,r={}){const{window:n=f}=r;if(!n)return m(!1);const t=n.matchMedia(e),o=m(t.matches),a=u=>{o.value=u.matches};return"addEventListener"in t?t.addEventListener("change",a):t.addListener(a),O(()=>{"removeEventListener"in t?t.removeEventListener("change",a):t.removeListener(a)}),o}const G={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))}};function H(e,r,n=(o=>(o=f)==null?void 0:o.localStorage)(),t={}){var o;const{flush:a="pre",deep:u=!0,listenToStorageChanges:p=!0,writeDefaults:c=!0,shallow:L,window:y=f,eventFilter:j,onError:g=i=>{console.error(i)}}=t,s=S(r),F=s==null?"any":s instanceof Set?"set":s instanceof Map?"map":typeof s=="boolean"?"boolean":typeof s=="string"?"string":typeof s=="object"||Array.isArray(s)?"object":Number.isNaN(s)?"any":"number",l=(L?T:m)(r),w=(o=t.serializer)!=null?o:G[F];function h(i){if(!(!n||i&&i.key!==e))try{const d=i?i.newValue:n.getItem(e);d==null?(l.value=s,c&&s!==null&&n.setItem(e,w.write(s))):l.value=w.read(d)}catch(d){g(d)}}return h(),y&&p&&z(y,"storage",i=>setTimeout(()=>h(i),0)),n&&$(l,()=>{try{l.value==null?n.removeItem(e):n.setItem(e,w.write(l.value))}catch(i){g(i)}},{flush:a,deep:u,eventFilter:j}),l}function B(e){return x("(prefers-color-scheme: dark)",e)}function q(e,r,n={}){const{window:t=f}=n;return H(e,r,t==null?void 0:t.localStorage,n)}var E;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(E||(E={}));export{H as a,B as b,U as c,q as u};