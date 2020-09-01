(this["webpackJsonplinkedin-clone"]=this["webpackJsonplinkedin-clone"]||[]).push([[0],{19:function(n,e,t){n.exports=t(26)},26:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t.n(a),l=t(10),c=t.n(l),o=t(2),i=t(3);function u(){var n=Object(o.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  html, body, #root {\n    height: 100%;\n    width: 100%;\n    background: var(--color-background);\n  }\n  *, button, input {\n    font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif;\n  }\n  :root {\n    --color-header: #283e4a;\n    --color-linkedin: #0077b5;\n    --color-input: #e1e9ee;\n    --color-icons: #c7d1d8;\n    --color-hashtag: #7a8b98;\n    --color-background: #f5f5f5;\n    --color-ad-text: #434649;\n    --color-panel: #fff;\n    --color-link: #0073b1;\n    --color-black: rgba(0,0,0,.9);\n    --color-gray: rgba(0,0,0,.6);\n    --color-separator: rgba(0,0,0,0.15);\n    --color-white: #fff;\n  }\n"]);return u=function(){return n},n}var s=Object(i.a)(u()),m=t(18);function p(){var n=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n\n  > span {\n    margin-top: 48px;\n    display: flex;\n  }\n\n  @media (min-width: 1180px) {\n    > main {\n      margin: 0 30px;\n      display: flex;\n      justify-content: center;\n    }\n    > span {\n      margin-top: 52px;\n      padding: 8px 0;\n    }\n  }\n\n  .left-column, .right-column, .ad-banner {\n    display: none;\n  }\n\n  @media (min-width: 1180px) {\n    .left-column, .right-column, .ad-banner {\n      display: unset;\n    }\n  }\n\n  .middle-column {\n    margin: 0 25px 16px;\n  }\n"]);return p=function(){return n},n}var d=i.c.div(p()),f=t(14);function h(){var n=Object(o.a)(["\n  width: 24px;\n  height: 24px;\n  color: var(--color-white);\n  border-radius: 4px;\n  flex-shrink: 0;\n\n  margin-left: 17px;\n"]);return h=function(){return n},n}function x(){var n=Object(o.a)(["\n  margin-left: 16px;\n  width: 100%;\n\n  background: var(--color-input);\n  color: var(--color-black);\n  font-size: 14px;\n  padding: 7.5px 8px;\n  border: none;\n  outline: none;\n  border-radius: 2px;\n\n  &:focus {\n    background: var(--color-white);\n  }\n"]);return x=function(){return n},n}function g(){var n=Object(o.a)(["\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 1px solid var(--color-icons);\n  flex-shrink: 0;\n"]);return g=function(){return n},n}function b(){var n=Object(o.a)(["\n  background: var(--color-link);\n  padding: 0 16px;\n\n  height: 48px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n\n  @media(min-width: 1180px) {\n    display: none;\n  }\n"]);return b=function(){return n},n}var E=i.c.div(b()),v=i.c.img(g()),w=i.c.input(x()),k=Object(i.c)(f.a)(h()),j=function(){return r.a.createElement(E,null,r.a.createElement(v,{src:"https://github.com/zorasantos.png"}),r.a.createElement(w,{placeholder:"Pesquisar"}),r.a.createElement(k,null))},N=t(15),y=t(4);function O(){var n=Object(o.a)(["\n  width: 16px;\n  height: 16px;\n"]);return O=function(){return n},n}function z(){var n=Object(o.a)(["\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  border: 1px solid var(--color-icons);\n"]);return z=function(){return n},n}function F(){var n=Object(o.a)(["\n  ","\n"]);return F=function(){return n},n}function R(){var n=Object(o.a)(["\n","\n"]);return R=function(){return n},n}function S(){var n=Object(o.a)(["\n  ","\n"]);return S=function(){return n},n}function B(){var n=Object(o.a)(["\n  width: 24px;\n  height: 24px;\n"]);return B=function(){return n},n}function I(){var n=Object(o.a)(["\n  margin-left: 12px;\n\n  background: var(--color-input);\n  color: var(--color-black);\n  font-size: 14px;\n  padding: 7.5px 8px;\n  border: none;\n  outline: none;\n  border-radius: 2px;\n\n  &:focus {\n    background: var(--color-white);\n  }\n"]);return I=function(){return n},n}function L(){var n=Object(o.a)(["\n  width: 34px;\n  height: 34px;\n  color: var(--color-linkedin);\n  background: #FFF;\n  border-radius: 4px;\n  flex-shrink: 0;\n"]);return L=function(){return n},n}function C(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex: 1;\n\n  max-width: 1128px;\n  margin: 0 auto;\n  height: 52px;\n\n  .left, .right nav {\n    display: flex;\n    align-items: center;\n  }\n  .right nav {\n    height: 100%;\n    button {\n      background: none;\n      border: 0;\n      outline: 0;\n\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      min-width: 90px;\n      min-height: 100%;\n\n      color: var(--color-icons);\n      cursor: pointer;\n      &:hover {\n        color: var(--color-white);\n      }\n      &.active {\n        border-bottom: 2px solid var(--color-white);\n      }\n    }\n  }\n"]);return C=function(){return n},n}function A(){var n=Object(o.a)(["\n  background: var(--color-header);\n  padding: 0 30px;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n\n  display: none;\n\n  @media(min-width: 1180px) {\n    display: block;\n  }\n"]);return A=function(){return n},n}var q=i.c.header(A()),U=i.c.div(C()),D=Object(i.c)(N.a)(L()),H=i.c.input(I()),M=Object(i.b)(B()),P=Object(i.c)(y.b)(S(),M),T=Object(i.c)(y.h)(R(),M),V=Object(i.c)(y.c)(F(),M),G=i.c.img(z()),J=Object(i.c)(y.a)(O()),Q=function(){return r.a.createElement(q,null,r.a.createElement(U,null,r.a.createElement("div",{className:"left"},r.a.createElement(D,null),r.a.createElement(H,{placeholder:"Pesquisar"})),r.a.createElement("div",{className:"right"},r.a.createElement("nav",null,r.a.createElement("button",{className:"active"},r.a.createElement(P,null),r.a.createElement("span",null,"In\xedcio")),r.a.createElement("button",null,r.a.createElement(T,null),r.a.createElement("span",null,"Minha rede")),r.a.createElement("button",null,r.a.createElement(V,null),r.a.createElement("span",null,"Notifica\xe7\xf5es")),r.a.createElement("button",null,r.a.createElement(G,{src:"https://github.com/zorasantos.png"}),r.a.createElement("span",null,"Eu ",r.a.createElement(J,null)))))))};function W(){var n=Object(o.a)(["\n  > div {\n    .bg-skeleton {\n      width: 100%;\n      height: 70px;\n\n      filter: brightness(96%);\n    }\n    span {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      padding-bottom: 175px;\n\n      .avatar-skeleton {\n        z-index: 1;\n        width: 72px;\n        height: 72px;\n        border-radius: 50px;\n        margin: -36px 0 10px;\n      }\n      .row-skeleton {\n        height: 12px;\n\n        &:nth-child(2) {\n          width: 60%;\n        }\n        &:nth-child(3) {\n          width: 50%;\n          margin-top: 10px;\n        }\n      }\n    }\n  }\n"]);return W=function(){return n},n}var X=i.c.div(W());function Z(){var n=Object(o.a)(["\n  background-image: linear-gradient(\n    -90deg,\n    #e7edf1 0%,\n    #f8f8f8 50%,\n    #e7edf1 100%\n  );\n  background-size: 400% 400%;\n  animation: shimmer 1.2s ease-in-out infinite;\n\n  @keyframes shimmer {\n    0% {\n      background-position: 0% 0%;\n    }\n    100% {\n      background-position: -135% 0%;\n    }\n  }\n  /* Varia\xe7\xe3o White */\n  &.white {\n    background-image: linear-gradient(-90deg, #fff 0%, #e7edf1 50%, #fff, 100%);\n  }\n"]);return Z=function(){return n},n}var K=i.c.div(Z());function Y(){var n=Object(o.a)(["\n  background: var(--color-white);\n  border-radius: 2px;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2);\n\n  &.no-shadow {\n    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 2px 3px rgba(0, 0, 0, 0.05);\n  }\n"]);return Y=function(){return n},n}var $=i.c.div(Y()),_=function(){return r.a.createElement(X,null,r.a.createElement($,{className:"no-shadow"},r.a.createElement(K,{className:"bg-skeleton"}),r.a.createElement("span",null,r.a.createElement(K,{className:"avatar-skeleton"}),r.a.createElement(K,{className:"row-skeleton"}),r.a.createElement(K,{className:"row-skeleton"}))))};function nn(){var n=Object(o.a)(["\n  padding-bottom: 20px;\n\n  .profile-cover {\n    width: 100%;\n    height: 54px;\n    background: var(--color-header);\n  }\n  .profile-picture {\n    width: 72px;\n    height: 72px;\n    border-radius: 50%;\n    border: 2px solid var(--color-white);\n    box-shadow: inset 0 1.5px 3px 0 var(--black-a15, rgba(0, 0, 0, 0.15)),\n      0 1.5px 3px 0 var(--black-a15, rgba(0, 0, 0, 0.15));\n\n    display: flex;\n    margin: -38px auto 12px;\n  }\n  h1 {\n    font-size: 16px;\n    font-weight: 600;\n    text-align: center;\n    color: var(--color-black);\n  }\n  h2 {\n    margin-top: 4px;\n    font-size: 12px;\n    font-weight: 400;\n    text-align: center;\n    color: var(--color-gray);\n  }\n  .separator {\n    width: 100%;\n    border-bottom: 1px solid var(--color-separator);\n    margin: 16px 0 12px;\n  }\n  .key-value {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 12px;\n    margin: 0 12px;\n    font-weight: 600;\n\n    .conexao {\n      color: var(--color-gray);\n    }\n\n    .key {\n      color: var(--color-gray);\n    }\n    .value {\n      color: var(--color-link);\n    }\n  }\n  .rede {\n    font-size: 12px;\n    margin: 0 12px;\n    font-weight: 600;\n  }\n\n  .items {\n    font-size: 13px;\n    margin: 0 12px;\n    font-weight: 600;\n  }\n"]);return nn=function(){return n},n}var en=i.c.div(nn()),tn=function(){return r.a.createElement($,null,r.a.createElement(en,null,r.a.createElement("div",{className:"profile-cover"}),r.a.createElement("img",{src:"https://github.com/zorasantos.png",alt:"Avatar",className:"profile-picture"}),r.a.createElement("h1",null,"Zoranildo Santos"),r.a.createElement("h2",null,"Font End Develop"),r.a.createElement("div",{className:"separator"}),r.a.createElement("div",{className:"key-value"},r.a.createElement("span",{className:"conexao"},"Conex\xf5es"),r.a.createElement("span",{className:"value"},"87")),r.a.createElement("span",{className:"rede"},"Amplie sua rede"),r.a.createElement("div",{className:"key-value"},r.a.createElement("span",{className:"key"},"Quem viu seu perfil"),r.a.createElement("span",{className:"value"},"1.558")),r.a.createElement("div",{className:"key-value"},r.a.createElement("span",{className:"key"},"Viram sua publica\xe7\xe3o"),r.a.createElement("span",{className:"value"},"388")),r.a.createElement("div",{className:"separator"}),r.a.createElement("div",null,r.a.createElement("span",{className:"items"},"Items salvos"))))},an=t(16);function rn(){var n=Object(o.a)(["\n  width: 16px;\n  height: 16px;\n  color: var(--color-hashtag);\n  margin-right: 8px;\n"]);return rn=function(){return n},n}function ln(){var n=Object(o.a)(["\n  position: sticky;\n  top: 64px;\n  > div {\n    margin-top: 8px;\n    display: flex;\n    flex-direction: column;\n    font-size: 12px;\n    font-weight: 600;\n    padding: 8px 12px 16px;\n\n    .title {\n      color: var(--color-link);\n      margin-bottom: 10px;\n    }\n    .tag {\n      color: var(--color-gray);\n      display: flex;\n      align-items: center;\n      padding: 3.5px 0;\n    }\n  }\n"]);return ln=function(){return n},n}var cn=i.c.div(ln()),on=Object(i.c)(an.a)(rn()),un=["rocketseat","next-level","node","react","developer"],sn=function(){return r.a.createElement(cn,null,r.a.createElement($,null,r.a.createElement("span",{className:"title"},"Hashtags seguidas"),un.map((function(n){return r.a.createElement("span",{className:"tag"},r.a.createElement(on,null),n)}))))};function mn(){var n=Object(o.a)(["\n  width: 216px;\n"]);return mn=function(){return n},n}var pn=i.c.div(mn()),dn=function(n){var e=n.isLoading;return r.a.createElement(pn,{className:"left-column"},e?r.a.createElement(_,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(tn,null),r.a.createElement(sn,null)))},fn=t(17);function hn(){var n=Object(o.a)(["\n  ","\n  color: #ef7e37;\n"]);return hn=function(){return n},n}function xn(){var n=Object(o.a)(["\n  ","\n  color: #17afb8;\n"]);return xn=function(){return n},n}function gn(){var n=Object(o.a)(["\n  ","\n  color: #9896f2;\n"]);return gn=function(){return n},n}function bn(){var n=Object(o.a)(["\n  ","\n  color: #33aada;\n"]);return bn=function(){return n},n}function En(){var n=Object(o.a)(["\n  width: 24px;\n  height: 24px;\n  margin-right: 4px;\n"]);return En=function(){return n},n}function vn(){var n=Object(o.a)(["\n  width: 20px;\n  height: 20px;\n"]);return vn=function(){return n},n}function wn(){var n=Object(o.a)(["\n  color: var(--color-gray);\n\n  .write {\n    display: flex;\n    align-items: center;\n    padding: 18px 24px;\n\n    > span {\n      margin-left: 8px;\n      font-weight: 600;\n    }\n  }\n  .attachment {\n    display: none;\n\n    @media (min-width: 1180px) {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      height: 100%;\n      padding: 0 24px;\n      border-top: 1px solid var(--color-separator);\n\n      button {\n        display: flex;\n        padding: 16px;\n        height: 100%;\n        align-items: center;\n        background: none;\n        border: none;\n        color: var(--color-gray);\n        font-weight: 600;\n\n        cursor: pointer;\n        &:hover,\n        &:focus {\n          background: rgba(0, 0, 0, 0.05);\n        }\n      }\n    }\n  }\n"]);return wn=function(){return n},n}var kn=i.c.div(wn()),jn=Object(i.c)(fn.a)(vn()),Nn=Object(i.b)(En()),yn=Object(i.c)(y.d)(bn(),Nn),On=Object(i.c)(y.i)(gn(),Nn),zn=Object(i.c)(y.e)(xn(),Nn),Fn=Object(i.c)(y.g)(hn(),Nn),Rn=function(){return r.a.createElement($,null,r.a.createElement(kn,null,r.a.createElement("div",{className:"write"},r.a.createElement(jn,null),r.a.createElement("span",null,"Come\xe7ar uma publica\xe7\xe3o")),r.a.createElement("div",{className:"attachment"},r.a.createElement("button",null,r.a.createElement(yn,null),"Foto"),r.a.createElement("button",null,r.a.createElement(On,null),"Video"),r.a.createElement("button",null,r.a.createElement(zn,null),"Documento"),r.a.createElement("button",null,r.a.createElement(Fn,null),"Escrever artigo"))))},Sn=t(6);function Bn(){var n=Object(o.a)(["\n  ","\n"]);return Bn=function(){return n},n}function In(){var n=Object(o.a)(["\n  ","\n"]);return In=function(){return n},n}function Ln(){var n=Object(o.a)(["\n  ","\n"]);return Ln=function(){return n},n}function Cn(){var n=Object(o.a)(["\n  ","\n"]);return Cn=function(){return n},n}function An(){var n=Object(o.a)(["\n  width: 24px;\n  height: 24px;\n  margin-right: 4px;\n"]);return An=function(){return n},n}function qn(){var n=Object(o.a)([""]);return qn=function(){return n},n}function Un(){var n=Object(o.a)(["\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  margin-right: 8px;\n"]);return Un=function(){return n},n}function Dn(){var n=Object(o.a)(["\n  width: 100%;\n  height: 1px;\n  border-top: 1px solid var(--color-separator);\n"]);return Dn=function(){return n},n}function Hn(){var n=Object(o.a)(["\n  width: 100%;\n"]);return Hn=function(){return n},n}function Mn(){var n=Object(o.a)(["\n  display: flex;\n  margin: 0 16px;\n\n  &.heading {\n    padding: 12px 0 8px;\n\n    h3 {\n      font-size: 14px;\n      color: var(--color-black);\n    }\n    h4,\n    time {\n      font-size: 12px;\n      font-weight: normal;\n      color: var(--color-gray);\n    }\n  }\n  &.likes {\n    padding: 8px 0;\n    font-size: 12px;\n    color: var(--color-gray);\n\n    .circle {\n      width: 16px;\n      height: 16px;\n      border-radius: 50%;\n\n      &.blue {\n        background: #1385bd;\n      }\n      &.green {\n        background: #6dae4f;\n      }\n      &.red {\n        background: #df704c;\n      }\n\n      & + .circle {\n        margin-left: 4px;\n      }\n    }\n    .number {\n      margin-left: 8px;\n    }\n  }\n  &.actions {\n    justify-content: space-between;\n\n    @media (min-width: 1180px) {\n      justify-content: flex-start;\n    }\n\n    button {\n      background: none;\n      border: none;\n      outline: none;\n      color: var(--color-gray);\n      font-size: 14px;\n      font-weight: 600;\n\n      display: flex;\n      align-items: center;\n      padding: 14px 8px;\n\n      cursor: pointer;\n      &:hover,\n      &:focus {\n        background: rgba(0, 0, 0, 0.05);\n      }\n\n      span {\n        display: none;\n\n        @media (min-width: 1180px) {\n          display: unset;\n        }\n      }\n    }\n  }\n"]);return Mn=function(){return n},n}function Pn(){var n=Object(o.a)(["\n  margin-top: 8px;\n\n  @media (min-width: 1180px) {\n    margin-top: 16px;\n  }\n"]);return Pn=function(){return n},n}var Tn=i.c.div(Pn()),Vn=i.c.div(Mn()),Gn=i.c.img(Hn()),Jn=i.c.div(Dn()),Qn=i.c.img(Un()),Wn=i.c.div(qn()),Xn=Object(i.b)(An()),Zn=Object(i.c)(y.f)(Cn(),Xn),Kn=Object(i.c)(Sn.a)(Ln(),Xn),Yn=Object(i.c)(Sn.c)(In(),Xn),$n=Object(i.c)(Sn.b)(Bn(),Xn),_n=function(){return r.a.createElement($,null,r.a.createElement(Tn,null,r.a.createElement(Vn,{className:"heading"},r.a.createElement(Qn,{src:"https://i.imgur.com/81RtXfT.jpg",alt:"Rocketseat"}),r.a.createElement(Wn,null,r.a.createElement("h3",null,"Rocketseat"),r.a.createElement("h4",null,"Institui\xe7\xe3o de ensino"),r.a.createElement("time",null,"1 sem"))),r.a.createElement(Gn,{src:"https://blog.rocketseat.com.br/content/images/2019/05/Painel.png",alt:"Rocketseat Blog"}),r.a.createElement(Vn,{className:"likes"},r.a.createElement("span",{className:"circle blue"}),r.a.createElement("span",{className:"circle green"}),r.a.createElement("span",{className:"circle red"}),r.a.createElement("span",{className:"number"},"49")),r.a.createElement(Vn,null,r.a.createElement(Jn,null)),r.a.createElement(Vn,{className:"actions"},r.a.createElement("button",null,r.a.createElement(Zn,null),r.a.createElement("span",null,"Gostei")),r.a.createElement("button",null,r.a.createElement(Kn,null),r.a.createElement("span",null,"Comentar")),r.a.createElement("button",null,r.a.createElement(Yn,null),r.a.createElement("span",null,"Compartilhar")),r.a.createElement("button",null,r.a.createElement($n,null),r.a.createElement("span",null,"Enviar")))))};function ne(){var n=Object(o.a)(["\n  @media (min-width: 1180px) {\n    width: 552px;\n  }\n"]);return ne=function(){return n},n}var ee=i.c.div(ne());function te(){var n=Object(o.a)(["\n  margin-top: 8px;\n\n  @media (min-width: 1180px) {\n    margin-top: 16px;\n  }\n\n  > div {\n    padding: 15px 40px 50px 12px;\n\n    header {\n      display: flex;\n\n      .avatar-skeleton {\n        width: 48px;\n        height: 48px;\n        border-radius: 50%;\n        flex-shrink: 0;\n      }\n      .column {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        flex: 1;\n      }\n      .row-skeleton {\n        height: 12px;\n\n        &:nth-child(1) {\n          width: 30%;\n        }\n        &:nth-child(2) {\n          width: 55%;\n          margin-top: 10px;\n        }\n      }\n    }\n  }\n  span {\n    display: flex;\n    flex-direction: column;\n    margin-top: 30px;\n\n    .row-skeleton {\n      height: 12px;\n\n      &:nth-child(1) {\n        width: 100%;\n      }\n      &:nth-child(2) {\n        width: 90%;\n        margin-top: 10px;\n      }\n    }\n  }\n"]);return te=function(){return n},n}var ae=i.c.div(te()),re=function(){return r.a.createElement(ae,null,r.a.createElement($,{className:"no-shadow"},r.a.createElement("header",null,r.a.createElement(K,{className:"avatar-skeleton"}),r.a.createElement("div",{className:"column"},r.a.createElement(K,{className:"row-skeleton"}),r.a.createElement(K,{className:"row-skeleton"}))),r.a.createElement("span",null,r.a.createElement(K,{className:"row-skeleton"}),r.a.createElement(K,{className:"row-skeleton"}))))};function le(){var n=Object(o.a)(["\n  > div {\n    padding: 40px 40px 40px 12px;\n\n    display: flex;\n    flex-direction: column;\n\n    .row-skeleton {\n      height: 12px;\n\n      &:nth-child(1) {\n        width: 100%;\n      }\n      &:nth-child(2) {\n        width: 90%;\n        margin-top: 20px;\n      }\n    }\n  }\n"]);return le=function(){return n},n}var ce=i.c.div(le()),oe=function(){return r.a.createElement(ce,null,r.a.createElement($,{className:"no-shadow"},r.a.createElement(K,{className:"row-skeleton"}),r.a.createElement(K,{className:"row-skeleton"})))},ie=function(n){var e=n.isLoading;return r.a.createElement(ee,{className:"middle-column"},e?r.a.createElement(r.a.Fragment,null,r.a.createElement(oe,null),r.a.createElement(re,null),r.a.createElement(re,null),r.a.createElement(re,null),r.a.createElement(re,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(Rn,null),r.a.createElement(_n,null),r.a.createElement(_n,null),r.a.createElement(_n,null),r.a.createElement(_n,null)))};function ue(){var n=Object(o.a)(["\n  &:nth-child(2) {\n    position: sticky;\n    top: 64px;\n  }\n  > div {\n    padding: 12px;\n\n    .title {\n      font-size: 16px;\n    }\n    ul {\n      list-style: none;\n      margin-top: 8px;\n\n      li {\n        display: flex;\n        align-items: center;\n\n        .bullet {\n          display: inline-flex;\n          width: 8px;\n          height: 8px;\n          border-radius: 50%;\n          background: var(--color-link);\n        }\n        .news {\n          display: flex;\n          flex-direction: column;\n          margin-left: 10px;\n\n          .head {\n            font-size: 14px;\n            font-weight: 600;\n            color: var(--color-black);\n          }\n          .subtext {\n            font-size: 12px;\n            color: var(--color-gray);\n          }\n        }\n\n        & + li {\n          margin-top: 10px;\n        }\n      }\n    }\n  }\n"]);return ue=function(){return n},n}var se=i.c.div(ue()),me=function(){return r.a.createElement(se,null,r.a.createElement($,null,r.a.createElement("span",{className:"title"},"Assuntos mais discutidos"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",{className:"bullet"}),r.a.createElement("span",{className:"news"},r.a.createElement("span",{className:"head"},"Bootcamp da Rocketseat"),r.a.createElement("span",{className:"subtext"},"h\xe1 1 d \u2022 316 leitores"))),r.a.createElement("li",null,r.a.createElement("span",{className:"bullet"}),r.a.createElement("span",{className:"news"},r.a.createElement("span",{className:"head"},"Bootcamp da Rocketseat"),r.a.createElement("span",{className:"subtext"},"h\xe1 1 d \u2022 316 leitores"))),r.a.createElement("li",null,r.a.createElement("span",{className:"bullet"}),r.a.createElement("span",{className:"news"},r.a.createElement("span",{className:"head"},"Bootcamp da Rocketseat"),r.a.createElement("span",{className:"subtext"},"h\xe1 1 d \u2022 316 leitores"))),r.a.createElement("li",null,r.a.createElement("span",{className:"bullet"}),r.a.createElement("span",{className:"news"},r.a.createElement("span",{className:"head"},"Bootcamp da Rocketseat"),r.a.createElement("span",{className:"subtext"},"h\xe1 1 d \u2022 316 leitores"))),r.a.createElement("li",null,r.a.createElement("span",{className:"bullet"}),r.a.createElement("span",{className:"news"},r.a.createElement("span",{className:"head"},"Bootcamp da Rocketseat"),r.a.createElement("span",{className:"subtext"},"h\xe1 1 d \u2022 316 leitores"))),r.a.createElement("li",null,r.a.createElement("span",{className:"bullet"}),r.a.createElement("span",{className:"news"},r.a.createElement("span",{className:"head"},"Bootcamp da Rocketseat"),r.a.createElement("span",{className:"subtext"},"h\xe1 1 d \u2022 316 leitores"))))))};function pe(){var n=Object(o.a)(["\n  /* Todas as linhas a partir da primeira*/\n  .row + .row {\n    margin-top: 23px;\n  }\n  .row {\n    display: flex;\n    align-items: center;\n\n    .square-skeleton {\n      width: 48px;\n      height: 48px;\n      border-radius: 2px;\n    }\n    .column {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      padding-left: 10px;\n\n      .row-skeleton {\n        height: 12px;\n\n        &:nth-child(1) {\n          width: 50%;\n        }\n        &:nth-child(2) {\n          width: 100%;\n          margin-top: 10px;\n        }\n      }\n    }\n  }\n"]);return pe=function(){return n},n}var de=i.c.div(pe()),fe=function(){var n=function(){return r.a.createElement("div",{className:"row"},r.a.createElement(K,{className:"square-skeleton white"}),r.a.createElement("div",{className:"column"},r.a.createElement(K,{className:"row-skeleton white"}),r.a.createElement(K,{className:"row-skeleton white"})))};return r.a.createElement(de,null,r.a.createElement(n,null),r.a.createElement(n,null),r.a.createElement(n,null))};function he(){var n=Object(o.a)(["\n  width: 312px;\n\n  > div + div {\n    margin-top: 8px;\n  }\n"]);return he=function(){return n},n}var xe=i.c.div(he()),ge=function(n){var e=n.isLoading;return r.a.createElement(xe,{className:"right-column"},e?r.a.createElement(fe,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(me,null),r.a.createElement(me,null)))};function be(){var n=Object(o.a)(["\n  width: 100%;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--color-ad-text);\n  text-align: center;\n  padding: 8px 0;\n\n  span {\n    color: var(--color-link);\n  }\n"]);return be=function(){return n},n}var Ee=i.c.div(be()),ve=function(){return r.a.createElement(Ee,{className:"ad-banner"},r.a.createElement("span",null,"Rocketseat - "),"Interface reproduzida em busca do pr\xf3ximo n\xedvel.")},we=function(){var n=Object(a.useState)(!0),e=Object(m.a)(n,2),t=e[0],l=e[1];return Object(a.useEffect)((function(){setTimeout((function(){l(!1)}),2e3)}),[]),r.a.createElement(d,null,r.a.createElement(j,null),r.a.createElement(Q,null),r.a.createElement("span",null,r.a.createElement(ve,null)),r.a.createElement("main",null,r.a.createElement(dn,{isLoading:t}),r.a.createElement(ie,{isLoading:t}),r.a.createElement(ge,{isLoading:t})))};var ke=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(we,null),r.a.createElement(s,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ke,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b62624ea.chunk.js.map