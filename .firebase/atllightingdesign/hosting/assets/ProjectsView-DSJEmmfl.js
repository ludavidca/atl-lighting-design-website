import{d as C,r as p,c as k,a as l,b as e,e as j,t as i,n as v,f as T,w as V,T as D,F as _,g as h,u as N,o as r,h as O,i as $,j as A}from"./index-DYAgNCn8.js";const B="/ui/dropdown.svg",P={class:"bg-black text-white font-sans"},S={class:"py-8"},z={class:"flex flex-row items-center justify-center pt-[10%] sm:pt-[5%] gap-x-4 relative"},F={class:"relative group"},L={key:0,class:"absolute left-0 w-full bg-gray-900 rounded-md shadow-lg z-10 overflow-hidden"},E={class:"py-2"},H=["onClick"],M={class:"w-[90%] justify-center mx-auto"},R={class:"grid grid-cols-1 md:grid-cols-3 gap-12"},U=["onClick"],q=["src","alt"],G={class:"flex flex-row justify-between gap-x-fit"},I={class:"text-2xl text-white mb-2"},J={class:"text-white text-2xl"},K={class:"mb-4"},X=C({__name:"ProjectsView",setup(Q){const f=N(),d=A.projects,u={"arts-and-culture":"Arts & Culture","city-and-landscape":"City & Landscape",commercial:"Commercial",hospitality:"Hospitality"},n=p(!1),c=p("Arts & Culture"),g=Object.values(u),x=k(()=>{var a;const s=(a=Object.entries(u).find(([t,o])=>o===c.value))==null?void 0:a[0];return!s||!d[s]?[]:Object.entries(d[s]).map(([t,o])=>({title:t.split("-").map(m=>m.charAt(0).toUpperCase()+m.slice(1)).join(" "),image:o.images[0],location:o.location,year:o.time,slug:t,categorySlug:s}))}),y=()=>{n.value=!n.value},b=s=>{c.value=s,n.value=!1},w=(s,a)=>{f.push(`/projects/${s}/${a}`)};return(s,a)=>(r(),l("div",P,[e("div",S,[e("div",z,[e("div",F,[e("button",{onClick:y,class:"flex items-center text-3xl pb-8 sm:text-5xl hover:text-gray-300 transition-all duration-500 hover:transform hover:scale-[1.02]"},[j(i(c.value)+" ",1),e("img",{src:B,class:v(["p-[5px] sm:p-0 mb-1 sm:mb-0 object-contain ml-2 sm:ml-4 transition-transform duration-200",{"transform rotate-180":n.value}]),style:{height:"20px",marginTop:"10px"}},null,2)]),T(D,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 translate-y-1","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 translate-y-1"},{default:V(()=>[n.value?(r(),l("div",L,[e("ul",E,[(r(!0),l(_,null,h(O(g),t=>(r(),l("li",{key:t,onClick:o=>b(t),class:v(["px-4 py-2 hover:bg-gray-800 cursor-pointer transition-colors duration-200 text-lg",{"bg-gray-800":t===c.value}])},i(t),11,H))),128))])])):$("v-if",!0)]),_:1})])]),a[0]||(a[0]=e("hr",{class:"hidden sm:flex border-t-2 border-black mt-6 mx-[5%] mb-10"},null,-1)),e("div",M,[e("div",R,[(r(!0),l(_,null,h(x.value,t=>(r(),l("div",{key:t.title,class:"flex flex-col cursor-pointer transition-all duration-500 hover:transform hover:scale-[1.02]",onClick:o=>w(t.categorySlug,t.slug)},[e("img",{src:t.image,alt:t.title,class:"w-full h-64 object-cover mb-4 transition-all duration-500 hover:transform hover:scale-105 hover:opacity-80"},null,8,q),e("div",G,[e("h2",I,i(t.title),1),e("p",J,i(t.year),1)]),e("p",K,i(t.location),1)],8,U))),128))])])])]))}});export{X as default};