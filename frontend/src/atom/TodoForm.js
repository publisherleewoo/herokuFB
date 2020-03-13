import React, { Component } from 'react'; 

class TodoForm extends Component {
    constructor(props){
        super(props)
        this.state={
            inputData:''
        }
    }
    
    inputChangeEvent=(e)=>{
        let {target:{name,value}} = e;
        this.setState({
            [name]:value
        })
    }

    submitEvent=(e)=>{
        let {onClick} = this.props;
        let {inputData} = this.state;
        e.preventDefault()
        onClick(inputData)
        this.setState({
            inputData:''
        })
    }

    render() {
        return (
            <form onSubmit={this.submitEvent}>
                <input 
                    type="text" 
                    name="inputData"
                    value={this.state.inputData} 
                    onChange={this.inputChangeEvent}
                />
                <input type="submit" value="입력"/>
            </form>
        );
    }
}

export default TodoForm;