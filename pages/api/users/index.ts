import { getUsers } from "../../../lib/data";

export default getUsers(async (req, res, data) => {
  console.log("GET all users");
  res.json(data);
});
