(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[953],{2853:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datasets/combined/indexes/person/birth_date/[year]",function(){return n(1968)}])},9888:function(e,r,n){"use strict";n.d(r,{Z:function(){return s}});var t=n(5893),i=n(892);function s(e){let{id:r,_label:n,born:s,died:o}=e,c=null==r?void 0:r.match(/[0-9]+$/);return null!==c&&c[0],s=s.split("T")[0].split("-")[0],o=o.split("T")[0].split("-")[0],(0,t.jsxs)(i.Z.Item,{variant:"dark",action:!0,href:"#link"+r.split("/").pop(),children:[n," ",""==s?"":"("+s+"-"+o+")"]},r)}},8186:function(e,r,n){"use strict";n.d(r,{Z:function(){return a}});var t=n(5893),i=n(6144),s=n(892),o=n(4076),c=n(1664),l=n.n(c);function a(e){let{id:r,_label:n,name:c,born:a,died:d,total_exhibitions:h,nationality:u,exhibitions:p,gender:x}=e,j=null==r?void 0:r.match(/[0-9]+$/);null!==j&&j[0],a=a.split("T")[0].split("-")[0],d=d.split("T")[0].split("-")[0];let f={};for(let e in p.forEach(function(e){let r=e.start.split("-")[0].substring(0,3);void 0==f[r]&&(f[r]=[]),f[r].push(e)}),f)f[e]=f[e].sort((e,r)=>e.start>r.start?1:-1);return(0,t.jsxs)(i.Z.Pane,{eventKey:"#link"+r.split("/").pop(),children:[(0,t.jsx)("h1",{children:n}),(0,t.jsxs)(s.Z,{children:[(0,t.jsxs)(s.Z.Item,{variant:"dark",children:[(0,t.jsx)("h5",{children:"Born"}),(0,t.jsx)(l(),{href:"/datasets/combined/indexes/person/birth_date/"+a,children:a})]}),(0,t.jsxs)(s.Z.Item,{variant:"dark",children:[(0,t.jsx)("h5",{children:"Died"}),d]}),(0,t.jsxs)(s.Z.Item,{variant:"dark",children:[(0,t.jsx)("h5",{children:"Nationality"}),u]}),(0,t.jsxs)(s.Z.Item,{variant:"dark",children:[(0,t.jsx)("h5",{children:"Gender"}),x]})]}),(0,t.jsx)("br",{}),(0,t.jsx)("h4",{children:"Exhibitions"}),(0,t.jsxs)("p",{children:["Total number of exhibitions: ",h]}),(0,t.jsx)(o.Z,{alwaysOpen:!0,children:Object.entries(f).map(e=>{let[r,n]=e;return(0,t.jsxs)(o.Z.Item,{eventKey:"section_"+r,children:[(0,t.jsxs)(o.Z.Header,{children:[r,"0s (",n&&Array.isArray(n)?n.length:"",")"]}),(0,t.jsx)(o.Z.Body,{children:(0,t.jsx)(s.Z,{numbered:!0,children:null==n?void 0:n.map(e=>(0,t.jsxs)(s.Z.Item,{variant:"light",action:!0,href:"/exhibition-browser-static-demo/exhibition/"+e.id.split("/").pop(),children:[e.start.split("T")[0],(0,t.jsx)("h5",{children:e._label})]},"influenced"+e.id))})})]},"section_"+r)})})]},"#link"+r.split("/").pop())}},1968:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return v}});var t=n(5893),i=n(7294),s=n(9008),o=n.n(s);n(7334);var c=n(3559),l=n(682),a=n(4051),d=n(1555),h=n(4539),u=n(4076),p=n(6144),x=n(892),j=n(9888),f=n(8186);let m=e=>{let{persons:r,year:n,dataset:s}=e;return void 0==r?(0,t.jsx)(c.Z,{children:(0,t.jsx)("div",{})}):(0,t.jsx)(c.Z,{children:(0,t.jsxs)("div",{children:[(0,t.jsxs)(o(),{children:[(0,t.jsx)("title",{children:"MOMA & Alternative New York Exhibitions"}),(0,t.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",integrity:"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor",crossOrigin:"anonymous"}),(0,t.jsx)("script",{src:"https://unpkg.com/react/umd/react.production.min.js",async:!0})]}),(0,t.jsx)("main",{children:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)("h1",{children:"MOMA & Alternative New York Exhibitions"}),(0,t.jsx)(a.Z,{children:(0,t.jsxs)(d.Z,{children:[(0,t.jsxs)(h.Z,{children:[(0,t.jsx)(h.Z.Item,{href:"../../../../../",children:"Home"}),(0,t.jsx)(h.Z.Item,{href:"../../../../",children:"Datasets"}),(0,t.jsx)(h.Z.Item,{href:"../../../",children:"Combined"}),(0,t.jsx)(h.Z.Item,{children:"Indexes"}),(0,t.jsx)(h.Z.Item,{children:"Persons"}),(0,t.jsx)(h.Z.Item,{children:"Birth year"}),(0,t.jsx)(h.Z.Item,{children:n})]}),(0,t.jsxs)("h3",{children:["Birth year: ",n," "]})]})}),(0,t.jsx)(a.Z,{children:(0,t.jsx)(u.Z,{alwaysOpen:!0,children:Object.entries(r).sort().map(e=>{let[r,n]=e;return(0,t.jsxs)(u.Z.Item,{eventKey:"section_"+r,children:[(0,t.jsx)(u.Z.Header,{children:r}),(0,t.jsx)(u.Z.Body,{children:(0,t.jsx)(p.Z.Container,{id:"list-group-tabs",children:(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(d.Z,{sm:4,children:(0,t.jsx)(x.Z,{numbered:!0,children:Array.isArray(n)?n.map(e=>(0,i.createElement)(j.Z,{...e,key:e.id})):""})}),(0,t.jsx)(d.Z,{sm:8,children:(0,t.jsx)(p.Z.Content,{children:Array.isArray(n)?n.map(e=>(0,i.createElement)(f.Z,{...e,key:"#link"+e.id.split("/").pop()})):""})})]})})})]},"section_"+r)})})})]})})]})})};var v=!0;r.default=m},7334:function(e){!function(){"use strict";var r,n={815:function(e){e.exports=function(e,n,t,i){n=n||"&",t=t||"=";var s={};if("string"!=typeof e||0===e.length)return s;var o=/\+/g;e=e.split(n);var c=1e3;i&&"number"==typeof i.maxKeys&&(c=i.maxKeys);var l=e.length;c>0&&l>c&&(l=c);for(var a=0;a<l;++a){var d,h,u,p,x=e[a].replace(o,"%20"),j=x.indexOf(t);(j>=0?(d=x.substr(0,j),h=x.substr(j+1)):(d=x,h=""),u=decodeURIComponent(d),p=decodeURIComponent(h),Object.prototype.hasOwnProperty.call(s,u))?r(s[u])?s[u].push(p):s[u]=[s[u],p]:s[u]=p}return s};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},577:function(e){var r=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,s,o,c){return(s=s||"&",o=o||"=",null===e&&(e=void 0),"object"==typeof e)?t(i(e),function(i){var c=encodeURIComponent(r(i))+o;return n(e[i])?t(e[i],function(e){return c+encodeURIComponent(r(e))}).join(s):c+encodeURIComponent(r(e[i]))}).join(s):c?encodeURIComponent(r(c))+o+encodeURIComponent(r(e)):""};var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function t(e,r){if(e.map)return e.map(r);for(var n=[],t=0;t<e.length;t++)n.push(r(e[t],t));return n}var i=Object.keys||function(e){var r=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.push(n);return r}}},t={};function i(e){var r=t[e];if(void 0!==r)return r.exports;var s=t[e]={exports:{}},o=!0;try{n[e](s,s.exports,i),o=!1}finally{o&&delete t[e]}return s.exports}i.ab="//";var s={};(r=s).decode=r.parse=i(815),r.encode=r.stringify=i(577),e.exports=s}()}},function(e){e.O(0,[914,920,76,674,774,888,179],function(){return e(e.s=2853)}),_N_E=e.O()}]);