(this.webpackJsonpplanning_poker_online=this.webpackJsonpplanning_poker_online||[]).push([[0],[,,,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),l=t(3),i=t.n(l);t(10),t(11);var o=function(){return n.a.createElement("header",{className:"bg-white black-80 tc pv1 avenir"},n.a.createElement("h1",{className:"mt2 mb0 fw2 f3 avenir"},"Planning Poker Online"),n.a.createElement("h2",{className:"mt2 mb0 f6 fw4 avenir"},"Choose your Card"))};t(12);var r=function(){return n.a.createElement("div",{className:"mb4 tc"},n.a.createElement("p",{className:"f7 black-80 fw2 dib pa3 avenir",href:"/"},"made with ",n.a.createElement("span",{role:"img","aria-label":"heart"}," \u2764\ufe0f"),"by ",n.a.createElement("a",{className:"link",href:"https://www.linkedin.com/in/alcibiadesc"},"Alcibiades Cabral D\xedaz")," in Quarantine"))},m=t(1),u=(t(13),t(14),t(15),function(e){var a=e.modal,t=e.valueCard,c=e.useModal;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:a?"md-modal-show":"md-modal-hide",onClick:c},n.a.createElement("div",{className:"card-modal"},n.a.createElement("p",{className:"contend-modal noselect tc avenir f1"},t))))}),d=t(4);var s=function(e){var a=e.value,t=Object(c.useState)(!1),l=Object(m.a)(t,2),i=l[0],o=l[1],r=function(){o(!i)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a.div,{animate:{scale:[1.1,.9,1]},whileHover:{scale:1.1},transition:{duration:.5},whileTap:{scale:.9},className:"carta grow center ma1"},n.a.createElement("p",{id:"cardRender",onClick:r,value:a,className:"noselect avenir dtc v-mid  tc w4 f1"},a)),n.a.createElement("div",{className:""},n.a.createElement(u,{modal:i,valueCard:a,useModal:r})))},v=[{value:"XS",deck:"T-Shirt"},{value:"S",deck:"T-Shirt"},{value:"M",deck:"T-Shirt"},{value:"L",deck:"T-Shirt"},{value:"XL",deck:"T-Shirt"},{value:"XXL",deck:"T-Shirt"},{value:"0",deck:"StoryPoints"},{value:"1/2",deck:"StoryPoints"},{value:"1",deck:"StoryPoints"},{value:"2",deck:"StoryPoints"},{value:"3",deck:"StoryPoints"},{value:"5",deck:"StoryPoints"},{value:"8",deck:"StoryPoints"},{value:"13",deck:"StoryPoints"},{value:"20",deck:"StoryPoints"},{value:"40",deck:"StoryPoints"},{value:"100",deck:"StoryPoints"},{value:"0",deck:"Fibonacci"},{value:"1",deck:"Fibonacci"},{value:"2",deck:"Fibonacci"},{value:"3",deck:"Fibonacci"},{value:"5",deck:"Fibonacci"},{value:"8",deck:"Fibonacci"},{value:"13",deck:"Fibonacci"},{value:"21",deck:"Fibonacci"},{value:"34",deck:"Fibonacci"},{value:"55",deck:"Fibonacci"},{value:"89",deck:"Fibonacci"},{value:"144",deck:"Fibonacci"},{value:"\ud83d\udc2d",deck:"Custom"},{value:"\ud83d\udc30",deck:"Custom"},{value:"\ud83d\udc36",deck:"Custom"},{value:"\ud83e\udd81",deck:"Custom"},{value:"\ud83e\udd84",deck:"Custom"},{value:"\ud83d\udc32",deck:"Custom"},{value:"?",deck:"common"},{value:"\u267e\ufe0f",deck:"common"},{value:"\u2615",deck:"common"}],k=function(e){var a=e.deckSelected,t=v.filter((function(e){return e.deck===a||"common"===e.deck})),c=t.map((function(e,a){return n.a.createElement(s,{key:t[a].value,value:t[a].value})}));return n.a.createElement(n.a.Fragment,null,c)};var b=function(){var e=Object(c.useState)("Fibonacci"),a=Object(m.a)(e,2),t=a[0],l=a[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"f3 tc avenir pv2",id:"deckInfo"},t),n.a.createElement(k,{deckSelected:t}),n.a.createElement("footer",{id:"footerBtm",className:"bg-white black-80 tc avenir pv3"},n.a.createElement("nav",{className:"bt tc mw7 center "},n.a.createElement("p",{onClick:function(){l(t="StoryPoints")},className:"noselect f5 mh2  link bg-animate black-80 hover-light-purple dib  linkBtm"},"StoryPoints"),n.a.createElement("p",{onClick:function(){l(t="T-Shirt"),console.log("you changed the deck to: ".concat(t))},className:"noselect f5 mh2  link bg-animate black-80 hover-light-purple dib linkBtm"},"T-Shirt"),n.a.createElement("p",{onClick:function(){l(t="Fibonacci"),console.log("you changed the deck to: ".concat(t))},className:"noselect f5 mh2  link bg-animate black-80 hover-light-purple dib  linkBtm"},"Fibonacci"),n.a.createElement("p",{onClick:function(){l(t="Custom"),console.log("you changed the deck to: ".concat(t))},className:"noselect f5 mh2  link bg-animate black-80 hover-light-purple dib  linkBtm"},"Custom"))))},h=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(o,null),n.a.createElement(u,null),n.a.createElement("div",{className:"flex flex-wrap"},n.a.createElement(b,null)),n.a.createElement("div",{className:"mb4 tc"},n.a.createElement(r,null)))};i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.50dd89c2.chunk.js.map