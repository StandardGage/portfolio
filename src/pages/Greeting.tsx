import { motion } from "framer-motion";
import Socials from "../components/Socials";

export default function Greeting() {
    return (
        <div className="h-3/4">
        <div className="flex justify-between">
            <motion.div className="flex-col flex my-20 items-start"
                initial={{x: -200}}
                animate={{x: 0}}>
                <div className="font-proza sm:text-5xl text-8xl text-left :">Hey,</div>
                <div className="flex pb-2 font-proza sm:text-5xl text-8xl text-left whitespace-nowrap">I'm&nbsp;<div className="text-primary">Gage</div></div>
            </motion.div>
            <motion.div className="group font-telex sm:text-sm sm:text-left text-2xl self-end justify-self-end sm:items-start sm:justify-start whitespace-nowrap"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:.3}}>
                Extras about me
                <div className="m-2 pl-14 sm:pl-0 text-left sm:text-xs flex flex-col whitespace-nowrap group-hover:visible font-taviraj text-xl">
                    <li>I play guitar 🎸</li>
                    <li>I like to travel 🌴</li>
                    <li>I like to skateboard 🛹</li>
                </div>
            </motion.div>            
        </div>
        <div className="w-2/5 text-left flex font-proza text-3xl">I'm an Honors Computer Science Major at the University of Delaware</div>
        <div className="p-20"><Socials></Socials></div>
        </div>
    )
}