(()=>{"use strict";function e(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const n=function(){function n(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n)}var o,r;return o=n,(r=[{key:"render",value:function(e){var n=document.createElement("h1"),o=document.querySelector("body");n.innerHTML='Webpack is awesome this is "'+e+'"page',o.appendChild(n)}}])&&e(o.prototype,r),n}();console.log("production mode"),(new n).render("hello world button")})();