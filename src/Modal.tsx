import React from "react";
import './Modal.css';

export interface ModalProps {
    open: boolean
    onClose?: () => unknown,

}

const Modal: React.FC<ModalProps & {children?: ((onClose: () => unknown) => React.ReactNode) | React.ReactNode}> = ({
    open,
    onClose = () => console.log("CLOSE"),
    children
}) => {
    let _children: React.ReactNode;
    if (typeof children === 'function') {
        _children = children(() => onClose())
    } else {
        _children = children
    }

    return <div tabIndex={-1}
                onClick={() => onClose()}
                style={{
                    display: open ? 'block' : 'none'
                }}
                className="ropi-modal-overlay">
        <div className="ropi-modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="ropi-modal-content">
                {
                    _children
                }
            </div>
        </div>
    </div>;
}

export default Modal
