import { Modal } from "antd";
import { useState } from "react";
import Collapsible from "./Collapsible";



export default function CardModal(props: any) {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
        <button className="shadow-lg rounded-lg bg-secondary dark:dark:bg-[#37373a] text-accent " onClick={()=>setModalOpen(true)}>
            <div>
            <div className="font-proza">{props.title}</div>
            <div className="font-telex">{props.subtitle}</div>
            <div className="font-taviraj text-wrap">{props.date}</div>
            <img style={{width: props.width, height: props.height}} loading="lazy" draggable={false} className={`rounded-b-lg object-cover`} src={props.image}>
            </img>
            
            </div>
        </button>
        <Modal className="dark:bg-primary-dark dark:text-accent rounded-lg"
                centered
                open={modalOpen}
                onCancel={()=>setModalOpen(false)}
                footer={null}>
            <>
            <div>
                <div className="font-proza">{props.title}</div>
                <div className="font-telex">{props.subtitle}</div>
                <div className="font-taviraj">{props.date}</div>
            </div>
            <img draggable={false} className="rounded-lg m-auto" src={props.image}>
            </img>
            {props.children}
            </>
        </Modal>
        </>
    );
    }