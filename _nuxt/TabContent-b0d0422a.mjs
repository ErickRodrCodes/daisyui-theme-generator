import{_ as n,c as r,r as s,a as o,o as c}from"./entry-dc391e8a.mjs";const _={name:"TabContent",props:{name:{type:String,required:!0}},inject:["tabManager"],mounted(){this.tabManager.tabs.push(this)}},m={key:0,class:"tab-content"};function d(e,u,t,i,p,a){return a.tabManager.currentTab.name===t.name?(c(),r("div",m,[s(e.$slots,"default")])):o("",!0)}var b=n(_,[["render",d]]);export{b as default};