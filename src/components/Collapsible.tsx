import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import AnimateHeight from "react-animate-height";

interface CollapsibleProps {
    label: string;
    children: React.ReactNode;
}

export default function Collapsible({ label, children }: CollapsibleProps) {
    const [open, setOpen] = useState(false);
    const [height, setHeight] = useState<any>(0);

    return (
      <div key={label} className="flex flex-col">
        <motion.button
          onClick={(e) => {
            setOpen(!open);
            e.stopPropagation();
          }}
          className="hover:bg-primary dark:bg-inherit dark:hover:text-primary duration-300 flex justify-between items-center space-x-5 m-5 p-2 font-proza backdrop-brightness-75 shadow-md rounded-md  flex-1"
        >
          <div>{label}</div>
          <CaretRightOutlined
            className={`${
              open ? "rotate-90" : "rotate-0"
            } transition-transform delay-100`}
          ></CaretRightOutlined>
        </motion.button>
        <AnimateHeight height={open ? 'auto' : 0} duration={500}>
              {children}
        </AnimateHeight>
      </div>
    );
}