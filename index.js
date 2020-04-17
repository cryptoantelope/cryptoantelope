const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
const {PORT} = require('./config')

const api = require('./api')
const link = require('./routes/link')



app.use(morgan('dev'))
app.get("/health", function (req, res) {
    res.status(200).send();
});
app.use('/api', api)
app.use('/link', link)

app.use(express.static(path.join(__dirname, 'cryptoantelope-front/build')))
app.get('/*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/cryptoantelope-front/build/index.html`))
})

app.listen(PORT, () => {
    console.log('Server running...')
})
