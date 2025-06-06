import jwt from "jsonwebtoken";

export const generateJwtToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "7d",
  });

  if (token) {
    res.cookie("jwt", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000, // MS
      httpOnly: true,
      sameSite: "lax", // "strict",
      secure: false, // process.env.NODE_ENV !== "development",
    });
  }

  return token;
};