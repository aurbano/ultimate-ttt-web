webpackJsonp([2],{1110:function(e,t,n){"use strict";function r(e){return{actions:n.i(o.a)(s,e)}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(167),o=n(114),i=n(1148),l=n(1144),s=n(538),c=l.a;t.default=n.i(a.b)(c,r)(i.a)},1144:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(536),a=(n.n(r),function(e){return e.get("tournaments")}),o=n.i(r.createSelector)([a],function(e){return e.toJS()})},1148:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),l=n.n(i),s=n(69),c=n.n(s),u=n(280),p=n(1170),f=(n.n(p),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),d=function(e){function t(){var e,n,o,i;r(this,t);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.getParameterByName=function(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),r=n.exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null},i=n,a(o,i)}return o(t,e),f(t,[{key:"getCell",value:function(e,t,n){if(e===t||!this.props.players[e][t])return l.a.createElement(u.d.Cell,{disabled:!0,style:{background:"#efefef"},key:n},"-");var r=this.props.players[e][t];return r.finished?l.a.createElement(u.d.Cell,{key:n,positive:0===r.stats.winner,negative:1===r.stats.winner},"W ",r.stats.winPercentages[0]," - T ",r.stats.tiePercentage):l.a.createElement(u.d.Cell,{key:n},l.a.createElement(u.e,{active:r.started&&!r.finished,inline:!0,size:"small"}))}},{key:"render",value:function(){var e=this,t=this.props.started?"Tournament":"Waiting for Tournament to start...";return l.a.createElement(u.a,null,l.a.createElement("h1",null,t),l.a.createElement(u.f,{loading:!this.props.started},l.a.createElement(u.d,{definition:!0,celled:!0,striped:!0,textAlign:"center"},l.a.createElement(u.d.Header,null,l.a.createElement(u.d.Row,null,l.a.createElement(u.d.HeaderCell,null),Object.keys(this.props.players).map(function(e,t){return l.a.createElement(u.d.HeaderCell,{key:t},e)}))),l.a.createElement(u.d.Body,null,Object.keys(this.props.players).map(function(t,n){return l.a.createElement(u.d.Row,{key:n},l.a.createElement(u.d.Cell,{key:"head-cell-"+n},t),Object.keys(e.props.players).map(function(n,r){return e.getCell(t,n,"cell-"+r)}))})))))}}]),t}(l.a.Component);d.propTypes={players:c.a.object.isRequired,started:c.a.bool.isRequired},t.a=d},1159:function(e,t,n){t=e.exports=n(1107)(!0),t.push([e.i,".round,main{display:-ms-flexbox;display:flex}.round{-ms-flex-direction:column;flex-direction:column;width:200px;list-style:none;padding:0;margin-right:50px}","",{version:3,sources:["/Users/alex/proyects/socialgorithm/ultimate-ttt-web/src/sections/Tournaments/index.css"],names:[],mappings:"AAAA,YACI,oBAAoB,AACpB,YAAa,CAChB,AAED,OACI,0BAA0B,AACtB,sBAAsB,AAC1B,YAAa,AACb,gBAAgB,AAChB,UAAU,AACV,iBAAmB,CACtB",file:"index.css",sourcesContent:["main, .round {\n    display:-ms-flexbox;\n    display:flex;\n}\n\n.round {\n    -ms-flex-direction:column;\n        flex-direction:column;\n    width: 200px;\n    list-style:none;\n    padding:0;\n    margin-right: 50px;\n}"],sourceRoot:""}])},1170:function(e,t,n){var r=n(1159);"string"===typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0;n(1108)(r,a);r.locals&&(e.exports=r.locals)}});
//# sourceMappingURL=2.ff0db274.chunk.js.map