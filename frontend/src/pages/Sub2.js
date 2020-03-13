import React, { Component } from 'react';
import Todo from '../components/Todo'
import Header from '../common/Header';
import Footer from '../common/Footer';

var sub2Title="제목2"

var ListData=[
    {no:0,todo:"할일",done:false},
    {no:1,todo:"할일2",done:false},
    {no:2,todo:"할일3",done:false},
]
class Sub2 extends Component {
    render() {
        return (
            <>
                <Header></Header>
                <Todo title={sub2Title} ListData={ListData}></Todo>      
                <Footer></Footer>
            </>
        );
    }
}
 
export default Sub2;    