import { motion } from "framer-motion";

export default function Section(props: { id: string; title: string; children: any; }) {
    return (
        <div id={props.id} className="">
            <motion.div
                initial={{x:-100}}
                animate={{x:0}}
                className="text-5xl sm:text-3xl text-start py-20 font-proza self-start">
                {props.title}
            </motion.div>
            {props.children}
        </div>
    )
}