(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"8iBp":function(t,e,r){"use strict";r.r(e);var n=r("o0o1"),a=r.n(n),i=r("VDrJ"),o=r("NF9v"),s=r("vDqi"),l=r.n(s);function c(t,e,r,n,a,i,o){try{var s=t[i](o),l=s.value}catch(t){return void r(t)}s.done?e(l):Promise.resolve(l).then(n,a)}var u={props:["operation","filters"],components:{Field:o.a},data:function(){return{loading:{sumary:!1,tracing:!1},sumary:[],table:{headers:[{text:"Client",value:"username",sortable:!1},{text:"Requests",value:"total_requests",sortable:!1,align:"end"}]}}},watch:{operation:function(){this.load()}},methods:{load:function(){var t,e=this;return(t=a.a.mark((function t(){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading.sumary=!0,t.next=3,l.a.get("/lighthouse-dashboard/operations/".concat(e.operation.id,"/sumary"),{params:e.filters.form});case 3:r=t.sent,e.loading.sumary=!1,e.sumary=r.data;case 6:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function o(t){c(i,n,a,o,s,"next",t)}function s(t){c(i,n,a,o,s,"throw",t)}o(void 0)}))})()},close:function(){this.$emit("close")},seeTracings:function(){this.loading.tracing=!0,this.$inertia.visit("/lighthouse-dashboard/operations/".concat(this.operation.id))}}},f=r("KHd+"),v=Object(f.a)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{attrs:{flat:""}},[r("v-card-title",[r("h2",[t._v("Sumary")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){return t.close()}}},[r("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),r("v-card-subtitle",{staticClass:"pt-5"},[r("field",{attrs:{field:t.operation.field,full:!0}}),t._v(" "),r("v-divider",{staticClass:"mt-5"})],1),t._v(" "),r("v-card-text",[r("v-btn",{staticClass:"mb-8",attrs:{small:"",outlined:""},on:{click:function(e){return t.seeTracings()}}},[t._v("\n        See latest tracings\n        "),r("v-icon",{attrs:{small:""}},[t._v("mdi-arrow-right")])],1),t._v(" "),r("h3",{staticClass:"black--text"},[t._v("Clients & Operations")]),t._v(" "),r("p",{staticClass:"mt-3 mb-8"},[t._v("Who is using that operation?")]),t._v(" "),t.loading.sumary?r("div",{staticClass:"text-center"},[r("v-progress-circular",{attrs:{indeterminate:""}})],1):t._e(),t._v(" "),t.sumary.length&&!t.loading.sumary?r("v-data-table",{attrs:{headers:t.table.headers,items:t.sumary,loading:t.loading.sumary,"hide-default-footer":""},scopedSlots:t._u([{key:"item.total_requests",fn:function(e){var r=e.item;return[t._v(t._s(t._f("numeral")(r.total_requests,0)))]}}],null,!1,3603509784)}):t._e(),t._v(" "),t.sumary.length||t.loading.sumary?t._e():r("div",[r("v-alert",{attrs:{icon:"mdi-alert",text:"",dense:""}},[t._v("No operations on selected range.")])],1)],1)],1),t._v(" "),r("v-overlay",{staticClass:"text-center",attrs:{value:t.loading.tracing}},[r("v-progress-circular",{attrs:{indeterminate:""}}),t._v(" "),r("p",{staticClass:"my-5"},[t._v("Loading tracings ...")])],1)],1)}),[],!1,null,null,null).exports;function d(t,e,r,n,a,i,o){try{var s=t[i](o),l=s.value}catch(t){return void r(t)}s.done?e(l):Promise.resolve(l).then(n,a)}var p={props:["topOperations","slowlestOperations","start_date","range","clients","selectedClients"],components:{Filters:i.a,Field:o.a,OperationSumary:v},data:function(){return{loading:!1,selectedOperation:{field:{}},display:{navigation:!1,component:"filters"},filters:{form:{start_date:this.start_date||"today",range:this.range||[],clients:this.selectedClients||[]},options:{clients:this.clients||[]}},table_top_operations:{headers:[{text:"Operation",value:"field",sortable:!1},{text:"Requests",value:"total_requests",sortable:!1,align:"end"},{text:"Errors",value:"total_errors",sortable:!1,align:"end"}]},table_slowlest_operations:{headers:[{text:"Operation",value:"field",sortable:!1},{text:"Average (ms)",value:"average_duration",sortable:!1,align:"end"},{text:"Latest (ms)",value:"latest_duration",sortable:!1,align:"end"}]}}},methods:{selectOperation:function(t){this.selectedOperation=t,this.setNavigationComponent("sumary"),this.displayNavigation()},filter:function(){var t,e=this;return(t=a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$inertia.replace("/lighthouse-dashboard/operations",{data:e.filters.form,replace:!0,preserveScroll:!0});case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function o(t){d(i,n,a,o,s,"next",t)}function s(t){d(i,n,a,o,s,"throw",t)}o(void 0)}))})()},setNavigationComponent:function(t){this.display.component=t,this.displayNavigation()},hideNavigation:function(){this.display.navigation=!1},displayNavigation:function(){this.display.navigation=!0}}},h=Object(f.a)(p,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-app-bar",{staticClass:"pt-2",attrs:{app:"",color:"white",elevation:"1"}},[r("v-row",{staticClass:"mb-5",attrs:{align:"center"}},[r("v-col",[r("h2",[r("v-icon",{attrs:{left:"",color:"black"}},[t._v("mdi-pulse")]),t._v("Operations")],1)]),t._v(" "),r("v-col",{staticClass:"text-right primary--text",attrs:{cols:"auto"}},[r("v-icon",{staticClass:"mb-1 primary--text"},[t._v("mdi-clock-outline")]),t._v("\n        "+t._s(t.filters.form.start_date)+"\n        "),r("v-btn",{staticClass:"ml-3",attrs:{color:"primary",fab:"","x-small":"",depressed:"",dark:""},on:{click:function(e){return t.setNavigationComponent("filters")}}},[r("v-icon",[t._v("mdi-filter-variant")])],1)],1)],1)],1),t._v(" "),0===t.topOperations.length&&0===t.slowlestOperations.length?r("div",{staticClass:"text-center grey--text"},[r("v-icon",{attrs:{color:"grey","x-large":""}},[t._v("mdi-weather-windy")]),t._v(" "),r("h3",{staticClass:"mt-3"},[t._v("Oops! Nothing here.")]),t._v(" "),r("p",{staticClass:"text-caption mt-3"},[t._v("Make your first request to this Schema.")])],1):t._e(),t._v(" "),t.topOperations.length?r("div",[r("div",{staticClass:"title"},[t._v("Top")]),t._v(" "),r("div",{staticClass:"text-caption grey--text mb-3"},[t._v("\n      Most requested operations in selected period.\n    ")]),t._v(" "),r("v-data-table",{staticClass:"elevation-1 row-pointer mb-8",attrs:{headers:t.table_top_operations.headers,items:t.topOperations,"hide-default-footer":""},on:{"click:row":t.selectOperation},scopedSlots:t._u([{key:"item.field",fn:function(t){var e=t.item;return[r("field",{staticClass:"py-4",attrs:{field:e.field}})]}},{key:"item.total_requests",fn:function(e){var r=e.item;return[t._v("\n        "+t._s(t._f("numeral")(r.total_requests,0))+"\n      ")]}},{key:"item.total_errors",fn:function(e){var n=e.item;return[r("span",{staticClass:"red--text"},[t._v(t._s(n.total_errors))])]}}],null,!1,1089342447)})],1):t._e(),t._v(" "),t.topOperations.length?r("div",[r("div",{staticClass:"title"},[t._v("Slow")]),t._v(" "),r("div",{staticClass:"text-caption grey--text mb-3"},[t._v("\n      Most slowlest operations in selected period.\n    ")]),t._v(" "),r("v-data-table",{staticClass:"elevation-1 row-pointer",attrs:{headers:t.table_slowlest_operations.headers,items:t.slowlestOperations,"hide-default-footer":""},on:{"click:row":t.selectOperation},scopedSlots:t._u([{key:"item.field",fn:function(t){var e=t.item;return[r("field",{staticClass:"py-4",attrs:{field:e.field}})]}},{key:"item.average_duration",fn:function(e){var r=e.item;return[t._v("\n        "+t._s(t._f("milliseconds")(r.average_duration))+"\n      ")]}},{key:"item.latest_duration",fn:function(e){var r=e.item;return[t._v("\n        "+t._s(t._f("milliseconds")(r.latest_duration))+"\n      ")]}}],null,!1,78705963)})],1):t._e(),t._v(" "),r("v-navigation-drawer",{staticClass:"pa-5",attrs:{right:"",app:"",width:"380"},model:{value:t.display.navigation,callback:function(e){t.$set(t.display,"navigation",e)},expression:"display.navigation"}},[r("filters",{directives:[{name:"show",rawName:"v-show",value:"filters"===t.display.component,expression:"display.component === 'filters'"}],attrs:{filters:t.filters},on:{filter:function(e){return t.filter()},close:function(e){return t.hideNavigation()}}}),t._v(" "),r("operation-sumary",{directives:[{name:"show",rawName:"v-show",value:"sumary"===t.display.component,expression:"display.component === 'sumary'"}],attrs:{operation:t.selectedOperation,filters:t.filters},on:{close:function(e){return t.hideNavigation()}}})],1),t._v(" "),r("v-overlay",{attrs:{value:t.loading}},[r("v-progress-circular",{attrs:{indeterminate:""}})],1)],1)}),[],!1,null,null,null);e.default=h.exports},NF9v:function(t,e,r){"use strict";var n=r("tQyR"),a={props:{full:{type:Boolean,default:!1},field:{type:Object},highlight:{type:String,default:""}},components:{TextHighlight:n.a}},i=(r("rVSg"),r("KHd+")),o=Object(i.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("text-highlight",{staticClass:"font-weight-bold",attrs:{queries:[t.highlight]}},[t._v(t._s(t.field.name))]),t._v(" "),t.field.args?r("span",[t.full?r("span",[t._v("\n      (\n      "),r("div",{staticClass:"ml-5",domProps:{innerHTML:t._s(t.field.args)}}),t._v(")\n    ")]):r("span",[t._v("(...)")])]):t._e(),t._v(" "),t.field.type_def?r("span",{staticClass:"blue--text"},[t._v(": "+t._s(t.field.type_def))]):t._e(),t._v(" "),r("div",{staticClass:"text-caption grey--text pt-1",domProps:{innerHTML:t._s(t.field.description)}})],1)}),[],!1,null,"6b105f36",null);e.a=o.exports},O15G:function(t,e,r){var n=r("XZQw");"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(n,a);n.locals&&(t.exports=n.locals)},VDrJ:function(t,e,r){"use strict";var n={props:["filters"],data:function(){return{options:[{value:"today",label:"Today"},{value:"yesterday",label:"Yesterday"},{value:"last week",label:"Last week"},{value:"last month",label:"Last Month"},{value:"in custom range",label:"In custom range"}]}},computed:{dateRangeText:function(){return this.filters.form.range.join(" ~ ")},isCustomRange:function(){return"in custom range"===this.filters.form.start_date}},methods:{filter:function(){this.isCustomRange&&this.filters.form.range.length<2||(this.isCustomRange||(this.filters.form.range=[]),this.$emit("filter"))},uncheckAll:function(){this.filters.form.clients.length&&(this.filters.form.clients=[]),this.filter()}}},a=r("KHd+"),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:""}},[r("v-card-title",[r("h3",[t._v("Filters")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$emit("close")}}},[r("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),r("v-card-text",{staticClass:"mt-5"},[r("div",{staticClass:"font-weight-black text-caption"},[t._v("STARTING FROM")]),t._v(" "),r("v-radio-group",{on:{change:function(e){return t.filter()}},model:{value:t.filters.form.start_date,callback:function(e){t.$set(t.filters.form,"start_date",e)},expression:"filters.form.start_date"}},t._l(t.options,(function(t){return r("v-radio",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),t.isCustomRange?r("div",[r("v-date-picker",{staticClass:"elevation-2",attrs:{max:(new Date).toISOString(),"show-current":!1,"no-title":"",range:""},on:{change:function(e){return t.filter()}},model:{value:t.filters.form.range,callback:function(e){t.$set(t.filters.form,"range",e)},expression:"filters.form.range"}}),t._v(" "),r("div",{staticClass:"py-3 font-weight-bold"},[t.dateRangeText?r("v-icon",{staticClass:"mb-1",attrs:{small:"",left:""}},[t._v("mdi-selection-drag")]):t._e(),t._v("\n        "+t._s(t.dateRangeText)+"\n      ")],1)],1):t._e(),t._v(" "),r("div",{staticClass:"font-weight-black text-caption mt-5 mb-5"},[t._v("CLIENTS")]),t._v(" "),r("v-btn",{attrs:{"x-small":"",outlined:""},on:{click:function(e){return t.uncheckAll()}}},[t._v("uncheck all")]),t._v(" "),t._l(t.filters.options.clients,(function(e){return r("v-checkbox",{key:e.id,attrs:{label:e.username,value:e.id,"hide-details":"",multiple:""},on:{change:function(e){return t.filter()}},model:{value:t.filters.form.clients,callback:function(e){t.$set(t.filters.form,"clients",e)},expression:"filters.form.clients"}})}))],2)],1)}),[],!1,null,null,null);e.a=i.exports},XZQw:function(t,e,r){(t.exports=r("I1BE")(!1)).push([t.i,"span[data-v-6b105f36] .arg-name{color:indigo}span[data-v-6b105f36] .arg-type{color:orange}",""])},ls82:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),o=new C(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return O()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var s=w(o,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=c(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,o),i}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var u={};function f(){}function v(){}function d(){}var p={};p[a]=function(){return this};var h=Object.getPrototypeOf,m=h&&h(h(k([])));m&&m!==e&&r.call(m,a)&&(p=m);var g=d.prototype=f.prototype=Object.create(p);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function y(t,e){var n;this._invoke=function(a,i){function o(){return new e((function(n,o){!function n(a,i,o,s){var l=c(t[a],t,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,o,s)}),(function(t){n("throw",t,o,s)})):e.resolve(f).then((function(t){u.value=t,o(u)}),(function(t){return n("throw",t,o,s)}))}s(l.arg)}(a,i,n,o)}))}return n=n?n.then(o,o):o()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=c(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return v.prototype=g.constructor=d,d.constructor=v,v.displayName=s(d,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,o,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},_(y.prototype),y.prototype[i]=function(){return this},t.AsyncIterator=y,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var o=new y(l(e,r,n,a),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},_(g),s(g,o,"Generator"),g[a]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return o.type="throw",o.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(t,e,r){t.exports=r("ls82")},rVSg:function(t,e,r){"use strict";var n=r("O15G");r.n(n).a}}]);
//# sourceMappingURL=2.js.map?id=6f7905106148afa21751