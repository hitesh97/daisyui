import{S as q,i as D,s as R,w as T,k as _,x as E,m as v,y as x,g,q as N,o as U,B as w,d as c,e as d,t as B,c as f,a as $,h as y,b as r,H as i,L as O}from"../../chunks/vendor-bfed1aed.js";import{C as S,a as C}from"../../chunks/ClassTable-225b3e1d.js";import"../../chunks/preload-helper-ec9aa979.js";import"../../chunks/stores-7e0df911.js";function V(h){let t,s,l,n,a,p,e,o,m;return{c(){t=d("div"),s=d("button"),l=B("Button"),n=_(),a=d("button"),p=B("Button"),e=_(),o=d("button"),m=B("Button"),this.h()},l(u){t=f(u,"DIV",{class:!0});var b=$(t);s=f(b,"BUTTON",{class:!0});var I=$(s);l=y(I,"Button"),I.forEach(c),n=v(b),a=f(b,"BUTTON",{class:!0});var P=$(a);p=y(P,"Button"),P.forEach(c),e=v(b),o=f(b,"BUTTON",{class:!0});var k=$(o);m=y(k,"Button"),k.forEach(c),b.forEach(c),this.h()},h(){r(s,"class","btn btn-active"),r(a,"class","btn"),r(o,"class","btn"),r(t,"class","btn-group")},m(u,b){g(u,t,b),i(t,s),i(s,l),i(t,n),i(t,a),i(a,p),i(t,e),i(t,o),i(o,m)},d(u){u&&c(t)}}}function H(h){let t,s=`<div class="btn-group">
  <button class="btn btn-active">Button</button>
  <button class="btn">Button</button>
  <button class="btn">Button</button>
</div>`,l;return{c(){t=d("pre"),l=B(s),this.h()},l(n){t=f(n,"PRE",{slot:!0});var a=$(t);l=y(a,s),a.forEach(c),this.h()},h(){r(t,"slot","html")},m(n,a){g(n,t,a),i(t,l)},p:O,d(n){n&&c(t)}}}function L(h){let t,s,l,n,a,p,e,o;return{c(){t=d("div"),s=d("input"),l=_(),n=d("input"),a=_(),p=d("input"),e=_(),o=d("input"),this.h()},l(m){t=f(m,"DIV",{class:!0});var u=$(t);s=f(u,"INPUT",{type:!0,name:!0,"data-title":!0,class:!0}),l=v(u),n=f(u,"INPUT",{type:!0,name:!0,"data-title":!0,class:!0}),a=v(u),p=f(u,"INPUT",{type:!0,name:!0,"data-title":!0,class:!0}),e=v(u),o=f(u,"INPUT",{type:!0,name:!0,"data-title":!0,class:!0}),u.forEach(c),this.h()},h(){r(s,"type","radio"),r(s,"name","options"),r(s,"data-title","1"),r(s,"class","btn"),r(n,"type","radio"),r(n,"name","options"),r(n,"data-title","2"),n.checked="checked",r(n,"class","btn"),r(p,"type","radio"),r(p,"name","options"),r(p,"data-title","3"),r(p,"class","btn"),r(o,"type","radio"),r(o,"name","options"),r(o,"data-title","4"),r(o,"class","btn"),r(t,"class","btn-group")},m(m,u){g(m,t,u),i(t,s),i(t,l),i(t,n),i(t,a),i(t,p),i(t,e),i(t,o)},d(m){m&&c(t)}}}function j(h){let t,s=`<div class="btn-group">
  <input type="radio" name="options" data-title="1" class="btn">
  <input type="radio" name="options" data-title="2" checked="checked" class="btn">
  <input type="radio" name="options" data-title="3" class="btn">
  <input type="radio" name="options" data-title="4" class="btn">
</div>`,l;return{c(){t=d("pre"),l=B(s),this.h()},l(n){t=f(n,"PRE",{slot:!0});var a=$(t);l=y(a,s),a.forEach(c),this.h()},h(){r(t,"slot","html")},m(n,a){g(n,t,a),i(t,l)},p:O,d(n){n&&c(t)}}}function z(h){let t,s,l,n,a,p;return t=new S({props:{data:[{type:"component",class:"btn-group",desc:"Container for grouping multiple buttons"}]}}),l=new C({props:{title:"Button group",$$slots:{html:[H],default:[V]},$$scope:{ctx:h}}}),a=new C({props:{title:"Button group with radio buttons",$$slots:{html:[j],default:[L]},$$scope:{ctx:h}}}),{c(){T(t.$$.fragment),s=_(),T(l.$$.fragment),n=_(),T(a.$$.fragment)},l(e){E(t.$$.fragment,e),s=v(e),E(l.$$.fragment,e),n=v(e),E(a.$$.fragment,e)},m(e,o){x(t,e,o),g(e,s,o),x(l,e,o),g(e,n,o),x(a,e,o),p=!0},p(e,[o]){const m={};o&1&&(m.$$scope={dirty:o,ctx:e}),l.$set(m);const u={};o&1&&(u.$$scope={dirty:o,ctx:e}),a.$set(u)},i(e){p||(N(t.$$.fragment,e),N(l.$$.fragment,e),N(a.$$.fragment,e),p=!0)},o(e){U(t.$$.fragment,e),U(l.$$.fragment,e),U(a.$$.fragment,e),p=!1},d(e){w(t,e),e&&c(s),w(l,e),e&&c(n),w(a,e)}}}const K={title:"Button group",desc:"Button group shows buttons next to each other.",published:!0};class M extends q{constructor(t){super();D(this,t,null,z,R,{})}}export{M as default,K as metadata};
