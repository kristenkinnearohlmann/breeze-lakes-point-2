import { handleUserData } from "../../../lib/data";
import { NextApiRequest, NextApiResponse } from "next";

export default handleUserData(
  async (req: NextApiRequest, res: NextApiResponse, data) => {
    console.log("GET single user");
    console.log(data);
    const userId = req.query.userId;
    console.log(userId);
    res.json(data);
  }
);
