(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3abc9440"],{"041e":function(e,t,i){var s={"./logo-support-1-dark.png":"6625","./logo-support-1-light.png":"66af","./logo-support-2-dark.png":"f757","./logo-support-2-light.png":"c424"};function a(e){var t=n(e);return i(t)}function n(e){if(!i.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=n,e.exports=a,a.id="041e"},c6d2:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("base-section",{attrs:{id:"affiliates",space:"36"}},[s("v-container",[s("base-section-heading",{attrs:{title:"Who support DAOSWAP?"}}),s("v-slide-group",[e._l(2,(function(t){return[s("v-slide-item",{key:t,staticClass:"align-self-center"},[s("base-img",{attrs:{src:i("041e")("./logo-support-"+t+"-"+(e.$vuetify.theme.isDark?"dark":"light")+".png"),color:"grey",contain:"",height:"40",width:"128"}})],1),t<2?s("v-responsive",{key:"divider-"+t,staticClass:"text-center",attrs:{height:"56",width:"48"}},[s("v-divider",{attrs:{vertical:""}})],1):e._e()]}))],2)],1)],1)},a=[],n={name:"SectionAffiliates"},r=n,o=i("2877"),c=i("6544"),l=i.n(c),d=i("a523"),u=i("ce7e"),p=i("6b53"),v=i("7efd"),g=i("ade3"),h=i("4e82"),f=i("58df"),b=i("d9bd"),m=i("2b0e"),O=m["a"].extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(e=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(e)&&1===e.length&&(e=e[0]),e&&!Array.isArray(e)&&e.tag?(e.data=this._b(e.data||{},e.tag,{class:Object(g["a"])({},this.activeClass,this.isActive)}),e):(Object(b["c"])("v-item should only contain a single element",this),e)):(Object(b["c"])("v-item is missing a default scopedSlot",this),null);var e}}),A=(Object(f["a"])(O,Object(h["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),Object(f["a"])(O,Object(h["a"])("slideGroup")).extend({name:"v-slide-item"})),k=Object(o["a"])(r,s,a,!1,null,null,null);t["default"]=k.exports;l()(k,{VContainer:d["a"],VDivider:u["a"],VResponsive:p["a"],VSlideGroup:v["b"],VSlideItem:A})}}]);