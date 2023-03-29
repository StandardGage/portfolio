import { motion } from "framer-motion";
import Socials from "../components/Socials";

export default function Greeting() {
    return (
        <div>
        <div className="flex justify-between">
            <motion.div className="flex-col flex mx-24 my-20 items-start"
                initial={{x: -200}}
                animate={{x: 0}}>
                <div className="font-proza text-8xl text-left :">Hey,</div>
                <div className="font-proza text-8xl text-left">I'm Gage</div>
            </motion.div>
            <motion.div className="group font-telex text-2xl m-20 self-end justify-self-end"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:.3}}>
                Extras about me
                <i className="fa fa-caret-down"></i>
                <div className="m-2 flex flex-col whitespace-nowrap group-hover:visible font-taviraj text-xl">
                    <a>I play guitar 🎸</a>
                    <a>I like to travel 🌴</a>
                    <a className="w-full">I like to skateboard 🛹</a>
                </div>
            </motion.div>            
        </div>
        <div className="w-2/5 mx-24 text-left flex font-proza text-3xl">I'm an Honors Computer Science Major at the University of Delaware</div>
        <Socials></Socials>
        </div>
    )
}