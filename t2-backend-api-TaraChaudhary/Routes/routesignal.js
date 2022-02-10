const express = require ('express');
const Signal=require('../Model/Signal');

const routesignal=new express.Router()


routesignal.route("/sign")
.post((req, res) => {
    var myData = new Signal(req.body);
    myData.save();
    res.send();
})
.get((req, res) => {
    Signal.find().then(function(user_data)
    {
        res.send(user_data);
    }).catch(function(e)
    {
        res.send(e);
    });
});
routesignal.route("/singlesign/:id")
.get((req, res) =>{
    Signal.findOne({_id :req.params.id}).then(function (xyz) {
        res.send(xyz);
    }).catch(function (e) {
        res.send(e)
    })
  })
.delete((req,res)=>
{
    Signal.findByIdAndDelete(req.params.id).then(function()
    {
        res.send("deleted")
    }).catch(function(e)
{
    res.send(e);
})
})
.put((req,res)=>
{
    Signal.findByIdAndUpdate({_id: req.params.id},req.body).then(function()
    {
        res.send("updated")}).catch(function(e)
    {
        res.send(e);
    })
});




module.exports=routesignal