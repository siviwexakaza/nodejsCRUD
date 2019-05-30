const express = require('express');
const router = express.Router();
const Comment = require('../../models/Comment');


router.get('/',(req,res)=>{
    res.send("Comments");
});
//List all comments of a single message

router.get('/:id',(req,res)=>{
    Comment.find({
        "message_id":req.params.id

    }).then((comments)=>{
        res.json(comments);
    }).catch(err=>console.log(err));
});

router.post('/add',(req,res)=>{
    nComment = new Comment({
        sender : req.body.sender,
        message_id : req.body.m_id,
        content: req.body.content
    });

    nComment.save().then((com)=>{
        res.json(com);
    }).catch(err=>console.log(err));
});

router.put('/update/:id',(req,res)=>{
    Comment.findById(req.params.id).then((com)=>{
        com.content=req.body.content;
        com.save().then((newCom)=>{
            res.json(newCom);
        }).catch(err=>console.log(err));
    }).catch(err=>console.log(err));
});

router.delete('/:id',(req,res)=>{
    Comment.findById(req.params.id).then((com)=>{
        com.delete().then((delCom)=>{
            res.json(delCom);
        }).catch(err=>console.log(err));
    }).catch(err=>console.log(err));
});

module.exports=router;