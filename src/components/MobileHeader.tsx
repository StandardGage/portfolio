import { useState } from "react";
import Contact from "../pages/Contact";
import { Modal } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import ThemeToggle from "./ThemeToggle";

export default function MobileHeader() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <MenuOutlined style={{display: open ? 'none' : 'block', fontSize: '2rem'}} onClick={()=> setOpen(true)}/>
            <CloseOutlined style={{display: !open ? 'none' : 'block', fontSize: '2rem'}} onClick={()=> setOpen(false)}/>
            <Modal
                centered
                open={open}
                onCancel={()=>setOpen(false)}
                footer={null}>
                <ol className="flex space-y-4 flex-col justify-center items-center text-xl text-bold font-proza dark:text-white">
                    <li><a href='#skills' onClick={()=>setOpen(false)}>Skills</a></li>
                    <li><a href='#projects' onClick={()=>setOpen(false)}>Projects</a></li>
                    <li><a href='#education' onClick={()=>setOpen(false)}>Education</a></li>
                    <li><a href='#experience' onClick={()=>setOpen(false)}>Experience</a></li>
                    <li onClick={()=>setOpen(false)}><Contact></Contact></li>
                    <ThemeToggle/>
                </ol>
            </Modal>
        </>
    )
}