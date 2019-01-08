import React from 'react'
import { Modal, Input, Button } from 'antd'
class Dialog extends React.Component {
  constructor(props){
    
    super(props)
    console.log('this.props.input', this.props.input);
    this.state = {
      visible: false,
      input: this.props.input
    }
  }

  showModal = (index) => {
    this.setState({
      visible: true,
      index: index,
      input: this.props.input
    });
  }

  handleOk = (e) => {
    console.log(this.state.input);
    this.setState({
      visible: false,
    });
    let getModify = this.props.getModify
    getModify(this.state.input,this.state.index)
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  modify = (name,e) => {
    let data = Object.assign({}, 
      this.state.input, { 
        [name]: e.target.value 
      }
    )
    this.setState({
      input: data
    })
  }
  style = {
    margin: '5px 0'
  }

  render() {
    return (
      <div>
        
        <Modal
          title="修改"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>取消</Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>
              确定
            </Button>
          ]}>
          <Input 
            type="text" 
            style={this.style}
            onChange={this.modify.bind(this,'name')}
            name="name"
            value={this.state.input.name} 
            placeholder='请输入标题'/>
          <Input 
            type="text"
            style={this.style}
            name="description" 
            onChange = {this.modify.bind(this,'description')}
            value={this.state.input.description} 
            placeholder='请输入描述'/>
        </Modal>
      </div>
    );
  }
}

export default Dialog;