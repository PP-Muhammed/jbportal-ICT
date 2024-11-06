var express = require("express")
require('./connecton')
var joblist = require('./models/jobs')
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
   D } catch (error) {
        console.log(error)
    }
})

app.delete('/delete/:id',async(req,res)=>{
    try {
        await joblist.findByIdAndDelete(req.params.id)
        res.send({message: "deleted succesfully"})
    } catch (error) {
        console.log(error)
    }
})

app.put('/update/:id', async (req, res) => {
    try {
        await joblist.findByIdAndUpdate(req.params.id, req.body)
        res.send({message:"Employee updated successfully"})
    } catch (error) {
        console.log(error)
    }
    
 })

app.listen(2003, () => {
    console.log('port is running')
})