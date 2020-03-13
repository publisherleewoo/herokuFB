import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import App from './App';
 

if(process.env.NODE_ENV === 'production'){
    console.log("NODE_ENV production용 서버")
    axios.defaults.baseURL="http://a202003f0.herokuapp.com/"
}else if(process.env.NODE_ENV === 'development'){
    console.log("NODE_ENV development용 서버")
    // axios.defaults.baseURL="http://localhost:4000/"
    axios.defaults.baseURL="http://a202003f0.herokuapp.com/"
}
ReactDOM.render(<App />, document.getElementById('root'));

 