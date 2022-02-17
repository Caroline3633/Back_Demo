
//how to create server
const express = require('express');

const app = express();



let user = [

   { 
       
    first_name: 'joy',
    last_name: 'mary',
    email: 'caro@gmail.com',
    phone: '+234678989098',
    password: 'pass'
},

{
first_name: 'jude',
last_name: 'john',
email: 'john@gmail.com',
phone: '+23480564788',
password: 'pass'

},

{
first_name: 'mama',
last_name: 'blessing',
email: 'mama@gmail.com',
phone: '+2348709756',
password: 'pass',
confirm: 'pass'

},

{

    first_name: 'terna',
    last_name: 'ter',
    email: 'ter@gmail.com',
    phone: '+2346789898',
    password: 'pass',
    confirm: 'pass'

},

{

    first_name: 'Nanen',
    last_name: 'Nege',
    email: 'nana@gmail.com',
    phone: '+234678909',
    password: 'pass',
    confirm: 'pass'
}
]



app.post('/user',(req,res) =>{
    res.send(user);

})


app.get('/user',  (req, res) =>{
    res.send(user)
})

app.listen(7000,() => {
    console.log('server listening to port 7000'); 

})