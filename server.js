const expres = require('express')
const app = expres()
const version = require('./package.json').version
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Resolving / at version: ' + version)
})

app.get('/close', (req, res) => {
    res.send('Call /close')
    srv.close(() => {
        console.log('closing')
    })
})

var srv = app.listen(PORT, () => {
    console.log('Running version: ' + version)
})
