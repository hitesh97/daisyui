import{S as I,i as V,s as q,w as v,k as H,x as b,m as C,y as w,g as p,q as x,o as g,B as k,d as l,e as d,t as h,c as m,a as f,h as _,b as u,H as $,L as D}from"../../chunks/vendor-bfed1aed.js";import{C as P,a as j}from"../../chunks/ClassTable-225b3e1d.js";import"../../chunks/preload-helper-ec9aa979.js";import"../../chunks/stores-7e0df911.js";function R(c){let e,a,r;return{c(){e=d("div"),a=d("div"),r=h("Hello!"),this.h()},l(t){e=m(t,"DIV",{class:!0});var s=f(e);a=m(s,"DIV",{class:!0});var n=f(a);r=_(n,"Hello!"),n.forEach(l),s.forEach(l),this.h()},h(){u(a,"class","flex justify-center px-4 py-16 border-t border-base-300"),u(e,"class","border mockup-window border-base-300 w-full")},m(t,s){p(t,e,s),$(e,a),$(a,r)},d(t){t&&l(e)}}}function S(c){let e,a=`<div class="border mockup-window border-base-300">
  <div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
</div>`,r;return{c(){e=d("pre"),r=h(a),this.h()},l(t){e=m(t,"PRE",{slot:!0});var s=f(e);r=_(s,a),s.forEach(l),this.h()},h(){u(e,"slot","html")},m(t,s){p(t,e,s),$(e,r)},p:D,d(t){t&&l(e)}}}function W(c){let e,a,r;return{c(){e=d("div"),a=d("div"),r=h("Hello!"),this.h()},l(t){e=m(t,"DIV",{class:!0});var s=f(e);a=m(s,"DIV",{class:!0});var n=f(a);r=_(n,"Hello!"),n.forEach(l),s.forEach(l),this.h()},h(){u(a,"class","flex justify-center px-4 py-16 bg-base-200"),u(e,"class","border mockup-window bg-base-300 w-full")},m(t,s){p(t,e,s),$(e,a),$(a,r)},d(t){t&&l(e)}}}function B(c){let e,a=`<div class="border mockup-window bg-base-300">
  <div class="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
</div>`,r;return{c(){e=d("pre"),r=h(a),this.h()},l(t){e=m(t,"PRE",{slot:!0});var s=f(e);r=_(s,a),s.forEach(l),this.h()},h(){u(e,"slot","html")},m(t,s){p(t,e,s),$(e,r)},p:D,d(t){t&&l(e)}}}function L(c){let e,a,r,t,s,n;return e=new P({props:{data:[{type:"component",class:"mockup-window",desc:"Container element"}]}}),r=new j({props:{title:"window mockup with border",$$slots:{html:[S],default:[R]},$$scope:{ctx:c}}}),s=new j({props:{title:"window mockup with background color",$$slots:{html:[B],default:[W]},$$scope:{ctx:c}}}),{c(){v(e.$$.fragment),a=H(),v(r.$$.fragment),t=H(),v(s.$$.fragment)},l(o){b(e.$$.fragment,o),a=C(o),b(r.$$.fragment,o),t=C(o),b(s.$$.fragment,o)},m(o,i){w(e,o,i),p(o,a,i),w(r,o,i),p(o,t,i),w(s,o,i),n=!0},p(o,[i]){const y={};i&1&&(y.$$scope={dirty:i,ctx:o}),r.$set(y);const E={};i&1&&(E.$$scope={dirty:i,ctx:o}),s.$set(E)},i(o){n||(x(e.$$.fragment,o),x(r.$$.fragment,o),x(s.$$.fragment,o),n=!0)},o(o){g(e.$$.fragment,o),g(r.$$.fragment,o),g(s.$$.fragment,o),n=!1},d(o){k(e,o),o&&l(a),k(r,o),o&&l(t),k(s,o)}}}const F={title:"Window mockup",desc:"Window mockup shows a box that looks like an operating system window.",published:!0};class G extends I{constructor(e){super();V(this,e,null,L,q,{})}}export{G as default,F as metadata};
