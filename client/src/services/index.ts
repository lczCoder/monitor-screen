
import api from './api';
import request from '../utils/request';

/**
 * 获取首页列表
 */
const getArticleList = (s: {} | undefined) => request('get', api.home, { ...s });


export { getArticleList };
