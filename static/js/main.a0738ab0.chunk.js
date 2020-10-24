(this["webpackJsonptupa-potter-page"]=this["webpackJsonptupa-potter-page"]||[]).push([[0],{74:function(n,e,t){n.exports=t(86)},86:function(n,e,t){"use strict";t.r(e);var r=t(2),c=t(0),a=t.n(c),o=t(38),i=t.n(o),u=t(13),l=t(25),s=t(4),f=t(65),b=t(7);function d(){var n=Object(s.a)(["\n    margin: 0 12px;\n    padding: 8px 0;\n    color: ",";\n  "]);return d=function(){return n},n}function O(){var n=Object(s.a)(["\n    display: flex;\n  "]);return O=function(){return n},n}var p={navigation:Object(r.c)(O()),link:function(n){return Object(r.c)(d(),n.colors.primary[0])}},j=function(){return Object(r.d)("ul",{css:p.navigation},[{label:"Sorting Hat",to:"/sorting-hat"},{label:"Houses",to:"/houses"}].map((function(n,e){return Object(r.d)("li",{key:e},Object(r.d)(l.c,{css:p.link,to:n.to},n.label))})))};function m(){var n=Object(s.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return m=function(){return n},n}function h(){var n=Object(s.a)(["\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(10px)\n  }\n  100% {\n    transform: translateY(0px)\n  }\n  "]);return h=function(){return n},n}var v=Object(r.e)(h()),g=Object(r.e)(m());function y(){var n=Object(s.a)(["\n  font-family: HarryP;\n"]);return y=function(){return n},n}function E(){var n=Object(s.a)(["\n  animation: "," 2s linear infinite;\n"]);return E=function(){return n},n}function x(){var n=Object(s.a)(['\n  label: value;\n  font-size: 78px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-top: 2px;\n  font-family: "Courier New", Courier, monospace;\n']);return x=function(){return n},n}function w(){var n=Object(s.a)(["\n  label: row;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  &:not(:last-child) {\n    margin-bottom: 16px;\n  }\n"]);return w=function(){return n},n}function k(){var n=Object(s.a)(["\n  label: button;\n  appearance: none;\n  background: none;\n  font-size: 32px;\n  padding-left: 12px;\n  padding-right: 12px;\n  outline: none;\n  border: 2px solid transparent;\n  color: ",";\n  padding-bottom: 4px;\n  cursor: pointer;\n  background-color: ",";\n  border-radius: 2px;\n  transition: all 0.15s;\n  &:hover,\n  &:focus {\n    border: 2px solid ",";\n  }\n  &:active {\n    background-color: ",";\n  }\n"]);return k=function(){return n},n}var H=Object(r.c)(w()),S=Object(r.c)(x()),_=Object(r.c)(E(),g),P=Object(r.c)(y());function T(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n"]);return T=function(){return n},n}function C(){var n=Object(s.a)(["\n  user-select: none;\n  pointer-events: none;\n  font-size: 5em;\n  @media (prefers-reduced-motion: no-preference) {\n    animation: "," infinite 3s ease-in-out;\n  }\n  & > div + div {\n    margin-top: -24px;\n  }\n"]);return C=function(){return n},n}var L=Object(r.c)(C(),v),D=Object(r.c)(T());var R=function(){return Object(r.d)("header",{css:D},Object(r.d)("div",{css:[L,P]},Object(r.d)("div",null,"\xa7"),Object(r.d)("div",null,"Page")),Object(r.d)(j,null))},A=t(26),I=t(71),z=t(99),N=t(48),W=t(102),B=t(105),M=t(30),U=t(100),K=Object(A.a)({name:"house",initialState:{houses:[],error:null},reducers:{fetchHousesFulfilled:function(n,e){n.houses=e.payload,n.error=null},fetchHousesRejected:function(n,e){n.houses=[],n.error=e.payload},fetchHouses:function(){}}}),F=K.actions,G=F.fetchHousesFulfilled,J=F.fetchHouses,Y=F.fetchHousesRejected,V=function(n){return n.house.houses},X=function(n){return n.house.error},$=K.reducer;var q=function(){var n=Object(b.g)(),e=Object(b.h)().houseId,t=Object(u.c)(V).filter((function(n){return n._id===e}))[0];return a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return n.goBack()}},"Go Back"),a.a.createElement("h1",null,t.name),a.a.createElement("section",null,a.a.createElement("h2",null,"Head of House"),a.a.createElement("p",null,t.headOfHouse)),a.a.createElement("section",null,a.a.createElement("h2",null,"House Ghost"),a.a.createElement("p",null,t.houseGhost)),a.a.createElement("section",null,a.a.createElement("h2",null,"Mascot"),a.a.createElement("p",null,t.mascot)),a.a.createElement("section",null,a.a.createElement("h2",null,"Values"),a.a.createElement("ul",null,t.values.map((function(n,e){return a.a.createElement("li",{key:e},n)})))),a.a.createElement("section",null,a.a.createElement("h2",null,"Colors"),a.a.createElement("ul",null,t.colors.map((function(n,e){return a.a.createElement("li",{key:e},n)})))),a.a.createElement("section",null,a.a.createElement("h2",null,"Members"),a.a.createElement("ul",null,t.members.map((function(n,e){return a.a.createElement("li",{key:e},n)})))))};function Q(){var n=Object(s.a)(["\n          width: ",";\n          padding-top: ",";\n          /* TODO: mobile 50% */\n        "]);return Q=function(){return n},n}function Z(){var n=Object(s.a)([""]);return Z=function(){return n},n}function nn(){var n=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n"]);return nn=function(){return n},n}function en(){var n=Object(s.a)(["\n  display: inline-flex;\n  position: relative;\n"]);return en=function(){return n},n}var tn=Object(r.c)(en()),rn=Object(r.c)(nn());var cn=function(n){var e=n.children,t=n.width,c=void 0===t?"100%":t,a=n.innerCss,o=void 0===a?Object(r.c)(Z()):a;return Object(r.d)("div",{css:[tn,Object(r.c)(Q(),c,c)]},Object(r.d)("div",{css:[rn,o]},e))},an=t(70),on=t(24),un={colors:{primary:["#555555"],secondary:["#333333"],accent:["#000050"],accentDark:["#121212"],textWhite:["#ffffff"],textBlack:["#000000"],textPrimary:["#ffffff"],background:["#fafafa"]}},ln={colors:Object(on.a)(Object(on.a)({},un.colors),{},{primary:["#740001"],secondary:["#ae0001"],accent:["#eeba30"],accentDark:["#d3a625"]})},sn={colors:Object(on.a)(Object(on.a)({},un.colors),{},{primary:["#0e1a40"],secondary:["#222f5b"],accent:["#5d5d5d"],accentDark:["#946b2d"]})},fn={colors:Object(on.a)(Object(on.a)({},un.colors),{},{primary:["#ecb939"],secondary:["#f0c75e"],accent:["#726255"],accentDark:["#372e29"]})},bn={colors:Object(on.a)(Object(on.a)({},un.colors),{},{primary:["#284d16"],secondary:["#1d3c0e"],accent:["#42473f"],accentDark:["#232721"]})},dn=function(n){return function(e){return Object(an.a)(n.map((function(n){return"function"===typeof n?n(e):n})))}},On={default:un,gryffindor:ln,ravenclaw:sn,hufflepuff:fn,slytherin:bn};function pn(){var n=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    text-align: center;\n    justify-content: center;\n    background-color: ",";\n    color: ",";\n    font-size: min(6vw, 4rem);\n    transform: 1s background-color;\n    &:hover {\n      background-color: ",";\n    }\n  "]);return pn=function(){return n},n}function jn(){var n=Object(s.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    padding: 16px;\n  "]);return jn=function(){return n},n}function mn(){var n=Object(s.a)(["\n    width: 100%;\n    height: 100%;\n  "]);return mn=function(){return n},n}var hn={full:Object(r.c)(mn()),wrapper:Object(r.c)(jn()),houseLink:function(n){return Object(r.c)(pn(),n.colors.primary[0],n.colors.textWhite,n.colors.secondary[0])}};var vn=function(){var n=Object(u.c)(V),e=Object(u.c)(X),t=Object(u.b)();return a.a.useEffect((function(){t(J())})),Object(r.d)("div",{css:[hn.full,hn.wrapper]},e?"Error":n.map((function(n){return Object(r.d)(cn,{innerCss:[hn.full],key:n._id,width:"25%"},Object(r.d)(l.b,{to:"/houses/".concat(n._id)},Object(r.d)("span",{css:dn([P,hn.full,hn.houseLink])},n.name)))})))},gn=t(106),yn=t(67),En={value:On.default},xn=Object(A.a)({name:"currentTheme",initialState:En,reducers:{setTheme:function(n,e){var t;n.value=(t=e.payload,{Ravenclaw:sn,Slytherin:bn,Hufflepuff:fn,Gryffindor:ln}[t])}}}),wn=xn.actions.setTheme,kn=function(n){return n.theme.value},Hn=xn.reducer,Sn=Object(A.a)({name:"sortingHat",initialState:{value:"",isLoading:!1},reducers:{setSortingHat:function(n,e){n.value=e.payload},setIsLoading:function(n,e){n.isLoading=e.payload},setSortingHatAsync:function(){}}}),_n=Sn.actions,Pn=_n.setSortingHat,Tn=_n.setIsLoading,Cn=_n.setSortingHatAsync,Ln=function(n){return n.sortingHat.value},Dn=function(n){return n.sortingHat.isLoading},Rn=Sn.reducer,An={row:H,value:S,button:function(n){return Object(r.c)(k(),n.colors.textWhite[0],n.colors.primary[0],n.colors.secondary[0],n.colors.accent)}},In=t(72),zn=t(68),Nn=t.n(zn);function Wn(){var n=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  "]);return Wn=function(){return n},n}var Bn=function(n){var e=n.isLoading,t=n.children,c=(n.minHeight,Object(In.a)(n,["isLoading","children","minHeight"])),a=Object(r.c)(Wn());return Object(r.d)("div",Object.assign({css:a},c),e?Object(r.d)(Nn.a,{css:_,fontSize:"large"}):t)};function Mn(){var n=Object(s.a)(["\n            min-height: 90px;\n          "]);return Mn=function(){return n},n}var Un=function(){var n=Object(u.b)(),e=Object(u.c)(Ln),t=Object(u.c)(Dn);return Object(c.useEffect)((function(){e||n(Cn())}),[n,e]),Object(r.d)("div",null,Object(r.d)("div",{css:An.row},Object(r.d)(Bn,{css:Object(r.c)(Mn()),isLoading:t},Object(r.d)("span",{css:[An.value,P]},e))),Object(r.d)("div",{css:An.row},Object(r.d)("button",{css:dn([An.button]),onClick:function(){return n(Cn())}},"Randomize")))};function Kn(){var n=Object(s.a)(["\n  max-width: 1024px;\n  margin: 36px auto 0;\n"]);return Kn=function(){return n},n}function Fn(){var n=Object(s.a)(["\n    min-height: 100vh;\n    text-align: center;\n    background-color: ",";\n  "]);return Fn=function(){return n},n}var Gn={App:function(n){return Object(r.c)(Fn(),n.colors.background)}},Jn=Object(r.c)(Kn());var Yn=function(){var n=Object(u.c)(kn);return Object(r.d)(f.a,{theme:n},Object(r.d)("div",{css:Gn.App},Object(r.d)(R,null),Object(r.d)("main",{css:Jn},Object(r.d)(b.d,null,Object(r.d)(b.b,{path:"/sorting-hat"},Object(r.d)(Un,null)),Object(r.d)(b.b,{path:"/houses/:houseId"},Object(r.d)(q,null)),Object(r.d)(b.b,{path:"/houses"},Object(r.d)(vn,null)),Object(r.d)(b.b,{path:"*"},Object(r.d)(b.a,{to:"/sorting-hat"}))))))},Vn=t(12),Xn=t(101),$n=t(103),qn=Object($n.a)((function(n,e,t){var r=t.potterapi;return n.pipe(Object(I.a)(Cn.type),Object(B.a)(Object(gn.a)(Object(N.a)(Tn(!0)),Object(z.a)((function(){return r.getSortingHat()})).pipe(Object(yn.a)((function(n){return Object(N.a)(Pn(n),Tn(!1),wn(n))}))))))}),(function(n,e,t){var r=t.potterapi;return n.pipe(Object(I.a)(J.type),Object(W.a)(1e3),Object(B.a)(Object(z.a)((function(){return r.getHouses()})).pipe(Object(M.a)((function(n){return G(n)})),Object(U.a)((function(n){return Object(N.a)(Y(n))})))))})),Qn=Object(Vn.c)({sortingHat:Rn,theme:Hn,house:$}),Zn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Vn.d;var ne=t(69),ee=t(37),te=t(60),re=t(104),ce=Object(te.a)("apiUrl"),ae=Object(te.a)("apiKey"),oe=function(n){var e=Object(Xn.a)({dependencies:n}),t=Object(Vn.e)(Qn,Zn(Object(Vn.a)(e)));return e.run(qn),t}({potterapi:new function n(){var e=this;Object(ne.a)(this,n),Object.defineProperty(this,ce,{writable:!0,value:void 0}),Object.defineProperty(this,ae,{writable:!0,value:void 0}),this.getSortingHat=function(){return re.a.getJSON("".concat(Object(ee.a)(e,ce)[ce],"/sortingHat"))},this.getHouses=function(){return re.a.getJSON("".concat(Object(ee.a)(e,ce)[ce],"/houses"))},Object(ee.a)(this,ce)[ce]="https://us-central1-tupa-potter-page.cloudfunctions.net/potterapi",Object(ee.a)(this,ae)[ae]=Object({NODE_ENV:"production",PUBLIC_URL:"https://tupa-potter-page.web.app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_POTTER_API_URL:"https://us-central1-tupa-potter-page.cloudfunctions.net/potterapi"}).REACT_APP_POTTER_API_KEY}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ie(){var n=Object(s.a)(['\n  @font-face {\n    font-family: "HarryP";\n    src: url("./fonts/HarryP.ttf") format("truetype");\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\n      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\n      "Helvetica Neue", sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n      monospace;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    list-style-type: none;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n']);return ie=function(){return n},n}var ue=Object(r.c)(ie());i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.a,null,a.a.createElement(r.a,{styles:ue}),a.a.createElement(u.a,{store:oe},a.a.createElement(Yn,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[74,1,2]]]);
//# sourceMappingURL=main.a0738ab0.chunk.js.map