import base from './base';
import request from '~/utils/request';

const data = {
    // 获取一言
    getYiYan(data: object) {
        return request({
            url: `${base.yiyan}`,
            method: 'post',
            data,
        });
    },
};

export  {data};
