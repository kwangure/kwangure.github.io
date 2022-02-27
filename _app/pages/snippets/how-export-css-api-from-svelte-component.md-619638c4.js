import{S as Be,i as Ue,s as Fe,v as d,w as c,x as g,p as y,n as h,A as v,a3 as w,a8 as V,a4 as le,a5 as Me,e as S,t as l,j as A,c as b,a as E,g as a,d as n,l as x,f as p,F as r,I as Ce}from"../../chunks/vendor-cab6fdc7.js";import{S as Oe}from"../../chunks/section.svelte_svelte_type_style_lang-6cd52025.js";function je(K){let t,u,o,f,s,m,$,ae,k,ie,L,ue,pe,Q,W,me,R,I,fe,B,$e,X,U,Z,P,de,F,ce,M,ge,ee,_,ye,N,he,ve,O,_e,j,we,te,Y,Se,ne,C,be,H,Ee,D,Pe,oe,G,se;return k=new w({props:{language:V,inline:!0,code:":global"}}),B=new w({props:{language:V,inline:!0,code:"var()"}}),U=new w({props:{language:le,code:`<button>
    <slot></slot>
</button>
<style>
    button {
        color: var(--button-color, red);
        width: var(--button-width, 50px);
    }
</style>
`}}),F=new w({props:{language:V,inline:!0,code:"--button-color"}}),M=new w({props:{language:Me,inline:!0,code:"--button-width"}}),O=new w({props:{language:V,inline:!0,code:"!important"}}),j=new w({props:{language:V,inline:!0,code:".repeat.repeat.repeat"}}),H=new w({props:{language:le,inline:!0,code:"style"}}),D=new w({props:{language:le,inline:!0,code:"div"}}),G=new w({props:{language:le,code:`<script>
    import Button from "./Button.svelte";
<\/script>
<div class="parent">
    <Button --button-color="blue">Click me!</Button>
    <Button>Click me!</Button>
</div>

<style>
    .parent {
        --button-width: 100px;
    }
</style>
`}}),{c(){t=S("p"),u=l(`With today's Svelte there's no standard way of telling component consumers
what styles they're allowed to override. You should ideally communicate, what is
part of your styling API, and what is internal styling. This post
proposes `),o=S("em"),f=l("one way"),s=l(` (the best way \u{1F60A}) to provide a CSS API for consumers of your
components or design system.`),m=A(),$=S("p"),ae=l("For one...you should not be using the "),d(k.$$.fragment),ie=l(`
selector most of the time (read `),L=S("em"),ue=l("ever"),pe=l(")."),Q=A(),W=S("h2"),me=l("Structuring the API"),R=A(),I=S("p"),fe=l("Use valueless CSS custom properties via "),d(B.$$.fragment),$e=l(" with your default/intended styles as fallback."),X=A(),d(U.$$.fragment),Z=A(),P=S("p"),de=l(`The message to consumers of you component should be, "Any selector or
DOM element you target could change at any time. Only override styles using
`),d(F.$$.fragment),ce=l(" or "),d(M.$$.fragment),ge=l("."),ee=A(),_=S("p"),ye=l("Using "),N=S("em"),he=l("virgin"),ve=l("\u{1F440} custom properties also avoids "),d(O.$$.fragment),_e=l(` and
`),d(j.$$.fragment),we=l(" fights for CSS specificity."),te=A(),Y=S("h2"),Se=l("Using the API"),ne=A(),C=S("p"),be=l(`Generally, you should override the styles of child components using custom properties
in the `),d(H.$$.fragment),Ee=l(` tag. For one off uses you may pass a custom property
attribute, but this has the disadvantage that Svelte inserts a wrapper `),d(D.$$.fragment),Pe=l(`
into your code and will lead to repetition if you are overriding the same style on multiple
components.`),oe=A(),d(G.$$.fragment)},l(e){t=b(e,"P",{});var i=E(t);u=a(i,`With today's Svelte there's no standard way of telling component consumers
what styles they're allowed to override. You should ideally communicate, what is
part of your styling API, and what is internal styling. This post
proposes `),o=b(i,"EM",{});var Ae=E(o);f=a(Ae,"one way"),Ae.forEach(n),s=a(i,` (the best way \u{1F60A}) to provide a CSS API for consumers of your
components or design system.`),i.forEach(n),m=x(e),$=b(e,"P",{});var q=E($);ae=a(q,"For one...you should not be using the "),c(k.$$.fragment,q),ie=a(q,`
selector most of the time (read `),L=b(q,"EM",{});var xe=E(L);ue=a(xe,"ever"),xe.forEach(n),pe=a(q,")."),q.forEach(n),Q=x(e),W=b(e,"H2",{});var Ie=E(W);me=a(Ie,"Structuring the API"),Ie.forEach(n),R=x(e),I=b(e,"P",{});var re=E(I);fe=a(re,"Use valueless CSS custom properties via "),c(B.$$.fragment,re),$e=a(re," with your default/intended styles as fallback."),re.forEach(n),X=x(e),c(U.$$.fragment,e),Z=x(e),P=b(e,"P",{});var z=E(P);de=a(z,`The message to consumers of you component should be, "Any selector or
DOM element you target could change at any time. Only override styles using
`),c(F.$$.fragment,z),ce=a(z," or "),c(M.$$.fragment,z),ge=a(z,"."),z.forEach(n),ee=x(e),_=b(e,"P",{});var T=E(_);ye=a(T,"Using "),N=b(T,"EM",{});var Te=E(N);he=a(Te,"virgin"),Te.forEach(n),ve=a(T,"\u{1F440} custom properties also avoids "),c(O.$$.fragment,T),_e=a(T,` and
`),c(j.$$.fragment,T),we=a(T," fights for CSS specificity."),T.forEach(n),te=x(e),Y=b(e,"H2",{});var ke=E(Y);Se=a(ke,"Using the API"),ke.forEach(n),ne=x(e),C=b(e,"P",{});var J=E(C);be=a(J,`Generally, you should override the styles of child components using custom properties
in the `),c(H.$$.fragment,J),Ee=a(J,` tag. For one off uses you may pass a custom property
attribute, but this has the disadvantage that Svelte inserts a wrapper `),c(D.$$.fragment,J),Pe=a(J,`
into your code and will lead to repetition if you are overriding the same style on multiple
components.`),J.forEach(n),oe=x(e),c(G.$$.fragment,e)},m(e,i){p(e,t,i),r(t,u),r(t,o),r(o,f),r(t,s),p(e,m,i),p(e,$,i),r($,ae),g(k,$,null),r($,ie),r($,L),r(L,ue),r($,pe),p(e,Q,i),p(e,W,i),r(W,me),p(e,R,i),p(e,I,i),r(I,fe),g(B,I,null),r(I,$e),p(e,X,i),g(U,e,i),p(e,Z,i),p(e,P,i),r(P,de),g(F,P,null),r(P,ce),g(M,P,null),r(P,ge),p(e,ee,i),p(e,_,i),r(_,ye),r(_,N),r(N,he),r(_,ve),g(O,_,null),r(_,_e),g(j,_,null),r(_,we),p(e,te,i),p(e,Y,i),r(Y,Se),p(e,ne,i),p(e,C,i),r(C,be),g(H,C,null),r(C,Ee),g(D,C,null),r(C,Pe),p(e,oe,i),g(G,e,i),se=!0},p:Ce,i(e){se||(y(k.$$.fragment,e),y(B.$$.fragment,e),y(U.$$.fragment,e),y(F.$$.fragment,e),y(M.$$.fragment,e),y(O.$$.fragment,e),y(j.$$.fragment,e),y(H.$$.fragment,e),y(D.$$.fragment,e),y(G.$$.fragment,e),se=!0)},o(e){h(k.$$.fragment,e),h(B.$$.fragment,e),h(U.$$.fragment,e),h(F.$$.fragment,e),h(M.$$.fragment,e),h(O.$$.fragment,e),h(j.$$.fragment,e),h(H.$$.fragment,e),h(D.$$.fragment,e),h(G.$$.fragment,e),se=!1},d(e){e&&n(t),e&&n(m),e&&n($),v(k),e&&n(Q),e&&n(W),e&&n(R),e&&n(I),v(B),e&&n(X),v(U,e),e&&n(Z),e&&n(P),v(F),v(M),e&&n(ee),e&&n(_),v(O),v(j),e&&n(te),e&&n(Y),e&&n(ne),e&&n(C),v(H),v(D),e&&n(oe),v(G,e)}}}function He(K){let t,u,o,f;return u=new w({props:{language:V,inline:!0,code:":global"}}),{c(){t=l("The "),d(u.$$.fragment),o=l(" CSS selector considered harmful")},l(s){t=a(s,"The "),c(u.$$.fragment,s),o=a(s," CSS selector considered harmful")},m(s,m){p(s,t,m),g(u,s,m),p(s,o,m),f=!0},p:Ce,i(s){f||(y(u.$$.fragment,s),f=!0)},o(s){h(u.$$.fragment,s),f=!1},d(s){s&&n(t),v(u,s),s&&n(o)}}}function De(K){let t,u,o,f,s;return o=new w({props:{language:V,inline:!0,code:":global"}}),{c(){t=S("p"),u=l(`This snippet guides you on how to provide a CSS API to component consumers
using custom properties/CSS Variables. Essentially, don't use `),d(o.$$.fragment),f=l(`
in Svelte components, do this instead.`)},l(m){t=b(m,"P",{});var $=E(t);u=a($,`This snippet guides you on how to provide a CSS API to component consumers
using custom properties/CSS Variables. Essentially, don't use `),c(o.$$.fragment,$),f=a($,`
in Svelte components, do this instead.`),$.forEach(n)},m(m,$){p(m,t,$),r(t,u),g(o,t,null),r(t,f),s=!0},p:Ce,i(m){s||(y(o.$$.fragment,m),s=!0)},o(m){h(o.$$.fragment,m),s=!1},d(m){m&&n(t),v(o)}}}function Ge(K){let t,u;return t=new Oe({props:{$$slots:{subheading:[De],heading:[He],default:[je]},$$scope:{ctx:K}}}),{c(){d(t.$$.fragment)},l(o){c(t.$$.fragment,o)},m(o,f){g(t,o,f),u=!0},p(o,[f]){const s={};f&1&&(s.$$scope={dirty:f,ctx:o}),t.$set(s)},i(o){u||(y(t.$$.fragment,o),u=!0)},o(o){h(t.$$.fragment,o),u=!1},d(o){v(t,o)}}}class Ye extends Be{constructor(t){super();Ue(this,t,null,Ge,Fe,{})}}export{Ye as default};
