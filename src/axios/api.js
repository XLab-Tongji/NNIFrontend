import axios from 'axios'
import { message } from 'antd'
axios.defaults.baseURL = 'http://10.60.38.173:1500';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.timeout = 15000;


// 添加请求拦截器
axios.interceptors.request.use(function (config) {

    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if(response.status === 200){
        return response.data;
    }

    return response;
}, function (error) {
    var n = (error+'').search('timeout');
    if(n > -1){
        message.error('请求超时');
    }
    if(n === -1){
        message.error('网络请求错误')
    }
    // 对响应错误做点什么
    return error;
});

var http = (obj)=>{
    var data = obj.data;
    const Data=new URLSearchParams();
    for(var k  in data){
        Data.append(k,data[k])
    }
    axios({
        method: obj.method,
        url: obj.url,
        data: Data,
    }).then((res)=>{
        return  obj.success(res)
    })
};

export default http
