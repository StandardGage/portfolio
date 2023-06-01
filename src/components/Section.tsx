import { motion } from "framer-motion";

export default function Section(props: { id: string; title: string; children: any; }) {
    return (
        <div id={props.id} className="pt-20">
            <motion.div
                initial={{x:-100}}
                animate={{x:0}}
                className="text-5xl sm:text-3xl py-10 text-start font-proza self-start">
                {props.title}
            </motion.div>
            {props.children}
        </div>
    )
}