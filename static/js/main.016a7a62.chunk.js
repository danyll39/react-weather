(this["webpackJsonpsocial-media-app"]=this["webpackJsonpsocial-media-app"]||[]).push([[0],{22:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(16),a=n.n(s),o=(n(22),n(9)),i=n(0),j=Object(c.createContext)(),l=function(e){var t=e.children,n=Object(c.useState)(null),r=Object(o.a)(n,2),s=r[0],a=r[1],l=Object(c.useState)(null),u=Object(o.a)(l,2),b=u[0],h=u[1],O=Object(c.useState)(null),d=Object(o.a)(O,2),x=d[0],f=d[1],p=Object(c.useState)(null),m=Object(o.a)(p,2),v=m[0],g=m[1],N=Object(c.useState)(""),w=Object(o.a)(N,2),C=w[0],S=w[1],_=Object(c.useState)(""),k=Object(o.a)(_,2),F=k[0],P=k[1],I=function(){fetch("https://api.github.com/users/".concat(C)).then((function(e){return e.json()})).then((function(e){e.message?(a(null),h(null),f(null),g(null),P("User not found...")):(a(e),L(),D(),y(),P(""))}))},D=function(){fetch("https://api.github.com/users/".concat(C,"/repos")).then((function(e){return e.json()})).then((function(e){return h(e)}))},L=function(){fetch("https://api.github.com/users/".concat(C,"/repos?per_page=8&sort=asc")).then((function(e){return e.json()})).then((function(e){return g(e)}))},y=function(){fetch("https://api.github.com/users/".concat(C,"/followers")).then((function(e){return e.json()})).then((function(e){return f(e)}))};return Object(i.jsx)(j.Provider,{value:{getSearch:function(e){e.preventDefault(),I(),S("")},user:s,repos:b,followers:x,overview:v,search:C,setSearch:S,error:F},children:t})},u=function(e){var t=e.children;return Object(i.jsx)("div",{className:"container",children:t})},b=n(2),h=function(){var e=Object(c.useContext)(j),t=e.search,n=e.setSearch,r=e.getSearch,s=Object(b.e)();return Object(c.useEffect)((function(){s.push("/overview")})),Object(i.jsx)("form",{onSubmit:r,children:Object(i.jsx)("input",{type:"text",autoFocus:!0,placeholder:"Search for a user...",value:t,onChange:function(e){return n(e.target.value)}})})},O=function(){return Object(i.jsx)("nav",{children:Object(i.jsxs)(u,{children:[Object(i.jsx)("h1",{children:"Welcome to GitHub APP"}),Object(i.jsx)(h,{})]})})},d=function(){var e=Object(c.useContext)(j).user;return Object(i.jsx)("div",{className:"user",children:Object(i.jsxs)("div",{className:"userContainer",children:[Object(i.jsx)("div",{className:"imgContainer",children:Object(i.jsx)("img",{src:e.avatar_url,alt:"user"})}),Object(i.jsxs)("div",{className:"userRow",children:[Object(i.jsxs)("div",{className:"userInfo",children:[e.name&&Object(i.jsx)("h2",{children:e.name}),e.login&&Object(i.jsx)("h2",{children:e.login})]}),e.bio&&Object(i.jsx)("div",{className:"userDesc",children:Object(i.jsx)("p",{children:e.bio})}),Object(i.jsxs)("div",{className:"userLinks",children:[e.location&&Object(i.jsxs)("p",{children:[Object(i.jsx)("i",{className:"fas fa-map-marker-alt fa-sm"}),e.location]}),e.blog&&Object(i.jsxs)("a",{href:"https://".concat(e.blog),target:"_blank",rel:"noopener noreferrer",children:[Object(i.jsx)("i",{className:"fas fa-link fa-sm"}),e.blog]})]})]})]})})},x=n(7),f=function(){return Object(i.jsxs)("div",{activeClassName:"reposNav",className:"reposNav",children:[Object(i.jsx)(x.b,{activeClassName:"active",to:"/overview",children:"Overview"}),Object(i.jsx)(x.b,{activeClassName:"active",to:"/repos",children:"Repos"}),Object(i.jsx)(x.b,{activeClassName:"active",to:"/followers",children:"Followers"})]})},p=function(){var e=Object(c.useContext)(j).overview,t=0;return Object(i.jsx)("div",{className:"overviewContainer",children:e&&e.map((function(e,n){return Object(i.jsx)("a",{href:e.html_url,target:"_blank",rel:"noreopener noreferrer",children:Object(i.jsxs)("div",{className:"overview overview-"+ ++t,children:[e.name&&Object(i.jsx)("h2",{children:e.name}),e.language&&Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{}),e.language]})]})},n)}))})},m=function(){var e=Object(c.useContext)(j).repos;return Object(i.jsx)(i.Fragment,{children:e&&e.map((function(e,t){return Object(i.jsx)("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer",className:"reposWrap",children:Object(i.jsxs)("div",{className:"repos",children:[e.name&&Object(i.jsx)("p",{children:e.name}),Object(i.jsxs)("div",{className:"repoInfo",children:[e.language&&Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{}),e.language]}),e.updated_at&&Object(i.jsx)("p",{children:e.updated_at})]})]})},"index")}))})},v=function(){var e=Object(c.useContext)(j).followers;return Object(i.jsx)(i.Fragment,{children:e&&e.map((function(e,t){return Object(i.jsx)("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer",className:"followersContainer",children:Object(i.jsxs)("div",{className:"followers",children:[Object(i.jsx)("img",{src:e.avatar_url,alt:"follower"}),Object(i.jsx)("p",{children:e.login})]})},t)}))})},g=function(){return Object(i.jsxs)("div",{className:"reposContainer",children:[Object(i.jsx)(b.a,{path:"/overview",component:p}),Object(i.jsx)(b.a,{path:"/repos",component:m}),Object(i.jsx)(b.a,{path:"/followers",component:v})]})},N=function(){var e=Object(c.useContext)(j),t=e.user,n=e.error;return Object(i.jsxs)("section",{className:"hero",children:[Object(i.jsx)(O,{}),Object(i.jsx)(u,{children:t?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(d,{}),Object(i.jsxs)("div",{className:"wrapper",children:[Object(i.jsx)(f,{}),Object(i.jsx)(g,{})]})]}):Object(i.jsx)("p",{className:"noUser",children:n})})]})};n(29);var w=function(){return Object(i.jsx)(l,{children:Object(i.jsx)(x.a,{children:Object(i.jsx)(N,{})})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(w,{})}),document.getElementById("root")),C()}},[[30,1,2]]]);
//# sourceMappingURL=main.016a7a62.chunk.js.map