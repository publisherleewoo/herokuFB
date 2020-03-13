import React, { Component } from 'react';
import Todo from '../components/Todo'
import Header from '../common/Header';
import Footer from '../common/Footer';

import axios from 'axios'

var sub1Title = "제목1"

class Sub1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ListData: []   
        }
        console.log("컨스트럭터")
    }

    componentDidMount() {
        this.getListApi()
    }

    shouldComponentUpdate(prevState, state) {
        console.log("업데이트되었을때")
        console.log(prevState)
        console.log(state)
        return true
    }

    
    getListApi = () =>{
        axios.get('/sub1').then(responseData => {
            this.setState({
                ListData:responseData.data
            })
        }).catch(err => {
            console.log("에러")
            alert(err)
        })
    }

    postListApi = (param) =>{
        axios.post('/sub1',param).then(responseData => {
            if(responseData.data==="생성 성공"){
                this.getListApi()
            }
        }).catch(err => {
            alert(err)
        })
    }

    onClick = (todoFormInpVal)=>{
        this.postListApi({todo:todoFormInpVal, done:false})
    }

    render() {
        let { ListData } = this.state
        console.log("랜더링")
        return (
            <>
                <Header></Header>
                    <Todo onClick={this.onClick} title={sub1Title} ListData={ListData}></Todo>
                <Footer></Footer>
            </>
        );
    }
}

export default Sub1;    