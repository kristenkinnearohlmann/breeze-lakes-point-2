import { NextApiRequest, NextApiResponse } from "next";

export const getUsers = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("HTTP verb: ", req.method);
    const data = { label: "All users" };
    return handler(req, res, data);
  };
};

export const handleUserData = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("HTTP verb: ", req.method);
    // const val = req.query;
    const val = { label: "Obvious value" };
    return handler(req, res, val);
  };
};
