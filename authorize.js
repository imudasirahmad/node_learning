

// const authorize = (req, res, next) => {
//    console.log('authorize');
//     next()
//   }



  const authorize = (req, res, next) => {
    const {user} = req.query;
    if(user === 'mudasir'){
        req.user = {name: 'mudasir' , id: 3}
        next()
    }else{
        res.status(401).send('unAuthorized !! Who are you!! and why are you trying to access')
    
    }
        
   }
 
  module.exports = authorize