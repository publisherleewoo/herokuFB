const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("라우터")
})

router.use('/sub1',require('./sub1'))
router.use('/sub2',require('./sub2'))

module.exports=router