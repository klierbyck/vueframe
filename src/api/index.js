'use strict';

import axios from 'axios';
import qs from 'qs';
import router from '../router';
import auth from '@/libs/auth'

axios.interceptors.request.use(
    config => {
        if (auth.token()) {
            config.headers.Authorization = 'Bearer ' + auth.token()
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        let errorData = error.response;
        if (errorData.status === 401) {
            // 若是接口访问的时候没有发现有鉴权的基础信息,直接返回登录页,或者授权不可用
            auth.logout();
            router.push({
                path: '/login'
            });
        }
        // Message.error(errorData.message);
        return Promise.resolve(error.response);
    }
);
//封装请求方式
function getAxios (method, url, params, baseURL) {
    let property = {
        method: method,
        url: url,
        baseURL: baseURL,
        withCredentials: false,
        timeout: 10000,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': 'application/vnd.huox.admin+json'
        }
    };

    if (
        method === 'POST' ||
        method === 'PUT' ||
        method === 'PATCH' ||
        method === 'DELETE'
    ) {
        property.data = qs.stringify(params);
        property.headers = {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': 'application/vnd.huox.admin+json'
        };
    } else {
        property.params = params;
    }

    return axios(property);
}
//导出请求方法
export default {
    get (url, params) {
        return getAxios('GET', url, params, process.env.API_ROOT);
    },
    post (url, data) {
        return getAxios('POST', url, data, process.env.API_ROOT);
    },
    put (url, data) {
        return getAxios('PUT', url, data, process.env.API_ROOT);
    },
    patch (url, data) {
        return getAxios('PATCH', url, data, process.env.API_ROOT);
    },
    delete (url, data) {
        return getAxios('DELETE', url, data, process.env.API_ROOT);
    }
};
