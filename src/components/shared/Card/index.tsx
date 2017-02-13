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

export default Card as React.ComponentClass<CardModel>;

class CardFull extends React.Component<CardModel, undefined> {
  render() {
    return(
      <div className={styles.card}>
        <div className={styles.bg}>
          <div></div>
        </div>
        <div className={styles.title}>
          {this.props.title}
        </div>
        <div className={styles.section}>
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
      <div className={styles.bg}>
        <div className="profile center border small"></div>
      </div>
      <div className={styles.title}>
        {this.props.title}
      </div>
      <div className={styles.section}>
        {this.props.description}
      </div>
    </div>
    );
  }
};