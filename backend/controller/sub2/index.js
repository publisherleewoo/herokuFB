const express = require('express');
const router = express.Router();
const sub1service = require('../../service/sub2')

 
// var ListData=[
//     {no:0,todo:"할일",done:false},
//     {no:1,todo:"할일2",done:false},
//     {no:2,todo:"할일3",done:false},
// ]

router.get('/',async (req,res)=>{
    let result = await sub1service.read();
    console.log('read',result)
    res.send(result)
})

router.post('/',  async (req,res)=>{
    let bodyData = req.body;
    let resultMsg = await sub1service.create(bodyData)
    console.log('create',resultMsg)
    res.send(resultMsg)
})

router.put('/',  async (req,res)=>{
    let bodyData = req.body;
    let resultMsg = await sub1service.update(bodyData)
    console.log('update',resultMsg)
    res.send(resultMsg)
})

router.delete('/',  async (req,res)=>{
    let no = req.body.no;
    let resultMsg = await sub1service.delete(no)
    console.log('delete',resultMsg)
    res.send(resultMsg)
})
module.exports=router