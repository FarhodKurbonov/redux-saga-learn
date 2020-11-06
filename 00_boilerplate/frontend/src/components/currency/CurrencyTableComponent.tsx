import * as React from 'react';

interface ICurrencyTableComponentOwnProps {
    connectCurrencyUpdateSockets: () => void;
    disconnectCurrencyUpdateSockets: () => void;
}

export const CurrencyTableComponent: React.FunctionComponent<ICurrencyTableComponentOwnProps> =
    ({connectCurrencyUpdateSockets, disconnectCurrencyUpdateSockets}) => {

    React.useEffect(() => {
        connectCurrencyUpdateSockets();
        return () => {
            disconnectCurrencyUpdateSockets();
        };
    }, []);

    return <h3>Currency Table component</h3>;
};
