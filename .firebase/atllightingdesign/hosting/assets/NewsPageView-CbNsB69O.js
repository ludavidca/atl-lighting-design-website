import{d as h,k as g,c as v,l as k,o as n,a as u,b as t,f as d,w as r,t as p,F as C,g as b,m as j,p as y,v as B,j as N}from"./index-DYAgNCn8.js";import{_ as x}from"./smallArrow-uDwHyAHg.js";import{S as P,I as S}from"./Slide-DH5Ao1uL.js";const D={class:"bg-black"},I={class:"flex flex-row items-center justify-between pt-[20%] sm:pt-[7%] w-full px-[6%] relative"},L={class:"mx-auto sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2"},R={class:"text-white text-2xl sm:text-4xl pb-3 text-center"},V={class:"w-[90%] h-[650px] mx-auto overflow-hidden mt-8 rounded-md group"},A={class:"w-full h-full"},F=["src"],E={class:"flex flex-col justify-center items-center py-[3%] w-[85%] mx-auto"},U=["textContent"],K=h({__name:"NewsPageView",setup(q){g(),(()=>{const s=window.location.pathname;return console.log("Current path:",s),s})();const w=N.news,o=v(()=>{const s=window.location.pathname.split("/");console.log(s);const e=s[2],l=w[e];return{title:e.split("-").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(" "),...l}});return(s,e)=>{var a,i;const l=k("RouterLink");return n(),u("main",D,[t("div",I,[t("div",null,[d(l,{class:"flex flex-row items-center gap-x-3",to:"/news"},{default:r(()=>e[0]||(e[0]=[t("img",{src:x,class:"w-4"},null,-1),t("p",{class:"hidden sm:flex text-white font-normal text-lg"},"Back to News",-1)])),_:1})]),t("div",L,[t("p",R,p((a=o.value)==null?void 0:a.title),1)]),e[1]||(e[1]=t("div",{class:"hidden sm:flex flex-row items-center gap-x-3"},[t("p",{class:"text-white font-normal text-lg"},"Next Project"),t("div",{class:"rotate-180"},[t("img",{src:x,class:"w-4"})])],-1))]),t("div",V,[d(S,{navigation:!0,pagination:!0,startAutoPlay:!1,timeout:5e3},{default:r(({currentSlide:f})=>{var c;return[(n(!0),u(C,null,b((c=o.value)==null?void 0:c.images,(_,m)=>(n(),j(P,{key:m},{default:r(()=>[y(t("div",A,[t("img",{src:_,alt:"Background Images",class:"w-full h-full object-cover object-center"},null,8,F)],512),[[B,f===m+1]])]),_:2},1024))),128))]}),_:1})]),t("div",E,[t("p",{class:"text-white sm:text-xl whitespace-pre-line leading-relaxed indent-12",textContent:p((i=o.value)==null?void 0:i.article)},null,8,U)])])}}});export{K as default};