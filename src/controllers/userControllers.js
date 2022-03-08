

module.exports.login = (req,res) =>{
  

    let { first_name, last_name,  email,  phone, password,  comfirm } = req.body;

    let pattern =/^[a-z ,.'-]+$/i;
   // console.log( pattern .test( first_name));  

        if (first_name.length<1){
         let errmgs = "first name is requrired";
          return res.status(400).json ({erro: errmgs});  
      }

      if ((! pattern .test( first_name)) ) {
        return res.status(400).json ({erro: 'correct input is requird!'});
        
      }

     if (last_name.length <1){
         let errmgs = "last name is requrired";
           return res.status(400).json ({erro: errmgs}); 
      }
      if ((! pattern .test( last_name)) ) {
        return res.status(400).json ({erro: 'correct input is requird!'});
        
      }

      let email_pattern = /\S+@\S+\.\S+/;
      if (email.length <1){
        let errmgs = "email is requrired";
           retu
           
           
             
      }
      if ((!email_pattern.test( email)) ) {
        return res.status(400).json ({erro: 'correct email input is requird!'});   
        
      }

      let phone_pattern = /[0-9]{11}/;

      if (phone.length <1){
         let errmgs = "phone number is requrired";
           return res.status(400).json ({erro: errmgs}); 
      }

      if ((!phone_pattern.test(phone)) ) {
        return res.status(400).json ({erro: 'correct phone  number is requird!'});   
        
      }

 let pass_pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/;
      if (password.length <1){
         let errmgs = "password is requrired";
           return res.status(400).json ({erro: errmgs});
      }

      if ((!pass_pattern .test(password)) ) {
        return res.status(400).json ({erro: 'correct password is requird!'});  

      }
      let comfirm_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/;

      if (comfirm.length <1){
         let errmgs = "confirm your password";
           return res.status(400).json ({erro: errmgs});
      }

      if ((!comfirm_pattern .test(comfirm)) ) {
        return res.status(400).json ({erro: 'password does not exist!'});  
 
      
   return res.status(200).json({user: 'login success!'})  

        }  //console.log(req.body);
     //console.log(req.url);


      }