const { ocrSpace } = require('ocr-space-api-wrapper');
const apikey = 'K83645117788957'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api', async(req, res) => {
    const {data} = req.body;
    const text = await ocrSpace(`data:image/png;base64,${data}`, { apiKey: apikey, language: 'ita' });
    const result = text.ParsedResults[0].ParsedText.replaceAll("\r\n"," ").trim()
    res.json(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})