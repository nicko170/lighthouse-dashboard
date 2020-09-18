(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"8OBz":function(t,e,a){"use strict";var r=a("rTGj");a.n(r).a},"8iBp":function(t,e,a){"use strict";a.r(e);var r=a("o0o1"),s=a.n(r),i=a("VDrJ"),n=a("NF9v"),o=a("vDqi"),l=a.n(o);function c(t,e,a,r,s,i,n){try{var o=t[i](n),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(r,s)}var d={props:["operation","filters"],components:{Field:n.a},data:function(){return{loading:!1,sumary:[],table:{headers:[{text:"Client",value:"username",sortable:!1},{text:"Requests",value:"total_requests",sortable:!1,align:"end"}]}}},watch:{operation:function(){this.load()}},methods:{load:function(){var t,e=this;return(t=s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,l.a.get("/lighthouse-dashboard/operations/".concat(e.operation.id,"/sumary"),{params:e.filters.form});case 3:a=t.sent,e.loading=!1,e.sumary=a.data;case 6:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(r,s){var i=t.apply(e,a);function n(t){c(i,r,s,n,o,"next",t)}function o(t){c(i,r,s,n,o,"throw",t)}n(void 0)}))})()},close:function(){this.$emit("close")}}},u=a("KHd+"),f=Object(u.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{flat:""}},[a("v-card-title",[a("h2",[t._v("Sumary")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.close()}}},[a("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),a("v-card-subtitle",{staticClass:"pt-5"},[a("field",{attrs:{field:t.operation.field,full:!0}}),t._v(" "),a("v-divider",{staticClass:"my-5"})],1),t._v(" "),a("v-card-text",[a("h3",{staticClass:"mb-5 black--text"},[t._v("Clients & Operations")]),t._v(" "),t.loading?a("div",{staticClass:"text-center mt-8"},[a("v-progress-circular",{attrs:{indeterminate:""}})],1):t._e(),t._v(" "),t.sumary.length&&!t.loading?a("v-data-table",{attrs:{headers:t.table.headers,items:t.sumary,loading:t.loading,"hide-default-footer":""}}):t._e(),t._v(" "),t.sumary.length||t.loading?t._e():a("div",[a("v-alert",{attrs:{icon:"mdi-alert",text:"",dense:""}},[t._v("No operations on selected range.")])],1)],1)],1)}),[],!1,null,null,null).exports;function v(t,e,a,r,s,i,n){try{var o=t[i](n),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(r,s)}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){h(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function h(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var g={props:["topOperations","slowlestOperations","start_date","range"],components:{Filters:i.a,Field:n.a,OperationSumary:f},data:function(){return{loading:!1,selectedOperation:{field:{}},display:{filters:!1,sumary:!1},filters:{form:{start_date:this.start_date||"today",range:this.range||[]}},table_top_operations:{headers:[{text:"Operation",value:"field",sortable:!1},{text:"Requests",value:"total_requests",sortable:!1,align:"end"}]},table_slowlest_operations:{headers:[{text:"Operation",value:"field",sortable:!1},{text:"Average (ms)",value:"average_duration",sortable:!1,align:"end"},{text:"Latest (ms)",value:"latest_duration",sortable:!1,align:"end"}]},series:[{name:"Requests",data:[]}],options:{chart:{type:"line",width:"100%",toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{curve:"straight",width:1},xaxis:{categories:[]},yaxis:{opposite:!0},grid:{yaxis:{lines:{show:!1}}}}}},methods:{getSeries:function(t){return console.log(t.metrics.totals),[{name:"Requests",data:t.metrics.totals}]},getOptions:function(t){return m(m({},this.options),{xaxis:{categories:t.metrics.dates}})},selectOperation:function(t){this.selectedOperation=t,this.displaySumary()},filter:function(){var t,e=this;return(t=s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$inertia.replace("/lighthouse-dashboard/operations",{data:e.filters.form,replace:!0,preserveScroll:!0});case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(r,s){var i=t.apply(e,a);function n(t){v(i,r,s,n,o,"next",t)}function o(t){v(i,r,s,n,o,"throw",t)}n(void 0)}))})()},displaySumary:function(){this.hideFilters(),this.display.sumary=!0},hideSumary:function(){this.display.sumary=!1},displayFilters:function(){this.hideSumary(),this.display.filters=!0},hideFilters:function(){this.display.filters=!1}}},_=(a("8OBz"),Object(u.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{staticClass:"pt-2",attrs:{app:"",color:"white",elevation:"1"}},[a("v-row",{staticClass:"mb-5",attrs:{align:"center"}},[a("v-col",[a("h2",[a("v-icon",{attrs:{left:"",color:"black"}},[t._v("mdi-pulse")]),t._v("Operations\n        ")],1)]),t._v(" "),a("v-col",[a("v-col",{staticClass:"text-right primary--text",attrs:{cols:"auto"}},[a("v-icon",{staticClass:"mb-1 primary--text"},[t._v("mdi-clock-outline")]),t._v("\n          "+t._s(t.filters.form.start_date)+"\n          "),a("v-btn",{staticClass:"ml-3",attrs:{color:"primary",fab:"","x-small":"",depressed:"",dark:""},on:{click:function(e){return t.displayFilters()}}},[a("v-icon",[t._v("mdi-filter-variant")])],1)],1)],1)],1)],1),t._v(" "),0===t.topOperations.length&&0===t.slowlestOperations.length?a("div",{staticClass:"text-center grey--text"},[a("v-icon",{attrs:{color:"grey","x-large":""}},[t._v("mdi-weather-windy")]),t._v(" "),a("h3",{staticClass:"mt-3"},[t._v("Oops! Nothing here.")]),t._v(" "),a("p",{staticClass:"text-caption mt-3"},[t._v("Make your first request to this Schema.")])],1):t._e(),t._v(" "),t.topOperations.length?a("v-data-table",{staticClass:"elevation-1 row-pointer mb-8",attrs:{headers:t.table_top_operations.headers,items:t.topOperations,"hide-default-footer":""},on:{"click:row":t.selectOperation},scopedSlots:t._u([{key:"top",fn:function(){return[a("div",{staticClass:"pa-3"},[a("div",{staticClass:"title"},[t._v("Top")]),t._v(" "),a("div",{staticClass:"text-caption grey--text"},[t._v("Most requested operations in selected period.")])])]},proxy:!0},{key:"item.field",fn:function(t){var e=t.item;return[a("field",{staticClass:"py-4",attrs:{field:e.field}})]}}],null,!1,206686054)}):t._e(),t._v(" "),t.slowlestOperations.length?a("v-data-table",{staticClass:"elevation-1 row-pointer",attrs:{headers:t.table_slowlest_operations.headers,items:t.slowlestOperations,"hide-default-footer":""},on:{"click:row":t.selectOperation},scopedSlots:t._u([{key:"top",fn:function(){return[a("div",{staticClass:"pa-3"},[a("div",{staticClass:"title"},[t._v("Slow")]),t._v(" "),a("div",{staticClass:"text-caption grey--text"},[t._v("Most slowlest operations in selected period.")])])]},proxy:!0},{key:"item.field",fn:function(t){var e=t.item;return[a("field",{staticClass:"py-4",attrs:{field:e.field}})]}}],null,!1,2510814099)}):t._e(),t._v(" "),a("v-navigation-drawer",{staticClass:"pa-5",attrs:{right:"",app:t.display.filters,width:"380"},model:{value:t.display.filters,callback:function(e){t.$set(t.display,"filters",e)},expression:"display.filters"}},[a("filters",{attrs:{filters:t.filters},on:{filter:function(e){return t.filter()},close:function(e){return t.hideFilters()}}})],1),t._v(" "),a("v-navigation-drawer",{staticClass:"pa-5",attrs:{right:"",app:t.display.sumary,width:"380"},model:{value:t.display.sumary,callback:function(e){t.$set(t.display,"sumary",e)},expression:"display.sumary"}},[a("operation-sumary",{attrs:{operation:t.selectedOperation,filters:t.filters},on:{close:function(e){return t.hideSumary()}}})],1),t._v(" "),a("v-overlay",{attrs:{value:t.loading}},[a("v-progress-circular",{attrs:{indeterminate:""}})],1)],1)}),[],!1,null,"a5a042b0",null));e.default=_.exports},MmWe:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".bordered[data-v-a5a042b0]{border-bottom:1px solid #efefef}",""])},NF9v:function(t,e,a){"use strict";var r=a("tQyR"),s={props:{full:{type:Boolean,default:!1},field:{type:Object},highlight:{type:String,default:""}},components:{TextHighlight:r.a}},i=(a("rVSg"),a("KHd+")),n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("text-highlight",{staticClass:"font-weight-bold",attrs:{queries:[t.highlight]}},[t._v(t._s(t.field.name))]),t._v(" "),t.field.args?a("span",[t.full?a("span",[t._v("\n      (\n      "),a("div",{staticClass:"ml-5",domProps:{innerHTML:t._s(t.field.args)}}),t._v(")\n    ")]):a("span",[t._v("(...)")])]):t._e(),t._v(" "),t.field.type_def?a("span",{staticClass:"blue--text"},[t._v(": "+t._s(t.field.type_def))]):t._e(),t._v(" "),a("div",{staticClass:"text-caption grey--text pt-1",domProps:{innerHTML:t._s(t.field.description)}})],1)}),[],!1,null,"6b105f36",null);e.a=n.exports},O15G:function(t,e,a){var r=a("XZQw");"string"==typeof r&&(r=[[t.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,s);r.locals&&(t.exports=r.locals)},VDrJ:function(t,e,a){"use strict";var r={props:["filters"],data:function(){return{options:[{value:"today",label:"Today"},{value:"yesterday",label:"Yesterday"},{value:"last week",label:"Last week"},{value:"last month",label:"Last Month"},{value:"in custom range",label:"In custom range"}]}},computed:{dateRangeText:function(){return this.filters.form.range.join(" ~ ")},isCustomRange:function(){return"in custom range"===this.filters.form.start_date}},methods:{filter:function(){this.isCustomRange&&this.filters.form.range.length<2||(this.isCustomRange||(this.filters.form.range=[]),this.$emit("filter"))},reset:function(){this.filters.form.start_date="today",this.$emit("filter")}}},s=a("KHd+"),i=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{flat:""}},[a("v-card-title",[a("h3",[t._v("Filters")]),t._v(" "),a("v-btn",{staticClass:"ml-3",attrs:{text:"",small:"",outlined:"",color:"primary"},on:{click:function(e){return t.reset()}}},[t._v("reset")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$emit("close")}}},[a("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),a("v-card-text",{staticClass:"mt-5"},[a("div",{staticClass:"font-weight-black text-caption"},[t._v("STARTING FROM")]),t._v(" "),a("v-radio-group",{on:{change:function(e){return t.filter()}},model:{value:t.filters.form.start_date,callback:function(e){t.$set(t.filters.form,"start_date",e)},expression:"filters.form.start_date"}},t._l(t.options,(function(t){return a("v-radio",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),t.isCustomRange?a("div",[a("v-date-picker",{staticClass:"elevation-2",attrs:{max:(new Date).toISOString(),"show-current":!1,"no-title":"",range:""},on:{change:function(e){return t.filter()}},model:{value:t.filters.form.range,callback:function(e){t.$set(t.filters.form,"range",e)},expression:"filters.form.range"}}),t._v(" "),a("div",{staticClass:"py-3 font-weight-bold"},[t.dateRangeText?a("v-icon",{staticClass:"mb-1",attrs:{small:"",left:""}},[t._v("mdi-selection-drag")]):t._e(),t._v("\n        "+t._s(t.dateRangeText)+"\n      ")],1)],1):t._e()],1)],1)}),[],!1,null,null,null);e.a=i.exports},XZQw:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"span[data-v-6b105f36] .arg-name{color:indigo}span[data-v-6b105f36] .arg-type{color:orange}",""])},rTGj:function(t,e,a){var r=a("MmWe");"string"==typeof r&&(r=[[t.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,s);r.locals&&(t.exports=r.locals)},rVSg:function(t,e,a){"use strict";var r=a("O15G");a.n(r).a}}]);
//# sourceMappingURL=2.js.map?id=80bca49edd242022181e