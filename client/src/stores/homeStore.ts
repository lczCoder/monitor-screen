import { makeAutoObservable } from 'mobx';

class HomeStore {
  rootStore: any;
  constructor(rootStore: any) {
    this.rootStore = rootStore;
    // 会把所有的属性变为observable,所有的方法变为action ，所有的get修饰的变为计算属性
    // autoBind 表示绑定函数内部的this就是实例
    makeAutoObservable(this, {}, { autoBind: true });
  }

  active = '123456';
  list = [{ id: '1' }];

  updateActive(a: string) {
    this.active = a;
  }
  
}

export default HomeStore;
