import { useState } from "react";
import { BiRightArrow } from 'react-icons/bi';

export default function Collapsible({ label, children }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col">
            <button onClick={() => setOpen(!open)} className="flex justify-center space-x-5 m-5 p-2 font-proza backdrop-brightness-75 shadow-md rounded-md  flex-1">
                <div className="">{label}</div>
                <BiRightArrow className={`${open ? 'rotate-90' : 'rotate-0'}`}></BiRightArrow>
            </button>
            {open && <div className="pb-4">{children}</div>}
        </div>
    )
}