import { motion } from "framer-motion";
import { useState } from "react";

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
    const [mobileCardPressed, setMobileCardPressed] = useState(false)

    function pressMobileCard(isPressed: boolean) {
        function handleClick() {
            console.log('hi')
            setMobileCardPressed(false)
            document.body.removeEventListener('click',handleClick, true)
        }
        if (isPressed) {
            document.body.addEventListener('click', handleClick, true)
        }
        setMobileCardPressed(isPressed)
    }
    return(
        <>
        <motion.div initial="rest" animate={{scale:[0,1]}} style={{transformStyle: "preserve-3d"}} whileHover="hover" className={`${mobileCardPressed ? 'absolute self-center' : 'sm:hidden'} z-10 min-w-[314px] min-h-[314px] lg:relative flex justify-center`}>
            <motion.div
            variants={front}
            transition={{duration:.6}}
            style={{backgroundImage: `url(${props.image})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', }}
            className="shadow-md absolute text-black dark:bg-[#37373a] rounded-xl min-w-full min-h-full">
                <div className="p-1 sm:p-0 sm:text-xs rounded-t-xl backdrop-blur-xl backdrop-contrast-50 ">{props.front}</div>
            </motion.div>
            <motion.div
            variants={back}
            transition={{duration:.6}}
            className="sm:text-xs overflow-y-scroll overflow-x-clip absolute rounded-xl shadow-md min-w-full min-h-full max-h-[314px]">
                {props.back}
            </motion.div>
        </motion.div>
        <div onClick={() => pressMobileCard(!mobileCardPressed)} 
        style={{backgroundImage: `url(${props.image})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}
        className={`${mobileCardPressed && 'pointer-events-none' } transition-all delay-150 lg:hidden rounded-xl shadow-md text-xs dark:bg-[#37373a] min-h-[200px] min-w-[200px] max-w-[200px]`}>
            <div className="pt-2 backdrop-blur-xl backdrop-contrast-50 rounded-t-xl text-black min-h-[60px]">
            {props.front}
            </div>
        </div>
        </>
    )
}