//Connect To MongoDB Start
const connectToMongo = require('./db');
connectToMongo();
//Connect To MongoDB End

// Connect To express Server Start
const express = require('express')
const app = express()
const port = 5000
var cors = require('cors')
// Connect To express Server End

// app.get('/', (req, res) => {
//   res.send('Hello Nayeem!')
// })

// app.post('/', (req,res)=>{
//   res.send(req.body);
//   console.log(req.body)
//   req.save
// });

// Available Routes
app.use(cors())
app.use(express.json());
app.use('/auth', require('./routes/auth'));
app.use('/notes', require('./routes/notes'));


// Connect to The Port Start
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// Connect to The Port End