export interface tabList {
    id: string;
    data: string;
    component: JSX.Element;
  }
  
  export interface dataList extends Array<tabList> {}
  