const express=require('express');
const router=express.Router();
const con=require('../connection');
const querystring=require('querystring');
router.get('/getMobiles',(req,res)=>{
    con.query("select * from mobiles ",(err,result)=>{
        if(err){
            res.json({err:err})
        }
        else{
            res.json({
                result:result
            })
        }
    });
});
router.delete('/delMobile/:id',(req,res)=>{
    var id=req.params.id
    id=Number(id)
    con.query("delete from mobiles where mid = ?",[id],(err,result)=>{
        if(err){
            res.json({err:err})
        }
        else{
            res.json({
                delete:1
            })
        }
    });
})
router.post('/postMobile',(req,res)=>{
    data={
        name:req.body.name,
        price:Number(req.body.price),
        year:Number(req.body.year)
    }
    con.query("insert into mobiles set ?",data,(err,result)=>{
        if(err){
            res.json({err:err})
        }
        else{
            res.json({
                submit:true
            })
        }
    })
})
router.put('/updateMobile/:id',(req,res)=>{
    var id=req.params.id
    id=Number(id)
    data={
        name:req.body.name,
        price:Number(req.body.price),
        year:Number(req.body.year)
    }
    con.query("update mobiles set ? where mid = ?",[data,id],(err,result)=>{
        if(err){
            res.json({err:err})
        }
        else{
            res.json({
                submit:true
            })
        }
    })
})

module.exports=router