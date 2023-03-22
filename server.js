const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors');
const router = require('./routes')
const path = require('path')


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
    app.use(cors(
        {
            origin: `http://localhost:${port}`, //アクセス許可するオリジン
            credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
            optionsSuccessStatus: 200 //レスポンスstatusを200に設定
        }
    ))
   
    app.use(express.json())
    app.use(express.static(path.join(__dirname,"/")))
    // app.use(express.static(path.join(__dirname,"/public")))
    app.use('/', router)
  
})