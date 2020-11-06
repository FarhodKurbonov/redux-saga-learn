import { connect } from 'react-redux';
import { CurrencyTableComponent } from './CurrencyTableComponent';
import {
    startSocketSubscriptionAction,
    stopSocketSubscriptionAction,
} from '../../modules/currency/currency';

const mapDispatchToProps = dispatch => ({
    connectCurrencyUpdateSockets: () => dispatch(startSocketSubscriptionAction()),
    disconnectCurrencyUpdateSockets: () => dispatch(stopSocketSubscriptionAction()),
});

export const CurrencyTableContainer = connect(
    null,
    mapDispatchToProps
)(CurrencyTableComponent);
