import * as React from 'react';
import * as styles from './base.scss';
import Card from '../shared/Card';
import connect from 'platform/connect';


class Page extends React.Component<undefined, undefined> {
  render() {
    return(
      <div className={styles.slider}>
        <Card title="Hello World!" description="Welcome" apperance="none" imgSrc="" type="4:3" />
        <Card title="Hello World!" description="Welcome" apperance="none" imgSrc="" type="4:3" />
        <Card title="Hello World!" description="Welcome" apperance="none" imgSrc="" type="4:3" />
      </div>
    );
  }
}

export default connect(
  state => ({

  }),
  dispatch => ({

  })
)(Page) as React.ComponentClass<undefined>;