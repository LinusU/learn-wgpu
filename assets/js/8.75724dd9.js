(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{237:function(t,e,n){"use strict";var r=n(0),i=n(68),a=n(14),o=n(2),u=n(31),l=[],s=l.sort,c=o((function(){l.sort(void 0)})),f=o((function(){l.sort(null)})),d=u("sort");r({target:"Array",proto:!0,forced:c||!f||!d},{sort:function(t){return void 0===t?s.call(a(this)):s.call(a(this),i(t))}})},238:function(t,e,n){var r=n(11),i=Date.prototype,a=i.toString,o=i.getTime;new Date(NaN)+""!="Invalid Date"&&r(i,"toString",(function(){var t=o.call(this);return t==t?a.call(this):"Invalid Date"}))},243:function(t,e,n){"use strict";n.r(e);n(18),n(108),n(34),n(237),n(238),n(110);var r={data:function(){return{}},computed:{recentFiles:function(){return this.$site.pages.filter((function(t){return t.path.includes("beginner")||t.path.includes("intermediate")})).sort((function(t,e){var n=new Date(t.frontmatter.published).getTime()-new Date(e.frontmatter.published).getTime();return n<0?-1:n>0?1:0})).slice(0,5)}}},i=n(10),a=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.recentFiles,(function(e){return n("li",[n("a",{attrs:{href:e.path}},[t._v(t._s(e.title))])])})),0)])}),[],!1,null,null,null);e.default=a.exports}}]);