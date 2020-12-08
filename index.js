const express = require('express');
const app = express();

// function rootCall (req, res){
//     res.send('Thank you very much')
// }
// const rootcall = (req, res) => res.send('Thank you very much');
// app.get('/', rootCall)
app.get('/', (req, res) =>{
    res.send('Thank you for calling me')
})


app.listen(4000, ()=> console.log('Listening port 4000'))