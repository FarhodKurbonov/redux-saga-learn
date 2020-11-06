import * as React from "react";

interface INumberSetterComponentOwnProps {
    onRequestNumber: () => void;
}

export const NumberSetterComponent: React.FC<INumberSetterComponentOwnProps> = ({onRequestNumber}) => {
    return (
        <button onClick={onRequestNumber}>Request new number</button>
    )
}
