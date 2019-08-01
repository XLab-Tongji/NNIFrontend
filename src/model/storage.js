/**
 * 自己定义的模块
 */
var storage={


    set(key,value){

        localStorage.setItem(key,value);

    },
    get(key){

        return localStorage.getItem(key);

    },remove(key){

        localStorage.removeItem(key)
    },
    change(key,value){
        localStorage.removeItem(key)
        localStorage.setItem(key,value)
    }
};
// 暴露出去，供外部使用
export default storage;
