import * as React from 'react';
import ap, {ApperanceValue} from './apperance';

type P = {
  children?: React.ReactNode;
  apperance?: ApperanceValue[]
}
export default ({apperance, children}: P) =>
  <div className={ap(...apperance)}>
    {children}
  </div>;