import { motion } from 'framer-motion';
import { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';


export default function Carousel(props: { children: any[]; }) {
    const [index, setIndex] = useState(0)
    const items = props.children.filter((child) => child != null)
    
    return (
        <div onClick={(e) => e.stopPropagation()} className="flex flex-grow justify-center items-center">
        <motion.div whileHover={{x:[0,-5,0], transition:{repeat:Infinity}}}><AiOutlineRight onClick={()=> {
            if (index == 0) {
                setIndex(items.length-1)
            }
            else {
                setIndex(index-1)
            }
        }} className={`flex rotate-180 cursor-pointer sm:h-24 h-52 ${items.length < 2 ? 'invisible' : ''}`}></AiOutlineRight></motion.div>
        {items.map((item, i) => (
            <motion.div key={i} animate={{scale:0}} whileInView={{scale:1}} className={`${(i == index) ? "block" : "hidden"} flex items-center justify-center `}>{items[i]}</motion.div>
        ))}
        <motion.div whileHover={{x:[0,5,0], transition:{repeat:Infinity}}}><AiOutlineRight onClick={()=>{
            console.log(index)
            if (index == items.length - 1) {
                setIndex(0)
            } else {
                setIndex(index + 1)
            }
            
            }} className={`cursor-pointer sm:h-24 h-52 ${items.length < 2 ? 'invisible' : ''}`}></AiOutlineRight></motion.div>
        </div>
    )
}