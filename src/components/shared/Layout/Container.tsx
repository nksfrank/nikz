import * as React from 'react';
import * as styles from './base.scss';
import * as cn from 'classnames';

type Apperance = 'divide' | '';
type P = {
  children?: React.ReactNode;
  className: string;
}

export default ({children, className}: {children?: React.ReactNode, className?: string}) =>
  <div className={cn(className)}>
    {children}
  </div>;