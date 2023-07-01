import{c as a,j as e,u as m,a as g,r as c,m as f,b as o,T as b,d as v}from"./index-ab727d45.js";const j=a("EggOff",[["path",{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625",key:"6et380"}],["path",{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297",key:"gcdc3f"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),w=a("Egg",[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z",key:"1c39pg"}]]),M=a("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),N=a("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]),S=a("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),z=a("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),C=a("MessageCircle",[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",key:"v2veuj"}]]),H=a("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]),A=a("ShieldClose",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",key:"3xmgem"}],["line",{x1:"9.5",x2:"14.5",y1:"9",y2:"14",key:"10ywql"}],["line",{x1:"14.5",x2:"9.5",y1:"9",y2:"14",key:"n3a697"}]]),D=a("ShieldQuestion",[["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}]]),E="/assets/meta-988fa877.png";function x({icon:n}){let t=null;switch(n){case"printer":t=e.jsx(H,{});break;case"message":t=e.jsx(C,{});break;case"mail":t=e.jsx(z,{});break;case"linkedin":t=e.jsx(S,{});break;case"github":t=e.jsx(M,{});break;case"web":t=e.jsx(N,{});break;default:t=null;break}return t}function T(){const{variantsTitle:n,variantsDescription:t}=m(),{toggle:y,showHeavyAssets:l}=g(),[r,u]=c.useState(!1),[k,p]=c.useState([]),{json_contact:d}=v();return c.useEffect(()=>{(async()=>{await fetch(d).then(async i=>{const h=await i.json();h&&p(h)})})()},[d]),e.jsxs(f.div,{variants:n,initial:"hidden",animate:"visible",transition:{delay:.2,duration:.3},className:o("h-full flex flex-col items-center justify-center z-[99999]"),children:[e.jsxs("div",{className:o("w-60 flex items-center justify-center relative overflow-hidden transition-all duration-200",l?"scale-100":r?"scale-110 md:scale-150":"scale-125 md:scale-[2]"),children:[e.jsx("img",{alt:"Ashymee Avatar",src:E,className:"h-40 w-40 z-10"}),e.jsx("div",{className:o("h-60 w-60 rounded-full absolute translate-y-0.5 top-12 z-0",l?"bg-black":"bg-gray-300 dark:bg-[#151821]")})]}),e.jsx("div",{className:o("pb-2 h-auto text-center text-black dark:text-slate-100 font-wb transition-all duration-200",l?"pt-5 text-5xl":r?"pt-8 md:pt-16 text-3xl md:text-5xl":"pt-10 md:pt-24 text-5xl md:text-[5rem]"),children:"Aswin Himawan"}),e.jsxs("div",{className:"text-3xl h-auto text-center text-black dark:text-slate-100",children:[e.jsx("span",{className:"font-agdasima",children:"Full Stack Developer"}),e.jsx(b,{content:r?"Hide Description":"Show Description",position:"right",children:e.jsx("sup",{children:e.jsx("button",{"aria-label":"toggle description",className:o("h-5 w-5",r?"text-red-500":""),onClick:()=>u(!r),children:r?e.jsx(A,{}):e.jsx(D,{})})})})]}),r&&e.jsx(f.div,{variants:t,initial:"hidden",animate:"visible",className:"md:w-96 p-3 bg-gray-300 dark:bg-[#151821] rounded-lg mt-2",children:"Hi.. I'm self taught full-stack developer from Karawang, Indonesia. I build web, mobile & desktop app. Freelancer. JAMSTACK, FOSS & cat lovers. Feel free to contact me 👇🏽."}),e.jsxs("div",{className:"flex items-center py-2 text-black dark:text-white",children:[k.map((s,i)=>e.jsx(b,{content:s.title,position:"bottom",children:s.url?e.jsx("a",{"aria-label":s.title,href:s.url,rel:"noopener",target:"_blank",className:o("h-10 w-10 flex items-center justify-center transition-all relative hover:text-white","before:content-[''] before:block before:absolute before:top-0 before:left-0 before:h-10 before:w-10 before:rounded-full before:bg-black before:scale-0 hover:before:scale-100 before:opacity-0 hover:before:opacity-100 before:-z-[999] before:duration-200"),children:e.jsx(x,{icon:s.icon})}):e.jsx("button",{"aria-label":s.title,className:o("h-10 w-10 flex items-center justify-center transition-all relative hover:text-white","before:content-[''] before:block before:absolute before:top-0 before:left-0 before:h-10 before:w-10 before:rounded-full before:bg-black before:scale-0 hover:before:scale-100 before:opacity-0 hover:before:opacity-100 before:-z-[999] before:duration-200"),children:e.jsx(x,{icon:s.icon})})},i)),e.jsx(b,{content:l?"hide background":"show background",position:"bottom",children:e.jsx("button",{"aria-label":"toggle background",onClick:y.toggleHeavyAssets,className:o("h-10 w-10 flex items-center justify-center transition-all relative hover:text-white","before:content-[''] before:block before:absolute before:top-0 before:left-0 before:h-10 before:w-10 before:rounded-full before:bg-black before:scale-0 hover:before:scale-100 before:opacity-0 hover:before:opacity-100 before:-z-[999] before:duration-200"),children:l?e.jsx(w,{}):e.jsx(j,{})})})]})]})}export{T as default};
