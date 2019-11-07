
import * as types from './action-types';



export interface Add {
  type: typeof types.ADD
}

export interface Subtract {
  type: typeof types.Subtract
}



export type Action = Add | Subtract;

export default {
  add():Add {
    return { type: types.ADD}
  }
}