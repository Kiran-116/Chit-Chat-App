import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,           // MS
        httpOnly: true,                             // Prevent XSS attacks cross-site scripting attacks
        sameSite: "strict",                         // CSRF attacks cross-site requests forgery Attacks
        secure: process.env.NODE_ENV !== "developmemnt",       
    });
};

export default generateTokenAndSetCookie;