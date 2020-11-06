import {connect, MapDispatchToProps, MapStateToProps} from 'react-redux';
import { IAppState } from '../../redux/rootReducer';
import { NumberViewerComponent, INumberViewerComponentOwnProps } from './NumberViewerComponent';

interface INumberViewerContainerOwnProps {

}

interface INumberViewerContainerStateToProps {
  numberCollection: number[]
}

interface INumberViewerContainerDispatchToProps {

}

const mapStateToProps: MapStateToProps<INumberViewerContainerStateToProps, INumberViewerContainerOwnProps, IAppState> =
    (state, ownProps): INumberViewerContainerStateToProps => ({
      numberCollection: state.numberCollection,
});

const mapDispatchToProps: MapDispatchToProps<INumberViewerContainerDispatchToProps, INumberViewerContainerOwnProps> =
        (dispatch) => ({});

export const NumberViewContainer = connect<
    INumberViewerContainerStateToProps,
    INumberViewerContainerDispatchToProps,
    INumberViewerComponentOwnProps,
    IAppState>(
  mapStateToProps,
  mapDispatchToProps
) (NumberViewerComponent);
