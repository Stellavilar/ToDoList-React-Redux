(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{71:function(t,e,n){},80:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(8),i=n.n(r),o=(n(71),n(51)),s=n(31),u=n(60),j=n.n(u),l=n(61),d=n.n(l),b=n(59),O=n.n(b),h=n(118),p="ADD_TODO",v="DELETE_TODO",m="UPDATE_TODO";var f=n(15),x=n(6);var g=function(t){var e=t.todo,n=Object(f.b)(),c=Object(a.useState)(!1),r=Object(s.a)(c,2),i=r[0],u=r[1],l=Object(a.useState)(e.name),b=Object(s.a)(l,2),p=b[0],g=b[1];return Object(x.jsxs)("div",{className:"list",children:[Object(x.jsx)("div",{className:"title-list",children:i?Object(x.jsx)("input",{type:"text",value:p,onChange:function(t){return g(t.target.value)}}):Object(x.jsx)("div",{className:"item",children:e.name})}),Object(x.jsxs)("div",{className:"icons",children:[Object(x.jsx)(h.a,{onClick:function(){n(function(t){return{type:m,payload:t}}(Object(o.a)(Object(o.a)({},e),{},{name:p}))),i&&g(e.name),u(!i)},children:i?Object(x.jsx)(O.a,{}):Object(x.jsx)(j.a,{})}),Object(x.jsx)(h.a,{onClick:function(){return n((t=e.id,{type:v,payload:t}));var t},children:Object(x.jsx)(d.a,{})})]})]})};var y=function(){var t=Object(f.c)((function(t){return t}));return Object(x.jsx)("div",{className:"items",children:t?t.map((function(t){return Object(x.jsx)(g,{todo:t},t.id)})):null})},D=n(117),C=n(116),N=n(119),T=Object(C.a)((function(t){return{form:{width:"70%",margin:"auto",padding:"20px"},input:{backgroundColor:"white"}}}));var S=function(){var t=T(),e=Object(f.b)(),n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1];return Object(x.jsx)("div",{className:"input-part",children:Object(x.jsx)("form",{className:t.form,onSubmit:function(t){var n;t.preventDefault(),e((n={id:Object(N.a)(),name:r},{type:p,payload:n})),i("")},children:Object(x.jsx)(D.a,{className:t.input,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"todo",placeholder:"Ajouter une t\xe2che",name:"todo",autoComplete:"todo",autoFocus:!0,value:r,onChange:function(t){return i(t.target.value)}})})})};var k=function(){return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{children:"To Do List App"}),Object(x.jsx)(S,{}),Object(x.jsx)(y,{})]})},w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,121)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))},E=n(37),F=n(42),A=[],L=Object(E.b)((function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p:return(t=Object(F.a)(e)).push(n.payload),t;case v:return t=(t=Object(F.a)(e)).filter((function(t){return t.id!==n.payload}));case m:t=Object(F.a)(e);for(var a=-1,c=0;c<t.length&&(a++,t[c].id!==n.payload.id);c++);return-1!==a?(t[a]=n.payload,t):e}}));i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(f.a,{store:L,children:Object(x.jsx)(k,{})})}),document.getElementById("root")),w()}},[[80,1,2]]]);
//# sourceMappingURL=main.413cd5a4.chunk.js.map