import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
    unflipped: { rotateY: 0},
    flipped: {rotateY: 180}
}

const front = {
    rest: {
        'backface-visibility': 'hidden',
        'z-index':10,
    },
    hover: {
        'backface-visibility': 'hidden',
        'z-index': 0,
        rotateY: 180,
    }
}

const back = {
    rest: {
        'z-index':0,
        rotateY: -180,
        'backface-visibility': 'hidden'
    },
    hover: {
        'z-index':10,
        rotateY: 0,
    }
}


export default function Card(props:any) {

    return(
        <motion.div animate={{scale:0}} whileInView={{scale:1}} style={{transformStyle: "preserve-3d"}} initial="rest" whileHover="hover" className='min-w-[312px] max-w-[312px] min-h-[312px] max-h-[312px] relative flex justify-center'>
            <motion.div
            variants={front}
            transition={{duration:.6}}
            style={{backgroundImage: `url(${props.image})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', }}
            className="absolute dark:text-black dark:bg-[#37373a] rounded-xl shadow-md min-w-[312px] max-w-[312px] max-h-[312px] min-h-[312px]">
                <div className="p-1 rounded-t-xl backdrop-blur-xl ">{props.front}</div>
            </motion.div>
            <motion.div
            variants={back}
            transition={{duration:.6}}
            className="absolute bg-inherit backdrop-brightness-95 dark:bg-[#37373a] rounded-xl shadow-md min-w-[312px] max-w-[312px] min-h-[312px] max-h-[312px]">
                {props.back}
            </motion.div>
        </motion.div>
    )
}