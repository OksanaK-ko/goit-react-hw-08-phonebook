(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[7],{102:function(e,t,a){"use strict";a.r(t);var n=a(4),s=a(33),l=a(34),r=a(36),i=a(35),o=a(0),c=a(9),h=a(8),b=a(88),u=a(1),m={form:{width:320,margin:"auto"},header:{textAlign:"center"},label:{display:"flex",flexDirection:"column",marginBottom:15}},p=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var l=arguments.length,r=new Array(l),i=0;i<l;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",password:""},e.handleChange=function(t){var a=t.target,s=a.name,l=a.value;e.setState(Object(n.a)({},s,l))},e.handleSubmit=function(t){t.preventDefault(),e.props.onRegister(e.state),e.setState({name:"",email:"",password:""})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.password;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{style:m.header,children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(u.jsxs)("form",{onSubmit:this.handleSubmit,style:m.form,autoComplete:"off",children:[Object(u.jsxs)("label",{style:m.label,children:["\u0418\u043c\u044f",Object(u.jsx)("input",{type:"text",name:"name",value:t,onChange:this.handleChange})]}),Object(u.jsxs)("label",{style:m.label,children:["\u041f\u043e\u0447\u0442\u0430",Object(u.jsx)("input",{type:"email",name:"email",value:a,onChange:this.handleChange})]}),Object(u.jsxs)("label",{style:m.label,children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(u.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange})]}),Object(u.jsx)(b.a,{variant:"secondary",size:"sm",block:!0,type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})}}]),a}(o.Component),d={onRegister:h.a.register};t.default=Object(c.b)(null,d)(p)}}]);
//# sourceMappingURL=7.ab90137a.chunk.js.map