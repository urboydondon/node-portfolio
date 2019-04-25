var express = require('express')
var app = express()

const todoItems = ['die' , 'die', 'die']

app.use(express.static("./public"))

app.set('view engine','ejs')
 
app.get('/', function (req, res) {
  res.render('index', {tasks:todoItems})
})
 
app.listen(3000,
    console.log("server is live")
    )

