import { getUser } from "../../../lib/data";
import { NextApiRequest, NextApiResponse } from "next";

export default getUser(
  async (req: NextApiRequest, res: NextApiResponse, data) => {
    console.log("GET single user");
    console.log(data);
    console.log(req.query.userId);
    const userId = req.query.userId;
    res.json(data);
  }
);
