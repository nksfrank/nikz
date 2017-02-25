import * as React from 'react';
import * as styles from './base.scss';
import * as cn from 'classnames';

type LayoutType = '4:3' | 'full' | 'image';
type Apperance = 'invert' | 'border' | 'overlay';

const getApperance = (apperance: Apperance | Apperance[]) =>
  Array.isArray(apperance) ? apperance.map(a => apperanceStyles.get(a)) : apperanceStyles.get(apperance);
const apperanceStyles = new Map<string, string>([
  ['invert', styles.invert],
  ['border', styles.border],
  ['overlay', styles.overlay],
]);

interface IApperance {
  apperance?: Apperance | Apperance[];
}
export interface ICardModel extends IApperance, ITitle {
  type?: LayoutType,
  description?: string,
  href?:string,
  children?: any;
  img?: IImageModel
}

const Default = (p: ICardModel) => 
  <Card {...p}>
    {p.img && <Image {...p.img}>
      <Title {...p}/>
    </Image> || <Title {...p} />}

    {p.description && <Section>
      {p.description}
    </Section>}
  </Card>

const Card = (p: ICardModel) =>
  <div className={cn(styles.card, getApperance(p.apperance))}>
    {p.children}
  </div>;

const CardImage = (p: ICardModel) => 
  <div className={cn(styles.card, getApperance(p.apperance))} style={{backgroundImage: `url(${p.img.src})`}}>
    <div className={styles.expand}></div>
    {p.children}
  </div>;

interface ITitle extends IApperance {
  title?: string;
  subtitle?: string;
  children?: string;
}
export const Title = (p: ITitle) =>
  <div className={cn(styles.title, getApperance(p.apperance))}>
    {<span>{p.title || p.children}</span>}
    {p.subtitle && <span>{p.subtitle}</span>}
  </div>;

interface ISectionModel extends IApperance {
  children?: any;
}
export const Section = (p: ISectionModel) =>
  <div className={cn(styles.section, getApperance(p.apperance))}>
    {p.children}
  </div>;

interface IImageModel extends IApperance {
  src: string | URL;
  children?: any;
}
export const Image = (p: IImageModel) =>
  <div className={cn(styles.bg, styles.expand, getApperance(p.apperance))} style={{backgroundImage: `url(${p.src})`}}>
    {p.children}
  </div>;

export default (p: ICardModel) => {
  switch(p.type) {
    case 'image':
      return <CardImage {...p}/>;
    case 'full':
      return <Card {...p}/>;
    default: 
      return p.children ? <Card {...p}/> : <Default {...p}/>;
  }
}