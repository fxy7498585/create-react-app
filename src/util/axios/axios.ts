import axios from 'axios';
import { string } from 'prop-types';

export interface IParams {
  method: Method;
  url: string;
  data?: object;
}

export type Method = 'get' | 'post'


  // | 'put'
  // | 'patch'
  // | 'delete'
  // | 'head'

const fetch = async (params: IParams) => {
  console.log('params', params)
  let data;
  if (params.method === 'get') {
    data = await axios[params.method](params.url, {
      params:{
        ...params.data
      }
    })
  } else {
    data = await axios[params.method](params.url, {
      ...params.data
    })
  }
  return data.data;
}

export default fetch