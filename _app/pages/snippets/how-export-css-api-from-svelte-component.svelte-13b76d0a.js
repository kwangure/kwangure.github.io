import{S as je,i as qe,s as xe,L as We,a3 as H,e as v,j as b,v as A,c as _,a as y,d as t,l as S,w as C,b as Fe,f,F as o,x as k,N as Ye,O as Le,P as Ne,p as P,n as E,A as B,a4 as Z,a5 as ce,t as a,E as ze,g as r}from"../../chunks/vendor-d030baba.js";const Je=c=>({}),Ge=c=>({});function Ke(c){let n,s,d,I,u,h;const $=c[3].filename,m=We($,c,c[2],Ge);return u=new H({props:{language:c[0],code:c[1]}}),{c(){n=v("div"),s=v("div"),d=v("div"),m&&m.c(),I=b(),A(u.$$.fragment),this.h()},l(i){n=_(i,"DIV",{class:!0});var g=y(n);s=_(g,"DIV",{class:!0});var p=y(s);d=_(p,"DIV",{class:!0});var z=y(d);m&&m.l(z),z.forEach(t),p.forEach(t),I=S(g),C(u.$$.fragment,g),g.forEach(t),this.h()},h(){Fe(d,"class","tab svelte-1fknklp"),Fe(s,"class","tab-bar svelte-1fknklp"),Fe(n,"class","frame svelte-1fknklp")},m(i,g){f(i,n,g),o(n,s),o(s,d),m&&m.m(d,null),o(n,I),k(u,n,null),h=!0},p(i,[g]){m&&m.p&&(!h||g&4)&&Ye(m,$,i,i[2],h?Ne($,i[2],g,Je):Le(i[2]),Ge);const p={};g&1&&(p.language=i[0]),g&2&&(p.code=i[1]),u.$set(p)},i(i){h||(P(m,i),P(u.$$.fragment,i),h=!0)},o(i){E(m,i),E(u.$$.fragment,i),h=!1},d(i){i&&t(n),m&&m.d(i),B(u)}}}function Qe(c,n,s){let{$$slots:d={},$$scope:I}=n,{language:u}=n,{code:h}=n;return c.$$set=$=>{"language"in $&&s(0,u=$.language),"code"in $&&s(1,h=$.code),"$$scope"in $&&s(2,I=$.$$scope)},[u,h,I,d]}class Me extends je{constructor(n){super();qe(this,n,Qe,Ke,xe,{language:0,code:1})}}function Re(c){let n;return{c(){n=a("Button.svelte")},l(s){n=r(s,"Button.svelte")},m(s,d){f(s,n,d)},d(s){s&&t(n)}}}function Xe(c){let n;return{c(){n=a("Parent.svelte")},l(s){n=r(s,"Parent.svelte")},m(s,d){f(s,n,d)},d(s){s&&t(n)}}}function Ze(c){let n,s,d,I,u,h,$,m,i,g,p,z,j,de,ee,$e,ge,se,J,ve,oe,U,_e,q,ye,le,O,ae,D,he,x,we,G,be,re,w,Se,te,Pe,Ee,M,Ie,W,Ae,ie,K,Ce,fe,F,ke,Y,Be,L,De,ue,T,me;return j=new H({props:{inline:!0,language:Z,code:":global"}}),q=new H({props:{inline:!0,language:Z,code:"var()"}}),O=new Me({props:{language:ce,code:`<button>
    <slot/>
</button>
<style>
    button {
        color: var(--button-color, red);
        width: var(--button-width, 50px);
    }
</style>`,$$slots:{filename:[Re]},$$scope:{ctx:c}}}),x=new H({props:{inline:!0,language:Z,code:"--button-color"}}),G=new H({props:{inline:!0,language:Z,code:"--button-width"}}),M=new H({props:{inline:!0,language:Z,code:"!important"}}),W=new H({props:{inline:!0,language:Z,code:".repeat.repeat.repeat"}}),Y=new H({props:{inline:!0,language:ce,code:"<style/>"}}),L=new H({props:{inline:!0,language:ce,code:"<div/>"}}),T=new Me({props:{language:ce,code:`<script>
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
    components or design system.`),g=b(),p=v("p"),z=a("For one...you should not be using the "),A(j.$$.fragment),de=a(`
    selector most of the time (read `),ee=v("i"),$e=a("ever"),ge=a(")."),se=b(),J=v("h2"),ve=a("Structuring the API"),oe=b(),U=v("p"),_e=a("Use valueless CSS custom properties via "),A(q.$$.fragment),ye=a(`
    with your default/intended styles as fallback.`),le=b(),A(O.$$.fragment),ae=b(),D=v("p"),he=a(`The message to consumers of you component should be, "Any selector or
    DOM element you target could change at any time. Only override styles using
    `),A(x.$$.fragment),we=a(` and
    `),A(G.$$.fragment),be=a('".'),re=b(),w=v("p"),Se=a("Using "),te=v("i"),Pe=a("virgin"),Ee=a(`\u{1F440} custom properties also avoids
    `),A(M.$$.fragment),Ie=a(` and
    `),A(W.$$.fragment),Ae=a(` fights for CSS
    specificity.`),ie=b(),K=v("h2"),Ce=a("Using the API"),fe=b(),F=v("p"),ke=a(`Generally, you should override the styles of child components using custom properties
    in the `),A(Y.$$.fragment),Be=a(` tag. For one off uses
    you may pass a custom property attribute, but this has the disadvantage that Svelte
    inserts a wrapper `),A(L.$$.fragment),De=a(` into your code
    and will lead to repetition if you are overriding the same style on multiple components.`),ue=b(),A(T.$$.fragment),this.h()},l(e){ze('[data-svelte="svelte-1wsamy0"]',document.head).forEach(t),n=S(e),s=_(e,"H1",{});var ne=y(s);d=r(ne,"How to provide a CSS API from your component"),ne.forEach(t),I=S(e),u=_(e,"P",{});var N=y(u);h=r(N,`With today's Svelte there's no standard way of telling component consumers
    what styles they're allowed to override. You should ideally communicate, what is
    part of your styling API, and what is internal styling. This post
    proposes `),$=_(N,"I",{});var He=y($);m=r(He,"one way"),He.forEach(t),i=r(N,` (the best way \u{1F60A}) to provide a CSS API for consumers of your
    components or design system.`),N.forEach(t),g=S(e),p=_(e,"P",{});var Q=y(p);z=r(Q,"For one...you should not be using the "),C(j.$$.fragment,Q),de=r(Q,`
    selector most of the time (read `),ee=_(Q,"I",{});var Ue=y(ee);$e=r(Ue,"ever"),Ue.forEach(t),ge=r(Q,")."),Q.forEach(t),se=S(e),J=_(e,"H2",{});var Oe=y(J);ve=r(Oe,"Structuring the API"),Oe.forEach(t),oe=S(e),U=_(e,"P",{});var pe=y(U);_e=r(pe,"Use valueless CSS custom properties via "),C(q.$$.fragment,pe),ye=r(pe,`
    with your default/intended styles as fallback.`),pe.forEach(t),le=S(e),C(O.$$.fragment,e),ae=S(e),D=_(e,"P",{});var R=y(D);he=r(R,`The message to consumers of you component should be, "Any selector or
    DOM element you target could change at any time. Only override styles using
    `),C(x.$$.fragment,R),we=r(R,` and
    `),C(G.$$.fragment,R),be=r(R,'".'),R.forEach(t),re=S(e),w=_(e,"P",{});var V=y(w);Se=r(V,"Using "),te=_(V,"I",{});var Te=y(te);Pe=r(Te,"virgin"),Te.forEach(t),Ee=r(V,`\u{1F440} custom properties also avoids
    `),C(M.$$.fragment,V),Ie=r(V,` and
    `),C(W.$$.fragment,V),Ae=r(V,` fights for CSS
    specificity.`),V.forEach(t),ie=S(e),K=_(e,"H2",{});var Ve=y(K);Ce=r(Ve,"Using the API"),Ve.forEach(t),fe=S(e),F=_(e,"P",{});var X=y(F);ke=r(X,`Generally, you should override the styles of child components using custom properties
    in the `),C(Y.$$.fragment,X),Be=r(X,` tag. For one off uses
    you may pass a custom property attribute, but this has the disadvantage that Svelte
    inserts a wrapper `),C(L.$$.fragment,X),De=r(X,` into your code
    and will lead to repetition if you are overriding the same style on multiple components.`),X.forEach(t),ue=S(e),C(T.$$.fragment,e),this.h()},h(){document.title="Don't use :global in Svelte components, do this instead."},m(e,l){f(e,n,l),f(e,s,l),o(s,d),f(e,I,l),f(e,u,l),o(u,h),o(u,$),o($,m),o(u,i),f(e,g,l),f(e,p,l),o(p,z),k(j,p,null),o(p,de),o(p,ee),o(ee,$e),o(p,ge),f(e,se,l),f(e,J,l),o(J,ve),f(e,oe,l),f(e,U,l),o(U,_e),k(q,U,null),o(U,ye),f(e,le,l),k(O,e,l),f(e,ae,l),f(e,D,l),o(D,he),k(x,D,null),o(D,we),k(G,D,null),o(D,be),f(e,re,l),f(e,w,l),o(w,Se),o(w,te),o(te,Pe),o(w,Ee),k(M,w,null),o(w,Ie),k(W,w,null),o(w,Ae),f(e,ie,l),f(e,K,l),o(K,Ce),f(e,fe,l),f(e,F,l),o(F,ke),k(Y,F,null),o(F,Be),k(L,F,null),o(F,De),f(e,ue,l),k(T,e,l),me=!0},p(e,[l]){const ne={};l&1&&(ne.$$scope={dirty:l,ctx:e}),O.$set(ne);const N={};l&1&&(N.$$scope={dirty:l,ctx:e}),T.$set(N)},i(e){me||(P(j.$$.fragment,e),P(q.$$.fragment,e),P(O.$$.fragment,e),P(x.$$.fragment,e),P(G.$$.fragment,e),P(M.$$.fragment,e),P(W.$$.fragment,e),P(Y.$$.fragment,e),P(L.$$.fragment,e),P(T.$$.fragment,e),me=!0)},o(e){E(j.$$.fragment,e),E(q.$$.fragment,e),E(O.$$.fragment,e),E(x.$$.fragment,e),E(G.$$.fragment,e),E(M.$$.fragment,e),E(W.$$.fragment,e),E(Y.$$.fragment,e),E(L.$$.fragment,e),E(T.$$.fragment,e),me=!1},d(e){e&&t(n),e&&t(s),e&&t(I),e&&t(u),e&&t(g),e&&t(p),B(j),e&&t(se),e&&t(J),e&&t(oe),e&&t(U),B(q),e&&t(le),B(O,e),e&&t(ae),e&&t(D),B(x),B(G),e&&t(re),e&&t(w),B(M),B(W),e&&t(ie),e&&t(K),e&&t(fe),e&&t(F),B(Y),B(L),e&&t(ue),B(T,e)}}}class tt extends je{constructor(n){super();qe(this,n,null,Ze,xe,{})}}export{tt as default};
