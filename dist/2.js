(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{14:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("i am bar "+this._s(this.item))])};s._withStripped=!0;var a={asyncData:({store:t,route:e})=>(console.log(e.params.id),t.dispatch("fetchItem",e.params.id)),computed:{item(){let t=this.$route.params.id||999;return this.$store.state.items[t]}},beforeRouteEnter(t,e,i){i(e=>{e.id=t.params.id})},beforeRouteUpdate(t,e,i){this.id=t.params.id,i()}},r=i(3),o=Object(r.a)(a,s,[],!1,null,null,null);o.options.__file="component/Bar.vue";e.default=o.exports}}]);