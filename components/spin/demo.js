webpackJsonp([26,135],{782:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(131),s(130)),e=t(p),o=s(1),c=t(o),u=s(2);t(u);n.exports={content:[["p","\u4e00\u4e2a\u7b80\u5355\u7684 loading \u72b6\u6001\u3002"]],meta:{order:0,title:"\u57fa\u672c\u7528\u6cd5",filename:"components/spin/demo/basic.md",id:"components-spin-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement(e["default"],null)}}},783:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(131),s(130)),e=t(p),o=s(1),c=t(o),u=s(2);t(u);n.exports={content:[["p","\u653e\u5165\u4e00\u4e2a\u5bb9\u5668\u4e2d\u3002"]],meta:{order:2,title:"\u5bb9\u5668",filename:"components/spin/demo/inside.md",id:"components-spin-demo-inside"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",{className:"example"},c["default"].createElement(e["default"],null))},style:".example {\n  text-align: center;\n  background: rgba(0,0,0,0.05);\n  border-radius: 4px;\n  margin-bottom: 20px;\n  padding: 30px 50px;\n  margin: 20px 0;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.example</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >text-align</span><span class="token punctuation" >:</span> center<span class="token punctuation" >;</span>\n  <span class="token property" >background</span><span class="token punctuation" >:</span> <span class="token function" >rgba</span><span class="token punctuation" >(</span><span class="token number" >0</span>,<span class="token number" >0</span>,<span class="token number" >0</span>,<span class="token number" >0.05</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token property" >border-radius</span><span class="token punctuation" >:</span> <span class="token number" >4</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >margin-bottom</span><span class="token punctuation" >:</span> <span class="token number" >20</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >padding</span><span class="token punctuation" >:</span> <span class="token number" >30</span>px <span class="token number" >50</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >margin</span><span class="token punctuation" >:</span> <span class="token number" >20</span>px <span class="token number" >0</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},784:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(78),s(77)),e=t(p),o=(s(131),s(130)),c=t(o),u=(s(90),s(89)),l=t(u),i=s(1),k=t(i),r=s(2);t(r);n.exports={content:[["p","\u53ef\u4ee5\u76f4\u63a5\u628a\u5185\u5bb9\u5185\u5d4c\u5230 ",["code","Spin"]," \u4e2d\uff0c\u5c06\u73b0\u6709\u5bb9\u5668\u53d8\u4e3a\u52a0\u8f7d\u72b6\u6001\u3002"]],meta:{order:3,title:"\u5361\u7247\u52a0\u8f7d\u4e2d",filename:"components/spin/demo/nested.md",id:"components-spin-demo-nested"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin<span class="token punctuation" >,</span> Switch<span class="token punctuation" >,</span> Alert <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Card <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span> loading<span class="token punctuation" >:</span> <span class="token boolean" >false</span> <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >toggle</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> loading<span class="token punctuation" >:</span> value <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> container <span class="token operator" >=</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6d88\u606f\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation" >"</span></span>\n        <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd<span class="token punctuation" >"</span></span>\n        <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>info<span class="token punctuation" >"</span></span>\n      <span class="token punctuation" >/></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token attr-name" >spinning</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>loading<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>container<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Spin</span><span class="token punctuation" >></span></span>\n        \u5207\u6362\u52a0\u8f7d\u72b6\u6001\uff1a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Switch</span> <span class="token attr-name" >checked</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>loading<span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>toggle<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=k["default"].createClass({displayName:"Card",getInitialState:function(){return{loading:!1}},toggle:function(n){this.setState({loading:n})},render:function(){var n=k["default"].createElement(l["default"],{message:"\u6d88\u606f\u63d0\u793a\u7684\u6587\u6848",description:"\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd",type:"info"});return k["default"].createElement("div",null,k["default"].createElement(c["default"],{spinning:this.state.loading},n),"\u5207\u6362\u52a0\u8f7d\u72b6\u6001\uff1a",k["default"].createElement(e["default"],{checked:this.state.loading,onChange:this.toggle}))}});return k["default"].createElement(n,null)}}},785:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(131),s(130)),e=t(p),o=s(1),c=t(o),u=s(2);t(u);n.exports={content:[["p","\u5c0f\u7684\u7528\u4e8e\u6587\u672c\u52a0\u8f7d\uff0c\u9ed8\u8ba4\u7528\u4e8e\u5361\u7247\u5bb9\u5668\u7ea7\u52a0\u8f7d\uff0c\u5927\u7684\u7528\u4e8e",["strong","\u9875\u9762\u7ea7"],"\u52a0\u8f7d\u3002"]],meta:{order:1,title:"\u5404\u79cd\u5927\u5c0f",filename:"components/spin/demo/size.md",id:"components-spin-demo-size"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>large<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(e["default"],{size:"small"}),c["default"].createElement(e["default"],null),c["default"].createElement(e["default"],{size:"large"}))},style:"\n.ant-spin {\n  margin-right: 16px;\n}\n"}},786:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(131),s(130)),e=t(p),o=(s(90),s(89)),c=t(o),u=s(1),l=t(u),i=s(2);t(i);n.exports={content:[["p","\u81ea\u5b9a\u4e49\u63cf\u8ff0\u6587\u6848\uff0c\u6307\u5b9a\u7684 tip \u6587\u6848\u4f1a\u76f4\u63a5\u4ee3\u66ff ",["code","..."],"\u3002"]],meta:{order:4,title:"\u81ea\u5b9a\u4e49\u63cf\u8ff0\u6587\u6848",filename:"components/spin/demo/tip.md",id:"components-spin-demo-tip"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin<span class="token punctuation" >,</span> Alert <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token attr-name" >tip</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b63\u5728\u8bfb\u53d6\u6570\u636e...<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6d88\u606f\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>info<span class="token punctuation" >"</span></span>\n    <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Spin</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return l["default"].createElement(e["default"],{tip:"\u6b63\u5728\u8bfb\u53d6\u6570\u636e..."},l["default"].createElement(c["default"],{message:"\u6d88\u606f\u63d0\u793a\u7684\u6587\u6848",description:"\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd",type:"info"}))}}},1026:function(n,a,s){n.exports={basic:s(782),inside:s(783),nested:s(784),size:s(785),tip:s(786)}}});