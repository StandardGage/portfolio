import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
//import { BiRightArrow } from 'react-icons/bi';
import * as Icons from 'react-icons/bi';

interface CollapsibleProps {
    label: string;
    children: React.ReactNode;
}

export default function Collapsible({ label, children }: CollapsibleProps) {
    const [open, setOpen] = useState(false);

    return (
        <div key={label} className="flex flex-col">
            <motion.button onClick={(e) => {setOpen(!open); e.stopPropagation()}} className="hover:bg-primary dark:bg-inherit dark:hover:text-primary  duration-300 flex justify-between space-x-5 m-5 p-2 font-proza backdrop-brightness-75 shadow-md rounded-md  flex-1">
                <div>{label}</div>
                <Icons.BiRightArrow className={`${open ? 'rotate-90' : 'rotate-0'} transition-transform delay-100`}></Icons.BiRightArrow>
            </motion.button>
            <AnimatePresence>
            {open && <motion.div exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1}} className="pb-4">{children}</motion.div>}
            </AnimatePresence>
        </div>
    )
}