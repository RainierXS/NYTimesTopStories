!function(e){function t(t){for(var a,i,u=t[0],o=t[1],c=t[2],f=0,d=[];f<u.length;f++)i=u[f],r[i]&&d.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);for(s&&s(t);d.length;)d.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,u=1;u<n.length;u++){var o=n[u];0!==r[o]&&(a=!1)}a&&(l.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={0:0},l=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=o;l.push([6,1]),n()}({16:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),l=s(r),i=s(n(17)),u=s(n(20)),o=s(n(21)),c=s(n(22));function s(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){n.getArticlesAndFilter()},n.onFormChange=function(e){var t=e.target,a=t.name,r=t.value,l=t.type,i=t.checked;n.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},a,"checkbox"===l?i:r),function(){return n.getArticlesAndFilter()})},n.getArticlesAndFilter=function(){var e=n.state.section;n.getAllArticles(e).then(function(e){var t=e.results;return n.filterArticles(t)})},n.getAllArticles=function(e){return fetch("https://api.nytimes.com/svc/topstories/v2/"+e+".json?api-key="+n.NYTimesApiKey).then(function(e){return e.json()})},n.filterArticles=function(e){var t=n.state.filter,a=[],r="";t&&(r=t.split(" ").reduce(function(e,t){return t?e+"(?=.*"+t+")":e},""));for(var l=0;l<e.length;l+=1)r?RegExp(r,"gmi").test(e[l].abstract+" "+e[l].title+" "+e[l].subsection)&&a.push(e[l]):a.push(e[l]);n.setState({articles:a,page:1})},n.changePage=function(e){var t=n.state.page;switch(e){case"+":t+=1;break;case"-":t-=1;break;default:t=e}n.setState({page:t})},n.state={articles:[],filter:"",section:"home",page:1,showFiji:!1},n.NYTimesApiKey="9e5d1d80cdf54454a5437b64ce51e603",n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"render",value:function(){var e=this.state,t=e.articles,n=e.filter,a=e.section,r=e.page,s=e.showFiji;return l.default.createElement("div",{className:"container"},l.default.createElement("nav",null,l.default.createElement(i.default,{onChange:this.onFormChange,filter:n,section:a,count:t.length}),l.default.createElement(c.default,{pageCount:Math.ceil(t.length/10),page:r,onChange:this.changePage})),l.default.createElement("main",null,l.default.createElement(u.default,{className:"article__list",items:t,page:r,count:10,render:function(e,t){return l.default.createElement(o.default,{showFiji:s,article:e,key:e.url||t,count:t})}})),l.default.createElement(c.default,{pageCount:Math.ceil(t.length/10),page:r,onChange:this.changePage}))}}]),t}();t.default=f},17:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(0)),r=l(n(1));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.onChange,n=e.filter,r=e.section,l=e.count;return a.default.createElement("div",{className:"search_container"},a.default.createElement("form",{className:"search_form"},a.default.createElement("div",{className:"search_form__main"},a.default.createElement("label",{className:"search_form__label",htmlFor:"filter"},a.default.createElement("span",null,"Filter terms (inclusive)"),a.default.createElement("input",{className:"search_form__input",name:"filter",id:"filter",placeholder:"Filter Articles",value:n,onChange:t})),a.default.createElement("label",{className:"search_form__label",htmlFor:"section"},a.default.createElement("span",null,"Section"),a.default.createElement("select",{className:"search_form__select",name:"section",id:"section",value:r,onChange:t},["home","opinion","world","national","politics","upshot","nyregion","business","technology","science","health","sports","arts","books","movies","theater","sundayreview","fashion","tmagazine","food","travel","magazine","realestate","automobiles","obituaries","insider"].map(function(e){return a.default.createElement("option",{value:e,key:e},e)})))),a.default.createElement("div",{className:"fiji_toggle row2"},a.default.createElement("label",{className:"fiji_toggle__label",htmlFor:"showFiji"},a.default.createElement("input",{className:"fiji_toggle__checkbox",type:"checkbox",name:"showFiji",id:"showFiji",onChange:t}),a.default.createElement("span",null,"Show Fiji Times"))),a.default.createElement("div",{className:"article_count row2"},"Articles: ",l)))};i.propTypes={filter:r.default.string.isRequired,section:r.default.string.isRequired,onChange:r.default.func.isRequired,count:r.default.number},i.defaultProps={count:0},t.default=i},20:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(0)),r=l(n(1));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.className,n=e.render,r=e.items,l=e.page,i=e.count;return a.default.createElement("div",{className:t},function(){for(var e=[],t=(l-1)*i;t<r.length&&t<l*i;t+=1)e.push(n(r[t],t));return e}())};i.propTypes={className:r.default.string,render:r.default.func,items:r.default.arrayOf(r.default.shape({})),page:r.default.number,count:r.default.number},i.defaultProps={className:"list",render:function(e){return a.default.createElement("div",null,a.default.createElement("h2",null,e.title),a.default.createElement("p",null,e.description))},items:[{title:"Send items",description:"Please provide items prop as array of objects"}],page:1,count:10},t.default=i},21:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(0)),r=l(n(1));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.article,n=e.showFiji,r=new Date(t.published_date),l={year:"numeric",month:"numeric",day:"2-digit",hour:"numeric",minute:"2-digit",timeZoneName:"short"};n&&(l.timeZone="Pacific/Fiji");var i=r.toLocaleString("en-US",l).replace(/GMT\+12|,/gim,function(e){return"GMT+12"===e?"FJT":""});return a.default.createElement("div",{className:"article"},a.default.createElement("div",{className:"article__content"},a.default.createElement("h3",{className:"article__content__title"},t.title),a.default.createElement("div",{className:"article__content__byline row2"},t.byline),a.default.createElement("div",{className:"article__content__date row2"},i),a.default.createElement("p",{className:"article__content__abstract"},t.abstract),a.default.createElement("div",{className:"article__content__link"},a.default.createElement("a",{href:t.url},"Read More..."))))};i.propTypes={article:r.default.shape({title:r.default.string,byline:r.default.string,abstract:r.default.string,published_date:r.default.string,url:r.default.string}).isRequired,showFiji:r.default.bool},i.defaultProps={showFiji:!1},t.default=i},22:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(0)),r=l(n(1));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.page,n=e.pageCount;return a.default.createElement("div",{className:"pagination"},function(){var r=[];r.push(a.default.createElement("button",{type:"button",className:"pagination__button",onClick:function(){return e.onChange("-")},disabled:t<=1},"<"));for(var l=function(n){r.push(a.default.createElement("button",{type:"button",className:"pagination__button __page "+(t===n?"active":""),onClick:function(){return e.onChange(n)},disabled:t===n,key:n},n))},i=1;i<=n;i+=1)l(i);return r.push(a.default.createElement("button",{type:"button",className:"pagination__button",onClick:function(){return e.onChange("+")},disabled:t>=n},">")),r}())};i.propTypes={page:r.default.number,pageCount:r.default.number,onChange:r.default.func.isRequired},i.defaultProps={page:1,pageCount:1},t.default=i},6:function(e,t,n){"use strict";var a=i(n(0)),r=n(8),l=i(n(16));function i(e){return e&&e.__esModule?e:{default:e}}(0,r.render)(a.default.createElement(l.default,null),document.getElementById("app"))}});