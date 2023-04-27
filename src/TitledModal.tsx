import React from "react";
import Modal, {ModalProps} from "./Modal.js";
import {TitleBar} from "./TitleBar.js";

export interface TitledModalProps {
    title: string,
    children: React.ReactNode
}

export const TitledModal: React.FC<TitledModalProps & ModalProps> = (props) => <Modal {...props}>{
    (onClose) => <>
        <TitleBar title={props.title} onClose={onClose} />
        <div className="ropi-modal-body">{props.children}</div>
    </>
}</Modal>