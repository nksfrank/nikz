import * as styles from './base.scss';
import * as cn from 'classnames';

type ApperanceType = 'padded' | 'grouped' | 'horizontal' | 'divided';
const ApperanceStyles = new Map<string, string>([
  ['padded', styles.padded],
  ['divided', styles.divided],
  ['grouped', styles.grouped],
  ['horizontal', styles.horizontal],
]);

interface ApperanceArray extends Array<ApperanceType>{};
export type ApperanceValue = ApperanceType | ApperanceArray;

export default function Apperances(...apperance: ApperanceValue[]) : string {
  let args: string[] = [];
  for(let i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if(!arg) continue;
    if(typeof arg === 'string') {
      const style = ApperanceStyles.get(arg);
      args.push(style);
    }
    else if(Array.isArray(arg)) {
      args.push(Apperances.apply(null, arg));
    }
  }
  return args.join(' ');
}