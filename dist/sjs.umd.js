!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r(n.slowJsonStringify={})}(this,function(n){var r=function(n,r){return r.reduce(function(n,r){return n&&n[r]},n)},e=function(n,r){if("array-simple"===r)return JSON.stringify(n);for(var e="",t=0,s=n;t<s.length;t+=1)e+=r(s[t])+",";return"["+e.substr(0,e.length-1)+"]"};n.sjs=function(n){var t=function(n){return JSON.stringify(n,function(n,r){var e=Array.isArray(r);return"object"!=typeof r||e?(function(n){var r=new Set(["number","string","boolean","undefined","array-simple","function"]);if(Array.isArray(n)){if(r.has(n[0])||r.has(typeof n[0]))return;throw new Error('Expected either "array-simple" or a function. received '+n)}if("function"!=typeof n&&!r.has(n))throw new Error('Expected one of: "number", "string", "boolean", "undefined". received '+n)}(r),e?r:"function"==typeof r?r:r+"__sjs"):r})}(n),s=function(n,r){return n.replace(r,function(n){switch(n){case'"string__sjs"':case'"undefined__sjs"':return'"__par__"';case'"number__sjs"':case'"boolean__sjs"':case'["array-simple__sjs"]':case"[null]":return"__par__";default:return n}}).split("__par__")}(t,new RegExp('"(string__sjs|number__sjs|boolean__sjs|undefined__sjs)"|\\[(.*?)\\]',"gm")),i=s[s.length-1],o=function(n){return function(r,e){if(void 0!==r)return r;var t=n[e];return 34===t.charCodeAt(t.length-1)?r:'"'+r+'"'}}(s),u=function(n,e){var t=[],s=new Set(["number__sjs","string__sjs","boolean__sjs","undefined__sjs"]);return function i(o,u){void 0===u&&(u=[]);var a=Array.isArray(o);if(!s.has(r(n,u))&&!a)return Object.keys(o).map(function(n){return i(o[n],u.concat([n]))});t.push({isArray:a,method:!!a&&("string"==typeof o[0]?"array-simple":r(e,u)[0]),path:[u].flat()})}(n),t}(JSON.parse(t),n),a=u.length;return function(n){for(var t="",f=0;f!==a;){var c=u[f],_=c.method,p=c.isArray,d=r(n,c.path),y=p?e(d,_):d;t+=s[f]+o(y,f),f+=1}return t+i}},n.escape=function(n){var r=n||new RegExp('\\n|\\r|\\t|\\"|\\\\',"gm");return function(n){return n.replace(r,function(n){return"\\"+n})}}});
//# sourceMappingURL=sjs.umd.js.map
