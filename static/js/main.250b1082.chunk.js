(this["webpackJsonphackmelbourne-demo-2"]=this["webpackJsonphackmelbourne-demo-2"]||[]).push([[0],{48:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(36),i=n.n(r),s=(n(48),n(92)),o=n(4),j=n(88),d=n(26),u=n(37),b=n.n(u);function h(e){var t=Object(c.useState)(null),n=Object(d.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)("idle"),s=Object(d.a)(i,2),o=s[0],j=s[1];return Object(c.useEffect)((function(){e&&(j("fetching"),b()(e).then((function(e){r(e.data),j("succeeded")})).catch((function(e){console.error(e),j("error")})))}),[e]),{status:o,data:a}}var O=n(2),l=function(){var e=Object(o.g)().id,t=h("https://api.coingecko.com/api/v3/coins/".concat(e)),n=t.data;if("succeeded"!==t.status)return Object(O.jsx)(j.a,{children:"Loading..."});var c=n.name,a=n.description;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(j.a,{variant:"h3",children:c}),Object(O.jsx)("div",{dangerouslySetInnerHTML:{__html:a.en}})]})},m=n(42),p=n(91),x=n(93),f=n(89),g=n(90),v=function(e){var t=e.name,n=e.image,c=e.current_price,a=e.symbol,r=e.market_cap,i=e.id,s=Object(o.f)();return Object(O.jsxs)(x.a,{onClick:function(){return s.push("/".concat(i))},children:[Object(O.jsx)(f.a,{image:n,style:{height:250}}),Object(O.jsxs)(g.a,{children:[Object(O.jsxs)(j.a,{variant:"h6",children:[t," (",a,")"]}),Object(O.jsxs)(j.a,{variant:"body1",children:["Trading at $",c," AUD"]}),Object(O.jsxs)(j.a,{variant:"body1",children:["Market cap of $",r]})]})]})},k=function(){var e=h("https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc"),t=e.data;return"fetching"===e.status?Object(O.jsx)(j.a,{children:"Loading..."}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(j.a,{variant:"h3",children:"Cryptocurrencies!"}),Object(O.jsx)(p.a,{container:!0,spacing:2,children:t&&t.map((function(e){return Object(O.jsx)(p.a,{item:!0,xs:3,children:Object(O.jsx)(v,Object(m.a)({},e))},e.name)}))})]})},y=function(){return Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{path:"/:id",component:l}),Object(O.jsx)(o.a,{path:"/",component:k})]})};var _=function(){return Object(O.jsx)(s.a,{children:Object(O.jsx)(y,{})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},C=n(17);i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(C.a,{basename:"/GitAndHostingWorkshop",children:Object(O.jsx)(_,{})})}),document.getElementById("root")),F()}},[[73,1,2]]]);
//# sourceMappingURL=main.250b1082.chunk.js.map