import { handleUserData } from "../../../lib/data";
import { NextApiRequest, NextApiResponse } from "next";

export default handleUserData(
  async (req: NextApiRequest, res: NextApiResponse, data) => {
    res.json(data);
  }
);
