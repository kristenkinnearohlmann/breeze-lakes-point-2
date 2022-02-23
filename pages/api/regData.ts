import { getRegData } from "../../lib/data";

export default getRegData(async (req, res, user, data) => {
  console.log("GET and POST registration data");
  res.json({ ...data });
});
