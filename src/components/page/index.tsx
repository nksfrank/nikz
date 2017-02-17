import * as React from 'react';
import * as styles from './base.scss';
import Card from '../shared/Card';
import connect from 'platform/connect';

export default () =>
  <div className={styles.slider}>
    <Card title="Hello World!" description="Welcome" apperance="none" imgSrc="https://unsplash.it/720/480/?random" type="4:3" />
    <Card title="Hello World!" description="Welcome" apperance="none" imgSrc="https://unsplash.it/720/480/?random" type="full" />
    <Card title="Hello World!" description="Welcome" apperance="none" imgSrc="https://unsplash.it/720/480/?random" type="image" />
  </div>;
