import { motion } from "framer-motion";

const variants = {
    unflipped: { rotateY: 0},
    flipped: {rotateY: 180}
}

const front = {
    rest: {
        backfaceVisibility: 'hidden',
        zIndex:10,
    },
    hover: {
        backfaceVisibility: 'hidden',
        zIndex: 0,
        rotateY: 180,
    }
}

const back = {
    rest: {
        zIndex:0,
        rotateY: -180,
        backfaceVisibility: 'hidden'
    },
    hover: {
        zIndex:10,
        rotateY: 0,
    }
}


export default function Card(props:any) {

    return(
        <motion.div initial="rest" animate={{scale:[0,1]}} style={{transformStyle: "preserve-3d"}} whileHover="hover" className={`sm:min-w-[150px] sm:min-h-[150px] min-w-[314px] min-h-[314px] relative flex justify-center`}>
            <motion.div
            variants={front}
            transition={{duration:.6}}
            style={{backgroundImage: `url(${props.image})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', }}
            className="shadow-md absolute dark:text-black dark:bg-[#37373a] rounded-xl min-w-full min-h-full">
                <div className="p-1 sm:p-0 sm:text-xs rounded-t-xl backdrop-blur-xl ">{props.front}</div>
            </motion.div>
            <motion.div
            variants={back}
            transition={{duration:.6}}
            className="sm:text-xs overflow-y-scroll overflow-x-clip absolute bg-inherit backdrop-brightness-95 dark:bg-[#37373a] rounded-xl shadow-md min-w-full min-h-full max-h-[314px]">
                {props.back}
            </motion.div>
        </motion.div>
    )
}