import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { roleData } from "./roleData";

const prisma = new PrismaClient();

const run = async () => {
  const salt = bcrypt.genSaltSync();
  const user = await prisma.user.upsert({
    where: { username: "user@test.com" },
    update: {},
    create: {
      username: "user@test.com",
      password: bcrypt.hashSync("password", salt),
      email: "user@test.com",
      firstName: "Test",
      lastName: "User",
    },
  });
};

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
