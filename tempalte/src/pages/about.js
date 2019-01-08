import React from 'react'
import { Link } from 'react-router-dom'
import { Input, List, Card, Switch, notification, Icon, Button } from 'antd';
import {observer, inject} from 'mobx-react';
const Search = Input.Search;
notification.config({
    placement: 'topRight',
    top: 10,
    duration: 1,
});

@inject('TodoList')
@observer
class about extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: '123'
        }
        console.log(this.props);
    }
    // @observable owner = this.props.user;
    changeTitle = e => {
        let title = e.target.value;
        this.setState({title});
    }
    submit = () => {
        this.props.TodoList.addTodo(this.state.title);
    }
    changeState = (state,index) => {
        this.props.TodoList.changeState(state, index)
    }
    
    
    render(){
        const {
            TodoList: {todos}
        } = this.props;
        const grid = {
            gutter: 16,
            column: 4
        }
        return (
            <div>
                <p> 这是about页 </p> 
                <Search 
                    placeholder = "请输入任务名称"
                    enterButton = "添加"
                    value = {this.state.title}
                    onChange = {this.changeTitle}
                    onSearch = {this.submit}/>
                {
                    <List
                        grid={grid}
                        dataSource = {
                            todos
                        }
                        renderItem={(item,index) => 
                            <List.Item key={item.id}>
                                <Card title={item.title}>
                                    <Switch 
                                        checkedChildren='完成' 
                                        unCheckedChildren='未完成'
                                        checked={item.finished} 
                                        onChange={this.changeState.bind(this,!item.finished,index)}/>
                                </Card>
                            </List.Item>
                        }
                    />
                }
                {
                    todos.map((e, index) => {
                        return (
                            <div key={e.id}>
                                {e.title}
                                <Switch 
                                    checkedChildren='完成' 
                                    unCheckedChildren='未完成'
                                    checked={e.finished} 
                                    onChange={this.changeState.bind(this,!e.finished,index)}/>
                            </div>
                        )
                    })
                }
                <Link to = "/" > 
                    <Button type="primary">
                        <Icon type="left" />
                        前往首页
                    </Button>
                </Link> 
            </div>
        )
    }
}
export default about
