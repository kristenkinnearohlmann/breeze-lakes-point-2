import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.cookies);

  if (req.method === "POST") {
  } else {
    throw new Error();
  }
  res.json({ msg: "Complete" });
};
