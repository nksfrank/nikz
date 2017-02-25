import {Action} from 'redux';

interface ICardModel {
  type?: any,
  apperance?: any,
  title?: string,
  description?: string,
  href?:string,
  children?: any;
  img?: any
}

type StateType = {
  list: ICardModel;
}

const initialState = {
  list: []
} as StateType;

export default (state: StateType, action: Action) => {
  if(typeof state === 'undefined') {
    return initialState;
  }
  return state;
}