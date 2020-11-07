(()=>{var n=Object.defineProperty,t=(g,f)=>()=>(f||(f={exports:{}},g(f.exports,f)),f.exports),u=g=>n(g,"__esModule",{value:!0}),v=(g,f)=>{u(g);for(var k in f)n(g,k,{get:f[k],enumerable:!0})};var o=t(x=>{v(x,{default:()=>p});const g={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","…":"&hellip;"};function f(a){return g[a]||a}function k(a){return a.replace(/[&<>"]/g,f)}function w(a){return a.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")}class h{constructor({form:a,input:c,list:e,resultTitle:d,resultTitleTemplate:b}){this.form=a,this.input=c,this.list=e,this.resultTitle=d,this.resultTitleTemplate=b,this.handleQueryString(),this.bindQueryStringChange(),this.bindSearchForm()}async searchKeywords(a){const c=await this.getData();let e=[];a.sort((d,b)=>b.length-d.length);for(const d of c){let b={...d,preview:"",matchCount:0},q=!1;for(const m of a){if(m==="")continue;const i=new RegExp(w(k(m)),"gi"),l=i.exec(b.content);i.lastIndex=0;const r=i.exec(b.title);i.lastIndex=0,r&&(b.title=b.title.replace(i,h.marker));if(r||l){q=!0,++b.matchCount;let j=0,s=100;l&&(j=l.index-20,s=l.index+80,j<0&&(j=0)),b.preview.indexOf(m)!==-1?b.preview=b.preview.replace(i,h.marker):(j!==0&&(b.preview+="[...] "),b.preview+=`${b.content.slice(j,s).replace(i,h.marker)} `)}}q&&(b.preview+="[...]",e.push(b))}return e.sort((d,b)=>b.matchCount-d.matchCount)}static marker(a){return"<mark>"+a+"</mark>"}async doSearch(a){const c=performance.now(),e=await this.searchKeywords(a);this.clear();for(const b of e)this.list.append(h.render(b));const d=performance.now();this.resultTitle.innerText=this.generateResultTitle(e.length,((d-c)/1e3).toPrecision(1))}generateResultTitle(a,c){return this.resultTitleTemplate.replace("#PAGES_COUNT",a).replace("#TIME_SECONDS",c)}async getData(){if(!this.data){const a=this.form.dataset.json;this.data=await fetch(a).then(c=>c.json())}return this.data}bindSearchForm(){let a="";const c=e=>{e.preventDefault();const d=this.input.value;h.updateQueryString(d,!0);if(d==="")return this.clear();if(a===d)return;a=d,this.doSearch(d.split(" "))};this.input.addEventListener("input",c),this.input.addEventListener("compositionend",c)}clear(){this.list.innerHTML="",this.resultTitle.innerText=""}bindQueryStringChange(){window.addEventListener("popstate",a=>{this.handleQueryString()})}handleQueryString(){const a=new URL(window.location.toString()),c=a.searchParams.get("keyword");this.input.value=c,c?this.doSearch(c.split(" ")):this.clear()}static updateQueryString(a,c=!1){const e=new URL(window.location.toString());a===""?e.searchParams.delete("keyword"):e.searchParams.set("keyword",a),c?window.history.replaceState("","",e.toString()):window.history.pushState("","",e.toString())}static render(a){return createElement("article",null,createElement("a",{href:a.permalink},createElement("div",{class:"article-details"},createElement("h2",{class:"article-title",dangerouslySetInnerHTML:{__html:a.title}}),createElement("secion",{class:"article-preview",dangerouslySetInnerHTML:{__html:a.preview}})),a.image&&createElement("div",{class:"article-image"},createElement("img",{src:a.image,loading:"lazy"}))))}}window.addEventListener("load",()=>{setTimeout(function(){const a=document.querySelector(".search-form"),c=a.querySelector("input"),e=document.querySelector(".search-result--list"),d=document.querySelector(".search-result--title");new h({form:a,input:c,list:e,resultTitle:d,resultTitleTemplate:window.searchResultTitleTemplate})},0)});var p=h});o();})();
