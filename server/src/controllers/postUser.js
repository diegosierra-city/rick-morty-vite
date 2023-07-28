const {User} = require('../DB_connection');

async function postUser(req,res) {
    
 try {
 const { email, password } = req.body;
 
if(!email || !password) {
    throw new Error('Faltan datos');
}
const newUser = await User.findOrCreate({ 
where: { email:email },
defaults: {
password: password
}
});

return res.status(202).json(newUser); 
 } catch (error) {
  return res.status(500).send(error.message);
 }

}


module.exports = {postUser};