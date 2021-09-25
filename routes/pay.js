const router = require('express').Router();
const express = require('express')

// const expressLayout = require('express-ejs-layouts')
// const fetch = rquire('node-fetch')
// const GOOGLE_SHEET_URL ="https://script.google.com/macros/s/AKfycbyuUA6lB1SKnQWOrrb1QiE8aK8DG_4IkC3nnYoxn-9SDL2PlXPKQrC7AzSeKiV6_gzv/exec"


// router.use(express.urlencoded({ extended:true }))
// router.use(expressLayout)
router.get('/',(req,res)=>{

    res.render('login');
})
router.get('/index',(req,res)=>{

    res.render('index');
})



module.exports = router;