import * as React from 'react';
import * as styles from './base.scss';
import Card, {Section, Title, Image} from '../shared/Card';
import connect from 'platform/connect';

export default () =>
  <div className={styles.slider}>
    <Card type="full">
      <Image src='https://unsplash.it/720/480/?random=2'>
        <Title title="Hello World" apperance={["transparent", 'invert']} />
      </Image>
      <Section apperance='border'>
        Welcome to the Chill
      </Section>
    </Card>
    <Card>
      <Title title="Hello World" apperance="transparent" />
      <Section apperance='border'>
        Welcome to the Chill
      </Section>
      <Section apperance='border'>
        Welcome to the Chill
      </Section>
    </Card>
    <Card description="Welcome" apperance={['invert', 'transparent']} type="image" img={{src:'https://unsplash.it/720/480/?random=5'}}>
      <Title apperance={["transparent", 'border']}>
        Welcome to the Chill
      </Title>
    </Card>
  </div>;
