import * as React from 'react';
import * as styles from './base.scss';

type LayoutType = '4:3' | 'full' | 'list';
type Apperance = 'none' | 'dark';

interface CardModel {
  type: LayoutType,
  apperance: Apperance,
  title: string,
  description?: string,
  imgSrc: string,
  href?:string
}

class Card extends React.Component<CardModel, undefined> {
  render() {
    const props = this.props;
    switch(props.type) {
      case 'list':
        return <CardList {...props} />;
      default:
        return <CardFull {...props} />;
    }
  }
}

export default class CardFull extends React.Component<CardModel, undefined> {
  render() {
    return(
      <div className={styles.card}>
        <div >
          <div></div>
        </div>
        <div >
          {this.props.title}
        </div>
        <div >
          {this.props.description}
        </div>
      </div>
    );
  };
};

class CardList extends React.Component<CardModel, undefined> {
  render() {
    return(
      <div className={styles.card}>
        
      </div>
    );
  }
};