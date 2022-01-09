import{S as Te,i as Ge,s as Ve,E as We,$ as k,e as v,j as b,v as A,c as _,a as y,d as t,l as S,w as C,b as Ue,f,G as o,x as B,H as Ye,J as Je,K as Ke,p as P,n as E,A as H,a0 as Z,a1 as ce,t as a,a2 as ze,g as r}from"../../chunks/vendor-1cada2f6.js";const Le=c=>({}),xe=c=>({});function Ne(c){let n,s,d,I,u,h;const $=c[3].filename,m=We($,c,c[2],xe);return u=new k({props:{language:c[0],code:c[1]}}),{c(){n=v("div"),s=v("div"),d=v("div"),m&&m.c(),I=b(),A(u.$$.fragment),this.h()},l(i){n=_(i,"DIV",{class:!0});var g=y(n);s=_(g,"DIV",{class:!0});var p=y(s);d=_(p,"DIV",{class:!0});var z=y(d);m&&m.l(z),z.forEach(t),p.forEach(t),I=S(g),C(u.$$.fragment,g),g.forEach(t),this.h()},h(){Ue(d,"class","tab svelte-1vqji7p"),Ue(s,"class","tab-bar svelte-1vqji7p"),Ue(n,"class","frame")},m(i,g){f(i,n,g),o(n,s),o(s,d),m&&m.m(d,null),o(n,I),B(u,n,null),h=!0},p(i,[g]){m&&m.p&&(!h||g&4)&&Ye(m,$,i,i[2],h?Ke($,i[2],g,Le):Je(i[2]),xe);const p={};g&1&&(p.language=i[0]),g&2&&(p.code=i[1]),u.$set(p)},i(i){h||(P(m,i),P(u.$$.fragment,i),h=!0)},o(i){E(m,i),E(u.$$.fragment,i),h=!1},d(i){i&&t(n),m&&m.d(i),H(u)}}}function Qe(c,n,s){let{$$slots:d={},$$scope:I}=n,{language:u}=n,{code:h}=n;return c.$$set=$=>{"language"in $&&s(0,u=$.language),"code"in $&&s(1,h=$.code),"$$scope"in $&&s(2,I=$.$$scope)},[u,h,I,d]}class Me extends Te{constructor(n){super();Ge(this,n,Qe,Ne,Ve,{language:0,code:1})}}function Re(c){let n;return{c(){n=a("Button.svelte")},l(s){n=r(s,"Button.svelte")},m(s,d){f(s,n,d)},d(s){s&&t(n)}}}function Xe(c){let n;return{c(){n=a("Parent.svelte")},l(s){n=r(s,"Parent.svelte")},m(s,d){f(s,n,d)},d(s){s&&t(n)}}}function Ze(c){let n,s,d,I,u,h,$,m,i,g,p,z,T,de,ee,$e,ge,se,L,ve,oe,F,_e,G,ye,le,j,ae,D,he,V,we,x,be,re,w,Se,te,Pe,Ee,M,Ie,W,Ae,ie,N,Ce,fe,U,Be,Y,He,J,De,ue,q,me;return T=new k({props:{inline:!0,language:Z,code:":global"}}),G=new k({props:{inline:!0,language:Z,code:"var()"}}),j=new Me({props:{language:ce,code:`<button>
    <slot/>
</button>
<style>
    button {
        color: var(--button-color, red);
        width: var(--button-width, 50px);
    }
</style>`,$$slots:{filename:[Re]},$$scope:{ctx:c}}}),V=new k({props:{inline:!0,language:Z,code:"--button-color"}}),x=new k({props:{inline:!0,language:Z,code:"--button-width"}}),M=new k({props:{inline:!0,language:Z,code:"!important"}}),W=new k({props:{inline:!0,language:Z,code:".repeat.repeat.repeat"}}),Y=new k({props:{inline:!0,language:ce,code:"<style/>"}}),J=new k({props:{inline:!0,language:ce,code:"<div/>"}}),q=new Me({props:{language:ce,code:`<script>
    import Button from"./Button.svelte";
<\/script>
<div class="parent">
    <Button --button-color="blue">Click me!</Button>
    <Button>Click me!</Button>
</div>

<style>
    .parent {
        --button-width: 100px;
    }
</style>`,$$slots:{filename:[Xe]},$$scope:{ctx:c}}}),{c(){n=b(),s=v("h1"),d=a("How to provide a CSS API from your component"),I=b(),u=v("p"),h=a(`With today's Svelte there's no standard way of telling component consumers
    what styles they're allowed to override. You should ideally communicate, what is
    part of your styling API, and what is internal styling. This post
    proposes `),$=v("i"),m=a("one way"),i=a(` (the best way \u{1F60A}) to provide a CSS API for consumers of your
    components or design system.`),g=b(),p=v("p"),z=a("For one...you should not be using the "),A(T.$$.fragment),de=a(`
    selector most of the time (read `),ee=v("i"),$e=a("ever"),ge=a(")."),se=b(),L=v("h2"),ve=a("Structuring the API"),oe=b(),F=v("p"),_e=a("Use valueless CSS custom properties via "),A(G.$$.fragment),ye=a(`
    with your default/intended styles as fallback.`),le=b(),A(j.$$.fragment),ae=b(),D=v("p"),he=a(`The message to consumers of you component should be, "Any selector or
    DOM element you target could change at any time. Only override styles using
    `),A(V.$$.fragment),we=a(` and
    `),A(x.$$.fragment),be=a('".'),re=b(),w=v("p"),Se=a("Using "),te=v("i"),Pe=a("virgin"),Ee=a(`\u{1F440} custom properties also avoids
    `),A(M.$$.fragment),Ie=a(` and
    `),A(W.$$.fragment),Ae=a(` fights for CSS
    specificity.`),ie=b(),N=v("h2"),Ce=a("Using the API"),fe=b(),U=v("p"),Be=a(`Generally, you should override the styles of child components using custom properties
    in the `),A(Y.$$.fragment),He=a(` tag. For one off uses
    you may pass a custom property attribute, but this has the disadvantage that Svelte
    inserts a wrapper `),A(J.$$.fragment),De=a(` into your code
    and will lead to repetition if you are overriding the same style on multiple components.`),ue=b(),A(q.$$.fragment),this.h()},l(e){ze('[data-svelte="svelte-1wsamy0"]',document.head).forEach(t),n=S(e),s=_(e,"H1",{});var ne=y(s);d=r(ne,"How to provide a CSS API from your component"),ne.forEach(t),I=S(e),u=_(e,"P",{});var K=y(u);h=r(K,`With today's Svelte there's no standard way of telling component consumers
    what styles they're allowed to override. You should ideally communicate, what is
    part of your styling API, and what is internal styling. This post
    proposes `),$=_(K,"I",{});var ke=y($);m=r(ke,"one way"),ke.forEach(t),i=r(K,` (the best way \u{1F60A}) to provide a CSS API for consumers of your
    components or design system.`),K.forEach(t),g=S(e),p=_(e,"P",{});var Q=y(p);z=r(Q,"For one...you should not be using the "),C(T.$$.fragment,Q),de=r(Q,`
    selector most of the time (read `),ee=_(Q,"I",{});var Fe=y(ee);$e=r(Fe,"ever"),Fe.forEach(t),ge=r(Q,")."),Q.forEach(t),se=S(e),L=_(e,"H2",{});var je=y(L);ve=r(je,"Structuring the API"),je.forEach(t),oe=S(e),F=_(e,"P",{});var pe=y(F);_e=r(pe,"Use valueless CSS custom properties via "),C(G.$$.fragment,pe),ye=r(pe,`
    with your default/intended styles as fallback.`),pe.forEach(t),le=S(e),C(j.$$.fragment,e),ae=S(e),D=_(e,"P",{});var R=y(D);he=r(R,`The message to consumers of you component should be, "Any selector or
    DOM element you target could change at any time. Only override styles using
    `),C(V.$$.fragment,R),we=r(R,` and
    `),C(x.$$.fragment,R),be=r(R,'".'),R.forEach(t),re=S(e),w=_(e,"P",{});var O=y(w);Se=r(O,"Using "),te=_(O,"I",{});var qe=y(te);Pe=r(qe,"virgin"),qe.forEach(t),Ee=r(O,`\u{1F440} custom properties also avoids
    `),C(M.$$.fragment,O),Ie=r(O,` and
    `),C(W.$$.fragment,O),Ae=r(O,` fights for CSS
    specificity.`),O.forEach(t),ie=S(e),N=_(e,"H2",{});var Oe=y(N);Ce=r(Oe,"Using the API"),Oe.forEach(t),fe=S(e),U=_(e,"P",{});var X=y(U);Be=r(X,`Generally, you should override the styles of child components using custom properties
    in the `),C(Y.$$.fragment,X),He=r(X,` tag. For one off uses
    you may pass a custom property attribute, but this has the disadvantage that Svelte
    inserts a wrapper `),C(J.$$.fragment,X),De=r(X,` into your code
    and will lead to repetition if you are overriding the same style on multiple components.`),X.forEach(t),ue=S(e),C(q.$$.fragment,e),this.h()},h(){document.title="Don't use :global in Svelte components, do this instead."},m(e,l){f(e,n,l),f(e,s,l),o(s,d),f(e,I,l),f(e,u,l),o(u,h),o(u,$),o($,m),o(u,i),f(e,g,l),f(e,p,l),o(p,z),B(T,p,null),o(p,de),o(p,ee),o(ee,$e),o(p,ge),f(e,se,l),f(e,L,l),o(L,ve),f(e,oe,l),f(e,F,l),o(F,_e),B(G,F,null),o(F,ye),f(e,le,l),B(j,e,l),f(e,ae,l),f(e,D,l),o(D,he),B(V,D,null),o(D,we),B(x,D,null),o(D,be),f(e,re,l),f(e,w,l),o(w,Se),o(w,te),o(te,Pe),o(w,Ee),B(M,w,null),o(w,Ie),B(W,w,null),o(w,Ae),f(e,ie,l),f(e,N,l),o(N,Ce),f(e,fe,l),f(e,U,l),o(U,Be),B(Y,U,null),o(U,He),B(J,U,null),o(U,De),f(e,ue,l),B(q,e,l),me=!0},p(e,[l]){const ne={};l&1&&(ne.$$scope={dirty:l,ctx:e}),j.$set(ne);const K={};l&1&&(K.$$scope={dirty:l,ctx:e}),q.$set(K)},i(e){me||(P(T.$$.fragment,e),P(G.$$.fragment,e),P(j.$$.fragment,e),P(V.$$.fragment,e),P(x.$$.fragment,e),P(M.$$.fragment,e),P(W.$$.fragment,e),P(Y.$$.fragment,e),P(J.$$.fragment,e),P(q.$$.fragment,e),me=!0)},o(e){E(T.$$.fragment,e),E(G.$$.fragment,e),E(j.$$.fragment,e),E(V.$$.fragment,e),E(x.$$.fragment,e),E(M.$$.fragment,e),E(W.$$.fragment,e),E(Y.$$.fragment,e),E(J.$$.fragment,e),E(q.$$.fragment,e),me=!1},d(e){e&&t(n),e&&t(s),e&&t(I),e&&t(u),e&&t(g),e&&t(p),H(T),e&&t(se),e&&t(L),e&&t(oe),e&&t(F),H(G),e&&t(le),H(j,e),e&&t(ae),e&&t(D),H(V),H(x),e&&t(re),e&&t(w),H(M),H(W),e&&t(ie),e&&t(N),e&&t(fe),e&&t(U),H(Y),H(J),e&&t(ue),H(q,e)}}}class tt extends Te{constructor(n){super();Ge(this,n,null,Ze,Ve,{})}}export{tt as default};
