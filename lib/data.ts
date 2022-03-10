import { NextApiRequest, NextApiResponse } from "next";

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
    const data = { label: "Obvious value", userId: qry };
    return handler(req, res, data);
  };
};
