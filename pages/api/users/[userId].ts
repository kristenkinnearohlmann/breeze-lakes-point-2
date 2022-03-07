import { handleUserData } from "../../../lib/data";
import { NextApiRequest, NextApiResponse } from "next";

export default handleUserData(
  async (req: NextApiRequest, res: NextApiResponse, data) => {
    console.log("GET single user");
    console.log("This is data", data);
    res.json(data);
  }
);
