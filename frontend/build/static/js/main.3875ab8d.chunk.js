(this["webpackJsonpvisa-travel"]=this["webpackJsonpvisa-travel"]||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/visa_landing_image.0112d153.png"},39:function(e,t,a){e.exports=a.p+"static/media/contact-us.6bf66d96.jpg"},44:function(e,t,a){e.exports=a(95)},49:function(e,t,a){},51:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(14),o=a.n(c),r=(a(49),a(50),a(40)),i=a(11),s=a(5),u=a(96),m=a(97),E=a(43),A=a(98),d=a(99),g=a(100),v=(a(51),function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],o=a[1];return l.a.createElement("div",null,console.log("Rendering NavBar"),l.a.createElement(u.a,{light:!0,expand:"md"},l.a.createElement(m.a,{onClick:function(){return o(!c)}}),l.a.createElement(E.a,{isOpen:c,navbar:!0},l.a.createElement(A.a,{className:"mr-auto",navbar:!0},l.a.createElement(d.a,null,l.a.createElement(g.a,{href:"/"},"Home")),l.a.createElement(d.a,null,l.a.createElement(g.a,{href:"/blog"},"Blog")),l.a.createElement(d.a,null,l.a.createElement(g.a,{href:"/contacts"},"contacts"))))))}),f=a(37),p=a.n(f),b=(a(61),Object(n.createContext)()),V=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,console.log("Rendering CountrySearchContext"),l.a.createElement(b.Provider,{value:[c,o]},e.children))},I=(a(62),a(19)),_=[],S="",N="suggestionBoxInActive";I.get("api/countrylist").then((function(e){_=e.data[0].countryAll})).catch((function(e){console.log(e)}));var y=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useContext)(b),r=Object(s.a)(o,2),i=(r[0],r[1]);return l.a.createElement(l.a.Fragment,null,console.log("Rendering Visa SearchBox"),l.a.createElement("div",{className:"col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto mt-4 text-center form"},l.a.createElement("input",{className:"header-search form-control form-control-lg",type:"text",placeholder:"Enter Your Amazing Country!",onChange:function(e){!function(e){if(""===(S=e.target.value))N="suggestionBoxInActive",c([]);else{N="suggestionBoxActive";var t="[A-Za-z.s]*".concat(S.toLowerCase(),"[A-Za-z.s]*"),a=new RegExp(t);c(_.filter((function(e){return a.test(e.toLowerCase())})))}}(e)},onKeyDown:function(e){!function(e){"Enter"===e.key||"ArrowUp"===e.key||e.key}(e)},value:S}),a&&l.a.createElement("div",{className:"suggestionBox ".concat(N)},a.map((function(e){return l.a.createElement("div",{onClick:function(){return function(e){S=e,N="suggestionBoxInActive",c([]),i(e)}(e)}},e)})))))},R=a(13),x=a.n(R),h=a(15),O=a(38),C=a.n(O),F=a(19),j="hello";(function(){var e=Object(h.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("api/countryImageURL");case 2:t=e.sent,j=Object.entries(t.data[0]),j=t.data[0],console.log("Fetching image URL Data:"+JSON.stringify(j));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();var w=Object(n.createContext)(),k={VISA_FREE:"active",VISA_ON_ARRIVAL_AND_EVISA:"inActive",EVISA:"inActive",ETA:"inAtive"};function T(e,t){switch(t.type){case"VISA_FREE":return{VISA_FREE:t.payload,VISA_ON_ARRIVAL_AND_EVISA:"inActive",EVISA:"inActive",ETA:"inAtive"};case"VISA_ON_ARRIVAL_AND_EVISA":return{VISA_FREE:"inActive",VISA_ON_ARRIVAL_AND_EVISA:t.payload,EVISA:"inActive",ETA:"inAtive"};case"EVISA":return{VISA_FREE:"inActive",VISA_ON_ARRIVAL_AND_EVISA:"inActive",EVISA:t.payload,ETA:"inAtive"};case"ETA":return{VISA_FREE:"inActive",VISA_ON_ARRIVAL_AND_EVISA:"inActive",EVISA:"inActive",ETA:t.payload}}}var L=function(e){var t=l.a.useReducer(T,k),a=Object(s.a)(t,2),n=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,console.log("Rendering FilterSelectContext"),l.a.createElement(w.Provider,{value:[n,c]},e.children))},D=a(101);a(85);var B=function(){var e=Object(n.useContext)(w),t=Object(s.a)(e,2),a=t[0],c=t[1];function o(e){switch(e){case"VISA_FREE":"active"===a.VISA_FREE?c({type:"VISA_FREE",payload:"inActive"}):c({type:"VISA_FREE",payload:"active"});break;case"VISA_ON_ARRIVAL_AND_EVISA":"active"===a.VISA_ON_ARRIVAL_AND_EVISA?c({type:"VISA_ON_ARRIVAL_AND_EVISA",payload:"inActive"}):c({type:"VISA_ON_ARRIVAL_AND_EVISA",payload:"active"});break;case"EVISA":"active"===a.EVISA?c({type:"EVISA",payload:"inActive"}):c({type:"EVISA",payload:"active"});break;case"ETA":"active"===a.ETA?c({type:"ETA",payload:"inActive"}):c({type:"ETA",payload:"active"})}}return l.a.createElement(l.a.Fragment,null,console.log("Rendering Filter Options"),console.log("Visa Free"+a.VISA_FREE),console.log("VISA_ON_ARRIVAL_AND_EVISA"+a.VISA_ON_ARRIVAL_AND_EVISA),console.log("EVISA"+a.EVISA),console.log("ETA"+a.ETA),l.a.createElement("button",{type:"button",className:"btn btn-secondary",id:"toggler"},"Add Filters"),l.a.createElement(D.a,{toggler:"#toggler"},l.a.createElement("div",{className:"container-fluid filter-panel"},l.a.createElement("div",{className:"filter-options"},l.a.createElement("div",{className:"filter-options-label"}," Visa Preferences "),l.a.createElement("button",{type:"button",className:"btn btn-outline-dark ml-2 mt-2 ".concat(a.VISA_FREE),onClick:function(){return o("VISA_FREE")}},"\ud83d\udec2 Visa Free"),l.a.createElement("button",{type:"button",class:"btn btn-outline-dark ml-2 mt-2  ".concat(a.VISA_ON_ARRIVAL_AND_EVISA),onClick:function(){return o("VISA_ON_ARRIVAL_AND_EVISA")}},"\ud83d\udec2 Visa on Arrival and eVisa"),l.a.createElement("button",{type:"button",class:"btn btn-outline-dark ml-2 mt-2  ".concat(a.EVISA),onClick:function(){return o("EVISA")}},"\ud83d\udec2 eVisa"),l.a.createElement("button",{type:"button",class:"btn btn-outline-dark ml-2 mt-2  ".concat(a.ETA),onClick:function(){return o("ETA")}},"\ud83d\udec2 eTA"),l.a.createElement("div",{className:"filter-options-label"}," Travel Preferences "),l.a.createElement("button",{type:"button",className:"btn btn-outline-dark ml-2 mt-2"},"\ud83d\udcac English Speaking"),l.a.createElement("button",{type:"button",class:"btn btn-outline-dark ml-2 mt-2  "},"\ud83d\udc6e \u200dSafe")),l.a.createElement("button",{type:"button",className:"btn btn-secondary close-filterpanel-button",id:"toggler"},"Close"))))},M=a(17),G=a.n(M),P=(a(86),a(87),"mapbox-hide"),z=function(e){console.log("Mapbox - top ");var t=Object(n.useState)(null),a=Object(s.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)(!1),i=Object(s.a)(r,2),u=i[0],m=i[1],E=Object(n.useRef)(null);function A(e){console.log("Mapbox - toggleMapBox"),P=e,m(!u)}return Object(n.useEffect)((function(){console.log("Called in napboxglMAP useefffect"),G.a.accessToken="pk.eyJ1IjoicWFlbXBhcmFzbGEiLCJhIjoiY2s4NTVkaWNqMDNleDNvcGZiOGpxMGZ1ayJ9.-QSENqDh_QAGgTkoasl2ww";c||function(){console.log("Mapbox - Initializing  ");var e=new G.a.Map({container:E.current,style:"mapbox://styles/qaemparasla/ck85d8xug01va1iw2wa9hdgg6",center:[0,0],zoom:2});e.on("load",(function(){console.log("Mapbox - on Load"),e.addControl(new G.a.NavigationControl),o(e),e.resize()}))}()}),[c]),l.a.createElement("div",null,console.log("Mapbox  - Rendeering "),l.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return A("mapbox-show")}},"\ud83c\udf0e Open Map"),l.a.createElement("div",{ref:E,className:"mapbox-fullscreen ".concat(P)},l.a.createElement("button",{type:"button",className:"btn btn-secondary mapbox-close-button m-2",onClick:function(){return A("mapbox-hide")}},"\ud83c\udf0e Close Map"),l.a.createElement("div",{className:"col mapbox-legend-panel"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"mapbox_legend_color green"}),l.a.createElement("div",{className:"mapbox-legend-name"},"Visa Free")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"mapbox_legend_color blue"}),l.a.createElement("div",{className:"mapbox-legend-name"},"Visa on Arrival / eVisa")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"mapbox_legend_color gold"}),l.a.createElement("div",{className:"mapbox-legend-name"},"eTA")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"mapbox_legend_color yellow"}),l.a.createElement("div",{className:"mapbox-legend-name"},"eVisa")))),function(){if(console.log("Mapbox - PaintMap"),c){var t=e.data.VISA_FREE,a=e.data.VISA_ON_ARRIVAL_AND_EVISA,n=e.data.ETA,l=e.data.EVISA;0===t.length&&(t=["green"]),0===a.length&&(a=["blue"]),0===n.length&&(n=["gold"]),0===l.length&&(l=["yellow"]),c.setPaintProperty("ne-10m-admin-0-countries-2wu9ko","fill-color",["match",["get","SOVEREIGNT"],t,"#9acd32",a,"#72c7fa",n,"#e6b31e",l,"#ffff00","hsl(0, 3%, 99%)"])}}())},J=(a(88),a(19)),U=[];var W=function(){var e=Object(n.useContext)(b),t=Object(s.a)(e,1)[0],a=Object(n.useContext)(w),c=Object(s.a)(a,2),o=c[0],r=(c[1],Object(n.useState)([])),i=Object(s.a)(r,2),u=i[0],m=i[1],E=Object(n.useState)([]),A=Object(s.a)(E,2),d=A[0],g=A[1];function v(){var e={VISA_FREE:[],VISA_ON_ARRIVAL_AND_EVISA:[],EVISA:[],ETA:[]};U.map((function(t){"Green"===t.StatusColor?e.VISA_FREE.push(t.Country):"Blue"===t.StatusColor?e.VISA_ON_ARRIVAL_AND_EVISA.push(t.Country):"Yellow"===t.StatusColor?e.EVISA.push(t.Country):"Gold"===t.StatusColor&&e.ETA.push(t.Country)})),g(e)}function f(){if("active"===o.VISA_FREE){var e=U.filter((function(e){return"Green"===e.StatusColor}));m(e)}else if("active"===o.VISA_ON_ARRIVAL_AND_EVISA){var t=U.filter((function(e){return"Blue"===e.StatusColor}));m(t)}else if("active"===o.EVISA){var a=U.filter((function(e){return"Yellow"===e.StatusColor}));m(a)}else if("active"===o.ETA){var n=U.filter((function(e){return"Gold"===e.StatusColor}));m(n)}else m(U)}return(Object(n.useEffect)((function(){console.log("UseEffect VisaResultGrid (Search)"),""!==t&&function(){var e=Object(h.a)(x.a.mark((function e(){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J("api/countryVisaStatusList/".concat(t));case 2:a=e.sent,U=a.data[0].ToCountry,f(),v();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t]),Object(n.useEffect)((function(){f()}),[o]),l.a.createElement(l.a.Fragment,null,console.log("Rendering VisaResultGrip"),console.log("SEARCH: "+t),t&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"filter-action-panel row mx-0 my-3 m-md-3"},l.a.createElement("div",{className:"ml-3"},l.a.createElement(B,null)),l.a.createElement("div",{className:"ml-3"},l.a.createElement(z,{data:d}))),l.a.createElement("div",{className:"active-filter-panel mx-0 my-3 m-md-3"},l.a.createElement("div",{className:"result-count ml-3"},"\ud83c\udf07 ",u.length," Amazing Countries"))),l.a.createElement("div",{className:"d-flex justify-content-between row mx-0 my-3 m-md-3"},u.map((function(e){return l.a.createElement("div",{className:"col-xm-6  col-sm-6 col-md-4 col-lg-3 countryInfoBox"},l.a.createElement(C.a,{offset:5},l.a.createElement("img",{className:"countryImage img-responsive",src:j[e.Country].url,alt:e.Country}),l.a.createElement("div",{className:"countryName"},e.Country),l.a.createElement("div",{className:"visaStatus"},e.Status)))})))))};var Y=function(){return l.a.createElement(l.a.Fragment,null,console.log("Rendering Home Page View"),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"img-fluid"},l.a.createElement("img",{src:p.a,className:"visa-header-image mx-auto d-block img-fluid",alt:"Responsive image"}))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"header-text mt-4 text-center"},"Where Can I Travel With My Passport?")),l.a.createElement(V,null,l.a.createElement(y,null),l.a.createElement(L,null,l.a.createElement(W,null))))};var Z=function(){return l.a.createElement(l.a.Fragment,null,console.log("Rendering Blog Page View"),"My Blog")},q=a(39),H=a.n(q);a(89);var Q=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"d-flex bd-highlight mb-3"},l.a.createElement("div",{class:"p-2 bd-highlight"},"Flex item"),l.a.createElement("div",{class:"p-2 bd-highlight"},"Flex item"),l.a.createElement("div",{class:"ml-auto bd-highlight"},l.a.createElement("img",{src:H.a,class:"contactus"}))))};var K=function(){return l.a.createElement(l.a.Fragment,null,console.log("Rendering 404 Page View"),"404")},X=(a(90),function(e){return l.a.createElement(l.a.Fragment,null,console.log("Rendering Footer"),l.a.createElement("footer",{class:"footer fixed-bottom"},l.a.createElement("div",{class:"container text-white text-center"},l.a.createElement("small",null," Visa Bug "))))});a(91);var $=function(){return l.a.createElement(r.a,null,l.a.createElement(v,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:Y}),l.a.createElement(i.a,{exact:!0,path:"/blog",component:Z}),l.a.createElement(i.a,{exact:!0,path:"/contacts",component:Q}),l.a.createElement(i.a,{path:"/",component:K})),l.a.createElement(X,null))};o.a.render(l.a.createElement($,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.3875ab8d.chunk.js.map