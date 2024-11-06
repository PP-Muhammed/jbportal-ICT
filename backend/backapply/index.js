var express = require("express")
require ('./connection')
var joblist = require('./models/applied')
var cors = require('cors')

var app = express()

app.use(express.json())
app.use(cors())

app.get('/details', (req, res) => {
    res.send('job lists')
})

app.post('/add', async(req, res) => {
    try {
        await joblist(req.body).save()
        res.send({ message: 'data added' })
    } catch (error) {
        console.log(error)
    }
})

app.get('/view', async(req, res) => {
    try {
        var data = await joblist.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

app.delete('/delete/:id',async(req,res)=>{
    try {
        await joblist.findByIdAndDelete(req.params.id)
        res.send({message: "application deleted succesfully"})
    } catch (error) {
        console.log(error)
    }
})

app.listen(2004,()=>{
    console.log('port is running')
})