import { AiOutlineDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiAdminLine, RiFileEditLine } from "react-icons/ri";

const adminRoles = ["Admin", "SuperAdmin"];

const navMenu = [
  {
    name: "Dashboard",
    icon: AiOutlineDashboard,
    route: "/",
  },
  {
    name: "Registration",
    icon: RiFileEditLine,
    route: "/registration",
  },
  {
    name: "Profile",
    icon: CgProfile,
    route: "/profile",
  },
];

const navMenuAdmin = [
  {
    name: "Admin",
    icon: RiAdminLine,
    route: "/admin",
  },
];

export { adminRoles, navMenu, navMenuAdmin };
