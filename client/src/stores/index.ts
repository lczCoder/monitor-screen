import { createContext, useContext } from 'react';
import HomeStore from './homeStore';

// 定义状态管理器
class RootStore {
  homeStore: HomeStore;
  
  constructor() {
    this.homeStore = new HomeStore(this);
  }
}

const Context = createContext(new RootStore());

export default function useStore() {
  return useContext(Context);
}
