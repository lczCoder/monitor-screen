import _ from 'lodash';
import { Test } from '../../../api/user';
export default {
  namespace: 'Login',
  state: {},
  reducers: {},
  effects: {
    *fetchRouterList({ payload }, { call }) {
      const res = yield call(Test);
    },
  },
};
