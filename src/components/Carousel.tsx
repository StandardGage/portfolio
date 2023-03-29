import { motion } from 'framer-motion';
import { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';


export default function Carousel(props: { children: any[]; }) {
    const [index, setIndex] = useState(0)
    
    const items = props.children.filter((child) => child != null)

    return (
        <div className="flex flex-grow justify-center items-center">
        <motion.div whileHover={{x:[0,-5,0], transition:{repeat:Infinity}}}><AiOutlineRight onClick={()=> {
            if (index == 0) {
                setIndex(items.length-1)
            }
            else {
                setIndex(index-1)
            }
        }} className={`flex rotate-180 cursor-pointer h-52 ${items.length < 2 ? 'hidden' : ''}`}></AiOutlineRight></motion.div>
        {items.map((item, i) => (
            <div className={`${i == index ? "block" : "hidden"} flex items-center justify-center `}>{items[i]}</div>
        ))}
        <motion.div whileHover={{x:[0,5,0], transition:{repeat:Infinity}}}><AiOutlineRight onClick={()=>{
            if (index == items.length-1) {
                setIndex(0)
            } else {
                setIndex(index + 1)
            }
            
            }} className={`cursor-pointer h-52 ${items.length < 2 ? 'hidden' : ''}`}></AiOutlineRight></motion.div>
        </div>
    )
}