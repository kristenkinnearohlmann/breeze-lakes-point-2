import { getRegData } from "../../lib/data";

export default getRegData(async (req, res, data) => {
  console.log("GET and POST registration data");
  console.log(req.query);
  console.log(data);
  res.json(data);
});
