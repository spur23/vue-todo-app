(function(t){function e(e){for(var a,s,i=e[0],d=e[1],l=e[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);r&&r(e);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,i=1;i<n.length;i++){var d=n[i];0!==o[d]&&(a=!1)}a&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},c=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-todo-app/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var r=d;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"51ca":function(t,e,n){},"52b4":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),o={class:"container"},c={class:"row"},s={class:"input-container"},i=Object(a["e"])("label",{for:"task"},"Enter Task: ",-1),d=Object(a["d"])("Submit"),l={class:"row"},r={class:"table"},u=Object(a["e"])("tr",null,[Object(a["e"])("th",{scope:"col"},"ID"),Object(a["e"])("th",{scope:"col"},"Task"),Object(a["e"])("th",{scope:"col"},"Completed"),Object(a["e"])("th",{scope:"col"},"Edit"),Object(a["e"])("th",{scope:"col"},"Delete")],-1);function p(t,e,n,p,b,k){var f=Object(a["k"])("base-button"),O=Object(a["k"])("todo-tasks");return Object(a["f"])(),Object(a["c"])("div",o,[Object(a["e"])("div",c,[Object(a["e"])("form",{action:"submit",onSubmit:e[2]||(e[2]=Object(a["p"])((function(){}),["prevent"]))},[Object(a["e"])("div",s,[i,Object(a["o"])(Object(a["e"])("input",{type:"text",id:"task",placeholder:"New Task","aria-label":"Task","aria-describedby":"addon-wrapping","onUpdate:modelValue":e[1]||(e[1]=function(t){return b.enteredTask=t})},null,512),[[a["m"],b.enteredTask]]),Object(a["e"])(f,{type:"submit",btnType:"submit",onClick:k.addTask},{default:Object(a["n"])((function(){return[d]})),_:1},8,["onClick"])])],32)]),Object(a["e"])("div",l,[Object(a["e"])("table",r,[u,Object(a["e"])("tbody",null,[(Object(a["f"])(!0),Object(a["c"])(a["a"],null,Object(a["i"])(b.tasks,(function(t){return Object(a["f"])(),Object(a["c"])(O,{key:t.id,id:t.id,task:t.task,edit:t.edit,completed:t.completed,onDeleteTask:k.deleteTask,onToggleEdit:k.toggleEdit,onEditTask:k.editTask,onToggleComplete:k.toggleComplete},null,8,["id","task","edit","completed","onDeleteTask","onToggleEdit","onEditTask","onToggleComplete"])})),128))])])])])}n("99af"),n("4de4"),n("d81d"),n("13d5");var b=n("5530"),k=n("2909"),f=Object(a["q"])("data-v-51d0239a");Object(a["h"])("data-v-51d0239a");var O={key:1},j=Object(a["e"])("label",{for:"updateTask"},"Update Task:",-1),m=Object(a["d"])("Update"),h=Object(a["d"])("Delete");Object(a["g"])();var T=f((function(t,e,n,o,c,s){var i=Object(a["k"])("base-button");return Object(a["f"])(),Object(a["c"])("tr",null,[Object(a["e"])("td",{scope:"row",class:n.completed?"task-complete disabled":""},Object(a["l"])(n.id),3),n.edit?(Object(a["f"])(),Object(a["c"])("td",O,[Object(a["e"])("form",{action:"submit",onSubmit:e[2]||(e[2]=Object(a["p"])((function(){}),["prevent"]))},[Object(a["e"])("div",null,[j,Object(a["o"])(Object(a["e"])("input",{type:"text",id:"updateTask",placeholder:c.updateTask,"onUpdate:modelValue":e[1]||(e[1]=function(t){return c.updateTask=t})},null,8,["placeholder"]),[[a["m"],c.updateTask]]),Object(a["e"])(i,{type:"submit",btnType:"submit",onClick:s.editTask},{default:f((function(){return[m]})),_:1},8,["onClick"])])],32)])):(Object(a["f"])(),Object(a["c"])("td",{key:0,class:n.completed?"task-complete disabled":""},Object(a["l"])(n.task),3)),Object(a["e"])("td",{class:n.completed?"task-complete":""},[Object(a["e"])("input",{type:"checkbox",onClick:e[3]||(e[3]=function(){return s.toggleComplete.apply(s,arguments)})})],2),Object(a["e"])("td",{class:n.completed?"task-complete disabled":""},[Object(a["e"])(i,{type:"submit",btnType:"submit",onClick:s.toggleEdit},{default:f((function(){return[Object(a["d"])(Object(a["l"])(n.edit?"Cancel":"Edit"),1)]})),_:1},8,["onClick"])],2),Object(a["e"])("td",{class:n.completed?"task-complete":""},[Object(a["e"])(i,{btnType:"delete",onClick:s.deleteTask},{default:f((function(){return[h]})),_:1},8,["onClick"])],2)])})),g=Object(a["q"])("data-v-6ec762ec"),v=g((function(t,e,n,o,c,s){return Object(a["f"])(),Object(a["c"])("button",{type:n.type,class:"delete"===n.btnType?"delete":"submit"},[Object(a["j"])(t.$slots,"default")],10,["type"])})),y={name:"BaseButton",props:["type","btnType"]};n("998f");y.render=v,y.__scopeId="data-v-6ec762ec";var C=y,w={name:"TodoTasks",props:["id","task","edit","completed"],components:{BaseButton:C},emits:["delete-task","toggle-edit","edit-task","toggle-complete"],data:function(){return{updateTask:""}},methods:{deleteTask:function(){this.$emit("delete-task",this.id)},toggleEdit:function(){this.updateTask=this.task,this.$emit("toggle-edit",this.id)},editTask:function(){this.$emit("edit-task",this.updateTask,this.id)},toggleComplete:function(){this.$emit("toggle-complete",this.id)}}};n("5d6b");w.render=T,w.__scopeId="data-v-51d0239a";var _=w,S={name:"App",components:{TodoTasks:_,BaseButton:C},data:function(){return{tasks:[{id:1,task:"Take Dogs Out",completed:!1,edit:!1,delete:!1},{id:2,task:"Get Groceries",completed:!1,edit:!1,delete:!1},{id:3,task:"Wash Car",completed:!1,edit:!1,delete:!1},{id:4,task:"Get Dinner",completed:!1,edit:!1,delete:!1}],idCounter:1,enteredTask:""}},beforeMount:function(){var t=localStorage.getItem("todo-list")?JSON.parse(localStorage.getItem("todo-list")):null,e=[{id:1,task:"Take Dogs Out",completed:!1,edit:!1,delete:!1}],n=null===t?1:t.reduce((function(t,e){return Math.max(t.id,e.id)}));this.tasks=t||e,this.idCounter=n.id||n},methods:{addTask:function(){this.idCounter+=1;var t={id:this.idCounter,task:this.enteredTask,completed:!1,edit:!1,delete:!1};this.enteredTask="",this.tasks=[].concat(Object(k["a"])(this.tasks),[t]),this.saveTaskListLocal()},deleteTask:function(t){this.tasks=this.tasks.filter((function(e){return e.id!==t})),this.saveTaskListLocal()},toggleEdit:function(t){this.tasks=this.tasks.map((function(e){if(e.id!==t)return e;var n=Object(b["a"])(Object(b["a"])({},e),{},{edit:!e.edit});return n}))},editTask:function(t,e){var n=this.tasks.map((function(n){if(n.id!==e)return n;var a=Object(b["a"])(Object(b["a"])({},n),{},{task:t,edit:!n.edit});return a}));this.tasks=n,this.saveTaskListLocal()},toggleComplete:function(t){var e=this.tasks.map((function(e){return e.id!==t?e:Object(b["a"])(Object(b["a"])({},e),{},{completed:!e.completed})}));this.tasks=e,this.saveTaskListLocal()},saveTaskListLocal:function(){localStorage.setItem("todo-list",JSON.stringify(this.tasks))}}};n("5754");S.render=p;var E=S;Object(a["b"])(E).mount("#app")},5754:function(t,e,n){"use strict";n("8d4e")},"5d6b":function(t,e,n){"use strict";n("51ca")},"8d4e":function(t,e,n){},"998f":function(t,e,n){"use strict";n("52b4")}});
//# sourceMappingURL=app.5dab8be8.js.map