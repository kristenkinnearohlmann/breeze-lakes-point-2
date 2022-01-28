import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import prisma from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const appSecret: any = process.env.BREEZE_LAKES_POINT_SECRET;
  const { username, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  console.log(user);

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        time: Date.now(),
      },
      appSecret,
      {
        expiresIn: "8h",
      }
    );

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("BREEZE_LAKES_POINT_ACCESS_TOKEN", token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      })
    );

    res.json(user);
  } else {
    res.status(401);
    res.json({ error: "Username or Password is incorrect" });
  }
};
