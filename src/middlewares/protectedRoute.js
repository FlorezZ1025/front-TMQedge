import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET_KEY

const protectedRoute = async (req, res, next) => {
  const isAuthenticated = await checkAuth();
 
  if(!isAuthenticated){
    return res.redirect('/');
  }
  next();
  };

const checkAuth = async () => {
  try{
      const response = await fetch('http://127.0.0.1:5000/api/auth/check-auth', {
        method: 'GET',
        credentials: 'include',
      });
      const data = await response.json();
      console.log(data.isAuthenticated);
      return data.isAuthenticated;
      
  } catch (error) {
      return false;
  }

}
export {protectedRoute} 