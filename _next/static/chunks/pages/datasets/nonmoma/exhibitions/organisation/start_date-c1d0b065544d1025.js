(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[0],{202:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datasets/nonmoma/exhibitions/organisation/start_date",function(){return t(1834)}])},3117:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893),i=t(892);function s(e){let{id:n,_label:t}=e,s="/exhibition-browser-static-demo/exhibition/"+n.split("/").pop();return(0,r.jsx)(i.Z.Item,{variant:"dark",action:!0,href:s,children:t})}},1834:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return f}});var r=t(5893),i=t(7294),s=t(9008),o=t.n(s);t(2770),t(7334);var c=t(3559),a=t(682),d=t(4051),u=t(1555),l=t(4539),h=t(4076),p=t(892),x=t(3117);let j=e=>{let{exSummaryDataList:n}=e;if(void 0==n||!Object.keys(n).includes("events"))return(0,r.jsx)(c.Z,{children:(0,r.jsx)("div",{})});{var t=Object.keys(n.events).sort();let e=t.indexOf("The Museum of Modern Art");e>-1&&t.splice(e,1),(e=t.indexOf("MoMA PS1"))>-1&&t.splice(e,1)}var s=["January","February","March","April","May","June","July","August","September","October","November","December"];return(0,r.jsx)(c.Z,{children:(0,r.jsxs)("div",{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"MOMA & Alternative New York Exhibitions"}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",integrity:"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor",crossOrigin:"anonymous"}),(0,r.jsx)("script",{src:"https://unpkg.com/react/umd/react.production.min.js",async:!0})]}),(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(d.Z,{children:(0,r.jsxs)(u.Z,{children:[(0,r.jsx)("h1",{children:"MOMA & Alternative New York Exhibitions"}),(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(l.Z.Item,{href:"../../../../../",children:"Home"}),(0,r.jsx)(l.Z.Item,{href:"../../../../",children:"Datasets"}),(0,r.jsx)(l.Z.Item,{href:"../../../",children:"non-MoMA"}),(0,r.jsx)(l.Z.Item,{children:"Exhibitions"}),(0,r.jsx)(l.Z.Item,{children:"Organisation"}),(0,r.jsx)(l.Z.Item,{children:"Start date"})]})]})}),(0,r.jsx)(d.Z,{children:(0,r.jsxs)(u.Z,{children:[(0,r.jsx)("h1",{children:"Exhibitions - ordered by organisation and exhibition start date  "}),(0,r.jsx)("ul",{children:(0,r.jsx)("li",{children:"Dataset:non-MoMA"})})]})}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(h.Z,{alwaysOpen:!0,children:t.map(e=>(0,r.jsxs)(h.Z.Item,{eventKey:"section_"+e,children:[(0,r.jsxs)(h.Z.Header,{children:[e," (",n.counter[e]," exhibition)"]}),(0,r.jsx)(h.Z.Body,{children:(0,r.jsx)(a.Z,{children:(0,r.jsx)(h.Z,{alwaysOpen:!0,children:Object.keys(n.events[e]).sort().map(t=>(0,r.jsxs)(h.Z.Item,{eventKey:"section_"+e+t,children:[(0,r.jsx)(h.Z.Header,{children:t}),(0,r.jsx)(h.Z.Body,{children:Object.keys(n.events[e][t]).sort().map(o=>(0,r.jsx)(d.Z,{children:(0,r.jsxs)(u.Z,{children:[(0,r.jsxs)("h6",{children:[s[parseInt(o)-1]," ",t," "]}),(0,r.jsx)(p.Z,{children:n.events[e][t][o].map(e=>(0,i.createElement)(x.Z,{...e,key:"ex_"+e.id}))})]})},"month"+o))})]},"section_"+e+t))})})})]},"section_"+e))})})]})]})})};var f=!0;n.default=j},7334:function(e){!function(){"use strict";var n,t={815:function(e){e.exports=function(e,t,r,i){t=t||"&",r=r||"=";var s={};if("string"!=typeof e||0===e.length)return s;var o=/\+/g;e=e.split(t);var c=1e3;i&&"number"==typeof i.maxKeys&&(c=i.maxKeys);var a=e.length;c>0&&a>c&&(a=c);for(var d=0;d<a;++d){var u,l,h,p,x=e[d].replace(o,"%20"),j=x.indexOf(r);(j>=0?(u=x.substr(0,j),l=x.substr(j+1)):(u=x,l=""),h=decodeURIComponent(u),p=decodeURIComponent(l),Object.prototype.hasOwnProperty.call(s,h))?n(s[h])?s[h].push(p):s[h]=[s[h],p]:s[h]=p}return s};var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},577:function(e){var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,s,o,c){return(s=s||"&",o=o||"=",null===e&&(e=void 0),"object"==typeof e)?r(i(e),function(i){var c=encodeURIComponent(n(i))+o;return t(e[i])?r(e[i],function(e){return c+encodeURIComponent(n(e))}).join(s):c+encodeURIComponent(n(e[i]))}).join(s):c?encodeURIComponent(n(c))+o+encodeURIComponent(n(e)):""};var t=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function r(e,n){if(e.map)return e.map(n);for(var t=[],r=0;r<e.length;r++)t.push(n(e[r],r));return t}var i=Object.keys||function(e){var n=[];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push(t);return n}}},r={};function i(e){var n=r[e];if(void 0!==n)return n.exports;var s=r[e]={exports:{}},o=!0;try{t[e](s,s.exports,i),o=!1}finally{o&&delete r[e]}return s.exports}i.ab="//";var s={};(n=s).decode=n.parse=i(815),n.encode=n.stringify=i(577),e.exports=s}()},2770:function(e){"use strict";e.exports=next}},function(e){e.O(0,[914,920,76,774,888,179],function(){return e(e.s=202)}),_N_E=e.O()}]);