import{_ as p,d as _,m as d,q as f,s as h,c as g,e as y,o as V}from"./entry-dc391e8a.mjs";import{c as j,u as v,h as x}from"./theme-utils-20cc4e23.mjs";const S=_({props:{name:{type:String},isDefault:{type:Boolean},config:{type:Object}},emits:["snoop"],setup(n,{expose:r,emit:t}){r();const e=n,s=d(null);f(()=>{h(()=>e.name,c=>{var l;console.log("name",c),e.isDefault&&!((l=e.config)==null?void 0:l.primary)&&setTimeout(()=>{console.log("config");const m=j.concat(v).reduce((i,a)=>{const u=getComputedStyle(s.value).getPropertyValue(a.cssVar).trim();return i[a.jsVar]=a.className?x(u):u,i},{});t("snoop",{name:c,isDefault:e.isDefault,config:m})},100)},{immediate:!0})});const o={props:e,emit:t,el:s};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),B=["data-theme"],D={ref:"el"};function b(n,r,t,e,s,o){return V(),g("div",{"data-theme":t.name,class:"theme-snooper"},[y("div",D,null,512)],8,B)}var C=p(S,[["render",b]]);export{C as default};