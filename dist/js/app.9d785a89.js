(function(t){function e(e){for(var r,c,s=e[0],i=e[1],l=e[2],u=0,m=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&m.push(n[c][0]),n[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,s=1;s<a.length;s++){var i=a[s];0!==n[i]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},o=[];function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=i;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"row no-gutters"},[a("label",{staticClass:"btn",attrs:{for:"ckb"}},[t._v("=")]),a("input",{staticClass:"checkbox",attrs:{type:"checkbox",id:"ckb"}}),a("div",{staticClass:"sidebar"},[a("div",{staticClass:"toolbox"},[a("div",{staticClass:"sticky-top shadow-sm"},[a("div",{staticClass:"form-group d-flex"},[a("label",{staticClass:"mr-2 col-form-label text-right",attrs:{for:"cityName"}},[t._v("縣市")]),a("div",{staticClass:"flex-fill"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.select.city,expression:"select.city"}],staticClass:"form-control",attrs:{id:"cityName"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.select,"city",e.target.multiple?a:a[0])},function(e){t.updateSelect(),t.removeMarker(),t.updateMap()}]}},[a("option",{staticStyle:{"background-color":"#888",color:"#aaa"},attrs:{value:"",selected:""}},[t._v(t._s(t.select.city))]),t._l(t.cityName,(function(e){return a("option",{key:e.CityName,domProps:{value:e.CityName}},[t._v(t._s(e.CityName))])}))],2)])]),a("div",{staticClass:"form-group d-flex"},[a("label",{staticClass:"mr-2 col-form-label text-right",attrs:{for:"area"}},[t._v("地區")]),a("div",{staticClass:"flex-fill"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.select.area,expression:"select.area"}],staticClass:"form-control",attrs:{id:"area"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.select,"area",e.target.multiple?a:a[0])},function(e){t.removeMarker(),t.updateMap()}]}},[a("option",{staticStyle:{"background-color":"#888",color:"#aaa"},attrs:{selected:""}},[t._v(t._s(t.select.area))]),t._l(t.AreaList,(function(e){return a("option",{key:e.AreaName,domProps:{value:e.AreaName}},[t._v(t._s(e.AreaName))])}))],2)])])]),a("ul",{staticClass:"list-group"},[t._l(t.pharmacies,(function(e,r){return[a("a",{key:r,staticClass:"list-group-item text-left",on:{click:function(a){return t.penTo(e)}}},[a("h3",[t._v(t._s(e.properties.name))]),a("p",{staticClass:"mb-0"},[t._v("成人口罩："+t._s(e.properties.mask_adult)+" | 兒童口罩："+t._s(e.properties.mask_child))]),a("p",{staticClass:"mb-0"},[t._v(" 地址： "),a("a",{attrs:{href:"https://www.google.com.tw/maps/place/"+e.properties.address,target:"_blank",title:"Google Map"}},[t._v(t._s(e.properties.address))])])])]}))],2)])]),t._m(0)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"map-zone"},[a("div",{attrs:{id:"map"}})])}],c=(a("99af"),a("4de4"),a("7db0"),a("4160"),a("d81d"),a("b0c0"),a("159b"),a("5530")),s=a("bc3a"),i=a.n(s),l=a("e11e"),p=a.n(l),u={},m={iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]},d={green:new p.a.Icon(Object(c["a"])({iconUrl:"https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png"},m)),grey:new p.a.Icon(Object(c["a"])({iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png"},m))},f={addMapMarker:function(t,e,a){var r=a.mask_adult||a.mask_child?d.green:d.grey;p.a.marker([e,t],{icon:r}).addTo(u).bindPopup("<strong>".concat(a.name,"<br/>\n                口罩:成人--").concat(a.mask_adult," /兒童--").concat(a.mask_child,'<br/>\n                地址:<a href="https://www.google.com.tw/maps/place/').concat(a.name,"/@").concat(e,",").concat(t,',20z" target="_blank">').concat(a.address,"</a></br>\n                電話:").concat(a.phone,"</br>\n                </strong>\n                <small>更新時間:").concat(a.updated,"</small>"))},removeMapMarker:function(){u.eachLayer((function(t){t instanceof p.a.Marker&&u.removeLayer(t)}))},penTo:function(t,e,a){var r=a.mask_adult||a.mask_child?d.green:d.grey;u.panTo(new p.a.LatLng(e,t)),p.a.marker([e,t],{icon:r}).addTo(u).bindPopup("<strong>".concat(a.name,"<br/>\n                口罩:成人--").concat(a.mask_adult," /兒童--").concat(a.mask_child,'<br/>\n                地址:<a href="https://www.google.com.tw/maps/place/').concat(a.name,"/@").concat(e,",").concat(t,',20z" target="_blank">').concat(a.address,"</a></br>\n                電話:").concat(a.phone,"</br>\n                </strong>\n                <small>更新時間:").concat(a.updated,"</small>")).openPopup()}},h={name:"App",data:function(){return{data:{},cityName:[],AreaList:[],select:{city:"臺北市",area:"大安區"},pharmacies:{}}},mounted:function(){var t=this;i.a.get("https://raw.githubusercontent.com/donma/TaiwanAddressCityAreaRoadChineseEnglishJSON/master/CityCountyData.json").then((function(e){t.cityName=e.data,t.AreaList=t.cityName.find((function(e){return e.CityName===t.select.city})).AreaList})),i.a.get("https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json").then((function(e){t.data=e.data.features,t.updateMap()})),u=p.a.map("map",{center:[25.03,121.55],zoom:15}),p.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"your.mapbox.access.token"}).addTo(u)},methods:{removeMarker:function(){f.removeMapMarker()},updateMap:function(){var t=this;this.pharmacies=this.data.filter((function(e){return t.select.area?e.properties.town===t.select.area:e.properties.county===t.select.city})),this.pharmacies.forEach((function(t){var e=t.properties,a=t.geometry;f.addMapMarker(a.coordinates[0],a.coordinates[1],e)})),this.penTo(this.pharmacies[0])},updateSelect:function(){var t=this;this.select.area="",this.AreaList=this.cityName.find((function(e){return e.CityName===t.select.city})).AreaList},penTo:function(t){var e=t.properties,a=t.geometry;f.penTo(a.coordinates[0],a.coordinates[1],e)}}},v=h,g=(a("5c0b"),a("2877")),b=Object(g["a"])(v,n,o,!1,null,null,null),y=b.exports,_=a("a7fe"),k=a.n(_);r["a"].config.productionTip=!1,r["a"].use(i.a,k.a),new r["a"]({render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var r=a("9c0c"),n=a.n(r);n.a},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.9d785a89.js.map