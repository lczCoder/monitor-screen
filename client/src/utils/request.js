import axios from 'axios';
import _ from 'lodash';
import { Toast } from '@douyinfe/semi-ui';

const baseURL = 'http://localhost/monito';
const timeout = 3000;

const errMsgToast = (text = '接口请求发生错误!', key = 'error') => {
  Toast[key]({
    content: text,
    duration: 3,
  });
};

// 错误处理
const errorHandler = (error) => {
  errMsgToast();
  return {};
};

let cancelToken = axios.CancelToken;

const cancel = [];

const removePending = (config) => {
  for (let p in cancel) {
    if (cancel[p].u === config.url) {
      cancel[p].f();
    }
  }
};

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    //在一个ajax发送前执行一下取消操作
    removePending(config);
    config.cancelToken = new cancelToken((c) => {
      cancel.push({
        f: c,
        u: config.url,
      });
    });
    const token = window.localStorage.getItem('TOKEN'); //添加token
    token && (config.headers.Authorization = token);
    return { timeout, ...config };
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    errorHandler(error);
  },
);

// 响应数据处理
function processingData(response) {
  const result = _.get(response, 'data', null);
  if (!result) {
    return null;
  }
  errMsgToast(result.msg || '未知错误', _.get(result, 'statusCode') === 0 ?'success':'warning');
  return result;
}

// url 是请求的服务器地址
// payload 参数
// other 其他参数 headers 等
async function post(url, data = {}, other = {}) {
  const response = await axios({
    method: 'post',
    baseURL,
    url: url,
    data,
    ...other,
  });
  return processingData(response);
}

async function get(url, params = {}, other = {}) {
  const response = await axios({
    method: 'get',
    baseURL,
    url: url,
    params,
    ...other,
  });
  return processingData(response);
}

const $http = {
  post,
  get,
};
export default $http;
