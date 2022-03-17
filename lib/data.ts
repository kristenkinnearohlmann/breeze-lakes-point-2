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
    const qry = req.query.userId;
    const answer = await userData(req.query.userId);
    console.log(answer);
    const data = { label: "Obvious value", userId: qry };
    return handler(req, res, data);
  };
};

const userData = async (qry) => {
  // return { msg: "Return data from userData" };
  // Need further work from: https://www.prisma.io/docs/concepts/components/prisma-client/select-fields
  console.log("In userData function", qry);

  if (qry === undefined) return;

  const data = await prisma.user.findUnique({
    where: {
      id: qry,
    },
    select: {
      username: true,
      email: true,
      firstName: true,
      lastName: true,
    },
  });

  const result = { ...data, msg: "Found" };
  console.log("result is", result);
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
  console.log(qry);

  return { label: "Stuff happened" };
};
