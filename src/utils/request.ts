import axios from 'axios';

/**
 * 请求失败后的错误统一处理
 * @param {number} status 请求状态码
 * @param {DataView} other 其他信息
 */

const errorHandler = (status: number, other: DataView) => {
    switch (status) {
        case 403:
            console.log('拒绝访问');
            break;
        case 404:
            console.log('请求地址出错');
            break;
        default:
            console.log(other);
    }
};

const service = axios.create({
    timeout: 10000 * 12,
});

// Request interceptors
service.interceptors.request.use(
    config => {
        return config;
    },
    error => Promise.reject(error)
);

// Response interceptors
service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        }
        return Promise.reject(response);
    },
    error => {
        if (error.response) {
            errorHandler(error.response.status, error.response.data);
            return Promise.reject(error.response);
        } else {
            console.log('Error', error.message);
        }
    }
);

export default service;