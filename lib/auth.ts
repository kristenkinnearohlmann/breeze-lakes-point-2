import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const appSecret: any = process.env.BREEZE_LAKES_POINT_SECRET;
    const { BREEZE_LAKES_POINT_ACCESS_TOKEN: token } = req.cookies;

    if (token) {
      let user;

      try {
        const { id } = jwt.verify(token, appSecret);
        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error("Invalid user");
        }
      } catch (error) {
        res.status(401);
        res.json({ error: "Not authorized" });
        return;
      }

      return handler(req, res, user);
    }

    res.status(401);
    res.json({ error: "Not authorized" });
  };
};

export const validateToken = (token) => {
  const appSecret: any = process.env.BREEZE_LAKES_POINT_SECRET;
  const user = jwt.verify(token, appSecret);
  return user;
};
