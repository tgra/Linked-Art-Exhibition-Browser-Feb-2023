(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[845],{2740:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datasets/combined",function(){return s(7641)}])},7641:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var r=s(5893),a=s(9008),n=s.n(a);s(5675);var i=s(682),d=s(4051),l=s(1555),o=s(4539),c=s(545),h=s(5005),m=s(3454);function x(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(n(),{children:[(0,r.jsx)("title",{children:m.env.NEXT_PUBLIC_APP_NAME}),(0,r.jsx)("meta",{name:"description",content:"Exhibition data browser"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",integrity:"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor",crossOrigin:"anonymous"})]}),(0,r.jsx)("main",{children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(d.Z,{children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)("h1",{children:"MOMA & Alternative New York Exhibitions"}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(o.Z.Item,{href:"/",children:"Home"}),(0,r.jsx)(o.Z.Item,{href:"/datasets",children:"Datasets"}),(0,r.jsx)(o.Z.Item,{children:"Combined"})]}),(0,r.jsx)("div",{children:(0,r.jsx)("h1",{children:"Dataset: Combined"})}),(0,r.jsx)("h2",{children:"Persons"})]})}),(0,r.jsx)(d.Z,{children:[{label:"US - Surname letter",id:"us",path:"/datasets/combined/persons/nationality/us/surname_letter/",desc:"Browse entries associated with US persons across the combined dataset"},{label:"US - Birth year",id:"us__birthyear",path:"/datasets/combined/persons/nationality/us/birth_year/",desc:"Browse entries associated with US persons across the combined dataset"},{label:"non-US - Nationality",id:"nonus",path:"/datasets/combined/persons/nationality/nonus/nationality/",desc:"Browse entries associated with non-US persons across the combined dataset."},{label:"non-US - Birth year",id:"nonus_birthyear",path:"/datasets/combined/persons/nationality/nonus/birth_year/",desc:"Browse entries associated with non-US persons across the combined dataset."},{label:"non-US - Surname letter",id:"nonus",path:"/datasets/combined/persons/nationality/nonus/surname_letter/",desc:"Browse entries associated with non-US persons across the combined dataset"}].map(e=>(0,r.jsx)(l.Z,{children:(0,r.jsx)(c.Z,{style:{width:"18rem"},children:(0,r.jsxs)(c.Z.Body,{children:[(0,r.jsxs)(c.Z.Title,{children:["Nationality:",e.label]}),(0,r.jsx)(c.Z.Text,{children:e.desc}),(0,r.jsx)(h.Z,{href:e.path,variant:"primary",children:"Go"})]})})},e.path))}),(0,r.jsx)(d.Z,{children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)("h2",{children:"Exhibitions"}),(0,r.jsx)(c.Z,{style:{width:"18rem"},children:(0,r.jsxs)(c.Z.Body,{children:[(0,r.jsx)(c.Z.Title,{children:"Exhibition:Start date"}),(0,r.jsx)(c.Z.Text,{}),(0,r.jsx)(h.Z,{href:"exhibitions/start_date",variant:"primary",children:"Go"})]})})]})}),(0,r.jsx)(d.Z,{children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)("h2",{children:"Indexes"}),(0,r.jsx)("div",{children:[{label:"Birth date",id:"birth_date_all",path:"/datasets/combined/indexes/person/birth_date_all"},{label:"Surname (First letter)",id:"surname_letter",path:"/datasets/combined/indexes/person/surname_letter"}].map(e=>(0,r.jsx)(l.Z,{children:(0,r.jsx)(c.Z,{style:{width:"18rem"},children:(0,r.jsxs)(c.Z.Body,{children:[(0,r.jsxs)(c.Z.Title,{children:["Index:",e.label]}),(0,r.jsx)(c.Z.Text,{children:e.desc}),(0,r.jsx)(h.Z,{href:e.path,variant:"primary",children:"Go"})]})})},e.path))})]})})]})})]})}},5005:function(e,t,s){"use strict";var r=s(4184),a=s.n(r),n=s(7294),i=s(861),d=s(6792),l=s(5893);let o=n.forwardRef(({as:e,bsPrefix:t,variant:s,size:r,active:n,className:o,...c},h)=>{let m=(0,d.vE)(t,"btn"),[x,{tagName:u}]=(0,i.FT)({tagName:e,...c});return(0,l.jsx)(u,{...x,...c,ref:h,className:a()(o,m,n&&"active",s&&`${m}-${s}`,r&&`${m}-${r}`,c.href&&c.disabled&&"disabled")})});o.displayName="Button",o.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=o},545:function(e,t,s){"use strict";s.d(t,{Z:function(){return _}});var r=s(4184),a=s.n(r),n=s(7294),i=s(6792),d=s(6611),l=s(5893),o=e=>n.forwardRef((t,s)=>(0,l.jsx)("div",{...t,ref:s,className:a()(t.className,e)}));let c=n.forwardRef(({bsPrefix:e,className:t,variant:s,as:r="img",...n},d)=>{let o=(0,i.vE)(e,"card-img");return(0,l.jsx)(r,{ref:d,className:a()(s?`${o}-${s}`:o,t),...n})});c.displayName="CardImg";let h=n.createContext(null);h.displayName="CardHeaderContext";let m=n.forwardRef(({bsPrefix:e,className:t,as:s="div",...r},d)=>{let o=(0,i.vE)(e,"card-header"),c=(0,n.useMemo)(()=>({cardHeaderBsPrefix:o}),[o]);return(0,l.jsx)(h.Provider,{value:c,children:(0,l.jsx)(s,{ref:d,...r,className:a()(t,o)})})});m.displayName="CardHeader";let x=o("h5"),u=o("h6"),p=(0,d.Z)("card-body"),j=(0,d.Z)("card-title",{Component:x}),b=(0,d.Z)("card-subtitle",{Component:u}),f=(0,d.Z)("card-link",{Component:"a"}),Z=(0,d.Z)("card-text",{Component:"p"}),y=(0,d.Z)("card-footer"),v=(0,d.Z)("card-img-overlay"),w=n.forwardRef(({bsPrefix:e,className:t,bg:s,text:r,border:n,body:d,children:o,as:c="div",...h},m)=>{let x=(0,i.vE)(e,"card");return(0,l.jsx)(c,{ref:m,...h,className:a()(t,x,s&&`bg-${s}`,r&&`text-${r}`,n&&`border-${n}`),children:d?(0,l.jsx)(p,{children:o}):o})});w.displayName="Card",w.defaultProps={body:!1};var _=Object.assign(w,{Img:c,Title:j,Subtitle:b,Body:p,Link:f,Text:Z,Header:m,Footer:y,ImgOverlay:v})},6611:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var r=s(4184),a=s.n(r),n=/-(.)/g,i=s(7294),d=s(6792),l=s(5893);let o=e=>e[0].toUpperCase()+e.replace(n,function(e,t){return t.toUpperCase()}).slice(1);function c(e,{displayName:t=o(e),Component:s,defaultProps:r}={}){let n=i.forwardRef(({className:t,bsPrefix:r,as:n=s||"div",...i},o)=>{let c=(0,d.vE)(r,e);return(0,l.jsx)(n,{ref:o,className:a()(t,c),...i})});return n.defaultProps=r,n.displayName=t,n}}},function(e){e.O(0,[914,359,774,888,179],function(){return e(e.s=2740)}),_N_E=e.O()}]);