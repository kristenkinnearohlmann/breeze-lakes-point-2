import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../lib/prisma";

export const getUsers = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("HTTP verb: ", req.method);
    const qry = req.query;
    const data = { label: "All users" };
    return handler(req, res, data);
  };
};

export const handleUserData = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("HTTP verb: ", req.method);
    const data = await userData(req.query.userId);
    return handler(req, res, data);
  };
};

const userData = async (qry) => {
  if (qry === undefined) return;

  const data = await prisma.user.findUnique({
    where: {
      id: qry,
    },
    select: {
      id: true,
      username: true,
      email: true,
      firstName: true,
      lastName: true,
      middleName: true,
      noMiddleName: true,
      preferredName: true,
      pronoun: true,
      age: true,
      ethnicity: true,
    },
  });

  return { ...data, msg: "Found" };
};
