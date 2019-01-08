import React from 'react'
import { Input } from 'antd'
const Search = Input.Search;

class search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            val: this.props.val
        }
    }
    change = e => {
        this.setState({
            val: e.target.value
        })
        console.log(e.target.value);
    }
    add = val => {
        const { add } = this.props
        add(val)
    }
    render(){
        return(
            <div>
                <Search 
                    placeholder = "Basic usage" 
                    enterButton = "添加"
                    value = {this.state.val} 
                    onChange = {this.change}
                    onSearch = {this.add}/>
            </div>
        )
    }
}
export default search