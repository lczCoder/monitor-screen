import http from '../utils/request';

/**
 * 获取首页列表
 */
function getArticleList() {
  return http('get', '/article/home/index', {});
}

export { getArticleList };
