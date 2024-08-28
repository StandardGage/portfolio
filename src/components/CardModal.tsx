import { Modal } from "antd";
import { useState } from "react";
import Collapsible from "./Collapsible";

export default function CardModal(props: any) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <button
        className="shadow-lg rounded-lg bg-secondary dark:dark:bg-[#37373a] text-accent "
        onClick={() => setModalOpen(true)}
      >
        <div>
          <div className="font-proza">{props.title}</div>
          <div className="font-telex">{props.subtitle}</div>
          <div className="font-taviraj text-wrap">{props.date}</div>

          <img
            style={{ width: props.width, height: props.height }}
            loading="lazy"
            draggable={false}
            className={`rounded-b-lg object-cover`}
            src={props.image}
          />
        </div>
      </button>
      <Modal
        className="dark:bg-primary-dark dark:text-accent rounded-lg"
        centered
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
      >
        <>
          <div>
            <div className="font-proza">{props.title}</div>
            <div className="font-telex">{props.subtitle}</div>
            <div className="font-taviraj">{props.date}</div>
          </div>
          <a
            className={`${props.url ? "cursor-pointer" : "cursor-default"}`}
            href={props.url}
            target="_"
          >
            <img
              draggable={false}
              className="rounded-lg m-auto"
              src={props.image}
            />
          </a>
          {props.children}
        </>
      </Modal>
    </>
  );
}
