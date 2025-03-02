const express= require('express')

const router= express.Router();  // router is a functionality of express, therefore for creating router we require express

router.get('/',(req,res)=>{
    res.send("Here is the list of books!");

})

router.post('/',(req,res)=>{
    res.send("Book has been added!");

})

module.exports=router; // bcz we have created new router file outside, we have to export the router. // now also import in main app js file