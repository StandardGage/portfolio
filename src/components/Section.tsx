import { motion, MotionValue } from "framer-motion";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export default function Section(props: { title: string; children: any; }) {
    return (
        <div className="bg-inherit flex flex-col mx-20 p-5 shadow-md rounded-lg backdrop-brightness-90">
            <motion.div
                initial={{x:-100}}
                whileInView={{x:0}}
                className="text-5xl text-start py-10 font-proza self-start">
                {props.title}
            </motion.div>
            {props.children}
        </div>
    )
}