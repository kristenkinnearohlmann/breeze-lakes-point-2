import { validateRoute } from "../../lib/auth";

export default validateRoute(async (req, res, user) => {
  console.log("GET and POST registration data");
  res.json({ ...user }, "regData");
});
