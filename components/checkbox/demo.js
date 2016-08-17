webpackJsonp([37,135],{619:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(50),s(49)),o=t(p),e=s(1),c=t(e),u=s(2);t(u);n.exports={content:[["p","\u7b80\u5355\u7684 checkbox\u3002"]],meta:{order:0,title:"\u57fa\u672c\u7528\u6cd5",filename:"components/checkbox/demo/basic.md",id:"components-checkbox-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Checkbox <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onChange</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token template-string" ><span class="token string" >`checked = </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>e<span class="token punctuation" >.</span>target<span class="token punctuation" >.</span>checked<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Checkbox</span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Checkbox<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Checkbox</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log("checked = "+n.target.checked)}return c["default"].createElement(o["default"],{onChange:n},"Checkbox")}}},620:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(6),s(4)),o=t(p),e=(s(50),s(49)),c=t(e),u=s(1),l=t(u),k=s(2);t(k);n.exports={content:[["p","\u8054\u52a8 checkbox\u3002"]],meta:{order:2,title:"\u548c\u5916\u90e8\u7ec4\u4ef6\u901a\u4fe1",filename:"components/checkbox/demo/controller.md",id:"components-checkbox-demo-controller"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Checkbox<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      checked<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n      disabled<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> label <span class="token operator" >=</span> <span class="token template-string" ><span class="token string" >`</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>checked <span class="token operator" >?</span> <span class="token string" >\'\u9009\u4e2d\'</span> <span class="token punctuation" >:</span> <span class="token string" >\'\u53d6\u6d88\'</span><span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >-</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>disabled <span class="token operator" >?</span> <span class="token string" >\'\u4e0d\u53ef\u7528\'</span> <span class="token punctuation" >:</span> <span class="token string" >\'\u53ef\u7528\'</span><span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginBottom<span class="token punctuation" >:</span> <span class="token string" >\'20px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Checkbox</span> <span class="token attr-name" >checked</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>checked<span class="token punctuation" >}</span></span>\n            <span class="token attr-name" >disabled</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>disabled<span class="token punctuation" >}</span></span>\n            <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onChange<span class="token punctuation" >}</span></span>\n          <span class="token punctuation" >></span></span>\n            <span class="token punctuation" >{</span>label<span class="token punctuation" >}</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Checkbox</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span>\n            <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>toggleChecked<span class="token punctuation" >}</span></span>\n          <span class="token punctuation" >></span></span>\n            <span class="token punctuation" >{</span><span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>checked <span class="token operator" >?</span> <span class="token string" >\'\u9009\u4e2d\'</span> <span class="token punctuation" >:</span> <span class="token string" >\'\u53d6\u6d88\'</span><span class="token punctuation" >}</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginLeft<span class="token punctuation" >:</span> <span class="token string" >\'10px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n            <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span>\n            <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>toggleDisable<span class="token punctuation" >}</span></span>\n          <span class="token punctuation" >></span></span>\n            <span class="token punctuation" >{</span><span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>disabled <span class="token operator" >?</span> <span class="token string" >\'\u4e0d\u53ef\u7528\'</span> <span class="token punctuation" >:</span> <span class="token string" >\'\u53ef\u7528\'</span><span class="token punctuation" >}</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >toggleChecked</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> checked<span class="token punctuation" >:</span> <span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>checked <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >toggleDisable</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> disabled<span class="token punctuation" >:</span> <span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>disabled <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onChange</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'checked = \'</span><span class="token punctuation" >,</span> e<span class="token punctuation" >.</span>target<span class="token punctuation" >.</span>checked<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      checked<span class="token punctuation" >:</span> e<span class="token punctuation" >.</span>target<span class="token punctuation" >.</span>checked<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=l["default"].createClass({displayName:"App",getInitialState:function(){return{checked:!0,disabled:!1}},render:function(){var n=(this.state.checked?"\u9009\u4e2d":"\u53d6\u6d88")+"-"+(this.state.disabled?"\u4e0d\u53ef\u7528":"\u53ef\u7528");return l["default"].createElement("div",null,l["default"].createElement("p",{style:{marginBottom:"20px"}},l["default"].createElement(c["default"],{checked:this.state.checked,disabled:this.state.disabled,onChange:this.onChange},n)),l["default"].createElement("p",null,l["default"].createElement(o["default"],{type:"primary",size:"small",onClick:this.toggleChecked},this.state.checked?"\u53d6\u6d88":"\u9009\u4e2d"),l["default"].createElement(o["default"],{style:{marginLeft:"10px"},type:"primary",size:"small",onClick:this.toggleDisable},this.state.disabled?"\u53ef\u7528":"\u4e0d\u53ef\u7528")))},toggleChecked:function(){this.setState({checked:!this.state.checked})},toggleDisable:function(){this.setState({disabled:!this.state.disabled})},onChange:function(n){console.log("checked = ",n.target.checked),this.setState({checked:n.target.checked})}});return l["default"].createElement(n,null)}}},621:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(50),s(49)),o=t(p),e=s(1),c=t(e),u=s(2);t(u);n.exports={content:[["p","checkbox \u4e0d\u53ef\u7528\u3002"]],meta:{order:1,title:"\u4e0d\u53ef\u7528",filename:"components/checkbox/demo/disable.md",id:"components-checkbox-demo-disable"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Checkbox <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Checkbox</span> <span class="token attr-name" >defaultChecked</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >disabled</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>br</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Checkbox</span> <span class="token attr-name" >defaultChecked</span> <span class="token attr-name" >disabled</span> <span class="token punctuation" >/></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(o["default"],{defaultChecked:!1,disabled:!0}),c["default"].createElement("br",null),c["default"].createElement(o["default"],{defaultChecked:!0,disabled:!0}))}}},622:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(50),s(49)),o=t(p),e=s(1),c=t(e),u=s(2);t(u);n.exports={content:[["p","\u65b9\u4fbf\u7684\u4ece\u6570\u7ec4\u751f\u6210 Checkbox \u7ec4\u3002"]],meta:{order:3,title:"Checkbox \u7ec4",filename:"components/checkbox/demo/group.md",id:"components-checkbox-demo-group"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Checkbox <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> CheckboxGroup <span class="token operator" >=</span> Checkbox<span class="token punctuation" >.</span>Group<span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onChange</span><span class="token punctuation" >(</span>checkedValues<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'checked = \'</span><span class="token punctuation" >,</span> checkedValues<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >const</span> plainOptions <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token string" >\'Apple\'</span><span class="token punctuation" >,</span> <span class="token string" >\'Pear\'</span><span class="token punctuation" >,</span> <span class="token string" >\'Orange\'</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> options <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n  <span class="token punctuation" >{</span> label<span class="token punctuation" >:</span> <span class="token string" >\'\u82f9\u679c\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'Apple\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> label<span class="token punctuation" >:</span> <span class="token string" >\'\u68a8\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'Pear\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> label<span class="token punctuation" >:</span> <span class="token string" >\'\u6a58\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'Orange\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> optionsWithDisabled <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n  <span class="token punctuation" >{</span> label<span class="token punctuation" >:</span> <span class="token string" >\'\u82f9\u679c\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'Apple\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> label<span class="token punctuation" >:</span> <span class="token string" >\'\u68a8\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'Pear\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> label<span class="token punctuation" >:</span> <span class="token string" >\'\u6a58\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'Orange\'</span><span class="token punctuation" >,</span> disabled<span class="token punctuation" >:</span> <span class="token boolean" >false</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>CheckboxGroup</span> <span class="token attr-name" >options</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>plainOptions<span class="token punctuation" >}</span></span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'Apple\'</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>br</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>CheckboxGroup</span> <span class="token attr-name" >options</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>options<span class="token punctuation" >}</span></span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'Pear\'</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>br</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>CheckboxGroup</span> <span class="token attr-name" >options</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>optionsWithDisabled<span class="token punctuation" >}</span></span> <span class="token attr-name" >disabled</span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'Apple\'</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log("checked = ",n)}var a=o["default"].Group,s=["Apple","Pear","Orange"],t=[{label:"\u82f9\u679c",value:"Apple"},{label:"\u68a8",value:"Pear"},{label:"\u6a58",value:"Orange"}],p=[{label:"\u82f9\u679c",value:"Apple"},{label:"\u68a8",value:"Pear"},{label:"\u6a58",value:"Orange",disabled:!1}];return c["default"].createElement("div",null,c["default"].createElement(a,{options:s,defaultValue:["Apple"],onChange:n}),c["default"].createElement("br",null),c["default"].createElement(a,{options:t,defaultValue:["Pear"],onChange:n}),c["default"].createElement("br",null),c["default"].createElement(a,{options:p,disabled:!0,defaultValue:["Apple"],onChange:n}))}}},1004:function(n,a,s){n.exports={basic:s(619),controller:s(620),disable:s(621),group:s(622)}}});