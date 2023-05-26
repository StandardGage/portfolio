import { Variant, Variants, motion } from "framer-motion";
import { useState } from "react";

const front:Variants = {
  rest: { rotateY: 0, zIndex: 5 },
  flipped: { rotateY: 180, zIndex: 0},
};

const back:Variants = {
  rest: { rotateY: -180, zIndex: 0 },
  flipped: { rotateY: 0, zIndex: 5 },
};

export default function Card(props: any) {
  const [flipped, setFlipped] = useState(false);
  const [small, setSmall] = useState(document.body.clientWidth < 812);

  const flipCard = () => {
    setFlipped(!flipped);
  };

  return (
    <motion.div
      onClick={() =>flipCard()}
      onHoverStart={()=>small ? null : setFlipped(true)}
      onHoverEnd={()=>small ? null : setFlipped(false)}
      className={`min-w-[314px] min-h-[314px] relative flex justify-center`}
    >
      <motion.div
        animate={flipped ? "flipped" : "rest"}
        initial="rest"
        variants={front}
        transition={{ duration: 0.6 }}
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
        className="shadow-md absolute dark:text-black rounded-xl min-w-full min-h-full"
      >
        <div className="p-1 rounded-t-xl backdrop-blur-xl ">{props.front}</div>
      </motion.div>
      <motion.div
        animate={flipped ? "flipped" : "rest"}
        initial="rest"
        variants={back}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
        className="overflow-y-scroll overflow-x-clip absolute bg-inherit backdrop-brightness-95 dark:bg-[#37373a] rounded-xl shadow-md min-w-full min-h-full max-h-[314px]"
      >
        {props.back}
      </motion.div>
    </motion.div>
  );
}
