import { motion } from 'framer-motion';
import { useState } from 'react';
import { RightOutlined } from '@ant-design/icons';


export default function Carousel(props: { children: any[]; }) {
    const [index, setIndex] = useState(0)
    const items = props.children.filter((child) => child != null)
    
    return (
        <div onClick={(e) => e.stopPropagation()} className="flex flex-grow justify-center items-center">
        <motion.div className='hover:text-primary' whileHover={{x:[0,-5,0], transition:{repeat:Infinity}}}><RightOutlined onClick={()=> {
            if (index == 0) {
                setIndex(items.length-1)
            }
            else {
                setIndex(index-1)
            }
        }} className={`flex items-center rotate-180 cursor-pointer sm:h-24 h-52 ${items.length < 2 ? 'invisible' : ''}`}></RightOutlined></motion.div>
        {items.map((item, i) => (
            <motion.div key={i} animate={{scale:0}} whileInView={{scale:1}} className={`${(i == index) ? "block" : "hidden"} flex items-center justify-center `}>{items[i]}</motion.div>
        ))}
        <motion.div className='hover:text-primary' whileHover={{x:[0,5,0], transition:{repeat:Infinity}}}><RightOutlined onClick={()=>{
            if (index == items.length - 1) {
                setIndex(0)
            } else {
                setIndex(index + 1)
            }
            
            }} className={`cursor-pointer flex items-center  h-52 ${items.length < 2 ? 'invisible' : ''}`}></RightOutlined ></motion.div>
        </div>
    )
}