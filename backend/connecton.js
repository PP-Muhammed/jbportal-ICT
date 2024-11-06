var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ppmhd:ppmhd7098@cluster0.itw8k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('DB connected')
    })
    .catch((err) => {
        console.log(err)
    })