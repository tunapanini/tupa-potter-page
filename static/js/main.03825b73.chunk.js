(this["webpackJsonptupa-potter-page"]=this["webpackJsonptupa-potter-page"]||[]).push([[0],{37:function(n,t,e){n.exports=e(50)},50:function(n,t,e){"use strict";e.r(t);var r=e(2),o=e(29),a=e(0),c=e.n(a),i=e(16),u=e.n(i),s=e(14),l=e(18),f=e(4),d=e(3),p=e(19),b=e(22),g=e.n(b),m=e(32),j="https://www.potterapi.com/v1";function O(){return(O=Object(m.a)(g.a.mark((function n(){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("".concat(j,"/sortingHat")).then((function(n){return n.json()})));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var v=Object(p.b)({name:"sortingHat",initialState:{value:"",isLoading:!1},reducers:{setSortingHat:function(n,t){n.value=t.payload},setIsLoading:function(n,t){n.isLoading=t.payload}}}),h=v.actions,y=h.setSortingHat,x=h.setIsLoading,w=function(){return function(n){n(x(!0)),function(){return O.apply(this,arguments)}().then((function(t){n(y(t)),n(x(!1))}))}},H=function(n){return n.sortingHat.value},k=function(n){return n.sortingHat.isLoading},L=v.reducer;function S(){var n=Object(f.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return S=function(){return n},n}function z(){var n=Object(f.a)(["\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(10px)\n  }\n  100% {\n    transform: translateY(0px)\n  }\n  "]);return z=function(){return n},n}var A=Object(r.e)(z()),E=Object(r.e)(S());function P(){var n=Object(f.a)(["\n  font-family: HarryP;\n"]);return P=function(){return n},n}function C(){var n=Object(f.a)(["\n  animation: "," 2s linear infinite;\n"]);return C=function(){return n},n}function I(){var n=Object(f.a)(['\n  label: value;\n  font-size: 78px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-top: 2px;\n  font-family: "Courier New", Courier, monospace;\n']);return I=function(){return n},n}function M(){var n=Object(f.a)(["\n  label: row;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  &:not(:last-child) {\n    margin-bottom: 16px;\n  }\n"]);return M=function(){return n},n}function B(){var n=Object(f.a)(["\n  label: button;\n  appearance: none;\n  background: none;\n  font-size: 32px;\n  padding-left: 12px;\n  padding-right: 12px;\n  outline: none;\n  border: 2px solid transparent;\n  color: ",";\n  padding-bottom: 4px;\n  cursor: pointer;\n  background-color: ",";\n  border-radius: 2px;\n  transition: all 0.15s;\n  &:hover,\n  &:focus {\n    border: 2px solid ",";\n  }\n  &:active {\n    background-color: ",";\n  }\n"]);return B=function(){return n},n}var N=Object(r.c)(M()),Y=Object(r.c)(I()),D=Object(r.c)(C(),E),F=Object(r.c)(P()),J={row:N,value:Y,button:function(n){return Object(r.c)(B(),n.colors.textPrimary[0],n.colors.primary[0],n.colors.secondary[0],n.colors.accent)}},R=e(35),U=e(33),W=e.n(U);function $(){var n=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  "]);return $=function(){return n},n}var q=function(n){var t=n.isLoading,e=n.children,o=(n.minHeight,Object(R.a)(n,["isLoading","children","minHeight"])),a=Object(r.c)($());return Object(r.d)("div",Object.assign({css:a},o),t?Object(r.d)(W.a,{css:D,fontSize:"large"}):e)},G=e(34),K={colors:{primary:["#000050"],secondary:["#753300"],accent:["#000000"],accentDark:["#000000"],textPrimary:["#ffffff"],background:["#121212"]}};function Q(){var n=Object(f.a)(["\n            min-height: 90px;\n          "]);return Q=function(){return n},n}var T=function(){var n,t=Object(s.b)(),e=Object(s.c)(H),o=Object(s.c)(k);return Object(a.useEffect)((function(){e||t(w())}),[t,e]),Object(r.d)("div",null,Object(r.d)("div",{css:J.row},Object(r.d)(q,{css:Object(r.c)(Q()),isLoading:o},Object(r.d)("span",{css:[J.value,F]},e))),Object(r.d)("div",{css:J.row},Object(r.d)("button",{css:(n=[J.button],function(t){return Object(G.a)(n.map((function(n){return"function"===typeof n?n(t):n})))}),onClick:function(){return t(w())}},"Randomize")))};function V(){var n=Object(f.a)(["\n    display: flex;\n\n    & > li {\n      margin: 0 12px;\n      padding: 8px 0;\n    }\n  "]);return V=function(){return n},n}function X(){var n=Object(f.a)(["\n    color: ",";\n  "]);return X=function(){return n},n}function Z(){var n=Object(f.a)(["\n    label: AppHeader;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: calc(10px + 2vmin);\n  "]);return Z=function(){return n},n}function _(){var n=Object(f.a)(["\n    label: AppLogo;\n    height: 40vmin;\n    user-select: none;\n    pointer-events: none;\n    font-size: 5em;\n    @media (prefers-reduced-motion: no-preference) {\n      animation: "," infinite 3s ease-in-out;\n    }\n    & > div + div {\n      margin-top: -24px;\n    }\n  "]);return _=function(){return n},n}function nn(){var n=Object(f.a)(["\n    text-align: center;\n  "]);return nn=function(){return n},n}var tn={App:Object(r.c)(nn()),AppLogo:Object(r.c)(_(),A),AppHeader:Object(r.c)(Z()),link:function(n){return Object(r.c)(X(),n.colors.primary[0])},navigation:Object(r.c)(V())};var en=function(){return Object(r.d)("div",{css:tn.App},Object(r.d)("header",{css:tn.AppHeader},Object(r.d)("div",{css:[tn.AppLogo,F]},Object(r.d)("div",null,"Potter"),Object(r.d)("div",null,"Page")),Object(r.d)("ul",{css:tn.navigation},Object(r.d)("li",null,Object(r.d)(l.b,{css:tn.link,to:"/sorting-hat"},"Sorting Hat"))),Object(r.d)(d.d,null,Object(r.d)(d.b,{path:"/sorting-hat"},Object(r.d)(T,null)),Object(r.d)(d.b,{path:"*"},Object(r.d)(d.a,{to:"/sorting-hat"})))))},rn=Object(p.a)({reducer:{sortingHat:L}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function on(){var n=Object(f.a)(['\n  @font-face {\n    font-family: "HarryP";\n    src: url("./fonts/HarryP.ttf") format("truetype");\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\n      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\n      "Helvetica Neue", sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n      monospace;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    list-style-type: none;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n']);return on=function(){return n},n}var an=Object(r.c)(on());u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,null,c.a.createElement(r.a,{styles:an}),c.a.createElement(o.a,{theme:K},c.a.createElement(s.a,{store:rn},c.a.createElement(en,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.03825b73.chunk.js.map