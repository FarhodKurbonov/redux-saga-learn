import * as React from "react";
import {BaseAction} from "../../modules/collection/types";

interface INumberSetterComponentOwnProps {
    onRequestNumber: () => BaseAction;
    onUserConfirmNewNumberRequest: (result: boolean) => BaseAction
}

export const NumberSetterComponent: React.FC<INumberSetterComponentOwnProps> = ({onRequestNumber, onUserConfirmNewNumberRequest /*onCancelRequest*/}) => {

    const [showModal, setShowModal] = React.useState(false)

    const handleRequest = () => {
        setShowModal(true);
        onRequestNumber()
    }

    const handleConfirm = (value: boolean) => {
        setShowModal(false)
        onUserConfirmNewNumberRequest(value)
    }

    const body = ()=> {
        if(showModal)
            return <div style={{ background: '#ADD8E6' }}>
                         <span>Are you sure you want to get a new number?</span>
                         <button onClick={() => handleConfirm(true)}>Yes</button>
                         <button onClick={() => handleConfirm(false)}>No</button>
                    </div>
        else
            return  null
    }


    return (
        <div>
            <button onClick={handleRequest}>Request new number</button>
            {body()}
            {/*<button onClick={onCancelRequest}>Cancel number request</button>*/}
        </div>
        
    )
}

