(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{145:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},146:function(t,e,n){var r=n(17),a="["+n(145)+"]",o=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),i=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:i(1),end:i(2),trim:i(3)}},147:function(t,e,n){"use strict";var r=n(1),a=n(146).trim;r({target:"String",proto:!0,forced:n(148)("trim")},{trim:function(){return a(this)}})},148:function(t,e,n){var r=n(3),a=n(145);t.exports=function(t){return r((function(){return!!a[t]()||"​᠎"!="​᠎"[t]()||a[t].name!==t}))}},151:function(t,e,n){"use strict";var r=n(7),a=n(4),o=n(65),s=n(14),i=n(5),c=n(20),l=n(103),u=n(32),f=n(3),d=n(21),p=n(43).f,v=n(19).f,g=n(8).f,h=n(146).trim,m=a.Number,_=m.prototype,C="Number"==c(d(_)),w=function(t){var e,n,r,a,o,s,i,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(43===(e=(l=h(l)).charCodeAt(0))||45===e){if(88===(n=l.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+l}for(s=(o=l.slice(2)).length,i=0;i<s;i++)if((c=o.charCodeAt(i))<48||c>a)return NaN;return parseInt(o,r)}return+l};if(o("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var b,N=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof N&&(C?f((function(){_.valueOf.call(n)})):"Number"!=c(n))?l(new m(w(e)),n,N):w(e)},x=r?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;x.length>E;E++)i(m,b=x[E])&&!i(N,b)&&g(N,b,v(m,b));N.prototype=_,_.constructor=N,s(a,"Number",N)}},155:function(t,e,n){},156:function(t,e,n){},165:function(t,e,n){"use strict";var r=n(1),a=n(3),o=n(45),s=n(6),i=n(15),c=n(13),l=n(66),u=n(101),f=n(44),d=n(2),p=n(104),v=d("isConcatSpreadable"),g=p>=51||!a((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),h=f("concat"),m=function(t){if(!s(t))return!1;var e=t[v];return void 0!==e?!!e:o(t)};r({target:"Array",proto:!0,forced:!g||!h},{concat:function(t){var e,n,r,a,o,s=i(this),f=u(s,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?s:arguments[e],m(o)){if(d+(a=c(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<a;n++,d++)n in o&&l(f,d,o[n])}else{if(d>=9007199254740991)throw TypeError("Maximum allowed index exceeded");l(f,d++,o)}return f.length=d,f}})},170:function(t,e,n){"use strict";var r=n(155);n.n(r).a},171:function(t,e,n){"use strict";var r=n(156);n.n(r).a},182:function(t,e,n){"use strict";n(165),n(63),n(105),n(151),n(67),n(64);var r=n(34),a=function(t){var e=Object.keys(t),n=!0;return e.forEach((function(t){["span","offset"].includes(t)||(n=!1)})),n},o={name:"GuluCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:a},narrowPc:{type:Object,validator:a},pc:{type:Object,validator:a},widePc:{type:Object,validator:a}},data:function(){return{gutter:0}},methods:{createClasses:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var n=[];return t.span&&n.push("col-".concat(e).concat(t.span)),t.offset&&n.push("offset-".concat(e).concat(t.offset)),n}},computed:{colClass:function(){var t=this.span,e=this.offset,n=this.ipad,a=this.narrowPc,o=this.pc,s=this.widePc,i=this.createClasses;return[].concat(Object(r.a)(i({span:t,offset:e})),Object(r.a)(i(n,"ipad-")),Object(r.a)(i(a,"narrow-pc-")),Object(r.a)(i(o,"pc-")),Object(r.a)(i(s,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},s=(n(171),n(30)),i=Object(s.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)}),[],!1,null,"aef03e4a",null);e.a=i.exports},183:function(t,e,n){"use strict";n(63),n(100),n(151),n(64);var r={name:"GuluRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach((function(e){e.gutter=t.gutter}))}},a=(n(170),n(30)),o=Object(a.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"ea5390d8",null);e.a=o.exports},212:function(t,e,n){},314:function(t,e,n){"use strict";var r=n(212);n.n(r).a},345:function(t,e,n){"use strict";n.r(e);n(31),n(42),n(147);var r=n(183),a=n(182),o={components:{GRow:r.a,GCol:a.a},data:function(){return{content:'\n      * {\n        box-sizing: border-box;\n      }\n      <g-row class="demoRow" gutter="10">\n        <g-col span="8">\n          <div class="demoCol">8</div>\n        </g-col>\n        <g-col span="8">\n          <div class="demoCol">8</div>\n        </g-col>\n        <g-col span="8">\n          <div class="demoCol">8</div>\n        </g-col>\n      </g-row>\n      <g-row class="demoRow" gutter="10">\n        <g-col span="6">\n          <div class="demoCol">6</div>\n        </g-col>\n        <g-col span="6">\n          <div class="demoCol">6</div>\n        </g-col>\n        <g-col span="6">\n          <div class="demoCol">6</div>\n        </g-col>\n        <g-col span="6">\n          <div class="demoCol">6</div>\n        </g-col>\n      </g-row>\n  '.replace(/^ {8}/gm,"").trim()}}},s=(n(314),n(30)),i=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-top":"16px"}},[n("h2",[t._v("设置 gutter")]),t._v(" "),t._m(0),t._v(" "),n("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("g-col",{attrs:{span:"8"}},[n("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),n("g-col",{attrs:{span:"8"}},[n("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),n("g-col",{attrs:{span:"8"}},[n("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),n("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("g-col",{attrs:{span:"6"}},[n("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),n("g-col",{attrs:{span:"6"}},[n("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),n("g-col",{attrs:{span:"6"}},[n("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),n("g-col",{attrs:{span:"6"}},[n("div",{staticClass:"demoCol"},[t._v("6")])])],1),t._v(" "),t._m(1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content))])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("代码")])])}],!1,null,"12ba8c35",null);e.default=i.exports}}]);