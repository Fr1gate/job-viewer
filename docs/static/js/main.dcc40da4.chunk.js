(this["webpackJsonpgithub-jobs_react-redux"]=this["webpackJsonpgithub-jobs_react-redux"]||[]).push([[0],{19:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),r=a(4),l=a.n(r),n=a(2),i=a(6),o=a(5),d=a(3),h={PAGEUP:"PAGEUP",SEARCH:"SEARCH",GETLISTSUCCESS:"GETLISTSUCCESS",GETLISTFAIL:"GETLISTFAIL",GETJOBSUCCESS:"GETJOBSUCCESS",REQUESTLIST:"REQUESTLIST",SETCURRENTPAGE:"SETCURRENTPAGE",SETFILTER:"SETFILTER",SETSEARCHSTRING:"SETSEARCHSTRING",SWITCHSEARCHMODE:"SWITCHSEARCHMODE"};var j=a(10),u=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.b,b=Object(i.c)((function(e,t){switch(t.type){case h.SETCURRENTPAGE:return Object(d.a)(Object(d.a)({},e),{},{currentPage:t.payload});case h.GETLISTSUCCESS:return Object(d.a)(Object(d.a)({},e),{},{results:t.payload,currentPage:1});case h.SETFILTER:return Object(d.a)(Object(d.a)({},e),{},{filters:Object(d.a)(Object(d.a)({},e.filters),{},Object(o.a)({},t.payload[0],t.payload[1]))});case h.SETSEARCHSTRING:return Object(d.a)(Object(d.a)({},e),{},{searchString:t.payload});case h.SWITCHSEARCHMODE:var a=!e.searchMode;return Object(d.a)(Object(d.a)({},e),{},{searchMode:a});case h.GETJOBSUCCESS:return Object(d.a)(Object(d.a)({},e),{},{vacancy:t.payload});default:return Object(d.a)({},e)}}),{results:[],currentPage:1,filters:{schedule:"anySchedule",city:"anyCity"},searchString:"",searchMode:!0,vacancy:{response_url:"#",name:"Waiting for name",schedule:{id:"remote"},created_at:"",employer:{name:"Waiting for employer name",logo_urls:{240:"./static/img/no-image_90.png"}},area:{name:"Earth (most likely)"}}},u(Object(i.a)(j.a))),m={queue:[],pushToQueue:function(e){this.queue.push({id:e,expired:!1})},queryReady:function(e){var t=this.queue.findIndex((function(t){return t.id===e})),a=!0===this.queue[t].expired;if(this.queue.splice(t,1),a)return!1;if(t>0)for(var c=0;c<t;c++)this.queue[c].expired=!0;return!0}},O={requestList:function(){return function(e){var t=b.getState().searchString,a=b.getState().filters,c=Date.now();m.pushToQueue(c),Object.keys(a).length>0&&Object.keys(a).forEach((function(e){switch(e){case"schedule":switch(a[e]){case"fullTime":t+="&schedule=fullDay";break;case"remote":t+="&schedule=remote"}break;case"city":switch(a[e]){case"msk":t+="&area=1";break;case"spb":t+="&area=2";break;case"tula":t+="&area=92"}}})),fetch("https://api.hh.ru/vacancies?text=".concat(t,"&per_page=50")).then((function(e){if(e.ok){if(m.queryReady(c))return e.json();throw new Error("Query is outdated")}})).then((function(t){e(O.getListSuccess(t.items))})).catch((function(e){console.log(e)}))}},requestJob:function(e){return function(t){fetch("https://api.hh.ru/vacancies/".concat(e)).then((function(e){if(e.ok)return e.json()})).then((function(e){t(O.getJobSuccess(e))})).catch((function(e){console.error(e.message)}))}},getJobSuccess:function(e){return{type:h.GETJOBSUCCESS,payload:e}},getListSuccess:function(e){return{type:h.GETLISTSUCCESS,payload:e}},setCurrentPage:function(e){return{type:h.SETCURRENTPAGE,payload:e}},setFilter:function(e,t){return{type:h.SETFILTER,payload:[e,t]}},setSearchString:function(e){return{type:h.SETSEARCHSTRING,payload:e}},switchSearchMode:function(){return{type:h.SWITCHSEARCHMODE}}},f=O,_=(a(19),a(0)),p=function(e){var t=Object(n.b)(),a=Object(n.c)((function(e){return e.filters.schedule})),c=Object(n.c)((function(e){return e.filters.city}));function s(e){t(f.setFilter(e.target.name,e.target.id)),t(f.requestList())}return Object(_.jsx)("aside",{className:"filters",children:Object(_.jsxs)("form",{className:"filters__form",children:[Object(_.jsx)("label",{className:"filters__header",children:"\u0413\u0440\u0430\u0444\u0438\u043a"}),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("label",{className:"filters__label filters__label_radio",children:[Object(_.jsx)("input",{className:"filters__radio",id:"anySchedule",type:"radio",name:"schedule",onChange:s,checked:"anySchedule"===a}),"\u041d\u0435\u0432\u0430\u0436\u043d\u043e"]}),Object(_.jsxs)("label",{className:"filters__label filters__label_radio",children:[Object(_.jsx)("input",{className:"filters__radio",id:"fullTime",type:"radio",name:"schedule",onChange:s,checked:"fullTime"===a}),"Full time"]}),Object(_.jsxs)("label",{className:"filters__label filters__label_radio",children:[Object(_.jsx)("input",{className:"filters__radio",id:"remote",type:"radio",name:"schedule",onChange:s,checked:"remote"===a}),"\u0423\u0434\u0430\u043b\u0435\u043d\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430"]})]}),Object(_.jsx)("label",{className:"filters__header",children:"\u0413\u043e\u0440\u043e\u0434"}),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("label",{className:"filters__label filters__label_radio",children:[Object(_.jsx)("input",{className:"filters__radio",id:"anyCity",type:"radio",name:"city",onChange:s,checked:"anyCity"===c}),"\u041d\u0435\u0432\u0430\u0436\u043d\u043e"]}),Object(_.jsxs)("label",{className:"filters__label filters__label_radio",children:[Object(_.jsx)("input",{className:"filters__radio",id:"msk",type:"radio",name:"city",onChange:s,checked:"msk"===c}),"\u041c\u043e\u0441\u043a\u0432\u0430"]}),Object(_.jsxs)("label",{className:"filters__label filters__label_radio",children:[Object(_.jsx)("input",{className:"filters__radio",id:"spb",type:"radio",name:"city",onChange:s,checked:"spb"===c}),"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433"]}),Object(_.jsxs)("label",{className:"filters__label filters__label_radio",children:[Object(_.jsx)("input",{className:"filters__radio",id:"tula",type:"radio",name:"city",onChange:s,checked:"tula"===c}),"\u0422\u0443\u043b\u0430"]})]})]})})};a(21);function x(e){var t=new Date(e),a=new Date,c=Math.floor((a-t)/864e5),s=Math.floor((a-t)/36e5);if(c>0){if(c>10&&c<15)return"".concat(c," \u0434\u043d\u0435\u0439");switch(c%10){case 1:return"".concat(c," \u0434\u0435\u043d\u044c");case 2:case 3:case 4:return"".concat(c," \u0434\u043d\u044f");default:return"".concat(c," \u0434\u043d\u0435\u0439")}}else{if(s>10&&s<15)return"".concat(s," \u0447\u0430\u0441\u043e\u0432");switch(s%10){case 1:return"".concat(s," \u0447\u0430\u0441");case 2:case 3:case 4:return"".concat(s," \u0447\u0430\u0441\u0430");default:return"".concat(s," \u0447\u0430\u0441\u043e\u0432")}}}var g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAFi0lEQVR4nO2b0XHiSBCG+67uHb/xyFIEYDIwG4G5CFYZmAzWjmC5CI6N4HAEhyNYCEAl/Kg3HMFd9e7fVFczIw1agVTe/qooY2lkWb9a3T09LXIcx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Gcd8NvXV1IXpRL/jkZDxcJ46ZEtI2NzYtyTkS8705tfiOiDREtJ+Phpu3//1x+7/DcLN5DXpSVQmPcHX6ekBflioj+MSIzAyK6J6J/86Jc50V5c5nLSKNLoYUveVEGRawDIn/CMLbgv4joCZ9ndTgLvrrGxcT4o8uTK1Z5Uc4m4+Eh9QAer0R+JSI+fm/GTOE+vlt3XpTZZDzsRPA+WDRzy770zGMe1ffMikw//P+WiOZqU52buhh9EZr5hKBWS16UH5RP3lUFO+zb4ddbHHt1+iK0+NNVohAz9X2dMF6PaRQPfpa+CJ0hmA0ShdM3Y5swXruVX1doBMEMv/Lj/VhziCYlgJ7472vTGx89GQ/XSM+Yz8gq3g19CoaETEICV+eTjDbpldDGhQwSJxkplq/HJOfqbdI3i5bc9wm/3gem1oRJiJAS3PSYlODZOr0Tmn6IzS7kpWL/BlkKYcYXTQmx7x6/vnVVYOql0CBTYobQaWDVrFLvS0kdL0JvhcaUOqsY8miseqWDJ1syV+20NZtp+1Xps0VLyvc1sm9vahdcYNrnRbnJi5L9cKFEplg95Fr0WmiwQHXuBFTi/lSWPUDwvFVj+diPuGmd0WWZdGWyhyCc8nF501ThjrCACHhzpHESGDdYlelUYMdxHMdxHMdxHMdxrsrZ3aSqu5PrDCfLSKhLZKF9aswUdeIFVlTqzsnjvxHR+JwKnKqRzFBwEnboMj1ZKtPXV0fVNVqaFJWmkeUlgS/sjruOKgo6Gf7GPHFpScqh85TWMdwYPvcoMoSre3+jF8+KVXd9jbhE9U6sYV6xojEzY6OgmC+Vu0Wd0KaxkVBCXaveDqn0DRKqh9HltHO5hNBiRcGyJkqaUi9OeUTnSrQRCxlzN7gpWuRnuLFDYNyy7qad4xrqaLXwb5peBpGmRb1tlNC7YTtAqzpCH5XIL5PxcB5qBeZtk/Hw5AZckrZXWKyFhoQO+cQgcANi/bLKUtVxmkW+d85VhYb13psxVY+nWO+b+h58UvA0HV1Gl+uDIdr20bKMJJ2hA5N9aFFlTOzdFB0EV1iykmOyQKDVf7uV3o1Is+W+yVsDbQstadEKIo1M9iHCvWLbQ4Xr0EFQLmyN1W5uL7ip8LGxYPnBtPwyh4pc/nNg20uT92FaE9q88CP/+INxH/J9rcaMIqKJq3hVQqzVeytZg9cxsoB4LxXuK5TeNWopa9OitdB7PL4PyqfujYXemGOPj7sJgkcXEXAf5wp9Fn1N746PJPe3IRhJC+5cZQTfLdT0wNkL0imcFVOOu614bS4mEN/gj/hclTYtWi5up7bxhX3BPnENOojtYLlHwUwQZOvN8qLU59FPQqZuyka5haDQuPl7nKfhZTajTYsWsXRaJaKOlCvQgWRrjiUTBAcQT390HeKYK5sO07u+vTHQitCI5iLOMVgY90EmsJG6KXqGqN3GU+QjQcrm1NrNrPr0xkBbrkOnTDaHFfdBgdxXP+7TvCgPyvKf0Sd9AsQVy9bp4xJWPsJny7mwznsh/tVf7GxLaP2Y2hkZiyBC2/xTW/fM3LBoz5zJPvhF0AXqFwfcBCksjVAOXapzJZdA86L8r2r/ZDxMrue35aPFx77Zqa9yH9ZtyDsr4ldnJueua07U+4/H4RwzkwNLl6kV+WtND3ZrNLHoUBeoTEBi9YWlyRY0C9MBSpjm1lXWlrHzidhI/+YwhBtkPlt8NpFzJHW5Oo7jOI7jOI7jOI7jOI7jOI7jOM57gIj+Bz2cC3LixYMRAAAAAElFTkSuQmCC",S=function(e){var t=Object(n.b)();return Object(_.jsxs)("div",{className:"card",children:[Object(_.jsx)("div",{className:"card__img-wrapper",children:Object(_.jsx)("img",{className:"card__img",src:e.logo?e.logo[240]:g,alt:"".concat(e.empName," logo")})}),Object(_.jsxs)("div",{className:"card__info",children:[Object(_.jsx)("h2",{className:"card__company",children:e.empName}),Object(_.jsx)("h3",{className:"card__job-name",onClick:function(a){t(f.switchSearchMode()),t(f.requestJob(e.id))},children:e.name}),Object(_.jsxs)("div",{className:"card__bottom-wrap",children:[Object(_.jsxs)("ul",{className:"labels card__labels",children:["fullDay"===e.schedule?Object(_.jsx)("li",{className:"label",children:"\u041f\u043e\u043b\u043d\u044b\u0439 \u0434\u0435\u043d\u044c"}):"","remote"===e.schedule?Object(_.jsx)("li",{className:"label",children:"\u0423\u0434\u0430\u043b\u0435\u043d\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430"}):""]}),Object(_.jsxs)("div",{className:"card__bottom-right",children:[Object(_.jsx)("span",{className:"card__location location",children:e.area}),Object(_.jsx)("span",{className:"card__date date",children:x(e.date)})]})]})]})]})},N=(a(22),function(e){var t=Object(n.b)(),a=Object(n.c)((function(e){return e.currentPage})),c=Array.from(Object(n.c)((function(e){return e.results}))),r=Math.ceil(c.length/4),l=c.length-1,i=4*(a-1),o=[];function d(e){e>0&&e<=r&&t(f.setCurrentPage(e))}function h(e){d(Number(e.target.dataset.page))}if(c.length>0)for(var j=i;j<=l&&j<i+4;j++){var u=c[j];u&&o.push(Object(_.jsx)(S,{name:u.name,logo:u.employer.logo_urls,empName:u.employer.name,date:u.published_at,schedule:u.schedule.id,area:u.area.name,id:u.id}))}return Object(_.jsxs)("div",{className:"results",children:[o.map((function(e){return Object(_.jsx)(s.a.Fragment,{children:e},e.id)})),Object(_.jsxs)("nav",{className:"results__pagination",children:[Object(_.jsx)("button",{className:"results__page results__page_left ",onClick:function(e){d(a-1)},children:Object(_.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(_.jsx)("path",{d:"M24 24H0V0h24v24z",fill:"none",opacity:".87"}),Object(_.jsx)("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"})]})}),function(){var e=[];function t(t){e.push(function(e){var t=e===a;return e?Object(_.jsx)("button",{className:t?"results__page results__page_active":"results__page",onClick:h,"data-page":e,children:e}):Object(_.jsx)("span",{className:"results__dots",children:"..."})}(t))}for(var c=!1,s=!1,l=1;l<=r;l++)(1===l||l>=a-1&&l<=a+1||l===r)&&t(l),l>1&&l<a-1&&!c&&(t(false),c=!0),l<r&&l>a+1&&!s&&(t(false),s=!0);return e}(),Object(_.jsx)("button",{className:"results__page results__page_right ",onClick:function(e){d(a+1)},children:Object(_.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(_.jsx)("path",{d:"M24 24H0V0h24v24z",fill:"none",opacity:".87"}),Object(_.jsx)("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"})]})})]})]})}),E=(a(23),function(e){var t=Object(n.b)(),a=Object(n.c)((function(e){return e.searchString}));return Object(_.jsx)("div",{className:"search grid-col-2",children:Object(_.jsxs)("form",{className:"search__form",onSubmit:function(e){e.preventDefault()},children:[Object(_.jsx)("label",{htmlFor:"searchfield",children:Object(_.jsxs)("svg",{className:"search__icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(_.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(_.jsx)("path",{d:"M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"})]})}),Object(_.jsx)("input",{onChange:function(e){t(f.setSearchString(e.target.value)),t(f.requestList())},className:"search__field textfield",id:"searchfield",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u044e\u0434\u0430 \u0437\u0430\u043f\u0440\u043e\u0441, \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u043b\u0438\u0441\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b",value:a})]})})}),y=(a(24),function(e){var t=Object(n.b)(),a=Object(n.c)((function(e){return e.vacancy}));return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("aside",{className:"info",children:[Object(_.jsxs)("button",{className:"info__link",onClick:function(){t(f.switchSearchMode())},children:[Object(_.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(_.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(_.jsx)("path",{d:"M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"})]})," \u041d\u0430\u0437\u0430\u0434 \u043a \u043f\u043e\u0438\u0441\u043a\u0443 "]}),Object(_.jsx)("h2",{className:"info__header",children:"\u041a\u0430\u043a \u0441\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f"}),Object(_.jsxs)("p",{className:"info__text",children:["\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u044d\u0442\u0443 \u0441\u0441\u044b\u043b\u043a\u0443 \u0434\u043b\u044f \u043e\u0442\u0432\u0435\u0442\u0430 \u043d\u0430 \u0432\u0430\u043a\u0430\u043d\u0441\u0438\u044e:",Object(_.jsx)("br",{}),Object(_.jsx)("a",{rel:"noreferrer",target:"_blank",href:a.response_url?a.response_url:"https://hh.ru/vacancy/".concat(a.id),children:"\u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b"})]})]}),Object(_.jsxs)("div",{className:"job",children:[Object(_.jsxs)("div",{className:"job__title",children:[Object(_.jsx)("h2",{className:"job__header",children:a.name?a.name:""}),Object(_.jsxs)("ul",{className:"job__labels labels",children:["fullDay"===a.schedule.id?Object(_.jsx)("li",{className:"label job__label",children:"\u041f\u043e\u043b\u043d\u044b\u0439 \u0434\u0435\u043d\u044c"}):"","remote"===a.schedule.id?Object(_.jsx)("li",{className:"label job__label",children:"\u0423\u0434\u0430\u043b\u0435\u043d\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430"}):""]})]}),Object(_.jsx)("span",{className:"job__date date",children:x(a.created_at)}),Object(_.jsxs)("div",{className:"job__company-wrapper",children:[Object(_.jsx)("img",{className:"job__company-logo",src:a.employer&&a.employer.logo_urls?a.employer.logo_urls[240]:g,height:"42",width:"42",alt:a.name+" logo"}),Object(_.jsxs)("div",{className:"job__company-info",children:[Object(_.jsx)("h3",{className:"job__company-name",children:a.employer?a.employer.name:""}),Object(_.jsx)("span",{className:"job__location location",children:a.area?a.area.name:""})]})]}),Object(_.jsx)("div",{className:"job__text",dangerouslySetInnerHTML:{__html:a.branded_description?a.branded_description:a.description?a.description:"NO DESCRIPTION"}})]})]})});a(25);var v=function(){var e=Object(n.c)((function(e){return e.searchMode}));return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("header",{className:"grid-col-2",children:Object(_.jsxs)("h1",{className:"logo",children:[Object(_.jsx)("b",{children:"Jobs "}),"viewer"]})}),e?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(E,{}),Object(_.jsx)(p,{}),Object(_.jsx)(N,{})]}):Object(_.jsx)(y,{}),Object(_.jsx)("footer",{className:"footer grid-col-2",children:Object(_.jsx)("div",{className:"footer__signature",children:Object(_.jsxs)("p",{children:["\u0421\u0434\u0435\u043b\u0430\u043d\u043e ",Object(_.jsx)("a",{href:"https://github.com/Fr1gate",target:"_blank",rel:"noreferrer",children:"\u0414\u043c\u0438\u0442\u0440\u0438\u0435\u043c \u041f\u0435\u0440\u0448\u0438\u043a\u043e\u0432\u044b\u043c"})," | \u0414\u0438\u0437\u0430\u0439\u043d \u0432\u0437\u044f\u0442 \u0441 ",Object(_.jsx)("a",{href:"https://devChallenges.io",target:"_blank",rel:"noreferrer",children:"devChallenges.io"})," | \u0412\u0430\u043a\u0430\u043d\u0441\u0438\u0438 \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0441 API ",Object(_.jsx)("a",{href:"https://dev.hh.ru",target:"_blank",rel:"noreferrer",children:"dev.hh.ru"})]})})})]})},T=document.getElementById("root");l.a.render(Object(_.jsx)(n.a,{store:b,children:Object(_.jsx)(v,{})}),T)}},[[26,1,2]]]);
//# sourceMappingURL=main.dcc40da4.chunk.js.map