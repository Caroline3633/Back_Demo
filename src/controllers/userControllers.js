

module.exports.login = (req,res) =>{
  

    let { first_name, last_name,  email,  phone, password,  comfirm } = req.body;

    console.log(first_name, last_name,  email,  phone, password,  comfirm );

        if (first_name.length<1){

         let errmgs = "first name is requrired";

          return res.status(400).json ({erro: errmgs}); 
      }

     if (last_name.length <1){
         let errmgs = "last name is requrired";
           return res.status(400).json ({erro: errmgs});
      }


      if (email.length <1){
        let errmgs = "email is requrired";
           return res.status(400).json ({erro: errmgs});
      }

      if (phone.length <1){
         let errmgs = "phone number is requrired";
           return res.status(400).json ({erro: errmgs});
      }

      if (password.length <1){
         let errmgs = "password is requrired";
           return res.status(400).json ({erro: errmgs});
      }

      if (comfirm.length <1){
         let errmgs = "confirm your password";
           return res.status(400).json ({erro: errmgs});
      }


   return res.status(200).json({user: 'login success!'}) 

     //console.log(req.body);
     //console.log(req.url);
}
