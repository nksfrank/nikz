import {connect} from 'react-redux';
import StateType from './State';
import {MapDispatchToPropsFunction, MapDispatchToPropsObject, MergeProps, Options, ComponentDecorator} from 'react-redux';

interface MapStateToProps {
  (state: StateType, ownProps?: any): StateType;
}

export default function(mapStateToProps?: MapStateToProps,
                        mapDispatchToProps?: MapDispatchToPropsFunction<any, any>|MapDispatchToPropsObject,
                        mergeProps?: MergeProps<any, any, any>,
                        options?: Options): ComponentDecorator<any, any> {
  return connect.apply(this, arguments);
}
