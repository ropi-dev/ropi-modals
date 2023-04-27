import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";

export const TitleBar: React.FC<{ title: string, onClose: () => void }> = (props) => <div className="ropi-modal-title">
    <h3>{props.title}</h3>
    <button type="button" onClick={() => props.onClose()}>
        <FontAwesomeIcon icon={faClose} />
    </button>
</div>