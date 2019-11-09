
import * as types from './action-types';


export interface IAdd {
  type: typeof types.ADD
}

export interface ISubtract {
  type: typeof types.Subtract
}


export type Action = IAdd | ISubtract;

export default {
  add():IAdd {
    return { type: types.ADD}
  }
}