import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET_KEY || 'miclavesecreta';

const protectedRoute = async (req, res, next) => {
  const isAuthenticated = await checkAuth(req.cookies.access_token);
 
  if(!isAuthenticated){
    return res.redirect('/');
  }
  next();
  };

const checkAuth = async (token) => {
  try{
    return jwt.verify(token, secretKey);
  } catch (error) {
    console.log(error);
    return false;
  }

}
export {protectedRoute} 