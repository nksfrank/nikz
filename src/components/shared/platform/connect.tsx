import {connect} from 'react-redux';
import StateType from './State';
import {MapDispatchToPropsFunction, MapDispatchToPropsObject, MergeProps, Options, InferableComponentDecorator} from 'react-redux';

interface MapStateToProps {
  (state: StateType, ownProps?: any): any;
}

export default function(mapStateToProps?: MapStateToProps,
                        mapDispatchToProps?: MapDispatchToPropsFunction<any, any>|MapDispatchToPropsObject,
                        mergeProps?: MergeProps<any, any, any>,
                        options?: Options): InferableComponentDecorator {
  return connect.apply(this, arguments);
}