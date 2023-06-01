const jwt = require('jsonwebtoken');
const auth = (req,res,next) =>{
try {
const token = req.headers.authorization || '';
if (token) {
let decoded = jwt.verify(token, 'kapil')
if (decoded) {
req.body.userId = decoded.userId;
next()
}
else {
res.send('login again')
}
}else{
res.send('token not found')
}
} catch (error) {
res.send(error.message)
}
}
module.exports = {auth}