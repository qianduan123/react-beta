// import { observable } from 'mobx';
// const HomeStore = observable({
//     title: '我是home模块'
// });
// export default HomeStore;
import axios from 'axios'
import { observable } from 'mobx';
// import HomeApi from '../api/home-api';
const HomeStore = observable({
    title: 'this is home page',
    list: [], // 获取首页数据
    async getList() {
        this.list = await axios.get('http://lemonof.com:82/api/getList').then(res => res)
    }
});
export default HomeStore;
