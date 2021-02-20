(this["webpackJsonpcompliant-clock"]=this["webpackJsonpcompliant-clock"]||[]).push([[0],{67:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(16),a=c.n(i),r=c(95),s=c(93),j=c(19),o=c(89),l=c(70),d=c(96),b=c(88),h=c(87),O=c(2),m=Object(h.a)((function(e){return{root:{margin:e.spacing(10,1,2,1)}}})),u=function(){var e=m();return Object(O.jsx)(l.a,{align:"center",className:e.root,color:"textSecondary",children:"Use this timer to stay compliant and productive. Select your work duration and break duration."})},x=c(90),f=c(36),g=c.n(f),p=c(91),v=c(35),y=c.n(v),k=c(92),S=c(94),B=c(50),w=c(48),C=c(30),z=c(31),I=Object(w.a)({palette:{primary:C.a}}),R=Object(w.a)({palette:{primary:z.a}});function T(){return Object(O.jsxs)(l.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(O.jsx)(b.a,{color:"inherit",href:"https://material-ui.com/",children:"Saharsh Rathi"})," ",(new Date).getFullYear(),"."]})}function E(){var e=Object(n.useState)(5),t=Object(j.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(25),r=Object(j.a)(a,2),b=r[0],h=r[1],m=Object(n.useState)(!1),f=Object(j.a)(m,2),v=f[0],w=f[1],C=Object(n.useState)(!0),z=Object(j.a)(C,2),E=z[0],J=z[1],L=Object(n.useState)(1500),q=Object(j.a)(L,2),A=q[0],D=q[1];Object(n.useEffect)((function(){var e;return 0==A&&(D(E?60*c:60*b),J(!E),F.play()),v&&(e=setInterval((function(){D(A-1)}),1e3)),function(){clearInterval(e)}}),[A,v]),Object(n.useEffect)((function(){D(60*b)}),[b]);var F;return Object(O.jsx)(o.a,{maxWidth:"sm",children:Object(O.jsx)(d.a,{my:4,children:Object(O.jsxs)(x.a,{container:!0,direction:"column",justify:"space-between",alignItems:"center",children:[Object(O.jsx)(x.a,{item:!0,children:Object(O.jsx)(l.a,{variant:"h1",component:"h1",gutterBottom:!0,children:"Timer"})}),Object(O.jsx)(x.a,{item:!0,children:Object(O.jsxs)(x.a,{container:!0,spacing:3,children:[Object(O.jsxs)(x.a,{item:!0,xs:6,container:!0,children:[Object(O.jsx)(x.a,{item:!0,xs:12,children:Object(O.jsx)(l.a,{id:"break-label",variant:"h6",align:"center",gutterBottom:!0,children:"Break Length"})}),Object(O.jsxs)(x.a,{item:!0,xs:12,container:!0,justify:"center",alignItems:"center",children:[Object(O.jsx)(x.a,{item:!0,children:Object(O.jsx)(p.a,{disabled:!(60!=c&&!v),onClick:function(){!v&&c<60&&i(c+1)},id:"break-increment",children:Object(O.jsx)(y.a,{fontSize:"large"})})}),Object(O.jsx)(x.a,{item:!0,children:Object(O.jsx)(l.a,{id:"break-length",variant:"h5",align:"center",gutterBottom:!0,children:c})}),Object(O.jsx)(x.a,{item:!0,children:Object(O.jsx)(p.a,{disabled:!(1!=c&&!v),onClick:function(){!v&&c>1&&i(c-1)},id:"break-decrement",children:Object(O.jsx)(g.a,{fontSize:"large"})})})]})]}),Object(O.jsxs)(x.a,{item:!0,xs:6,container:!0,children:[Object(O.jsx)(x.a,{item:!0,xs:12,children:Object(O.jsx)(l.a,{id:"session-label",variant:"h6",align:"center",gutterBottom:!0,children:"Session Length"})}),Object(O.jsxs)(x.a,{item:!0,xs:12,container:!0,justify:"center",alignItems:"center",children:[Object(O.jsx)(x.a,{item:!0,children:Object(O.jsx)(p.a,{disabled:!(60!=b&&!v),onClick:function(){!v&&b<60&&h(b+1)},id:"session-increment",children:Object(O.jsx)(y.a,{fontSize:"large"})})}),Object(O.jsx)(x.a,{item:!0,children:Object(O.jsx)(l.a,{id:"session-length",variant:"h5",align:"center",gutterBottom:!0,children:b})}),Object(O.jsx)(x.a,{item:!0,children:Object(O.jsx)(p.a,{disabled:!(1!=b&&!v),onClick:function(){!v&&b>1&&h(b-1)},id:"session-decrement",children:Object(O.jsx)(g.a,{fontSize:"large"})})})]})]}),Object(O.jsx)(x.a,{item:!0,xs:12,container:!0,justify:"center",children:Object(O.jsx)(x.a,{item:!0,xs:6,children:Object(O.jsx)(B.a,{style:{height:"100%",width:"100%",borderRadius:30},children:Object(O.jsxs)(k.a,{elevation:15,style:{paddingTop:10,width:"100%",borderRadius:30},children:[Object(O.jsx)(l.a,{id:"timer-label",variant:"h4",align:"center",gutterBottom:!0,children:E?"Session":"Break"}),Object(O.jsx)(l.a,{id:"time-left",variant:"h2",style:{marginBottom:0},align:"center",gutterBottom:!0,children:function(){var e=Math.floor(A/60),t=A%60;return e<10&&(e="0"+e),t<10&&(t="0"+t),e+":"+t}()}),Object(O.jsx)("audio",{id:"beep",preload:"auto",ref:function(e){F=e},src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"})]})})})}),Object(O.jsxs)(x.a,{item:!0,xs:12,container:!0,justify:"center",children:[Object(O.jsx)(x.a,{item:!0,children:Object(O.jsx)(d.a,{mr:2,children:Object(O.jsx)(s.a,{theme:v?I:R,children:Object(O.jsx)(S.a,{id:"start_stop",onClick:function(){w(!v)},size:"large",variant:"contained",color:"primary",children:v?"Pause":"Start"})})})}),Object(O.jsx)(x.a,{item:!0,children:Object(O.jsx)(d.a,{ml:2,children:Object(O.jsx)(S.a,{id:"reset",onClick:function(){return i(5),h(25),D(1500),w(!1),J(!0),F.pause(),void(F.currentTime=0)},size:"large",variant:"contained",color:"secondary",children:"Reset"})})})]})]})}),Object(O.jsxs)(x.a,{item:!0,children:[Object(O.jsx)(u,{}),Object(O.jsx)(T,{})]})]})})})}var J=Object(w.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:C.a.A400},background:{default:"#fff"}}});a.a.render(Object(O.jsxs)(s.a,{theme:J,children:[Object(O.jsx)(r.a,{}),Object(O.jsx)(E,{})]}),document.querySelector("#root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.8119e752.chunk.js.map