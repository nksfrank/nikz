import * as React from 'react';
import * as style from './base.scss';

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

const Card = (props: CardModel) => {
  switch(props.type) {
    case 'list':
      return <CardList {...props} />
  }
}

class CardFull extends React.Component<CardModel, undefined> {
  render() {
    return(
      <div className={style.card}>
        <div className={style.bg}>
          <div className="profile center border small"></div>
        </div>
        <div className={style.title}>
          {this.props.title}
        </div>
        <div className={style.section}>
          {this.props.description}
        </div>
      </div>
    );
  };
}

class CardList extends React.Component<CardModel, undefined> {
  render() {
    return(
      <div>
        
      </div>
    );
  }
}