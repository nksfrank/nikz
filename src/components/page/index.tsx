import * as React from 'react';
import Card from '../shared/Card';

export interface HelloProps {
  text: string;
}

class Page extends React.Component<HelloProps, void> {
  render() {
    return(
      <Card title="Hello World!" description="Welcome" apperance="none" imgSrc="" type="4:3" />
    );
  }
}

export default connect(
  state => {

  },
  dispatch => {

  }
)(Page) as React.ComponentClass<HelloProps>;