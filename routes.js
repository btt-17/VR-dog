const express = require('express')
const router = express.Router()


router.get('/',(req, res) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            res.status(201).send('ok')
        } catch (error) {
            console.error(error)
        }
})


// router.get('/test',(req, res) => {
//     res.render("index.html")
   
// })

module.exports = router