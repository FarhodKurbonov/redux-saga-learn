import {connect, MapDispatchToProps} from "react-redux";
import {numberRequestStartAction, cancelOnGoingNumberRequestAction} from "../../modules/collection/numberCollection";
import {NumberSetterComponent} from "./NumberSetterComponent";

interface INumberSetterContainerDispatchToProps {
    onRequestNumber: ()=> void
    onCancelRequest:()=> void
}
interface INumberSetterContainerOwnProps {

}

interface INumberSetterContainerStateToProps {
}

const mapDispatchToProps: MapDispatchToProps<INumberSetterContainerDispatchToProps, INumberSetterContainerOwnProps> =
    (dispatch, ownProps) => ({
        onRequestNumber: ()=> dispatch(numberRequestStartAction()),
        onCancelRequest: ()=> dispatch(cancelOnGoingNumberRequestAction())
})

export const NumberSetterContainer = connect<INumberSetterContainerStateToProps, INumberSetterContainerDispatchToProps, INumberSetterContainerOwnProps>(
    null,
    mapDispatchToProps
)(NumberSetterComponent)
