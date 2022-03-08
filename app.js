
//how to create server
const express = require('express');
const userRoute = require('./src/routes/userRoute')
const app = express();

const bodyParser = require('body-parser');




let user = [
   { 
    id:1,  
    first_name: 'joy',
    last_name: 'mary',
    email: 'caro@gmail.com',
    phone: '+234678989098',
    password: 'pass'
},

{
    id:2,
first_name: 'jude',
last_name: 'john',
email: 'john@gmail.com',
phone: '+23480564788',
password: 'pass'

},

{
    id:3,
first_name: 'mama',
last_name: 'blessing',
email: 'mama@gmail.com',
phone: '+2348709756',
password: 'pass',
confirm: 'pass'

},

{
    id:4,
    first_name: 'terna',
    last_name: 'ter',
    email: 'ter@gmail.com',
    phone: '+2346789898',
    password: 'pass',
    confirm: 'pass'

},

{
   id:5,
    first_name: 'Nanen',
    last_name: 'Nege',
    email: 'nana@gmail.com',
    phone: '+234678909',
    password: 'pass',
    confirm: 'pass'
}
]

-


app.get('/user',  (req, res) =>{
    //console.log(user[3].id)
    const userId = req.query.id;
    return res.send(user[userId]);
    //if (user[2].id=2) {
        //res.send(user[2]);  
    
   
})
// check if user exist!
app.delete('/delete', (req,res) =>{
   u = req.query.id;
    if (!user[u]) {
        return res.send('user not found');
        
    }

    return res.send(user[u]);

})



 
//console.log(req.body);
//console.log(req.url);

app.listen(7000,() => {
    console.log('server listening to port 7000');

})