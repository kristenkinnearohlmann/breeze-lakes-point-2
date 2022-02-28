import { getUser } from "../../../lib/data";

export default getUser(async (req, res, data) => {
  console.log("GET single user");
  res.json(data);
});
