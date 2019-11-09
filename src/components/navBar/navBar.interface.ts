import {RouteComponentProps} from 'react-router';
export interface INavBarprops extends RouteComponentProps {

}

export interface INavBarState {
  menu: IMenu[];
  show: boolean;
  initData: IMenu[];
}

export interface IMenu {
  value: string;
  label: string;
  isLeaf?: boolean;
  children?: any;
}