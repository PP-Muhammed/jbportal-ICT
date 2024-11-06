var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://mhdunboxing:mhd2675@cluster0.9ykc9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('DB connected')
    })
    .catch((err) => {
        console.log(err)
    })