"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[605],{7605:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(8683),c=n(4925),a=n(885),o=n(2791),u=n(7689),i=n(8197),s="ReviewsBlock_author__nQaWN",p="ReviewsBlock_content__YSfOb",l=n(184),f=function(e){var t=e.author,n=e.content;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("p",{className:s,children:[t,":"]}),(0,l.jsx)("p",{className:p,children:n})]})},h={section:"ReviewsPage_section__S4Inz",note:"ReviewsPage_note__8HhE5"},v=["id"],g=function(){var e=(0,u.UO)().id,t=(0,o.useState)(""),n=(0,a.Z)(t,2),s=n[0],p=n[1];return(0,o.useEffect)((function(){(0,i.Bt)(e).then((function(e){return p(e)}))}),[e]),(0,l.jsx)("section",{className:h.section,children:s&&0!==s.results.length?(0,l.jsx)("ul",{className:h.reviews,children:s.results.map((function(e){var t=e.id,n=(0,c.Z)(e,v);return(0,l.jsx)("li",{children:(0,l.jsx)(f,(0,r.Z)({},n))},t)}))}):(0,l.jsx)("p",{className:h.note,children:"No reviews were found for this movie."})})}},8197:function(e,t,n){n.d(t,{Bt:function(){return d},l7:function(){return g},vw:function(){return h},wr:function(){return l},y:function(){return w}});var r=n(5861),c=n(7757),a=n.n(c),o=n(1044),u="28318b77967fcb148715c1c7fa524b54",i="https://api.themoviedb.org/3/search/movie",s="https://api.themoviedb.org/3/trending/movie/day",p="https://api.themoviedb.org/3/movie/";function l(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(s,"?api_key=").concat(u,"&page=").concat(t));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function h(e,t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(t,n){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(i,"?api_key=").concat(u,"&query=").concat(t,"&page=").concat(n,"&language=en-US&include_adult=false"));case 3:return r=e.sent,c=r.data,e.abrupt("return",c.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function g(e){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(p).concat(t,"?api_key=").concat(u,"&language=en-US"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function d(e){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(p).concat(t,"/reviews?api_key=").concat(u,"&language=en-US"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function w(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(p).concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}},8683:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,{Z:function(){return a}})},4925:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=605.0f43a754.chunk.js.map