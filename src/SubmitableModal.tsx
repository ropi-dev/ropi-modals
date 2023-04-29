import React from "react";
import Modal, {ModalProps} from "./Modal.js";
import {TitleBar} from "./TitleBar.js";

export interface SubmittableModalProps {
    title: string,
    disabled: boolean,
    onSubmit?: () => unknown,
    children: React.ReactNode
}

export const SubmittableModal: React.FC<SubmittableModalProps & ModalProps> = (props) => {
    const onSubmit = props.onSubmit || (() => {});

    return <Modal {...props}>{
        (onClose) => <>
            <TitleBar title={props.title} onClose={onClose}/>
            <div className="ropi-modal-body">{props.children}</div>
            <div className="ropi-modal-footer">
                <button className="ropi-modal-cancel" onClick={() => onClose()}>Cancel</button>
                <button className="ropi-modal-submit" disabled={props.disabled} onClick={() => onSubmit()}>Submit</button>
            </div>
        </>
    }</Modal>;
}