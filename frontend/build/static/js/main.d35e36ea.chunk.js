(this["webpackJsonpvisa-travel"]=this["webpackJsonpvisa-travel"]||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/visa_landing_image.0112d153.png"},42:function(e,t,a){e.exports=a(90)},47:function(e,t,a){},49:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),i=a.n(c),l=(a(47),a(48),a(37)),o=a(11),s=a(5),u=a(91),m=a(92),v=a(40),f=a(93),E=a(94),g=a(95),d=(a(49),function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],i=a[1];return r.a.createElement("div",null,r.a.createElement(u.a,{light:!0,expand:"md"},r.a.createElement(m.a,{onClick:function(){return i(!c)}}),r.a.createElement(v.a,{isOpen:c,navbar:!0},r.a.createElement(f.a,{className:"mr-auto",navbar:!0},r.a.createElement(E.a,null,r.a.createElement(g.a,{href:"/"},"Home")),r.a.createElement(E.a,null,r.a.createElement(g.a,{href:"/blog"},"Blog")),r.a.createElement(E.a,null,r.a.createElement(g.a,{href:"/contacts"},"contacts"))))))}),p=a(35),b=a.n(p),A=(a(59),Object(n.createContext)()),y=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],i=a[1];return r.a.createElement(A.Provider,{value:[c,i]},e.children)},h=(a(60),a(18)),_=[],x="";h.get("api/countrylist").then((function(e){_=e.data[0].countryAll})).catch((function(e){console.log(e)}));var O=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useContext)(A),l=Object(s.a)(i,2),o=l[0],u=l[1];return r.a.createElement(r.a.Fragment,null,console.log("rendering VisaSearchBox: "+o),r.a.createElement("div",{className:"col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto mt-4 text-center form"},r.a.createElement("input",{className:"header-search form-control form-control-lg",type:"text",placeholder:"Enter Your Amazing Country!",onChange:function(e){!function(e){var t=e.target.value;if(x=t,""===t)c([]);else{var a="[A-Za-z.s]*".concat(t,"[A-Za-z.s]*"),n=new RegExp(a);c(_.filter((function(e){return n.test(e.toLowerCase())})))}}(e)},onKeyDown:function(e){!function(e){"Enter"===e.key?(console.log("YAAAAAAA ENTER PRESSED"),u(e.target.value)):"ArrowUp"===e.key?console.log("YAAAAAAA Up PRESSED"):"ArrowDown"===e.key&&console.log("YAAAAAAA Down PRESSED")}(e)},value:x}),a&&r.a.createElement("div",{className:"searchResultBox"},a.map((function(e){return r.a.createElement("div",{onClick:function(){return function(e){x=e,c([]),u(e)}(e)}},e)})))))},j=a(13),C=a.n(j),N=a(15),S=(a(79),a(18)),k="hello";console.log("Fetching image URL"),function(){var e=Object(N.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S("api/countryImageURL");case 2:t=e.sent,k=Object.entries(t.data[0]),k=t.data[0],console.log("Fetching image URL Data:"+JSON.stringify(k));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();var w=Object(n.createContext)(),R=function(e){var t=Object(n.useState)({}),a=Object(s.a)(t,2),c=a[0],i=a[1];return r.a.createElement(w.Provider,{value:[c,i]},e.children)},F=a(96),L=(a(80),{changed:!1,visa_free:{name:"visa free",isActive:"active"},visa_on_arrival:{name:"visa on arrival",isActive:"inactive"}});var T=function(){console.log("AM I CALLED 2>>");var e=Object(n.useContext)(w),t=Object(s.a)(e,2),a=(t[0],t[1]),c=Object(n.useState)(!1),i=Object(s.a)(c,2),l=i[0],o=i[1];function u(e){switch(console.log("AM I CALLED 3>>"),e){case L.visa_free.name:"active"===L.visa_free.isActive?(L.visa_free.isActive="inactive",a({filterType:"visa free",status:"inactive"})):(L.visa_free.isActive="active",a({filterType:"visa free",status:"active"})),o(!l);break;case L.visa_on_arrival.name:"active"===L.visa_on_arrival.isActive?(L.visa_on_arrival.isActive="inactive",a({filterType:"visa on arrival",status:"inactive"})):(L.visa_on_arrival.isActive="active",a({filterType:"visa on arrival",status:"active"})),o(!l)}}return r.a.createElement("div",{className:"ml-4 mt-5"},console.log("AM I CALLED 4>>"),r.a.createElement("button",{type:"button",className:"btn btn-secondary",id:"toggler"},"Add Filter:"),r.a.createElement(F.a,{toggler:"#toggler"},r.a.createElement("div",{className:"FilterPanel"},r.a.createElement("div",{className:"ml-2 mt-2 pt-2"},"Visa Preferences"),r.a.createElement("button",{type:"button",className:"btn btn-outline-dark ml-2 mt-2 ".concat(L.visa_free.isActive),onClick:function(){return u(L.visa_free.name)}},"Visa Free"),r.a.createElement("button",{type:"button",class:"btn btn-outline-dark ml-2 mt-2  ".concat(L.visa_on_arrival.isActive),onClick:function(){return u(L.visa_on_arrival.name)}},"Visa on Arrival"),r.a.createElement("div",{className:"ml-2 mt-2 pt-2"},"Travel Preferences"),r.a.createElement("button",{type:"button",className:"btn btn-outline-dark ml-2 mt-2"},"English Speaking"),r.a.createElement("button",{type:"button",class:"btn btn-outline-dark ml-2 mt-2  "},"Party Hub"))))},D=a(36),P=a.n(D),B=a(18),I=null,V={visa_free:{name:"visa free",isActive:"active"},visa_on_arrival:{name:"visa on arrival",isActive:"inactive"}},M=null;var U=function(){var e=Object(n.useContext)(A),t=Object(s.a)(e,1)[0],a=Object(n.useContext)(w),c=Object(s.a)(a,2),i=c[0],l=(c[1],Object(n.useState)([])),o=Object(s.a)(l,2),u=o[0],m=o[1];return Object(n.useEffect)((function(){console.log("useEffect called in VisaResultGrid"),""!==t&&(I=t,function(){var e=Object(N.a)(C.a.mark((function e(){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("api/countryVisaStatusList/".concat(t));case 2:a=e.sent,M=a.data[0].ToCountry,m(a.data[0].ToCountry);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()())}),[t]),Object(n.useEffect)((function(){"visa free"===i.filterType?V.visa_free.isActive=i.status:"visa on arrival"===i.filterType&&(V.visa_on_arrival.isActive=i.status),""!==t&&function(){if("active"===V.visa_free.isActive&&"active"===V.visa_on_arrival.isActive)console.log("visa free and visa on arrival"),m(M);else if("active"===V.visa_free.isActive){console.log("visa free ");var e=M.filter((function(e){return"Green"===e.StatusColor}));m(e)}else if("active"===V.visa_on_arrival.isActive){console.log(" visa on arrival");var t=M.filter((function(e){return"Blue"===e.StatusColor}));m(t)}}()}),[i]),r.a.createElement(r.a.Fragment,null,console.log("rendering VisaResultGrid: "+t),I&&r.a.createElement("div",{className:"m-4"},r.a.createElement(T,null),r.a.createElement("div",{className:"ml-4 mt-2"},"Showing "," Amazing Countries Below:")),r.a.createElement("div",{className:"d-flex justify-content-between row m-4"},u.map((function(e){return r.a.createElement("div",{className:"col-sm-6 col-md-4 col-lg-3 countryInfoBox"},r.a.createElement(P.a,{offset:5},r.a.createElement("img",{className:"countryImage img-responsive",src:k[e.Country].url,alt:e.Country}),r.a.createElement("div",{className:"countryName"},e.Country),r.a.createElement("div",{className:"visaStatus"},e.Status)))}))))};var z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"img-fluid"},r.a.createElement("img",{src:b.a,className:"visa-header-image mx-auto d-block img-fluid",alt:"Responsive image"}))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header-text mt-4 text-center"},"Where Can I Travel With My Passport?")),r.a.createElement(y,null,r.a.createElement(O,null),r.a.createElement(R,null,r.a.createElement(U,null))))};var Y=function(){return r.a.createElement(r.a.Fragment,null,"My Blog")};var G=function(){return r.a.createElement(r.a.Fragment,null,"Contact Me")};var J=function(){return r.a.createElement(r.a.Fragment,null,"404")},H=(a(85),function(e){return r.a.createElement("footer",{class:"page-footer font-small blue"},r.a.createElement("div",{class:"footer-copyright text-center py-3"},"\xa9 2020 Copyright:",r.a.createElement("a",{href:"https://visabud.com/"}," VisaBud.com")))});a(86);var W=function(){return r.a.createElement(l.a,null,r.a.createElement(d,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:z}),r.a.createElement(o.a,{exact:!0,path:"/blog",component:Y}),r.a.createElement(o.a,{exact:!0,path:"/contacts",component:G}),r.a.createElement(o.a,{path:"/",component:J})),r.a.createElement(H,null))};i.a.render(r.a.createElement(W,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.d35e36ea.chunk.js.map