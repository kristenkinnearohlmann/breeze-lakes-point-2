import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

export const getRegData = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const data = { a: 1, b: 2, c: 3 };
    return handler(req, res, data);
  };
};

export const getUsers = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const data = { label: "All users" };
    return handler(req, res, data);
  };
};

export const getUser = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const data = { label: "Single user" };
    return handler(req, res, data);
  };
};
