import { IStore } from './index.interface';
import {Action} from '../actions/counter';
import * as types from '../actions/action-types';

const initState: IStore = {
  number: 0,
}


export default function(state: IStore = initState, action: Action) {
  switch(action.type) {
    case types.ADD:
      return {
        ...state,
        number: state.number+1
      };

    default:
      return state;
  }
}