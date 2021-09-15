import fetch from 'cross-fetch';
import { Toast } from 'antd-mobile';
import { toString } from 'lodash';

const request = async (url: string, config: any) => {
  try {
    const res = await fetch(url, config);
    const resJson = await res.json();
    if (resJson.status && 200 !== resJson.status) {
      throw Error(resJson.message);
    }
    return resJson;
  } catch (error: any) {
    // 公共错误处理
    Toast.fail(toString(error.message), 1);
  }
};

// GET请求
export const get = (url: string) => {
  return request(url, { method: 'GET' });
};

// POST请求
export const post = (url: string, data: any, config: any = {}) => {
  return request(url, {
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    ...config,
  });
};
