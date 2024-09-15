import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
const protectRoute = async(req,res,next)=>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({message:"you should login"})
        }
        const decode=jwt.decode(token,process.env.JWT_SECRET);
        if(!decode){
            return res.status(401).json({message:"Invalide token"})
        }
        const user=await User.findById(decode.userId).select("-password");
        if(!user){
            return res.status(404).json({message:"uuser not found"})
        }
        req.user=user;
        next();

    } catch (error) {
        res.status(500).json({message:"you should login"})   
    }
}
export default protectRoute;