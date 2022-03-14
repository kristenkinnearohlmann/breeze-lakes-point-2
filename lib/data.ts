import { NextApiRequest, NextApiResponse } from "next";
import prisma from "prisma";

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
    const qry = req.query.userId;
    console.log(userData(req.query.userId));
    const data = { label: "Obvious value", userId: qry };
    return handler(req, res, data);
  };
};

const userData = async (qry) => {
  // return { msg: "Return data from userData" };
  // Need further work from: https://www.prisma.io/docs/concepts/components/prisma-client/select-fields
  console.log("In userData function", qry);
  // if (qry === undefined) return;
  // const result: object | null = await prisma.user.findUnique({
  //   where: {
  //     id: qry,
  //   },
  //   select: {
  //     username: true,
  //     email: true,
  //     firstName: true,
  //     lastName: true,
  //   },
  // });
  // return result;
};
