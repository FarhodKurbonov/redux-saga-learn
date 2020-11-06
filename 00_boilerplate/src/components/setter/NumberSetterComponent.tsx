import * as React from "react";

interface INumberSetterComponentOwnProps {
    onRequestNumber: () => void;
    onCancelRequest: () => void;
}

export const NumberSetterComponent: React.FC<INumberSetterComponentOwnProps> = ({onRequestNumber, onCancelRequest}) => {
    return (
        <div>
            <button onClick={onRequestNumber}>Request new number</button>
            <button onClick={onCancelRequest}>Cancel number request</button>
        </div>
        
    )
}
