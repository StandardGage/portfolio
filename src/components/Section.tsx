import { motion } from "framer-motion";

export default function Section(props: { title: string; children: any; }) {
    return (
        <div className="mx-20 p-5">
            <motion.div
                initial={{x:-100}}
                animate={{x:0}}
                className="text-5xl text-start py-10 font-proza self-start">
                {props.title}
            </motion.div>
            {props.children}
        </div>
    )
}