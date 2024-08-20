

const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    const time2 = new Date().getTime()
  
    console.log(method, url, time , time2)
    next()
  }


  module.exports = logger