import { NextApiRequest, NextApiResponse } from "next";

export const getUsers = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const data = { label: "All users" };
    return handler(req, res, data);
  };
};

export const getUser = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { data } = handler;
    console.log("Inside data lib", data);
    const val = { label: "Single user" };
    return handler(req, res, data);
  };
};
