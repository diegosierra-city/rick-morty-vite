const users = require('../utils/users')

const login = (req, res) => {
 console.log('TT',req)
  const {email, password} = req; 
 // console.log('ee',typeof users)
  const user = users.find(user => user.email === email && user.password === password);

  if (user) return res.status(200).json({access: true});
  return res.status(200).json({access: false});
  
}

module.exports = {
  login
  }