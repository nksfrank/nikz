import * as React from 'react';
import * as styles from './base.scss';

type LayoutType = '4:3' | 'full' | 'list' | 'image';
type Apperance = 'none' | 'dark';

interface CardModel {
  type: LayoutType,
  apperance: Apperance,
  title: string,
  description?: string,
  imgSrc: string,
  href?:string
}

export default (props: CardModel) => {
  switch(props.type) {
    case 'list':
      return <CardList {...props} />;
    case 'image':
      return <CardImage {...props} />;
    case 'full':
    default:
      return <Card {...props} />;
  }
}

const Card = (props: CardModel) =>
  <div className={styles.card}>
    <div className={styles.bg} style={{backgroundImage:`url(${props.imgSrc})`}}>
      <div></div>
    </div>
    <div className={styles.title}>
      {props.title}
    </div>
    <div className={styles.section}>
      {props.description}
    </div>
  </div>

const CardList = (props: CardModel) =>
  <div className={styles.card}>
    <div className={styles.bg} style={{backgroundImage:`url(${props.imgSrc})`}}>
      <div className="profile center border small"></div>
    </div>
    <div className={styles.title}>
      {props.title}
    </div>
    <div className={styles.section}>
      {props.description}
    </div>
  </div>

const CardImage = (props: CardModel) =>
  <div className={styles.card} style={{backgroundImage:`url(${props.imgSrc})`}}>
    <div className={styles.expand}></div>
    <div className={styles.section}>
      <span>{props.title}</span>
    </div>
  </div>