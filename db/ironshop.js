const mongoose = require('mongoose')

const databaseName = 'ironshop'
const connectionDb = `mongodb://localhost/${databaseName}`

mongoose
    .connect(connectionDb)
    .then(conectionInfo => {
        console.log(`You are conected to MongoDB "${conectionInfo.connections[0].name}"`)
    })
    .catch(err => console.error('ERROR: Not conected to MongoDB', err))
