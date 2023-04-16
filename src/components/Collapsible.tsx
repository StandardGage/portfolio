import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BiRightArrow } from 'react-icons/bi';

export default function Collapsible({ label, children }) {
    const [open, setOpen] = useState(false);

    return (
        <div onClick={(e)=> e.stopPropagation()} className="flex flex-col">
            <motion.button onClick={() => setOpen(!open)} className="flex justify-between space-x-5 m-5 p-2 font-proza backdrop-brightness-75 shadow-md rounded-md  flex-1">
                <div>{label}</div>
                <BiRightArrow className={`${open ? 'rotate-90' : 'rotate-0'} transition-transform delay-100`}></BiRightArrow>
            </motion.button>
            <AnimatePresence>
            {open && <motion.div exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1}} className="pb-4">{children}</motion.div>}
            </AnimatePresence>
        </div>
    )
}