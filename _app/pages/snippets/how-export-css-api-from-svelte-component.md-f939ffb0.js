import{S as qe,i as Be,s as De,I as Z,L as Ae,e as E,c as C,a as P,d as r,b as ke,f as g,N as Ie,O as Te,P as Ue,p as y,n as v,k as Ge,j as F,E as Ye,l as H,F as u,m as ze,o as Re,a3 as Je,a4 as Ke,v as A,w as k,x as I,A as T,a5 as M,a6 as G,a7 as me,t as c,g as d}from"../../chunks/vendor-59bb169c.js";const Qe=a=>({}),Le=a=>({}),Xe=a=>({}),Ne=a=>({});function Ve(a){return document.title=a[1],{c:Z,l:Z,m:Z,d:Z}}function We(a){let n,l;const s=a[4].subheading,o=Ae(s,a,a[3],Le);return{c(){n=E("h2"),o&&o.c(),this.h()},l(t){n=C(t,"H2",{class:!0});var f=P(n);o&&o.l(f),f.forEach(r),this.h()},h(){ke(n,"class","svelte-3g1fiy")},m(t,f){g(t,n,f),o&&o.m(n,null),l=!0},p(t,f){o&&o.p&&(!l||f&8)&&Ie(o,s,t,t[3],l?Ue(s,t[3],f,Qe):Te(t[3]),Le)},i(t){l||(y(o,t),l=!0)},o(t){v(o,t),l=!1},d(t){t&&r(n),o&&o.d(t)}}}function Ze(a){let n,l,s,o,t,f,p,_=a[1]&&Ve(a);const b=a[4].heading,w=Ae(b,a,a[3],Ne);let m=a[2].subheading&&We(a);const L=a[4].default,S=Ae(L,a,a[3],null);return{c(){_&&_.c(),n=Ge(),l=F(),s=E("article"),o=E("h1"),w&&w.c(),t=F(),m&&m.c(),f=F(),S&&S.c(),this.h()},l(i){const h=Ye('[data-svelte="svelte-1cghhwz"]',document.head);_&&_.l(h),n=Ge(),h.forEach(r),l=H(i),s=C(i,"ARTICLE",{class:!0});var O=P(s);o=C(O,"H1",{class:!0});var N=P(o);w&&w.l(N),N.forEach(r),t=H(O),m&&m.l(O),f=H(O),S&&S.l(O),O.forEach(r),this.h()},h(){ke(o,"class","svelte-3g1fiy"),ke(s,"class","svelte-3g1fiy")},m(i,h){_&&_.m(document.head,null),u(document.head,n),g(i,l,h),g(i,s,h),u(s,o),w&&w.m(o,null),a[5](o),u(s,t),m&&m.m(s,null),u(s,f),S&&S.m(s,null),p=!0},p(i,[h]){i[1]?_||(_=Ve(i),_.c(),_.m(n.parentNode,n)):_&&(_.d(1),_=null),w&&w.p&&(!p||h&8)&&Ie(w,b,i,i[3],p?Ue(b,i[3],h,Xe):Te(i[3]),Ne),i[2].subheading?m?(m.p(i,h),h&4&&y(m,1)):(m=We(i),m.c(),y(m,1),m.m(s,f)):m&&(ze(),v(m,1,1,()=>{m=null}),Re()),S&&S.p&&(!p||h&8)&&Ie(S,L,i,i[3],p?Ue(L,i[3],h,null):Te(i[3]),null)},i(i){p||(y(w,i),y(m),y(S,i),p=!0)},o(i){v(w,i),v(m),v(S,i),p=!1},d(i){_&&_.d(i),r(n),i&&r(l),i&&r(s),w&&w.d(i),a[5](null),m&&m.d(),S&&S.d(i)}}}function xe(a,n,l){let s,{$$slots:o={},$$scope:t}=n;const f=Je(o);let p;function _(b){Ke[b?"unshift":"push"](()=>{p=b,l(0,p)})}return a.$$set=b=>{"$$scope"in b&&l(3,t=b.$$scope)},a.$$.update=()=>{a.$$.dirty&1&&l(1,s=p==null?void 0:p.textContent)},[p,s,f,t,o,_]}class et extends qe{constructor(n){super();Be(this,n,xe,Ze,De,{})}}function tt(a){let n,l,s,o,t,f,p,_,b,w,m,L,S,i,h,O,N,B,ce,V,de,oe,W,le,j,$e,Y,ge,z,_e,re,U,he,se,ye,ve,R,be,J,we,ie,x,Se,ae,q,Ee,K,Ce,Q,Pe,ue,X,fe;return b=new M({props:{language:G,code:":global",inline:!0}}),V=new M({props:{language:G,code:"var()",inline:!0}}),W=new M({props:{language:me,code:`<button>
    <slot></slot>
</button>
<style>
    button {
        color: var(--button-color, red);
        width: var(--button-width, 50px);
    }
</style>`}}),Y=new M({props:{language:G,code:"--button-color",inline:!0}}),z=new M({props:{language:G,code:"--button-width",inline:!0}}),R=new M({props:{language:G,code:"!important",inline:!0}}),J=new M({props:{language:G,code:".repeat.repeat.repeat",inline:!0}}),K=new M({props:{language:me,code:"style",inline:!0}}),Q=new M({props:{language:me,code:"div",inline:!0}}),X=new M({props:{language:me,code:`<script>
    import Button from "./Button.svelte";
<\/script>
<div class="parent">
    <button --button-color="blue">Click me!</button>
    <button>Click me!</button>
</div>
<style>
    .parent {
        --button-width: 100px;
    }
</style>`}}),{c(){n=E("p"),l=c(`With today's Svelte there's no standard way of telling component consumers
what styles they're allowed to override. You should ideally communicate, what is
part of your styling API, and what is internal styling. This post
proposes `),s=E("em"),o=c("one way"),t=c(` (the best way \u{1F60A}) to provide a CSS API for consumers of your
components or design system.`),f=F(),p=E("p"),_=c("For one...you should not be using the "),A(b.$$.fragment),w=c(`
selector most of the time (read `),m=E("em"),L=c("ever"),S=c(")."),i=F(),h=E("h2"),O=c("Structuring the API"),N=F(),B=E("p"),ce=c("Use valueless CSS custom properties via "),A(V.$$.fragment),de=c(" with your default/intended styles as fallback."),oe=F(),A(W.$$.fragment),le=F(),j=E("p"),$e=c(`The message to consumers of you component should be, "Any selector or
DOM element you target could change at any time. Only override styles using
`),A(Y.$$.fragment),ge=c(" or "),A(z.$$.fragment),_e=c("."),re=F(),U=E("p"),he=c("Using "),se=E("em"),ye=c("virgin"),ve=c("\u{1F440} custom properties also avoids "),A(R.$$.fragment),be=c(` and
`),A(J.$$.fragment),we=c(" fights for CSS specificity."),ie=F(),x=E("h2"),Se=c("Using the API"),ae=F(),q=E("p"),Ee=c(`Generally, you should override the styles of child components using custom properties
in the `),A(K.$$.fragment),Ce=c(` tag. For one off uses you may pass a custom property
attribute, but this has the disadvantage that Svelte inserts a wrapper `),A(Q.$$.fragment),Pe=c(`
into your code and will lead to repetition if you are overriding the same style on multiple
components.`),ue=F(),A(X.$$.fragment)},l(e){n=C(e,"P",{});var $=P(n);l=d($,`With today's Svelte there's no standard way of telling component consumers
what styles they're allowed to override. You should ideally communicate, what is
part of your styling API, and what is internal styling. This post
proposes `),s=C($,"EM",{});var Fe=P(s);o=d(Fe,"one way"),Fe.forEach(r),t=d($,` (the best way \u{1F60A}) to provide a CSS API for consumers of your
components or design system.`),$.forEach(r),f=H(e),p=C(e,"P",{});var ee=P(p);_=d(ee,"For one...you should not be using the "),k(b.$$.fragment,ee),w=d(ee,`
selector most of the time (read `),m=C(ee,"EM",{});var He=P(m);L=d(He,"ever"),He.forEach(r),S=d(ee,")."),ee.forEach(r),i=H(e),h=C(e,"H2",{});var Me=P(h);O=d(Me,"Structuring the API"),Me.forEach(r),N=H(e),B=C(e,"P",{});var pe=P(B);ce=d(pe,"Use valueless CSS custom properties via "),k(V.$$.fragment,pe),de=d(pe," with your default/intended styles as fallback."),pe.forEach(r),oe=H(e),k(W.$$.fragment,e),le=H(e),j=C(e,"P",{});var te=P(j);$e=d(te,`The message to consumers of you component should be, "Any selector or
DOM element you target could change at any time. Only override styles using
`),k(Y.$$.fragment,te),ge=d(te," or "),k(z.$$.fragment,te),_e=d(te,"."),te.forEach(r),re=H(e),U=C(e,"P",{});var D=P(U);he=d(D,"Using "),se=C(D,"EM",{});var Oe=P(se);ye=d(Oe,"virgin"),Oe.forEach(r),ve=d(D,"\u{1F440} custom properties also avoids "),k(R.$$.fragment,D),be=d(D,` and
`),k(J.$$.fragment,D),we=d(D," fights for CSS specificity."),D.forEach(r),ie=H(e),x=C(e,"H2",{});var je=P(x);Se=d(je,"Using the API"),je.forEach(r),ae=H(e),q=C(e,"P",{});var ne=P(q);Ee=d(ne,`Generally, you should override the styles of child components using custom properties
in the `),k(K.$$.fragment,ne),Ce=d(ne,` tag. For one off uses you may pass a custom property
attribute, but this has the disadvantage that Svelte inserts a wrapper `),k(Q.$$.fragment,ne),Pe=d(ne,`
into your code and will lead to repetition if you are overriding the same style on multiple
components.`),ne.forEach(r),ue=H(e),k(X.$$.fragment,e)},m(e,$){g(e,n,$),u(n,l),u(n,s),u(s,o),u(n,t),g(e,f,$),g(e,p,$),u(p,_),I(b,p,null),u(p,w),u(p,m),u(m,L),u(p,S),g(e,i,$),g(e,h,$),u(h,O),g(e,N,$),g(e,B,$),u(B,ce),I(V,B,null),u(B,de),g(e,oe,$),I(W,e,$),g(e,le,$),g(e,j,$),u(j,$e),I(Y,j,null),u(j,ge),I(z,j,null),u(j,_e),g(e,re,$),g(e,U,$),u(U,he),u(U,se),u(se,ye),u(U,ve),I(R,U,null),u(U,be),I(J,U,null),u(U,we),g(e,ie,$),g(e,x,$),u(x,Se),g(e,ae,$),g(e,q,$),u(q,Ee),I(K,q,null),u(q,Ce),I(Q,q,null),u(q,Pe),g(e,ue,$),I(X,e,$),fe=!0},p:Z,i(e){fe||(y(b.$$.fragment,e),y(V.$$.fragment,e),y(W.$$.fragment,e),y(Y.$$.fragment,e),y(z.$$.fragment,e),y(R.$$.fragment,e),y(J.$$.fragment,e),y(K.$$.fragment,e),y(Q.$$.fragment,e),y(X.$$.fragment,e),fe=!0)},o(e){v(b.$$.fragment,e),v(V.$$.fragment,e),v(W.$$.fragment,e),v(Y.$$.fragment,e),v(z.$$.fragment,e),v(R.$$.fragment,e),v(J.$$.fragment,e),v(K.$$.fragment,e),v(Q.$$.fragment,e),v(X.$$.fragment,e),fe=!1},d(e){e&&r(n),e&&r(f),e&&r(p),T(b),e&&r(i),e&&r(h),e&&r(N),e&&r(B),T(V),e&&r(oe),T(W,e),e&&r(le),e&&r(j),T(Y),T(z),e&&r(re),e&&r(U),T(R),T(J),e&&r(ie),e&&r(x),e&&r(ae),e&&r(q),T(K),T(Q),e&&r(ue),T(X,e)}}}function nt(a){let n,l,s,o;return l=new M({props:{language:G,code:":global",inline:!0}}),{c(){n=c("The "),A(l.$$.fragment),s=c(" CSS selector considered harmful")},l(t){n=d(t,"The "),k(l.$$.fragment,t),s=d(t," CSS selector considered harmful")},m(t,f){g(t,n,f),I(l,t,f),g(t,s,f),o=!0},p:Z,i(t){o||(y(l.$$.fragment,t),o=!0)},o(t){v(l.$$.fragment,t),o=!1},d(t){t&&r(n),T(l,t),t&&r(s)}}}function st(a){let n,l,s,o;return l=new M({props:{language:G,code:":global",inline:!0}}),{c(){n=c(`This snippet guides you on how to provide a CSS API to component consumers
    using custom properties/CSS Variables. Essentially, don't use
    `),A(l.$$.fragment),s=c(` in Svelte components,
    do this instead.`)},l(t){n=d(t,`This snippet guides you on how to provide a CSS API to component consumers
    using custom properties/CSS Variables. Essentially, don't use
    `),k(l.$$.fragment,t),s=d(t,` in Svelte components,
    do this instead.`)},m(t,f){g(t,n,f),I(l,t,f),g(t,s,f),o=!0},p:Z,i(t){o||(y(l.$$.fragment,t),o=!0)},o(t){v(l.$$.fragment,t),o=!1},d(t){t&&r(n),T(l,t),t&&r(s)}}}function ot(a){let n,l;return n=new et({props:{$$slots:{subheading:[st],heading:[nt],default:[tt]},$$scope:{ctx:a}}}),{c(){A(n.$$.fragment)},l(s){k(n.$$.fragment,s)},m(s,o){I(n,s,o),l=!0},p(s,[o]){const t={};o&1&&(t.$$scope={dirty:o,ctx:s}),n.$set(t)},i(s){l||(y(n.$$.fragment,s),l=!0)},o(s){v(n.$$.fragment,s),l=!1},d(s){T(n,s)}}}class rt extends qe{constructor(n){super();Be(this,n,null,ot,De,{})}}export{rt as default};
