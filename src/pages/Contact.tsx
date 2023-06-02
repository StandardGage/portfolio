import { useState } from "react";
import Socials from "../components/Socials";
import { Modal, ConfigProvider } from "antd";
import pdf from "../assets/Gage_Schuster_Resume.pdf"


export default function Contact() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className="hover:text-primary duration-300 cursor-pointer" onClick={()=> setModalOpen(true)}>
                Contact
            </div>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimaryBorder: '#ff8000',
                    }
                }}
            >
                <Modal
                className="dark:bg-primary-dark"
                centered
                open={modalOpen}
                onCancel={()=>setModalOpen(false)}
                footer={null}
                >
                <div className="flex flex-col justify-center items-center space-y-16 dark:text-white dark:bg-primary-dark ">
                    <div className="font-proza sm:text-2xl md:text-6xl lg:text-6xl">Contact Me</div>
                    <div className="font-telex text-4xl text-center">Feel free to reach out!</div>
                    <div>
                        <div className="font-taviraj text-2xl">Email: <a className="underline" href="mailto:gageschu@udel.edu">gageschu@udel.edu</a></div>
                        <div className="font-taviraj text-2xl">Resume: <a className="underline" target="_blank" href={pdf}>document</a></div>
                    </div>
                    <Socials></Socials>
                </div>
                </Modal>
            </ConfigProvider>
        </>   
    )
}