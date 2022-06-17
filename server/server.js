const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors())
app.use(express.json());
const port = process.env.PORT || 8082;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
    console.log('check')
    return res.json({'hi': 'testing!!?'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;