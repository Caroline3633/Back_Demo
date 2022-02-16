
//how to create server
const express = require('express');

const server = express();
server.listen(7000, () => {
    console.log('server listening to port 7000'); 

})


server.get('/,', (req,res) =>{
    res.send('this is a get request!')
})
