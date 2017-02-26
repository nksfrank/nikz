import * as React from 'react';
import * as styles from './base.scss';
import Card, {Section, Title, Image} from '../shared/Card';
import {Segment} from '../shared/Layout';
import connect from 'platform/connect';

export default () =>
  <Segment apperance={['grouped', 'horizontal']}>
    <Card title="Welcome" apperance={['invert', 'overlay']} description="Selection" img={{src:'https://unsplash.it/720/480/?random=4'}} />
    <Card type="full">
      <Image src='https://unsplash.it/720/480/?random=2'>
        <Title title="Hello World" subtitle="Welcome to the suck" apperance={["overlay", 'invert']} />
      </Image>
      <Section apperance='border'>
        Welcome to the Chill
      </Section>
    </Card>
    <Card>
      <Title title="Hello World" />
      <Section apperance='border'>
        Welcome to the Chill
      </Section>
      <Section apperance={['border', 'invert']}>
        Welcome to the Chill
      </Section>
    </Card>
    <Card description="Welcome" apperance={['invert', 'overlay']} type="image" img={{src:'https://unsplash.it/720/480/?random=5'}}>
      <Title apperance={["overlay", 'border']}>
        Welcome to the Chill
      </Title>
    </Card>
  </Segment>;
