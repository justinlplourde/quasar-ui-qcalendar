(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d21b8b9"],{bfdc:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-expansion-item",{attrs:{group:"someGroup",caption:"Code"}},[a("q-card",[a("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"left","narrow-indicator":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab",{attrs:{name:"template",label:"Template"}}),a("q-tab",{attrs:{name:"script",label:"Script"}})],1),a("q-separator"),a("q-tab-panels",{attrs:{animated:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab-panel",{attrs:{name:"template"}},[a("q-markdown",{attrs:{src:e.template}})],1),a("q-tab-panel",{attrs:{name:"script"}},[a("q-markdown",{attrs:{src:e.script}})],1)],1)],1)],1),a("q-separator"),a("q-calendar",{staticStyle:{height:"400px"},attrs:{weekdays:[1,2,3,4,5,6,0],view:"week",locale:"en-us"},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1)},l=[],r='```\n<template>\n  <q-calendar\n    v-model="selectedDate"\n    :weekdays="[1, 2, 3, 4, 5, 6, 0]"\n    view="week"\n    locale="en-us"\n    style="height: 400px;"\n  />\n</template>\n```',s="```\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: '2019-04-01'\n    }\n  }\n}\n<\/script>\n```",c={name:"WeekViewDefault",data:function(){return{tab:"template",selectedDate:"2019-04-01",template:r,script:s}}},i=c,o=a("2877"),p=Object(o["a"])(i,n,l,!1,null,null,null);t["default"]=p.exports}}]);