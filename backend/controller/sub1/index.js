const express = require('express');
const router = express.Router();
const sub1service = require('../../service/sub1')

 
router.get('/',async (req,res)=>{
    let result = await sub1service.read();
    res.send(result)
})

.post('/',  async (req,res)=>{
    let bodyData = req.body;   //{todo, done}
    let resultMsg = await sub1service.create(bodyData)
    res.send(resultMsg)
})

.put('/',  async (req,res)=>{
    let bodyData = req.body;  //{todo, done, no }
    let resultMsg = await sub1service.update(bodyData)
     
    res.send(resultMsg)
})

.delete('/',  async (req,res)=>{
    let no = req.body.no;  //{no}
    let resultMsg = await sub1service.delete(no)
    res.send(resultMsg)
})

module.exports=router