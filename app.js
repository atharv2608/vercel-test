import express from "express"

const app = express()
const PORT = 3001

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/about', (req, res) => {
  res.send('About route 🎉 ')
})

app.listen(PORT || 3001, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})