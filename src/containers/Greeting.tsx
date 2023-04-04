import { motion } from "framer-motion";
import Socials from "../components/Socials";

export default function Greeting() {
    return (
        <div>
        <div className="flex justify-between">
            <motion.div className="flex-col flex my-20 items-start"
                initial={{x: -200}}
                animate={{x: 0}}>
                <div className="font-proza sm:text-5xl text-8xl text-left :">Hey,</div>
                <div className="font-proza sm:text-5xl text-8xl text-left whitespace-nowrap">I'm Gage</div>
            </motion.div>
            <motion.div className="group font-telex sm:text-sm text-2xl self-end justify-self-end whitespace-nowrap"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:.3}}>
                Extras about me
                <i className="fa fa-caret-down"></i>
                <div className="m-2 flex flex-col whitespace-nowrap group-hover:visible font-taviraj sm:text-sm text-xl">
                    <a>I play guitar 🎸</a>
                    <a>I like to travel 🌴</a>
                    <a>I like to skateboard 🛹</a>
                </div>
            </motion.div>            
        </div>
        <div className="w-2/5 text-left flex font-proza text-3xl">I'm an Honors Computer Science Major at the University of Delaware</div>
        <Socials></Socials>
        </div>
    )
}