import {connect, MapDispatchToProps} from "react-redux";
import {numberRequestStartAction, numberRequestUserConfirmationAction} from "../../modules/collection/numberCollection";
import {NumberSetterComponent} from "./NumberSetterComponent";
import {BaseAction} from "../../modules/collection/types";

interface INumberSetterContainerDispatchToProps {
    onRequestNumber?: ()=> BaseAction
    onUserConfirmNewNumberRequest?:(result)=> BaseAction
}
interface INumberSetterContainerOwnProps {

}

interface INumberSetterContainerStateToProps {

}

const mapDispatchToProps: MapDispatchToProps<INumberSetterContainerDispatchToProps, INumberSetterContainerOwnProps> =
    (dispatch, ownProps) => ({
        onRequestNumber: ()=> dispatch(numberRequestStartAction()),
        onUserConfirmNewNumberRequest: (result)=> dispatch(numberRequestUserConfirmationAction(result))
})

export const NumberSetterContainer = connect<INumberSetterContainerStateToProps, INumberSetterContainerDispatchToProps, INumberSetterContainerOwnProps>(
    null,
    mapDispatchToProps as INumberSetterContainerDispatchToProps
)(NumberSetterComponent)
