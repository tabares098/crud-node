const express = require('express');
const todorouter = require('./todo/router').router

const app = express();

app.use(express.json());

app.use("/hola", (req, res) => {
res.json({ message: "Peticion con use", method: req.method });
});

app.use('/api/v1',todorouter);
//*localhost:8000/api/v1/todo


app.listen(8000, () =>{
    console.log('Server started at port 8000')
})

