import e from"react";var t=function(t){var n=t.columns,r=t.rows,a=t.id,l=t.className,c=void 0===l?"responsive-table":l;return e.createElement("table",{className:c,id:a},e.createElement("thead",null,e.createElement("tr",null,n.map((function(t,n){return e.createElement("th",{key:n},t)})))),e.createElement("tbody",null,r.map((function(t,n){return e.createElement("tr",{key:n},t.map((function(t,n){return e.createElement("td",{key:n},t)})))}))))},n=function(t){var n=t.rows,r=t.id,a=t.className,l=void 0===a?"responsive-table":a;return e.createElement("table",{className:l,id:r},e.createElement("tbody",null,n.map((function(t,n){return e.createElement("tr",{key:n},t.map((function(t,n){return 0===n?e.createElement("th",{key:n},t):e.createElement("td",{key:n},t)})))}))))};export{n as FTable,t as Table};
//# sourceMappingURL=index.esm.js.map
