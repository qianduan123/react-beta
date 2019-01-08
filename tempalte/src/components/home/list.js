import React from 'react'
import { List, Popconfirm, Icon, Button } from 'antd';
class ezrList extends React.Component {
    edit = (index,type,e) => {
        console.log('a',index,type,e.target);
        let handle = this.props.handle
        switch (type) {
            case 'del':
                
                handle(index, type)
                break;
            case 'modify':
                this.modify(index, type)
                break;
            default:
                break;
        }
    }
    confirm = (index, type, e) => {
        this.edit(index, type, e)
    }
    modify = (index, type) => {
        let handle = this.props.handle
        handle(index,type)

    }
    render(){
        return(
            <List
                itemLayout="horizontal"
                dataSource={this.props.list}
                renderItem={(item,index) => (
                    <List.Item 
                        actions={
                            [<Button 
                                type="primary" 
                                onClick={this.edit.bind(this, index,'modify')}>修改</Button>, 
                            <Popconfirm 
                                title="是否确定删除？" 
                                onConfirm={this.confirm.bind(this, index,'del')}
                                icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}>
                                <Button type="danger">删除</Button>
                            </Popconfirm>]}>
                        <div>
                            <span>{item.name}</span>
                            <i style={{color: '#ccc', fontSize: '12px', paddingLeft: '10px'}}>
                                {item.description?item.description:'没有描述'}
                            </i>
                        </div>
                    </List.Item>
                )}
            />
        )
    }
}
export default ezrList