import * as React from 'react';

export interface HelloProps {
  text: string;
}

export default class Page extends React.Component<HelloProps, undefined> {
  render() {
    return(
      <div>{this.props.text}</div>
    );
  }
}