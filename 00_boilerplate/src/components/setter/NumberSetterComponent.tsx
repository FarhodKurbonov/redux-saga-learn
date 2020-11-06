import * as React from "react";

interface INumberSetterComponentOwnProps {
    onRequestNumber: () => void;
}

export const NumberSetterComponent: React.FC<INumberSetterComponentOwnProps> = ({onRequestNumber}) => {
    debugger
    return (
        <button onClick={onRequestNumber}>Request new number</button>
    )
}
