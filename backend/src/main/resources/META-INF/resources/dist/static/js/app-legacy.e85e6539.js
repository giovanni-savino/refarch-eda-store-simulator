(function(){"use strict";var t={1637:function(t,e,r){r(6992),r(8674),r(9601),r(7727);var o=r(144),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"IBM Cloud Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}})],1),r("v-toolbar-title",[t._v("EDA- Store Simulator - "+t._s(t.version))]),r("v-spacer"),r("v-btn",{attrs:{to:"/",text:""}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-home")]),t._v(" Home ")],1),r("v-btn",{attrs:{to:"/stores",text:""}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-store")]),t._v(" Stores ")],1),r("v-btn",{attrs:{to:"/simulator",text:""}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-table-settings")]),t._v(" Simulator ")],1),r("v-btn",{attrs:{href:"https://github.com/ibm-cloud-architecture/refarch-eda-store-simulator",target:"_blank",text:""}},[r("span",{staticClass:"mr-2"},[t._v("Git")]),r("v-icon",[t._v("mdi-git")])],1)],1),r("v-main",[r("v-container",[r("router-view")],1)],1)],1)},n=[],s=r(9669),i=r.n(s),l={name:"App",data:function(){return{version:{},title:{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_TITLE}},created:function(){this.initialize()},methods:{initialize:function(){var t=this;i().get("/api/v1/version").then((function(e){return t.version=e.data.version})),console.log(this.version)}}},c=l,u=r(1001),v=r(3453),d=r.n(v),f=r(7524),m=r(3343),p=r(680),h=r(9846),b=r(6428),g=r(7047),_=r(7877),x=r(9762),Z=r(7921),w=(0,u.Z)(c,a,n,!1,null,null,null),y=w.exports;d()(w,{VApp:f.Z,VAppBar:m.Z,VBtn:p.Z,VContainer:h.Z,VIcon:b.Z,VImg:g.Z,VMain:_.Z,VSpacer:x.Z,VToolbarTitle:Z.qW});var C=r(8345),V=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("h3",[t._v("Welcome to the "+t._s(t.title)+" "+t._s(t.version))]),o("v-card",[o("h4",[t._v("Demonstration script")]),o("v-container",[o("ul",[o("li",[t._v("Go to the stores view to see the existing stores we want to get the inventory from")]),o("li",[t._v("In the simulator panel you can start to send messages to a specific middleware you select. The list of middleware depends of configuration and deployment. At most you can hava Kafka, IBM MQ or Rabbit MQ.")])])])],1),o("div",[t._m(0),o("v-img",{staticClass:"shrink mr-2",attrs:{alt:"IBM Cloud Logo",contain:"",src:r(8030),transition:"scale-transition",width:"900px"}})],1)],1)},k=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("This simulator is represented on the top left in the figure below. See project explanations in "),r("a",{attrs:{href:"https://github.com/ibm-cloud-architecture/refarch-eda-store-simulator"}},[t._v("the ibm-cloud-architecture/refarch-eda-store-simulator repository")])])}],S={name:"Home",data:function(){return{version:{},title:"Store Item Sell Simulator"}},created:function(){this.initialize()},methods:{initialize:function(){var t=this;i().get("/api/v1/version").then((function(e){return t.version=e.data.version})),console.log(this.version)}}},T=S,E=r(3237),I=(0,u.Z)(T,V,k,!1,null,null,null),O=I.exports;d()(I,{VCard:E.Z,VContainer:h.Z,VImg:g.Z});var M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-card",{attrs:{elevation:"2",tile:"",height:"600px"}},[r("v-card-title",[t._v("Store Simulator Controller")]),r("v-row",{attrs:{"align-content":"center"}},[r("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12",md:"6",sm:"3"}},[r("v-row",{staticClass:"ma-2"},[t._v(" Current backend(s) are: "+t._s(t.backend)+" ")]),r("v-row",[r("v-radio-group",{model:{value:t.backend,callback:function(e){t.backend=e},expression:"backend"}},t._l(t.backends,(function(e){return r("v-radio",{key:e,staticClass:"pr-2",attrs:{label:""+e,value:e},on:{click:t.resetTable}})})),1)],1)],1)],1),r("v-row",{attrs:{align:"start"}},[r("v-col",{staticClass:"mx-5 d-flex align-center",attrs:{height:"300px"}},[r("v-container",[r("v-row",[r("h3",{staticClass:"mx-auto"},[t._v("Random")])]),r("v-row",[r("p",[t._v("Select the number of random records to send:")])]),r("v-spacer"),r("v-row",{staticClass:"mt-12"},[r("v-slider",{attrs:{max:"100",min:"1","thumb-label":"always"},model:{value:t.records,callback:function(e){t.records=e},expression:"records"}})],1),r("v-row",[r("v-text-field",{attrs:{label:"Number of records"},model:{value:t.records,callback:function(e){t.records=e},expression:"records"}})],1)],1)],1),r("v-col",{staticClass:"mx-5",attrs:{height:"300px"}},[r("v-row",[r("h3",{staticClass:"mx-auto"},[t._v("Controlled scenario")])]),r("v-row",[r("p",[t._v("Use this option to send predefined records - better for testing item and store inventories results")])])],1)],1),r("v-row",{attrs:{"align-content":"center"}},[r("v-col",{staticClass:"mx-5"},[r("v-btn",{attrs:{color:"primary"},on:{click:t.start}},[r("v-icon",[t._v("mdi-restart")])],1)],1),r("v-col",{staticClass:"mx-5"},[r("v-btn",{attrs:{color:"primary"},on:{click:t.startControlled}},[r("v-icon",[t._v("mdi-run")])],1)],1)],1),t.messages.length>0?r("v-row",[r("Messages",{attrs:{messagesIn:t.messages}})],1):t._e()],1)],1)},j=[],z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[r("v-col",{attrs:{sm:"8","offset-sm":"2"}},[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.messagesIn,"sort-by":"Id"},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:"",color:"white"}},[r("v-toolbar-title",[t._v("Messages Sent")]),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),r("v-spacer")],1)]},proxy:!0}])})],1)],1)},B=[],R={name:"Messages",props:{messagesIn:[]},data:function(){return{headers:[{text:"Time",value:"timestamp",align:"start",sortable:!0},{text:"Store",value:"storeName",align:"start",sortable:!0},{text:"Sku",value:"sku",align:"start",sortable:!0},{text:"Type",value:"type",sortable:!0},{text:"Quantity",value:"quantity",sortable:!0},{text:"Price",value:"price"}]}}},A=R,D=r(2102),P=r(3336),$=r(1418),N=r(2877),q=r(6656),W=(0,u.Z)(A,z,B,!1,null,null,null),L=W.exports;d()(W,{VCol:D.Z,VDataTable:P.Z,VDivider:$.Z,VRow:N.Z,VSpacer:x.Z,VToolbar:q.Z,VToolbarTitle:Z.qW});var G={components:{Messages:L},data:function(){return{backend:"",backends:[],records:1,messages:[]}},created:function(){this.initialize()},methods:{initialize:function(){var t=this;i().get("/api/stores/v1/backends").then((function(e){return t.backends=e.data}))},start:function(){var t=this;console.log(" start with "+this.records+" records to "+this.backend);var e={records:this.records,backend:this.backend};i().post("/api/stores/v1/start/",e).then((function(e){return t.messages=e.data}))},startControlled:function(){var t=this,e={records:this.records,backend:this.backend};console.log(" startControlled with "+e),i().post("/api/stores/v1/startControlled/",e).then((function(e){return t.messages=e.data}))},resetTable:function(){this.messages=[]}}},H=G,Q=r(7118),U=r(6487),F=r(681),K=r(7611),J=r(5978),X=(0,u.Z)(H,M,j,!1,null,null,null),Y=X.exports;d()(X,{VBtn:p.Z,VCard:E.Z,VCardTitle:Q.EB,VCol:D.Z,VContainer:h.Z,VIcon:b.Z,VRadio:U.Z,VRadioGroup:F.Z,VRow:N.Z,VSlider:K.Z,VSpacer:x.Z,VTextField:J.Z});var tt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[r("v-col",{attrs:{sm:"8","offset-sm":"2"}},[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.stores,"sort-by":"Name"},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:"",color:"white"}},[r("v-toolbar-title",[t._v("Stores Table")]),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),r("v-spacer")],1)]},proxy:!0}])})],1),r("v-container",[r("p",[t._v("We have the above stores available for the simulation, with items ready to be sold or to re-stock")])])],1)},et=[],rt={name:"Stores",data:function(){return{stores:[],headers:[{text:"Name",value:"name",align:"start",sortable:!0},{text:"City",value:"city",sortable:!0},{text:"State",value:"state",sortable:!0},{text:"Zipcode",value:"zipcode"}]}},created:function(){this.initialize()},methods:{initialize:function(){var t=this;i().get("/api/stores/v1").then((function(e){return t.stores=e.data}))}}},ot=rt,at=(0,u.Z)(ot,tt,et,!1,null,null,null),nt=at.exports;d()(at,{VCol:D.Z,VContainer:h.Z,VDataTable:P.Z,VDivider:$.Z,VRow:N.Z,VSpacer:x.Z,VToolbar:q.Z,VToolbarTitle:Z.qW}),o.Z.use(C.Z);var st=[{path:"/",name:"Home",component:O},{path:"/stores",name:"Stores",component:nt},{path:"/simulator",name:"Simulator",component:Y}],it=new C.Z({routes:st}),lt=it,ct=r(9132);o.Z.use(ct.Z);var ut=new ct.Z({});o.Z.config.productionTip=!1,new o.Z({router:lt,vuetify:ut,render:function(t){return t(y)}}).$mount("#app")},8030:function(t,e,r){t.exports=r.p+"static/img/mq-es-demo.03bbf006.png"}},e={};function r(o){var a=e[o];if(void 0!==a)return a.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,r),n.exports}r.m=t,function(){var t=[];r.O=function(e,o,a,n){if(!o){var s=1/0;for(u=0;u<t.length;u++){o=t[u][0],a=t[u][1],n=t[u][2];for(var i=!0,l=0;l<o.length;l++)(!1&n||s>=n)&&Object.keys(r.O).every((function(t){return r.O[t](o[l])}))?o.splice(l--,1):(i=!1,n<s&&(s=n));if(i){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[o,a,n]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,n,s=o[0],i=o[1],l=o[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(l)var u=l(r)}for(e&&e(o);c<s.length;c++)n=s[c],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(u)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(1637)}));o=r.O(o)})();
//# sourceMappingURL=app-legacy.e85e6539.js.map