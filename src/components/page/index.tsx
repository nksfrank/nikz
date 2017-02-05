import * as React from 'react';
import connect from 'platform/connect';

export interface HelloProps {
  text: string;
}

class Page extends React.Component<HelloProps, void> {
  render() {
    return(
      <div>{this.props.text}</div>
    );
  }
}

export default connect(
  state => {

  },
  dispatch => {

  }
)(Page) as React.ComponentClass<HelloProps>;