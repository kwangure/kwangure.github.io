import{S as ve,i as $e,s as be,v as J,w as M,x as q,p as A,n as F,A as K,a3 as G,a4 as pe,a5 as _e,e as c,t as p,j as d,c as f,a as m,g as u,d as t,l as y,b as ge,f as i,F as l,I as Se}from"../../chunks/vendor-cab6fdc7.js";import{S as ke}from"../../chunks/section.svelte_svelte_type_style_lang-6cd52025.js";function we(O){let o,a,s,n,S,k,Q,R,C,V,X,Y,w,Z,D,g,H,E,ee,N,T,te,U,h,oe,I,se,re,v,$,ne,le,W,b,L,x,ae,z,_,B;return g=new G({props:{language:pe,code:`<button>
    <slot></slot>
</button>
<style>
    button {
        color: var(--button-color, --default-button-color);
    }
    @media (prefers-color-scheme: dark) {
        button {
            --default-button-color: pink;
        }
    }
    @media (prefers-color-scheme: light) {
        button {
            --default-button-color: red;
        }
    }
</style>
`}}),$=new G({props:{language:_e,inline:!0,code:"__layout.svelte"}}),b=new G({props:{language:pe,code:`<script>
    import { onMount } from "svelte";

    const storageKey = "user-theme";

    let preference;
    // Persist user preference
    $: preference && localStorage.setItem(storageKey, JSON.stringify(preference));

    function toggle() {
        preference = preference === 'light'
            ? 'dark'
            : 'light'
    }

    // localStorage and window is only available in the browser
    onMount(() => {
        preference = JSON.parse(localStorage.getItem(storageKey));
        if (!preference) {
            preference = window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
        }

        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', ({ matches: isDark }) => {
                preference = isDark ? 'dark' : 'light'
            })
    });
<\/script>

<div class="layout" data-theme={preference}>
    <button on:click={toggle} aria-label={preference}>
        Switch to {theme.value === 'light': 'dark' : 'light'}
    </button>
    <!--- Your app -->
    <slot></slot>
</div>
`}}),_=new G({props:{language:pe,code:`<button>
    <slot></slot>
</button>
<style>
    button {
        color: var(--button-color, --default-button-color);
    }
    :global([data-theme=dark]) button {
        --default-button-color: pink;
    }
    :global([data-theme=dark]) button {
        --default-button-color: red;
    }
</style>
`}}),{c(){o=c("h2"),a=p("Styling Svelte components based on system preferences"),s=d(),n=c("p"),S=p(`This post assumes you already
`),k=c("a"),Q=p("use custom properties to style your Svelte components"),R=p(`
as guided by the prior snippet in this series. Using custom properties, you should separate the
color values of our component using `),C=c("css"),V=p("prefers-color-scheme"),X=p("."),Y=d(),w=c("p"),Z=p("Your component should look something like this:"),D=d(),J(g.$$.fragment),H=d(),E=c("p"),ee=p(`With your styles separated into dark and light media queries, your components will be themed
based on the dark/light mode system preference of the OS. For some sites, that may be good
enough, but what if you want to allow users to theme your site different from the OS preference?`),N=d(),T=c("h2"),te=p("Style Svelte components based on user preference."),U=d(),h=c("p"),oe=p("To preserve user preference, use JavaScript to store preference in "),I=c("js"),se=p("localStorage"),re=p(`. In your
page component, such as a `),v=c("a"),J($.$$.fragment),ne=p(" in Sveltekit"),le=p(","),W=d(),J(b.$$.fragment),L=d(),x=c("p"),ae=p("Then styling your components based on user preference will look something like this:"),z=d(),J(_.$$.fragment),this.h()},l(e){o=f(e,"H2",{});var r=m(o);a=u(r,"Styling Svelte components based on system preferences"),r.forEach(t),s=y(e),n=f(e,"P",{});var P=m(n);S=u(P,`This post assumes you already
`),k=f(P,"A",{href:!0});var ue=m(k);Q=u(ue,"use custom properties to style your Svelte components"),ue.forEach(t),R=u(P,`
as guided by the prior snippet in this series. Using custom properties, you should separate the
color values of our component using `),C=f(P,"CSS",{});var ce=m(C);V=u(ce,"prefers-color-scheme"),ce.forEach(t),X=u(P,"."),P.forEach(t),Y=y(e),w=f(e,"P",{});var fe=m(w);Z=u(fe,"Your component should look something like this:"),fe.forEach(t),D=y(e),M(g.$$.fragment,e),H=y(e),E=f(e,"P",{});var me=m(E);ee=u(me,`With your styles separated into dark and light media queries, your components will be themed
based on the dark/light mode system preference of the OS. For some sites, that may be good
enough, but what if you want to allow users to theme your site different from the OS preference?`),me.forEach(t),N=y(e),T=f(e,"H2",{});var he=m(T);te=u(he,"Style Svelte components based on user preference."),he.forEach(t),U=y(e),h=f(e,"P",{});var j=m(h);oe=u(j,"To preserve user preference, use JavaScript to store preference in "),I=f(j,"JS",{});var de=m(I);se=u(de,"localStorage"),de.forEach(t),re=u(j,`. In your
page component, such as a `),v=f(j,"A",{href:!0});var ie=m(v);M($.$$.fragment,ie),ne=u(ie," in Sveltekit"),ie.forEach(t),le=u(j,","),j.forEach(t),W=y(e),M(b.$$.fragment,e),L=y(e),x=f(e,"P",{});var ye=m(x);ae=u(ye,"Then styling your components based on user preference will look something like this:"),ye.forEach(t),z=y(e),M(_.$$.fragment,e),this.h()},h(){ge(k,"href","/snippets/how-export-css-api-from-svelte-component"),ge(v,"href","https://kit.svelte.dev/docs/layouts")},m(e,r){i(e,o,r),l(o,a),i(e,s,r),i(e,n,r),l(n,S),l(n,k),l(k,Q),l(n,R),l(n,C),l(C,V),l(n,X),i(e,Y,r),i(e,w,r),l(w,Z),i(e,D,r),q(g,e,r),i(e,H,r),i(e,E,r),l(E,ee),i(e,N,r),i(e,T,r),l(T,te),i(e,U,r),i(e,h,r),l(h,oe),l(h,I),l(I,se),l(h,re),l(h,v),q($,v,null),l(v,ne),l(h,le),i(e,W,r),q(b,e,r),i(e,L,r),i(e,x,r),l(x,ae),i(e,z,r),q(_,e,r),B=!0},p:Se,i(e){B||(A(g.$$.fragment,e),A($.$$.fragment,e),A(b.$$.fragment,e),A(_.$$.fragment,e),B=!0)},o(e){F(g.$$.fragment,e),F($.$$.fragment,e),F(b.$$.fragment,e),F(_.$$.fragment,e),B=!1},d(e){e&&t(o),e&&t(s),e&&t(n),e&&t(Y),e&&t(w),e&&t(D),K(g,e),e&&t(H),e&&t(E),e&&t(N),e&&t(T),e&&t(U),e&&t(h),K($),e&&t(W),K(b,e),e&&t(L),e&&t(x),e&&t(z),K(_,e)}}}function Ee(O){let o;return{c(){o=p("The right way to implement dark mode in Svelte")},l(a){o=u(a,"The right way to implement dark mode in Svelte")},m(a,s){i(a,o,s)},d(a){a&&t(o)}}}function Te(O){let o,a;return{c(){o=c("p"),a=p(`This is a general outline on how to add themes and color-schemes to your
Sveltekit setup using custom-properties/CSS variables and prefers-color-scheme.`)},l(s){o=f(s,"P",{});var n=m(o);a=u(n,`This is a general outline on how to add themes and color-schemes to your
Sveltekit setup using custom-properties/CSS variables and prefers-color-scheme.`),n.forEach(t)},m(s,n){i(s,o,n),l(o,a)},d(s){s&&t(o)}}}function xe(O){let o,a;return o=new ke({props:{$$slots:{subheading:[Te],heading:[Ee],default:[we]},$$scope:{ctx:O}}}),{c(){J(o.$$.fragment)},l(s){M(o.$$.fragment,s)},m(s,n){q(o,s,n),a=!0},p(s,[n]){const S={};n&1&&(S.$$scope={dirty:n,ctx:s}),o.$set(S)},i(s){a||(A(o.$$.fragment,s),a=!0)},o(s){F(o.$$.fragment,s),a=!1},d(s){K(o,s)}}}class Oe extends ve{constructor(o){super();$e(this,o,null,xe,be,{})}}export{Oe as default};
