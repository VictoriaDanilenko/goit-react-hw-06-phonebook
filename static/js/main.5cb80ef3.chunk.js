(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(e,t,n){e.exports={container:"container_container__3gKmY",contactList:"container_contactList__2LHSN"}},16:function(e,t,n){e.exports={filterLabel:"filter_filterLabel__1hYoT",filterInput:"filter_filterInput__KcP-x"}},36:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),i=n(3),s=n(18),l=n(15),b=n.n(l),u=n(17),m=n(5),d=n(37),j={addContact:Object(m.b)("contacts/add",(function(e){var t=e.name,n=e.number;return{payload:{id:Object(d.a)(),name:t,number:n}}})),deleteContact:Object(m.b)("contacts/delete"),changeFilter:Object(m.b)("contacts/changeFilter")},f=n(6),O=n.n(f),h=n(1);function p(e){var t=e.option,n=Object(a.useState)(""),c=Object(u.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),l=Object(u.a)(s,2),b=l[0],m=l[1],f=Object(i.b)(),p=Object(d.a)(),_=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":m(a);break;default:return}};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:t}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f(j.addContact({name:r,number:b})),o(""),m("")},autoComplete:"off",className:O.a.phoneBookForm,children:[Object(h.jsx)("label",{htmlFor:p,className:O.a.formLabel,children:"Name"}),Object(h.jsx)("input",{className:O.a.formInput,type:"text",name:"name",placeholder:"Enter full name",id:p,value:r,onChange:_,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(h.jsx)("label",{htmlFor:p,className:O.a.formLabel,children:"Number"}),Object(h.jsx)("input",{className:O.a.formInput,type:"tel",name:"number",placeholder:"Enter number",id:p,value:b,onChange:_,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(h.jsx)("button",{type:"submit",className:O.a.formBtn,children:"Add contact"})]})]})}var _=n(8),x=n.n(_);function v(){var e=Object(i.c)((function(e){var t=e.contacts,n=t.items,a=t.filter;return g(n,a)})),t=Object(i.b)();return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("ul",{className:x.a.list,children:e.map((function(e){var n=e.number,a=e.name;return Object(h.jsxs)("li",{className:x.a.listItem,children:[Object(h.jsxs)("p",{className:x.a.contactName,children:[a,": ",n]}),Object(h.jsx)("button",{className:x.a.contactBtn,onClick:function(){return t(j.deleteContact(n))},children:"Delete"})]},n)}))})})}var g=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},N=n(16),C=n.n(N);function L(){var e=Object(i.c)((function(e){return e.contacts.filter})),t=Object(i.b)();return Object(h.jsxs)("label",{htmlFor:"filter",className:C.a.filterLabel,children:["Find contacts by name",Object(h.jsx)("input",{className:C.a.filterInput,type:"text",value:e,onChange:function(e){return t(j.changeFilter(e.currentTarget.value))},id:"filter"})]})}function k(){return Object(h.jsxs)("div",{className:b.a.container,children:[Object(h.jsx)(p,{option:"Phonebook"}),Object(h.jsx)("h2",{className:b.a.contactList,children:"Contacts"}),Object(h.jsx)(L,{}),Object(h.jsx)(v,{})]})}var F,y=n(4),B=n(19),I=n.n(B),w=n(20),A=n.n(w),z=n(11),S=n(21),E=n(2),J=Object(m.c)([{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(F={},Object(z.a)(F,j.addContact,(function(e,t){var n=t.payload;return[].concat(Object(S.a)(e),[n])})),Object(z.a)(F,j.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.number!==n}))})),F)),T=Object(m.c)("",Object(z.a)({},j.changeFilter,(function(e,t){return t.payload}))),q=Object(E.b)({items:J,filter:T}),H={key:"contacts",version:1,storage:I.a,blacklist:["filter"]},K=Object(m.a)({reducer:{contacts:Object(y.g)(H,q)},middlware:function(e){return e({serializableCheck:{ignoredActions:[y.a,y.f,y.b,y.c,y.d,y.e]}}).concat(A.a)},devTools:!1}),Z={store:K,persistor:Object(y.h)(K)};n(35);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(i.a,{store:Z.store,children:Object(h.jsx)(s.a,{loading:null,persistor:Z.persistor,children:Object(h.jsx)(k,{})})})}),document.getElementById("root"))},6:function(e,t,n){e.exports={phoneBookForm:"form_phoneBookForm__2zgVQ",formLabel:"form_formLabel__1_eLj",formInput:"form_formInput__3uoAJ",formBtn:"form_formBtn__3NqgR"}},8:function(e,t,n){e.exports={list:"contacts_list__3wcae",listItem:"contacts_listItem__2mucc",contactName:"contacts_contactName__3H0Ot",contactBtn:"contacts_contactBtn__Lf-9-"}}},[[36,1,2]]]);
//# sourceMappingURL=main.5cb80ef3.chunk.js.map