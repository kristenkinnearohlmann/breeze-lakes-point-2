export const roleData: {
  roleName: string;
  description: string;
}[] = [
  {
    roleName: "User",
    description: "Can add and modify own information",
  },
  {
    roleName: "Admin",
    description:
      "Can add and modify own information, can add and modify limited information for other users",
  },
  {
    roleName: "Manager",
    description:
      "Can add and modify own information, can add and modify all information for other users, can set roles for users",
  },
  {
    roleName: "SuperAdmin",
    description: "Can manage entire application",
  },
];
