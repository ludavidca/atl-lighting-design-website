import{d as g,k as w,c as v,l as j,o as i,a as x,b as t,f,w as u,t as m,F as C,g as k,m as y,p as b,v as P,j as B}from"./index-DYAgNCn8.js";import{_}from"./smallArrow-uDwHyAHg.js";import{S,I as A}from"./Slide-DH5Ao1uL.js";const D={class:"bg-black"},I={class:"flex flex-row items-center justify-between pt-[20%] sm:pt-[7%] w-full px-[6%] relative"},L={class:"hidden sm:flex text-white font-normal text-lg"},N={class:"mx-auto sm:mx-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2"},R={class:"text-white text-2xl sm:text-4xl pb-3 text-center"},V={class:"w-[90%] h-[650px] mx-auto overflow-hidden mt-8 rounded-md group"},F={class:"w-full h-full"},U=["src"],E={class:"flex flex-col justify-center items-center py-[3%] w-[85%] mx-auto"},q=["textContent"],M=g({__name:"ProjectPageView",setup(z){w(),(()=>{const a=window.location.pathname;return console.log("Current path:",a),a})();const c=B.projects,n=v(()=>{var l;const a=window.location.pathname.split("/"),e=a[2],o=a[3];if(console.log(e,o),!e||!o||!((l=c[e])!=null&&l[o])||!(e in c))return null;const r=c[e][o];return{title:o.split("-").map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(" "),category:e.split("-").map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(" "),...r}});return(a,e)=>{var r,l;const o=j("RouterLink");return i(),x("main",D,[t("div",I,[t("div",null,[f(o,{class:"flex flex-row items-center gap-x-3",to:"/projects"},{default:u(()=>{var s;return[e[0]||(e[0]=t("img",{src:_,class:"w-4"},null,-1)),t("p",L,"Back to "+m((s=n.value)==null?void 0:s.category),1)]}),_:1})]),t("div",N,[t("p",R,m((r=n.value)==null?void 0:r.title),1)]),e[1]||(e[1]=t("div",{class:"hidden sm:flex flex-row items-center gap-x-3"},[t("p",{class:"text-white font-normal text-lg"},"Next Project"),t("div",{class:"rotate-180"},[t("img",{src:_,class:"w-4"})])],-1))]),t("div",V,[f(A,{navigation:!0,pagination:!0,startAutoPlay:!1,timeout:5e3},{default:u(({currentSlide:s})=>{var p;return[(i(!0),x(C,null,k((p=n.value)==null?void 0:p.images,(h,d)=>(i(),y(S,{key:d},{default:u(()=>[b(t("div",F,[t("img",{src:h,alt:"Background Images",class:"w-full h-full object-cover object-center"},null,8,U)],512),[[P,s===d+1]])]),_:2},1024))),128))]}),_:1})]),t("div",E,[t("p",{class:"text-white sm:text-xl whitespace-pre-line leading-relaxed indent-12",textContent:m((l=n.value)==null?void 0:l.description)},null,8,q)])])}}});export{M as default};