"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[591],{591:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(885),a=n(2791),c=n(6731),o=n(7689),u=n(8197),s="HomePage_title__DWlEo",i="HomePage_movieList__HXlPc",p="HomePage_movie__3NU5C",l=n(184),f=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],f=e[1],h=(0,o.TH)();return(0,a.useEffect)((function(){(0,u.wr)(1).then((function(t){return f(t.results)}))}),[]),(0,l.jsxs)("main",{children:[(0,l.jsx)("h2",{className:s,children:"Tranding today"}),(0,l.jsx)("ul",{className:i,children:n.map((function(t){return(0,l.jsx)("li",{className:p,children:(0,l.jsx)(c.rU,{to:"/movies/".concat(t.id),state:{from:h},children:t.title})},t.id)}))})]})}},8197:function(t,e,n){n.d(e,{Bt:function(){return m},l7:function(){return d},vw:function(){return h},wr:function(){return l},y:function(){return y}});var r=n(5861),a=n(7757),c=n.n(a),o=n(1044),u="28318b77967fcb148715c1c7fa524b54",s="https://api.themoviedb.org/3/search/movie",i="https://api.themoviedb.org/3/trending/movie/day",p="https://api.themoviedb.org/3/movie/";function l(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"?api_key=").concat(u,"&page=").concat(e));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function h(t,e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(e,n){var r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(s,"?api_key=").concat(u,"&query=").concat(e,"&page=").concat(n,"&language=en-US&include_adult=false"));case 3:return r=t.sent,a=r.data,t.abrupt("return",a.results);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function d(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(p).concat(e,"?api_key=").concat(u,"&language=en-US&append_to_response=videos"));case 3:return n=t.sent,r=n.data,console.log(r),t.abrupt("return",r);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function m(t){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(p).concat(e,"/reviews?api_key=").concat(u,"&language=en-US"));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function y(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(p).concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=591.31f689fc.chunk.js.map