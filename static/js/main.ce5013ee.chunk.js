(this["webpackJsonpcrypto-dashboard"]=this["webpackJsonpcrypto-dashboard"]||[]).push([[0],{125:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),r=s(45),n=s.n(r),i=(s(62),s(16)),l=s(2),x=s(3),o=s(14),d=s.n(o),j=s(22),b=s(18),h=s(48),O=s.n(h),m=s(28),p=s.n(m),u=s(49),f=s.n(u),g=s(23),N=s.n(g),v=s(0),A=function(e){var t=Object(l.g)(),s=e.sideMenu,a=e.changeSideMenu,r=Object(c.useState)(""),n=Object(x.a)(r,2),o=n[0],h=n[1],m=Object(c.useState)([]),u=Object(x.a)(m,2),g=u[0],A=u[1],w=Object(c.useState)([]),y=Object(x.a)(w,2),C=y[0],k=y[1],S=Object(c.useState)("USDT"),U=Object(x.a)(S,2),F=U[0],B=U[1],L=Object(c.useState)(!0),M=Object(x.a)(L,2),T=M[0],I=M[1],G=Object(c.useState)(!1),Q=Object(x.a)(G,2),E=Q[0],R=Q[1],P=Object(c.useState)(!1),K=Object(x.a)(P,2),X=K[0],D=K[1],J=function(e){"USDT"===e&&(I(!0),R(!1),D(!1)),"BTC"===e&&(I(!1),R(!0),D(!1)),"ETH"===e&&(I(!1),R(!1),D(!0)),B(e);var t=Object(b.a)(C).filter((function(t){return t.s.includes(o)&&t.s.includes(e)}));t.sort((function(e,t){return e.s>t.s?1:-1})),A(t)},Y=function(){var e=Object(j.a)(d.a.mark((function e(){var t,s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("https:/jimmycoding.co/market/list");case 3:for(t=e.sent,s=0;s<t.data.data.length;s++)t.data.data[s].s=t.data.data[s].symbol,t.data.data[s].P=t.data.data[s].priceChange,t.data.data[s].c=t.data.data[s].lastPrice;c=t.data.data.sort((function(e,t){return e.s>t.s?1:-1})),A(c),k(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.response);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){Y();var e=new WebSocket("wss://stream.binance.com:9443/ws"),t={method:"SUBSCRIBE",params:["!ticker@arr"],id:1};return e.onopen=function(){e.send(JSON.stringify(t))},e.onmessage=function(e){var t=JSON.parse(e.data);t.length>0&&t.sort((function(e,t){return e.s>t.s?1:-1}))},function(){e.close()}}),[]);var W=Object(v.jsxs)("div",{className:"bg-main",children:[Object(v.jsxs)("div",{className:"px-4 pt-2 border-b border-opacity-25 border-info bg-third",children:[Object(v.jsxs)("div",{className:"flex",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"absolute ml-2 text-info",children:Object(v.jsx)(O.a,{})}),Object(v.jsx)("input",{onChange:function(e){return function(e){h(e);var t=Object(b.a)(C).filter((function(e){return e.s.includes(o)&&e.s.includes(F)}));t.sort((function(e,t){return e.s>t.s?1:-1})),A(t)}(e.target.value)},className:"p-1 text-sm text-white border outline-none bg-third border-minor placeholder-minor hover:border-orange focus:border-orange pl-7",type:"text",placeholder:"Search"})]}),Object(v.jsx)("div",{className:"ml-auto",children:Object(v.jsx)("button",{onClick:a,className:"text-info",children:Object(v.jsx)(p.a,{})})})]}),Object(v.jsxs)("div",{className:"flex pt-2",children:[Object(v.jsxs)("ul",{className:"flex text-sm lg:space-x-5 text-info",children:[Object(v.jsx)("li",{className:"pb-2 border-b-2 cursor-pointer border-main hover:border-orange",children:"Favorite"}),Object(v.jsx)("li",{onClick:function(){return J("USDT")},className:"pb-2 border-b-2 border-main hover:border-orange cursor-pointer ".concat(T&&"border-orange"),children:"USDT"}),Object(v.jsx)("li",{onClick:function(){return J("BTC")},className:"pb-2 border-b-2 border-main hover:border-orange cursor-pointer ".concat(E&&"border-orange"),children:"BTC"}),Object(v.jsx)("li",{onClick:function(){return J("ETH")},className:"pb-2 border-b-2 border-main hover:border-orange cursor-pointer ".concat(X&&"border-orange"),children:"ETH"})]}),Object(v.jsx)("span",{className:"flex items-center pb-2 ml-auto text-minor"})]})]}),Object(v.jsx)("div",{className:"overflow-y-scroll",style:{height:"80vh"},children:Object(v.jsxs)("table",{className:"w-full table-fixed",children:[Object(v.jsx)("thead",{className:"text-xs border-b border-opacity-25 text-info border-info",children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{className:"w-2/12"}),Object(v.jsx)("th",{className:"w-3/12 py-1 font-medium text-left",children:"Markets"}),Object(v.jsx)("th",{className:"w-4/12 py-1 font-medium text-right",children:"Price"}),Object(v.jsx)("th",{className:"w-3/12 py-1 font-medium text-right",children:"Change"}),Object(v.jsx)("th",{className:"w-1/12 py-1 font-medium"})]})}),Object(v.jsx)("tbody",{children:g.map((function(e,s){return Object(v.jsxs)("tr",{onClick:function(){return s=e.s,void t.push("/market/".concat(s));var s},className:"cursor-pointer hover:bg-info hover:bg-opacity-25",children:[Object(v.jsx)("td",{children:Object(v.jsx)("div",{className:"flex items-center justify-end mr-1 text-sm text-info",children:Object(v.jsx)(f.a,{})})}),Object(v.jsx)("td",{className:"py-1 text-sm text-left text-white",children:e.s}),Object(v.jsx)("td",{className:"text-right text-xs py-1 ".concat(e.P>0?"text-success":"text-danger"),children:parseFloat(e.c).toFixed(4)}),Object(v.jsxs)("td",{className:"text-right text-xs py-1 ".concat(e.P>0?"text-success":"text-danger"),children:[e.P>0&&"+",parseFloat(e.P).toFixed(2)]}),Object(v.jsx)("td",{})]},s)}))})]})})]}),z=Object(v.jsxs)("div",{className:"flex flex-col",children:[Object(v.jsx)("div",{className:"flex justify-end px-2 py-1 bg-third",children:Object(v.jsx)("button",{className:"text-info",onClick:a,children:Object(v.jsx)(p.a,{})})}),Object(v.jsx)("div",{className:"py-1 text-base text-center text-white bg-third",children:F}),Object(v.jsx)("div",{className:"py-1 text-sm text-center border-t border-b border-opacity-25 bg-main text-info border-info",children:"Market"}),Object(v.jsx)("div",{className:"flex flex-col overflow-y-scroll",style:{height:"80vh"},children:g.map((function(e,t){return Object(v.jsx)(i.b,{to:"/market/".concat(e.s),children:Object(v.jsx)("div",{className:"py-1 text-xs text-center text-white hover:bg-third",children:e.s})},e.s)}))})]});return Object(v.jsx)(v.Fragment,{children:s?W:z})},w=s(51),y=s.n(w),C=s(50),k=s.n(C),S=s(52),U=s.n(S),F=s(53),B=s.n(F),L=s(54),M=s.n(L),T=function(){var e=Object(c.useState)(!1),t=Object(x.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)(!1),n=Object(x.a)(r,2),i=n[0],l=n[1],o=Object(c.useState)(!1),d=Object(x.a)(o,2),j=d[0],b=d[1];return Object(v.jsxs)("div",{className:"flex items-center h-16 pl-6 bg-main align z-10",children:[Object(v.jsx)("div",{className:"px-3",children:Object(v.jsx)("img",{className:"w-24",src:"data:image/png;base64,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",alt:"logo"})}),Object(v.jsxs)("ul",{className:"flex items-start lg:space-x-5 pl-4",children:[Object(v.jsxs)("li",{className:"self-end",onMouseEnter:function(){a(!0)},onMouseLeave:function(){a(!1)},children:[Object(v.jsx)("a",{className:"text-info text-lg flex hover:text-orange",href:"/",children:s?Object(v.jsx)(k.a,{}):Object(v.jsx)(y.a,{})}),s&&Object(v.jsx)("a",{href:"/",children:Object(v.jsx)("div",{className:"bg-main absolute w-40 py-4 px-5 text-info",children:"FAQ"})})]}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{className:"text-info hover:text-success",href:"/",children:"Markets"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{className:"text-info hover:text-success",href:"/",children:"Exchange"})}),Object(v.jsxs)("li",{onMouseEnter:function(){l(!0)},onMouseLeave:function(){l(!1)},children:[Object(v.jsx)("a",{className:"text-info hover:text-success",href:"/",children:"Buy Crypto"}),i&&Object(v.jsxs)("div",{children:[Object(v.jsx)("a",{href:"/",children:Object(v.jsx)("div",{className:"bg-main absolute w-40 py-4 px-5 text-info z-10",children:"P2P Trading"})}),Object(v.jsx)("a",{href:"/",children:Object(v.jsx)("div",{className:"bg-main absolute w-40 py-4 px-5 mt-12 text-info z-10",children:"Credit Card"})})]})]}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{className:"text-info hover:text-success",href:"/",children:"Contract"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{className:"text-info hover:text-success",href:"/",children:"ETF"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{className:"text-info hover:text-success",href:"/",children:"NewCoin"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{className:"text-info hover:text-success",href:"/",children:"Kinghash"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{className:"text-info hover:text-success",href:"/",children:"Announcement"})})]}),Object(v.jsxs)("div",{className:"flex h-full ml-auto",children:[Object(v.jsxs)("div",{className:"flex px-6 py-4 border-l border-r lg:space-x-4 border-info border-opacity-20",children:[Object(v.jsx)("button",{type:"button",className:"px-5 py-1 text-info hover:bg-info hover:bg-opacity-25",children:"Log In"}),Object(v.jsx)("button",{type:"button",className:"px-5 py-1 border hover:text-orange text-info border-orange",children:"Sign Up"})]}),Object(v.jsxs)("div",{className:"flex",children:[Object(v.jsx)("button",{type:"button",className:"px-5 py-5 text-info",children:Object(v.jsx)(U.a,{})}),Object(v.jsx)("button",{type:"button",className:"px-5 py-5 text-info border-l border-r border-info border-opacity-20",children:Object(v.jsx)(B.a,{})}),Object(v.jsxs)("div",{onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},children:[Object(v.jsxs)("a",{className:"px-5 pt-6 pb-5 text-info text-sm flex",href:"/",children:[Object(v.jsx)("span",{className:"mr-1",children:"Language"}),Object(v.jsx)("span",{className:"self-center",children:Object(v.jsx)(M.a,{})})]}),j&&Object(v.jsxs)("div",{children:[Object(v.jsx)("a",{href:"/",children:Object(v.jsx)("div",{className:"bg-main absolute w-40 py-4 px-5 text-info z-10 right-0",children:"English"})}),Object(v.jsx)("a",{href:"/",children:Object(v.jsx)("div",{className:"bg-main absolute w-40 py-4 px-5 mt-12 text-info z-10 right-0",children:"\u0e44\u0e17\u0e22"})})]})]})]})]})]})},I=s(29),G=s.n(I),Q=function(){var e=Object(l.h)().coin;return Object(v.jsx)(G.a,{symbol:"BINANCE:".concat(e),theme:I.Themes.DARK,autosize:!0,hide_top_toolbar:!0,withdateranges:!0})},E=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"w-full h-full bg-main",children:[Object(v.jsx)("div",{className:"pt-2 bg-third",children:Object(v.jsxs)("ul",{className:"flex text-info space-x-6 px-6",children:[Object(v.jsx)("li",{className:"text-white border-b-2 border-orange",children:"Limit"}),Object(v.jsx)("li",{children:"Markets"}),Object(v.jsx)("li",{children:"Grid Trading"})]})}),Object(v.jsxs)("div",{className:"flex",children:[Object(v.jsx)("div",{className:"flex-1 px-6 py-2",children:Object(v.jsxs)("div",{className:"flex",children:[Object(v.jsx)("p",{className:"text-sm text-info",children:"Buy BTC"}),Object(v.jsx)("p",{className:"text-white text-sm ml-auto",children:"0 USDT"})]})}),Object(v.jsx)("div",{className:"flex-1 px-6 py-2",children:Object(v.jsxs)("div",{className:"flex",children:[Object(v.jsx)("p",{className:"text-sm text-info",children:"Sell BTC"}),Object(v.jsx)("p",{className:"text-white text-sm ml-auto",children:"0 BTC"})]})})]})]})})},R=function(){var e=Object(c.useState)([]),t=Object(x.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)([]),n=Object(x.a)(r,2),i=n[0],o=n[1],d=Object(l.h)().coin;return Object(c.useEffect)((function(){var e=new WebSocket("wss://stream.binance.com:9443/ws"),t={method:"SUBSCRIBE",params:["".concat(d.toLowerCase(),"@depth20@1000ms")],id:1};return e.onopen=function(){e.send(JSON.stringify(t))},e.onmessage=function(e){var t=JSON.parse(e.data);void 0!==t.bids&&(a(t.bids),o(t.asks))},function(){e.close()}}),[d]),Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"flex flex-col h-full",children:[Object(v.jsxs)("div",{className:"w-full bg-main h-1/2",children:[Object(v.jsx)("div",{className:"bg-third",children:Object(v.jsx)("h1",{className:"px-3 py-2 text-white",children:"Orderbook"})}),Object(v.jsxs)("table",{className:"w-full table-fixed",children:[Object(v.jsx)("thead",{className:"text-xs border-t border-b border-opacity-25 text-info border-info bg-third",children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{className:"w-4/12 py-1 pl-2 font-medium text-left",children:"Price"}),Object(v.jsx)("th",{className:"w-4/12 py-1 font-medium text-right",children:"Amount"}),Object(v.jsx)("th",{className:"w-4/12 py-1 pr-2 font-medium text-right",children:"Sum"})]})}),Object(v.jsx)("tbody",{children:s.map((function(e,t){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{className:"pl-2 text-xs text-left text-danger",children:parseFloat(e[0]).toFixed(6)}),Object(v.jsx)("td",{className:"text-xs text-right text-info",children:parseFloat(e[1]).toFixed(2)}),Object(v.jsx)("td",{className:"pr-2 text-xs text-right text-info",children:(parseFloat(e[0]).toFixed(6)*parseFloat(e[1]).toFixed(2)).toFixed(4)})]},t)}))})]})]}),Object(v.jsxs)("div",{className:"w-full bg-main h-1/2",children:[Object(v.jsx)("div",{className:"bg-third",children:Object(v.jsxs)("h1",{className:"px-3 py-2 text-white",children:[i.length>0&&parseFloat(i[0][0]).toFixed(4)," \u2248"," ",i.length>0&&parseFloat(i[0][0]).toFixed(2)]})}),Object(v.jsx)("table",{className:"w-full table-fixed",children:Object(v.jsx)("tbody",{children:i.map((function(e,t){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{className:"pl-2 text-xs text-left text-success",children:parseFloat(e[0]).toFixed(6)}),Object(v.jsx)("td",{className:"text-xs text-right text-info",children:parseFloat(e[1]).toFixed(2)}),Object(v.jsx)("td",{className:"pr-2 text-xs text-right text-info",children:(parseFloat(e[0]).toFixed(6)*parseFloat(e[1]).toFixed(2)).toFixed(4)})]},t)}))})})]})]})})},P=s(55),K=s.n(P),X=function(){var e=Object(l.h)().coin,t=Object(c.useState)([]),s=Object(x.a)(t,2),a=s[0],r=s[1],n=function(){var t=Object(j.a)(d.a.mark((function t(){var s,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.a.get("https:/jimmycoding.co/"+e);case 3:for(s=t.sent,c=0;c<s.data.data.length;c++)s.data.data[c].p=s.data.data[c].price,s.data.data[c].q=s.data.data[c].qty,s.data.data[c].T=s.data.data[c].time,s.data.data[c].m=s.data.data[c].isBuyerMaker;s.data.data.sort((function(e,t){return t.T-e.T})),r(s.data.data),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.response);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){n();var t=new WebSocket("wss://stream.binance.com:9443/ws"),s={method:"SUBSCRIBE",params:["".concat(e.toLowerCase(),"@trade")],id:1};return t.onopen=function(){t.send(JSON.stringify(s))},t.onmessage=function(e){var t=JSON.parse(e.data);"trade"===t.e&&r((function(e){return[t].concat(Object(b.a)(e.slice(0,-1)))}))},function(){t.close()}}),[e]),Object(v.jsxs)("div",{className:"w-full h-full bg-main",children:[Object(v.jsx)("div",{className:"bg-third",children:Object(v.jsx)("h1",{className:"px-3 py-2 text-white",children:"Market Trades"})}),Object(v.jsxs)("table",{className:"w-full table-fixed",children:[Object(v.jsx)("thead",{className:"text-xs border-t border-b border-opacity-25 text-info border-info bg-third",children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{className:"w-4/12 py-1 pl-2 font-medium text-left",children:"Price"}),Object(v.jsx)("th",{className:"w-4/12 py-1 font-medium text-right",children:"Volume"}),Object(v.jsx)("th",{className:"w-4/12 py-1 pr-2 font-medium text-right",children:"Date"})]})}),Object(v.jsx)("tbody",{children:a.map((function(e,t){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{className:"pl-2 text-xs text-left ".concat(e.m?"text-danger":"text-success"),children:parseFloat(e.p).toFixed(4)}),Object(v.jsx)("td",{className:"text-xs text-right text-info",children:parseFloat(e.q).toFixed(3)}),Object(v.jsx)("td",{className:"pr-2 text-xs text-right text-info",children:K()(e.T).format("hh:mm:ss")})]},t)}))})]})]})},D=s(57),J=s.n(D),Y=s(56),W=s.n(Y),z=function(){return Object(v.jsxs)("div",{className:"grid grid-cols-12 pt-12 pb-12",children:[Object(v.jsx)("div",{className:"col-span-2"}),Object(v.jsxs)("div",{className:"flex col-span-8 lg:space-x-20",children:[Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:"data:image/png;base64,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",alt:"footer-logo"})}),Object(v.jsxs)("div",{className:"flex pb-20 border-b border-info border-opacity-30 lg:space-x-10",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{className:"text-sm text-white",children:"Service"}),Object(v.jsxs)("ul",{className:"flex flex-col mt-5 space-y-2",children:[Object(v.jsx)("li",{children:Object(v.jsx)("p",{className:"text-xs cursor-pointer text-info hover:text-white",children:"Announcement Center"})}),Object(v.jsx)("li",{children:Object(v.jsx)("p",{className:"text-xs cursor-pointer text-info hover:text-white",children:"Beginner's Guide"})})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{className:"text-sm text-white",children:"About Goko"}),Object(v.jsxs)("ul",{className:"flex flex-col mt-5 space-y-2",children:[Object(v.jsx)("li",{children:Object(v.jsx)("p",{className:"text-xs cursor-pointer text-info hover:text-white",children:"app Download"})}),Object(v.jsx)("li",{children:Object(v.jsx)("p",{className:"text-xs cursor-pointer text-info hover:text-white",children:"About Goko"})}),Object(v.jsx)("li",{children:Object(v.jsx)("p",{className:"text-xs cursor-pointer text-info hover:text-white",children:"Help Center"})})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{className:"text-sm text-white",children:"Terms and Conditions"}),Object(v.jsxs)("ul",{className:"flex flex-col mt-5 space-y-2",children:[Object(v.jsx)("li",{children:Object(v.jsx)("p",{className:"text-xs cursor-pointer text-info hover:text-white",children:"User Agreement"})}),Object(v.jsx)("li",{children:Object(v.jsx)("p",{className:"text-xs cursor-pointer text-info hover:text-white",children:"Privacy Policy"})}),Object(v.jsx)("li",{children:Object(v.jsx)("p",{className:"text-xs cursor-pointer text-info hover:text-white",children:"Legal Notices"})})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{className:"text-sm text-white",children:"Tools"}),Object(v.jsx)("ul",{className:"flex flex-col mt-5 space-y-2",children:Object(v.jsx)("li",{children:Object(v.jsx)("p",{className:"text-xs cursor-pointer text-info hover:text-white",children:"API Documentation"})})})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{className:"text-sm text-white",children:"Social Media"}),Object(v.jsxs)("ul",{className:"flex justify-end mt-5 space-x-2",children:[Object(v.jsx)("li",{children:Object(v.jsx)("p",{className:"text-xl cursor-pointer text-info hover:text-white",children:Object(v.jsx)(W.a,{})})}),Object(v.jsx)("li",{children:Object(v.jsx)("p",{className:"text-xl cursor-pointer text-info hover:text-white",children:Object(v.jsx)(J.a,{})})})]})]})]})]}),Object(v.jsx)("div",{className:"col-span-2"}),Object(v.jsx)("div",{className:"flex justify-center col-span-12 mt-5",children:Object(v.jsx)("div",{className:"text-sm text-info ",children:"Copyright \xa9 2019 Goko. All rights reserved"})})]})},q=function(){var e=Object(c.useState)(!0),t=Object(x.a)(e,2),s=t[0],a=t[1];return Object(v.jsxs)("div",{className:"bg-secondary",children:[Object(v.jsx)(T,{}),Object(v.jsx)("div",{style:{height:"90vh"},children:Object(v.jsxs)("div",{className:"grid grid-cols-12",style:{height:"100%"},children:[Object(v.jsx)("div",{className:"".concat(s?"col-span-2 ":"col-span-1"," p-1 bg-main"),children:Object(v.jsx)(A,{sideMenu:s,changeSideMenu:function(){a(!s)}})}),Object(v.jsxs)("div",{className:"".concat(s?"col-span-6":"col-span-7"," p-1 flex flex-col lg:space-y-1"),children:[Object(v.jsx)("div",{className:"flex-1",children:Object(v.jsx)(Q,{})}),Object(v.jsx)("div",{className:"flex-1",children:Object(v.jsx)(E,{})})]}),Object(v.jsx)("div",{className:"col-span-2 p-1",children:Object(v.jsx)(R,{})}),Object(v.jsx)("div",{className:"col-span-2 p-1",children:Object(v.jsx)(X,{})})]})}),Object(v.jsx)(z,{})]})},H=function(){return Object(v.jsx)(i.a,{children:Object(v.jsx)("div",{children:Object(v.jsxs)(l.d,{children:[Object(v.jsx)(l.b,{path:"/",exact:!0,children:Object(v.jsx)(l.a,{to:"/market/BTCUSDT"})}),Object(v.jsx)(l.b,{path:"/market/:coin",exact:!0,children:Object(v.jsx)(q,{})})]})})})},V=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,129)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),r(e),n(e)}))};n.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(H,{})}),document.getElementById("root")),V()},62:function(e,t,s){}},[[125,1,2]]]);
//# sourceMappingURL=main.ce5013ee.chunk.js.map