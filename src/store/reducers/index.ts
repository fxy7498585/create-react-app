import { Store } from './index.interface';
import {Action} from '../actions/counter';
import * as types from '../actions/action-types';

let initState: Store = {
  number: 0,
}


export default function(state: Store = initState, action: Action) {
  switch(action.type) {
    case types.ADD:
      return {
        ...state,
        number: state.number+1
      };
      break;

    default:
      return state;
      break;
  }
}