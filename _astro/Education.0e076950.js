import{C as i}from"./Card.dd66d6c8.js";import{C as s}from"./Collapsible.2ba71d0b.js";import{S as r}from"./Section.bbcbb2df.js";import{e as l}from"./portfolio.75b8b938.js";import{j as e}from"./jsx-runtime.00e89e00.js";import"./index.fe07b45d.js";import"./motion.e5708452.js";import"./AntdIcon.05976f51.js";function p(){return e.jsx(r,{id:"education",title:"My Education...",children:e.jsx("ol",{className:"flex flex-row flex-wrap gap-10 justify-center",children:l.schools.map((t,a)=>e.jsx(i,{image:t.image,front:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"font-proza",children:t.schoolName}),e.jsx("div",{className:"font-telex",children:t.title}),e.jsx("div",{className:"font-taviraj",children:t.date})]}),back:e.jsxs(e.Fragment,{children:[e.jsx(s,{label:"Classes",children:e.jsx("div",{className:"mx-9 text-sm text-left font-telex whitespace-pre",children:"• "+t.classes.join(`
• `)})}),e.jsx(s,{label:"Clubs/Activities",children:e.jsx("div",{className:"mx-9 text-sm text-left font-telex whitespace-pre",children:"• "+t.clubs.join(`
• `)})}),e.jsx(s,{label:"Awards",children:e.jsx("div",{className:"mx-9 text-sm text-left font-telex whitespace-pre",children:"• "+t.awards.join(`
• `)})})]})},a))})})}export{p as default};
