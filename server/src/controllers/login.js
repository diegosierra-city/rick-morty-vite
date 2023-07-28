const {User} = require('../DB_connection');

async function login(req,res) {

 try {
 const { email, password } = req.query;
if(!email || !password) {
    return res.status(400).send('Faltan datos');
}
let actualUser = await User.findOne({ where: {email: email} });//{email: email, password: password}
if (actualUser === null) {
 return res.status(404).send('Usuario no encontrado');
} else {
 return actualUser.password!==password? res.status(403).json({ access: false }) : res.status(201).json({ access: true });
}

 } catch (error) {
  return res.status(500).send(error.message);
 }

}


module.exports = {login};