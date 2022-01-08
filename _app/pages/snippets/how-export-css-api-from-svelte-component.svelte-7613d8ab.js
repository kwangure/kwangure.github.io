import{S as Oe,i as Te,s as Ge,E as Ve,$ as O,e as v,j as P,v as A,c as h,a as y,d as o,l as E,w as C,b as je,f as u,G as c,x as B,H as Me,J as We,K as Ye,p as w,n as b,A as H,t as i,a0 as Le,g as f,U as k}from"../../chunks/vendor-22f074c9.js";const Ne=r=>({}),Je=r=>({}),Qe=r=>({}),Ke=r=>({});function Re(r){let n;const s=r[1].code,t=Ve(s,r,r[2],Je);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,$){t&&t.m(l,$),n=!0},p(l,$){t&&t.p&&(!n||$&4)&&Me(t,s,l,l[2],n?Ye(s,l[2],$,Ne):We(l[2]),Je)},i(l){n||(w(t,l),n=!0)},o(l){b(t,l),n=!1},d(l){t&&t.d(l)}}}function Xe(r){let n,s,t,l,$,g;const F=r[1].filename,m=Ve(F,r,r[2],Ke);return $=new O({props:{language:r[0],$$slots:{default:[Re]},$$scope:{ctx:r}}}),{c(){n=v("div"),s=v("div"),t=v("div"),m&&m.c(),l=P(),A($.$$.fragment),this.h()},l(p){n=h(p,"DIV",{class:!0});var _=y(n);s=h(_,"DIV",{class:!0});var d=y(s);t=h(d,"DIV",{class:!0});var X=y(t);m&&m.l(X),X.forEach(o),d.forEach(o),l=E(_),C($.$$.fragment,_),_.forEach(o),this.h()},h(){je(t,"class","tab svelte-1vqji7p"),je(s,"class","tab-bar svelte-1vqji7p"),je(n,"class","frame")},m(p,_){u(p,n,_),c(n,s),c(s,t),m&&m.m(t,null),c(n,l),B($,n,null),g=!0},p(p,[_]){m&&m.p&&(!g||_&4)&&Me(m,F,p,p[2],g?Ye(F,p[2],_,Qe):We(p[2]),Ke);const d={};_&1&&(d.language=p[0]),_&4&&(d.$$scope={dirty:_,ctx:p}),$.$set(d)},i(p){g||(w(m,p),w($.$$.fragment,p),g=!0)},o(p){b(m,p),b($.$$.fragment,p),g=!1},d(p){p&&o(n),m&&m.d(p),H($)}}}function Ze(r,n,s){let{$$slots:t={},$$scope:l}=n,{language:$}=n;return r.$$set=g=>{"language"in g&&s(0,$=g.language),"$$scope"in g&&s(2,l=g.$$scope)},[$,t,l]}class ze extends Oe{constructor(n){super();Te(this,n,Ze,Xe,Ge,{language:0})}}function xe(r){let n=":global()",s;return{c(){s=i(n)},l(t){s=f(t,n)},m(t,l){u(t,s,l)},p:k,d(t){t&&o(s)}}}function et(r){let n="var()",s;return{c(){s=i(n)},l(t){s=f(t,n)},m(t,l){u(t,s,l)},p:k,d(t){t&&o(s)}}}function tt(r){let n;return{c(){n=i("Button.svelte")},l(s){n=f(s,"Button.svelte")},m(s,t){u(s,n,t)},d(s){s&&o(n)}}}function st(r){let n=`
<button>
    <slot/>
</button>
<style>
    button {
        color: var(--button-color, red);
        width: var(--button-width, 50px);
    }
</style>
`.trim()+"",s;return{c(){s=i(n)},l(t){s=f(t,n)},m(t,l){u(t,s,l)},p:k,d(t){t&&o(s)}}}function nt(r){let n="--button-color",s;return{c(){s=i(n)},l(t){s=f(t,n)},m(t,l){u(t,s,l)},p:k,d(t){t&&o(s)}}}function ot(r){let n="--button-width",s;return{c(){s=i(n)},l(t){s=f(t,n)},m(t,l){u(t,s,l)},p:k,d(t){t&&o(s)}}}function lt(r){let n="!important",s;return{c(){s=i(n)},l(t){s=f(t,n)},m(t,l){u(t,s,l)},p:k,d(t){t&&o(s)}}}function at(r){let n=".repeat.repeat.repeat",s;return{c(){s=i(n)},l(t){s=f(t,n)},m(t,l){u(t,s,l)},p:k,d(t){t&&o(s)}}}function rt(r){let n="<style/>",s;return{c(){s=i(n)},l(t){s=f(t,n)},m(t,l){u(t,s,l)},p:k,d(t){t&&o(s)}}}function it(r){let n="<div/>",s;return{c(){s=i(n)},l(t){s=f(t,n)},m(t,l){u(t,s,l)},p:k,d(t){t&&o(s)}}}function ft(r){let n;return{c(){n=i("Parent.svelte")},l(s){n=f(s,"Parent.svelte")},m(s,t){u(s,n,t)},d(s){s&&o(n)}}}function ut(r){let n=`
<script>
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
`.trim()+"",s;return{c(){s=i(n)},l(t){s=f(t,n)},m(t,l){u(t,s,l)},p:k,d(t){t&&o(s)}}}function ct(r){let n,s,t,l,$,g,F,m,p,_,d,X,T,ge,te,ve,he,ie,Z,ye,fe,G,we,V,be,ue,M,ce,U,Se,W,Pe,Y,Ee,$e,S,Ie,se,Ae,Ce,J,Be,K,He,pe,x,Ue,me,D,De,z,ke,L,Fe,_e,N,de;return T=new O({props:{inline:!0,language:"css",$$slots:{default:[xe]},$$scope:{ctx:r}}}),V=new O({props:{inline:!0,language:"css",$$slots:{default:[et]},$$scope:{ctx:r}}}),M=new ze({props:{language:"svelte",$$slots:{code:[st],filename:[tt]},$$scope:{ctx:r}}}),W=new O({props:{inline:!0,language:"css",$$slots:{default:[nt]},$$scope:{ctx:r}}}),Y=new O({props:{inline:!0,language:"css",$$slots:{default:[ot]},$$scope:{ctx:r}}}),J=new O({props:{inline:!0,language:"css",$$slots:{default:[lt]},$$scope:{ctx:r}}}),K=new O({props:{inline:!0,language:"css",$$slots:{default:[at]},$$scope:{ctx:r}}}),z=new O({props:{inline:!0,language:"svelte",$$slots:{default:[rt]},$$scope:{ctx:r}}}),L=new O({props:{inline:!0,language:"svelte",$$slots:{default:[it]},$$scope:{ctx:r}}}),N=new ze({props:{language:"svelte",$$slots:{code:[ut],filename:[ft]},$$scope:{ctx:r}}}),{c(){n=P(),s=v("h1"),t=i("How to provide a CSS API from your component"),l=P(),$=v("p"),g=i(`With today's Svelte there's no standard way of telling component consumers
    what styles they're allowed to override. You should ideally communicate, what is
    part of your styling API, and what is internal styling. This post
    proposes `),F=v("i"),m=i("one way"),p=i(` (the best way \u{1F60A}) to provide a CSS API for consumers of your
    components or design system.`),_=P(),d=v("p"),X=i("For one...you should not be using the "),A(T.$$.fragment),ge=i(`
    selector most of the time (read `),te=v("i"),ve=i("ever"),he=i(")."),ie=P(),Z=v("h2"),ye=i("Structuring the API"),fe=P(),G=v("p"),we=i("Use valueless CSS custom properties via "),A(V.$$.fragment),be=i(`
    with your default/intended styles as fallback.`),ue=P(),A(M.$$.fragment),ce=P(),U=v("p"),Se=i(`The message to consumers of you component should be, "Any selector or
    DOM element you target could change at any time. Only override styles using
    `),A(W.$$.fragment),Pe=i(` and
    `),A(Y.$$.fragment),Ee=i('".'),$e=P(),S=v("p"),Ie=i("Using "),se=v("i"),Ae=i("virgin"),Ce=i(`\u{1F440} custom properties also avoids
    `),A(J.$$.fragment),Be=i(` and
    `),A(K.$$.fragment),He=i(` fights for CSS
    specificity.`),pe=P(),x=v("h2"),Ue=i("Using the API"),me=P(),D=v("p"),De=i(`Generally, you should override the styles of child components using custom properties
    in the `),A(z.$$.fragment),ke=i(` tag. For one off uses
    you may pass a custom property attribute, but this has the disadvantage that Svelte
    inserts a wrapper `),A(L.$$.fragment),Fe=i(` into your code
    and will lead to repetition if you are overriding the same style on multiple components.`),_e=P(),A(N.$$.fragment),this.h()},l(e){Le('[data-svelte="svelte-1wsamy0"]',document.head).forEach(o),n=E(e),s=h(e,"H1",{});var ne=y(s);t=f(ne,"How to provide a CSS API from your component"),ne.forEach(o),l=E(e),$=h(e,"P",{});var Q=y($);g=f(Q,`With today's Svelte there's no standard way of telling component consumers
    what styles they're allowed to override. You should ideally communicate, what is
    part of your styling API, and what is internal styling. This post
    proposes `),F=h(Q,"I",{});var oe=y(F);m=f(oe,"one way"),oe.forEach(o),p=f(Q,` (the best way \u{1F60A}) to provide a CSS API for consumers of your
    components or design system.`),Q.forEach(o),_=E(e),d=h(e,"P",{});var j=y(d);X=f(j,"For one...you should not be using the "),C(T.$$.fragment,j),ge=f(j,`
    selector most of the time (read `),te=h(j,"I",{});var le=y(te);ve=f(le,"ever"),le.forEach(o),he=f(j,")."),j.forEach(o),ie=E(e),Z=h(e,"H2",{});var ae=y(Z);ye=f(ae,"Structuring the API"),ae.forEach(o),fe=E(e),G=h(e,"P",{});var R=y(G);we=f(R,"Use valueless CSS custom properties via "),C(V.$$.fragment,R),be=f(R,`
    with your default/intended styles as fallback.`),R.forEach(o),ue=E(e),C(M.$$.fragment,e),ce=E(e),U=h(e,"P",{});var q=y(U);Se=f(q,`The message to consumers of you component should be, "Any selector or
    DOM element you target could change at any time. Only override styles using
    `),C(W.$$.fragment,q),Pe=f(q,` and
    `),C(Y.$$.fragment,q),Ee=f(q,'".'),q.forEach(o),$e=E(e),S=h(e,"P",{});var I=y(S);Ie=f(I,"Using "),se=h(I,"I",{});var re=y(se);Ae=f(re,"virgin"),re.forEach(o),Ce=f(I,`\u{1F440} custom properties also avoids
    `),C(J.$$.fragment,I),Be=f(I,` and
    `),C(K.$$.fragment,I),He=f(I,` fights for CSS
    specificity.`),I.forEach(o),pe=E(e),x=h(e,"H2",{});var qe=y(x);Ue=f(qe,"Using the API"),qe.forEach(o),me=E(e),D=h(e,"P",{});var ee=y(D);De=f(ee,`Generally, you should override the styles of child components using custom properties
    in the `),C(z.$$.fragment,ee),ke=f(ee,` tag. For one off uses
    you may pass a custom property attribute, but this has the disadvantage that Svelte
    inserts a wrapper `),C(L.$$.fragment,ee),Fe=f(ee,` into your code
    and will lead to repetition if you are overriding the same style on multiple components.`),ee.forEach(o),_e=E(e),C(N.$$.fragment,e),this.h()},h(){document.title="Don't use :global in Svelte components, do this instead."},m(e,a){u(e,n,a),u(e,s,a),c(s,t),u(e,l,a),u(e,$,a),c($,g),c($,F),c(F,m),c($,p),u(e,_,a),u(e,d,a),c(d,X),B(T,d,null),c(d,ge),c(d,te),c(te,ve),c(d,he),u(e,ie,a),u(e,Z,a),c(Z,ye),u(e,fe,a),u(e,G,a),c(G,we),B(V,G,null),c(G,be),u(e,ue,a),B(M,e,a),u(e,ce,a),u(e,U,a),c(U,Se),B(W,U,null),c(U,Pe),B(Y,U,null),c(U,Ee),u(e,$e,a),u(e,S,a),c(S,Ie),c(S,se),c(se,Ae),c(S,Ce),B(J,S,null),c(S,Be),B(K,S,null),c(S,He),u(e,pe,a),u(e,x,a),c(x,Ue),u(e,me,a),u(e,D,a),c(D,De),B(z,D,null),c(D,ke),B(L,D,null),c(D,Fe),u(e,_e,a),B(N,e,a),de=!0},p(e,[a]){const ne={};a&1&&(ne.$$scope={dirty:a,ctx:e}),T.$set(ne);const Q={};a&1&&(Q.$$scope={dirty:a,ctx:e}),V.$set(Q);const oe={};a&1&&(oe.$$scope={dirty:a,ctx:e}),M.$set(oe);const j={};a&1&&(j.$$scope={dirty:a,ctx:e}),W.$set(j);const le={};a&1&&(le.$$scope={dirty:a,ctx:e}),Y.$set(le);const ae={};a&1&&(ae.$$scope={dirty:a,ctx:e}),J.$set(ae);const R={};a&1&&(R.$$scope={dirty:a,ctx:e}),K.$set(R);const q={};a&1&&(q.$$scope={dirty:a,ctx:e}),z.$set(q);const I={};a&1&&(I.$$scope={dirty:a,ctx:e}),L.$set(I);const re={};a&1&&(re.$$scope={dirty:a,ctx:e}),N.$set(re)},i(e){de||(w(T.$$.fragment,e),w(V.$$.fragment,e),w(M.$$.fragment,e),w(W.$$.fragment,e),w(Y.$$.fragment,e),w(J.$$.fragment,e),w(K.$$.fragment,e),w(z.$$.fragment,e),w(L.$$.fragment,e),w(N.$$.fragment,e),de=!0)},o(e){b(T.$$.fragment,e),b(V.$$.fragment,e),b(M.$$.fragment,e),b(W.$$.fragment,e),b(Y.$$.fragment,e),b(J.$$.fragment,e),b(K.$$.fragment,e),b(z.$$.fragment,e),b(L.$$.fragment,e),b(N.$$.fragment,e),de=!1},d(e){e&&o(n),e&&o(s),e&&o(l),e&&o($),e&&o(_),e&&o(d),H(T),e&&o(ie),e&&o(Z),e&&o(fe),e&&o(G),H(V),e&&o(ue),H(M,e),e&&o(ce),e&&o(U),H(W),H(Y),e&&o($e),e&&o(S),H(J),H(K),e&&o(pe),e&&o(x),e&&o(me),e&&o(D),H(z),H(L),e&&o(_e),H(N,e)}}}class pt extends Oe{constructor(n){super();Te(this,n,null,ct,Ge,{})}}export{pt as default};
