const express = require('express');
const router = express.Router();
const Message = require('../../models/Message');

router.get('/',(req,res,next)=>{

    
    Message.find().then((messages)=>{

        res.json(messages);
        

    }).catch(err=>console.log(err));

});

router.get('/:id',(req,res,next)=>{

    Message.findById(req.params.id).then((msg)=>{
        res.json(msg);
    }).catch(err=>console.log(err));

});

router.post('/add',(req,res,next)=>{
    const sender =req.body.sender;
    const content = req.body.content;

    nMessage = new Message({
        sender: sender,
        content : content
    });

    nMessage.save().then((msg)=>{
        res.json(msg);

    }).catch(err=>console.log(err));
});

router.put('/update/:id',(req,res,next)=>{
    let id=req.params.id;

    Message.findById(id).then((msg)=>{
        msg.content=req.body.content;
        msg.save().then((newMessage)=>{
            res.json(newMessage);
        }).catch(err=>console.log(err));
    }).catch(err=>console.log(err));
});

router.delete('/:id',(req,res,next)=>{
    Message.findById(req.params.id).then((msg)=>{
        msg.delete().then((msg)=>{
            res.send({
                response:"Message deleted",
                message:msg
            });
        }).catch(err=>console.log(err));
    }).catch(err=>console.log(err));
});

module.exports=router;
