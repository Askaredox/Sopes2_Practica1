(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{312:function(e,t,a){e.exports=a(562)},317:function(e,t,a){},465:function(e,t,a){},467:function(e,t,a){},559:function(e,t,a){},562:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(35),i=a.n(c),l=(a(317),a(36)),o=a(37),d=a(66),s=a(65),u=a(568),m=a(570),h=a(29),v=a(47),E=(a(465),a(169)),f=a.n(E),p=a(266),b=function(){function e(){Object(l.a)(this,e),this.ip=""}return Object(o.a)(e,null,[{key:"watch",value:function(){var e=Object(p.a)(f.a.mark((function e(){var t,a,n,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={ram:Math.floor(100*Math.random()+1)},a=new Date,n=a.getHours().toString(),r=a.getMinutes().toString(),c=a.getSeconds().toString(),e.abrupt("return",{name:"".concat(n,":").concat(r,":").concat(c),ram:t.ram});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),S=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).getData=function(){var t=e.state.server;t=t.slice(1),e.state.server&&b.watch().then((function(a){t.push(a),e.setState({server:t})}))},e.state={server:[{name:"00:00:00",ram:0},{name:"00:00:00",ram:0},{name:"00:00:00",ram:0},{name:"00:00:00",ram:0},{name:"00:00:00",ram:0},{name:"00:00:00",ram:0},{name:"00:00:00",ram:0},{name:"00:00:00",ram:0},{name:"00:00:00",ram:0},{name:"00:00:00",ram:0}]},e.intervalo=setInterval(e.getData,5e3),e}return Object(o.a)(a,[{key:"componentWillUnmount",value:function(){clearInterval(this.intervalo)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Graphs"},r.a.createElement("h1",null,"Graficas"),r.a.createElement("h3",null,"Servidor"),r.a.createElement(v.d,{width:600,height:300,data:this.state.server,margin:{top:5,right:20,bottom:5,left:0}},r.a.createElement(v.c,{type:"monotone",dataKey:"ram",stroke:"#8884d8",isAnimationActive:!1}),r.a.createElement(v.a,{stroke:"#ccc",strokeDasharray:"10 10"}),r.a.createElement(v.b,null),r.a.createElement(v.e,{dataKey:"name"}),r.a.createElement(v.f,null)),r.a.createElement("h5",null,this.state.server[this.state.server.length-1].ram,"%"))}}]),a}(r.a.Component),C=(a(467),a(569)),y=C.a.Column,g=C.a.HeaderCell,j=C.a.Cell,O=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={data:[{i:0,id:"code",desc:"Visual Studio Code"},{i:1,id:"code",desc:"Visual Studio Code"},{i:2,id:"code",desc:"Visual Studio Code"},{i:3,id:"code",desc:"Visual Studio Code"},{i:4,id:"code",desc:"Visual Studio Code"},{i:5,id:"code",desc:"Visual Studio Code"},{i:6,id:"code",desc:"Visual Studio Code"},{i:7,id:"code",desc:"Visual Studio Code"},{i:8,id:"code",desc:"Visual Studio Code"},{i:9,id:"code",desc:"Visual Studio Code"},{i:10,id:"code",desc:"Visual Studio Code"},{i:11,id:"code",desc:"Visual Studio Code"}]},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"table-v"},r.a.createElement("h1",null,"Procesos"),r.a.createElement(C.a,{height:400,data:this.state.data,onRowClick:function(e){console.log(e)}},r.a.createElement(y,{width:70,align:"center",fixed:!0},r.a.createElement(g,null,"No."),r.a.createElement(j,{dataKey:"i"})),r.a.createElement(y,{width:200,fixed:!0},r.a.createElement(g,null,"Id"),r.a.createElement(j,{dataKey:"id"})),r.a.createElement(y,{width:200},r.a.createElement(g,null,"descripcion"),r.a.createElement(j,{dataKey:"desc"})),r.a.createElement(y,{width:120,fixed:"right"},r.a.createElement(g,null,"Action"),r.a.createElement(j,null,(function(e){return r.a.createElement("span",null,r.a.createElement("a",{onClick:function(){alert("id:".concat(e.id))}}," Kill "))})))))}}]),a}(r.a.Component),k=(a(559),function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onSelect=function(e){n.setState({active:e})},n.state={active:0},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{appearance:"inverse"},r.a.createElement(u.a.Header,null,r.a.createElement("h3",{className:"navbar-brand"}," Controlador ")),r.a.createElement(u.a.Body,null,r.a.createElement(m.a,{onSelect:this.onSelect,activeKey:this.state.active},r.a.createElement(m.a.Item,{eventKey:0,icon:r.a.createElement(h.a,{icon:"home"})}," Procesos "),r.a.createElement(m.a.Item,{eventKey:1,icon:r.a.createElement(h.a,{icon:"area-chart"})}," Gr\xe1ficas ")))),0===this.state.active?r.a.createElement(O,null):r.a.createElement(S,null))}}]),a}(n.Component));a(561);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[312,1,2]]]);
//# sourceMappingURL=main.d6790fbf.chunk.js.map