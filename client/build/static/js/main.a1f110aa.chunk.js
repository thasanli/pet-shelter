(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t){},105:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),c=n(42),u=n.n(c),r=(n(50),n(51),n(1)),o=n(4),i=n.n(o),m=n(2),s=function(e){var t=Object(l.useState)(null),n=Object(r.a)(t,2),c=n[0],u=n[1],o=Object(l.useState)(null),s=Object(r.a)(o,2),p=s[0],E=s[1],d=Object(l.useState)(null),b=Object(r.a)(d,2),h=b[0],f=b[1],g=Object(l.useState)(null),v=Object(r.a)(g,2),j=v[0],k=v[1],O=Object(l.useState)(null),S=Object(r.a)(O,2),y=S[0],C=S[1],x=Object(l.useState)(null),P=Object(r.a)(x,2),w=P[0],D=P[1],_=Object(l.useState)(null),A=Object(r.a)(_,2),N=A[0],T=A[1];return a.a.createElement("div",null,a.a.createElement(m.a,{to:"/"}," back to home "),a.a.createElement("h1",null,"Pet Shelter"),a.a.createElement("p",null,"Know a pet needing a home? "),a.a.createElement("form",{onSubmit:function(e){return function(e){console.log("test"),e.preventDefault(),i.a.post("http://localhost:8000/api/pet/",{name:c,type:p,description:h,skill1:j,skill2:y,skill3:w}).then((function(e){null==e.data.message&&Object(m.c)("/"),console.log(e.data.message),T(e.data.message)})).catch((function(e){console.log(e.json().message)}))}(e)}},a.a.createElement("p",{style:{color:"red"}},N),a.a.createElement("div",null,a.a.createElement("label",null," Pet Name: "),a.a.createElement("input",{type:"text",onChange:function(e){return u(e.target.value)}}),a.a.createElement("p",null)),a.a.createElement("div",null,a.a.createElement("label",null," Pet Type: "),a.a.createElement("input",{type:"text",onChange:function(e){return E(e.target.value)}}),a.a.createElement("p",null)),a.a.createElement("div",null,a.a.createElement("label",null," Pet Description: "),a.a.createElement("input",{type:"text",onChange:function(e){return f(e.target.value)}}),a.a.createElement("p",null)),a.a.createElement("p",null,"Skills (optional) "),a.a.createElement("div",null,a.a.createElement("label",null," Skill 1: "),a.a.createElement("input",{type:"text",onChange:function(e){return k(e.target.value)}})),a.a.createElement("div",null,a.a.createElement("label",null," Skill 2: "),a.a.createElement("input",{type:"text",onChange:function(e){return C(e.target.value)}})),a.a.createElement("div",null,a.a.createElement("label",null," Skill 3: "),a.a.createElement("input",{type:"text",onChange:function(e){return D(e.target.value)}})),a.a.createElement("button",null,"Add Pet")))},p=function(e){var t=Object(l.useState)(null),n=Object(r.a)(t,2),c=n[0],u=n[1];Object(l.useEffect)((function(e){i.a.get("http://localhost:8000/api/pet").then((function(e){u(e.data)})).catch((function(e){}))}));return null==c?"loading...":a.a.createElement("div",null,a.a.createElement(m.a,{to:"/pets/new"}," add a pet to the shelter"),a.a.createElement("h1",null,"Pet Shelter"),a.a.createElement("p",null,"These pets are looking for a good home"),a.a.createElement("table",{style:{margin:"0 auto"}},a.a.createElement("thead",null,a.a.createElement("td",null,"Name"),a.a.createElement("td",null,"Type"),a.a.createElement("td",null,"Actions")),c.sort((function(e,t){return e.type>t.type?1:-1})).map((function(e){return a.a.createElement("tbody",{key:e._id},a.a.createElement("td",null,e.name),a.a.createElement("td",null,e.type),a.a.createElement("td",null,a.a.createElement(m.a,{to:"/pets/".concat(e._id)},"details"),"|",a.a.createElement(m.a,{to:"/pets/".concat(e._id,"/edit")},"edit")))}))))},E=function(e){var t=Object(l.useState)(null),n=Object(r.a)(t,2),c=n[0],u=n[1];return Object(l.useEffect)((function(){i.a.get("http://localhost:8000/api/pet/".concat(e.id)).then((function(e){u(e.data)})).catch((function(e){console.log(e)}))}),[]),null==c?"loading...":a.a.createElement("div",null,a.a.createElement(m.a,{to:"/"}," back to home "),a.a.createElement("br",null),a.a.createElement("button",{onClick:function(e){return function(e){i.a.delete("http://localhost:8000/api/pet/".concat(e)).then((function(e){console.log(e),Object(m.c)("/")})).catch((function(e){console.log(e)}))}(c._id)}}," Adopt ",c.name),a.a.createElement("h1",null,"Pet Shelter"),a.a.createElement("p",null,"Details about: ",c.name),a.a.createElement("div",null,a.a.createElement("p",null,"Pet type: ",c.type," "),a.a.createElement("p",null,"Description: ",c.description),a.a.createElement("p",null,"Skills: ",a.a.createElement("br",null)," ",c.skill1," ",a.a.createElement("br",null)," ",c.skill2," ",a.a.createElement("br",null),c.skill3," ")),a.a.createElement("button",{onClick:function(){var e=c;e.like++;var t=e.like;console.log(t),i.a.put("http://localhost:8000/api/pet/".concat(e._id),{like:t}).then((function(e){u(e.data)})).catch((function(e){console.log(e.response)}))}}," Like ",c.name," ")," ",a.a.createElement("br",null),a.a.createElement("span",null,a.a.createElement("br",null)," ",c.like,"  like(s)"))},d=function(e){var t=Object(l.useState)(null),n=Object(r.a)(t,2),c=n[0],u=n[1],o=Object(l.useState)(null),s=Object(r.a)(o,2),p=s[0],E=s[1],d=Object(l.useState)(null),b=Object(r.a)(d,2),h=b[0],f=b[1],g=Object(l.useState)(null),v=Object(r.a)(g,2),j=v[0],k=v[1],O=Object(l.useState)(null),S=Object(r.a)(O,2),y=S[0],C=S[1],x=Object(l.useState)(null),P=Object(r.a)(x,2),w=P[0],D=P[1],_=Object(l.useState)(null),A=Object(r.a)(_,2),N=A[0],T=A[1];return Object(l.useEffect)((function(){i.a.get("http://localhost:8000/api/pet/".concat(e.id)).then((function(e){u(e.data.name),E(e.data.type),f(e.data.description),k(e.data.skill1),C(e.data.skill2),D(e.data.skill3)})).catch((function(e){console.log(e)}))}),[]),a.a.createElement("div",null,a.a.createElement(m.a,{to:"/"}," back to home "),a.a.createElement("h1",null,"Pet Shelter"),a.a.createElement("p",null,"Edit "),a.a.createElement("p",null,N),a.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault(),i.a.put("http://localhost:8000/api/pet/".concat(e.id),{type:p,description:h,skill1:j,skill2:y,skill3:w},{runValidators:!0}).then((function(e){null==e.data.message&&Object(m.c)("/"),T(e.data.message)})).catch((function(e){console.log(e.json().message)}))}(t)}},a.a.createElement("div",null,a.a.createElement("label",null," Pet Name: "),a.a.createElement("input",{type:"text",value:c,onChange:function(e){return u(e.target.value)}}),a.a.createElement("p",null)),a.a.createElement("div",null,a.a.createElement("label",null," Pet Type: "),a.a.createElement("input",{type:"text",value:p,onChange:function(e){return E(e.target.value)}}),a.a.createElement("p",null)),a.a.createElement("div",null,a.a.createElement("label",null," Pet Description: "),a.a.createElement("input",{type:"text",value:h,onChange:function(e){return f(e.target.value)}}),a.a.createElement("p",null)),a.a.createElement("p",null,"Skills (optional) "),a.a.createElement("div",null,a.a.createElement("label",null," Skill 1: "),a.a.createElement("input",{type:"text",value:j,onChange:function(e){return k(e.target.value)}})),a.a.createElement("div",null,a.a.createElement("label",null," Skill 2: "),a.a.createElement("input",{type:"text",value:y,onChange:function(e){return C(e.target.value)}})),a.a.createElement("div",null,a.a.createElement("label",null," Skill 3: "),a.a.createElement("input",{type:"text",value:w,onChange:function(e){return D(e.target.value)}})),a.a.createElement("button",null,"Edit")))},b=n(44);n.n(b)()(":8000");var h=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(m.b,null,a.a.createElement(p,{path:"/"}),a.a.createElement(s,{path:"/pets/new"}),a.a.createElement(E,{path:"/pets/:id"}),a.a.createElement(d,{path:"/pets/:id/edit"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},45:function(e,t,n){e.exports=n(105)},50:function(e,t,n){},51:function(e,t,n){}},[[45,1,2]]]);
//# sourceMappingURL=main.a1f110aa.chunk.js.map