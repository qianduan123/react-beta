
import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/home/search'
import List from '../components/home/list'
import Dialog from '../components/home/dialog'
import { Icon, Button } from 'antd';
class Home extends React.Component {
    constructor(props){
        super()
        this.state = {
            val: '我是父组件的',
            list: [{
                name: '吃饭',
                description:'吃饭。。。'
            }, {
                name: '睡觉',
                description: '睡觉。。。'
            }, {
                name: '打豆豆',
                description: '打豆豆。。。'
            }],
            input: {
                name:'',
                description: ''
            }
        }
    }
    setVal = val => {
        let sumList = JSON.parse(JSON.stringify(this.state.list))
        sumList.push({
            name:val
        })
        this.setState({
            list: sumList
        })
    }
    /**
     * @description: 操作列表
     * @param {inde} 数据源的index 
     * @param {type} 操作的类型 del:删除 edit:修改
     * @return: 
     */
    handle = (index,type) => {
        console.log('val',index,type);
        switch (type) {
            case 'del':
                let delList = JSON.parse(JSON.stringify(this.state.list));
                delList.splice(index, 1)
                this.setState({
                    list: delList
                })
                break;
            case 'modify':
                let modifyList = JSON.parse(JSON.stringify(this.state.list));
                let obj =  modifyList[index]
                this.setState({
                    input: obj
                })
                console.log('this.setState', this.state.input);
                setTimeout(() => {
                    this.refs.dialogChild.showModal(index)
                }, 0);
                break;
            default:
                break;
        }
    }
    getModify = (val,index) => {
        let list = JSON.parse(JSON.stringify(this.state.list));
        list.splice(index,1,val)
        this.setState({
            list: list
        })
    }
    componentDidMount(){
        // this.props.homeStore.getList()
    }
    render() {
        return ( 
            <div>
                <p> 这是home页 </p> 
                <Search val={this.state.val} add={this.setVal}/>
                <ul>
                    <List
                        handle={this.handle} 
                        list={this.state.list} />
                </ul>
                <Link to = "/about" >
                    <Button type="primary">
                        前往任务卡<Icon type="right" />
                    </Button>
                </Link> 
                <Dialog ref='dialogChild' getModify={this.getModify} input={this.state.input}/>
            </div>
        );
    }
}
export default Home;