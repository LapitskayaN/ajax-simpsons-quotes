(this["webpackJsonpajax-simpsons-quotes"]=this["webpackJsonpajax-simpsons-quotes"]||[]).push([[0],{18:function(t,n,e){},19:function(t,n,e){},39:function(t,n,e){"use strict";e.r(n);e(2),e(14),e(18),e.p,e(19),e(1);var c=e(12),o=e.n(c);document.querySelector(".btn").addEventListener("click",(function(){o.a.get("https://simpsons-quotes-api.herokuapp.com/quotes").then((function(t){return t.data})).then((function(t){var n="\n    <p>Name:".concat(t[0].character,' </p>\n    <img src="').concat(t[0].image," alt='").concat(t[0].character,'"/>\n    <p>Name:').concat(t[0].quote," </p>");console.log(document.querySelector(".content")),document.querySelector(".content").innerHTML=n}))}))}},[[39,1,2]]]);
//# sourceMappingURL=main.1437730c.chunk.js.map