!function(e){function t(t){for(var n,r,i=t[0],a=t[1],l=0,c=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&c.push(o[r][0]),o[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(s&&s(t);c.length;)c.shift()()}var n={},o={0:0};var r={};var i={3:function(){return{}}};function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var l=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=l);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=function(e){return a.p+""+e+".index.js"}(e);var s=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,n[1](s)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return({1:[3]}[e]||[]).forEach((function(e){var n=r[e];if(n)t.push(n);else{var o,l=i[e](),c=fetch(a.p+""+{3:"13231bf4da6eabcc95fe"}[e]+".module.wasm");if(l instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)o=Promise.all([WebAssembly.compileStreaming(c),l]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)o=WebAssembly.instantiateStreaming(c,l);else{o=c.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,l)}))}t.push(r[e]=o.then((function(t){return a.w[e]=(t.instance||t).exports})))}})),Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e},a.w={};var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=c;a(a.s=0)}([function(e,t,n){const o=n.e(1).then(n.bind(null,1));let r=void 0;function i(e){const t=performance.now();u.innerHTML=function(e){return void 0!==r?r.linkify_text(e):void 0}(e);const n=Math.ceil(performance.now()-t);if(0===e.length)s.innerHTML="";else{const t=u.getElementsByTagName("a").length;s.innerHTML="✓ <strong>"+n.toLocaleString("en-US")+" ms</strong> to linkify "+t+" links in text with "+e.length+" characters"}}function a(e){c.value=e,i(e)}function l(e,t){let n="";for(let o=1;o<=t;o++)n+="Example: https://example.org/"+e+"/link-"+o+"\n";a(n)}o.then(e=>{r=e,i(c.value)}).catch(e=>console.error("Failed to load WebAssembly module",e));const c=document.getElementById("input"),u=document.getElementById("output"),s=document.getElementById("timing");c.oninput=e=>i(e.target.value);document.getElementById("example-urls").onclick=()=>a("- Some links: https://example.org, https://example.com/a/b/c. See how ',' and '.' are not included in the link?\n- What about parentheses?: (https://example.org). What if they are part of the link?: https://en.wikipedia.org/wiki/Link_(The_Legend_of_Zelda)\n- Unicode: https://en.wikipedia.org/wiki/😊"),document.getElementById("example-emails").onclick=()=>a("abc@example.org, foo+bar@example.org;hi@example.org"),document.getElementById("example-long").onclick=()=>l("long",100),document.getElementById("example-very-long").onclick=()=>l("very-long",5e3)}]);