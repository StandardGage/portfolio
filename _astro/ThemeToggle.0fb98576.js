import{j as e}from"./jsx-runtime.00e89e00.js";import{m as a}from"./motion.e5708452.js";import"./index.fe07b45d.js";function i(l){return e.jsxs(a.button,{initial:{opacity:0},whileHover:{scale:1.3},whileTap:{scale:.9},onTap:()=>{var t=localStorage.getItem("theme")==="dark"?"dark":"light";t==="light"?(localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark"),document.documentElement.classList.remove("light")):(localStorage.setItem("theme","light"),document.documentElement.classList.remove("dark"),document.documentElement.classList.add("light"))},whileInView:{opacity:1},children:[e.jsx("div",{className:"block text-3xl dark:hidden grayscale sm:grayscale-0 md:grayscale-0 hover:grayscale-0 duration-300",id:"darkIcon",children:"🌙"}),e.jsx("div",{className:"hidden grayscale sm:grayscale-0 md:grayscale-0 hover:grayscale-0 text-3xl dark:block hover:text-primary duration-300",id:"lightIcon",children:"☀️"})]})}export{i as default};
