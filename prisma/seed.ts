import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

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
      noMiddleName: true,
    },
  });
  const user2 = await prisma.user.upsert({
    where: { username: "adminSuper" },
    update: {},
    create: {
      username: "adminSuper",
      password: bcrypt.hashSync("abc123", salt),
      firstName: "Admin",
      lastName: "Super",
      role: "SuperAdmin",
      noMiddleName: true,
    },
  });
  const user3 = await prisma.user.upsert({
    where: { username: "mrdad" },
    update: {},
    create: {
      username: "mrdad",
      password: bcrypt.hashSync("xyz789", salt),
      firstName: "Mr",
      lastName: "Dad",
      noMiddleName: true,
    },
  });
  const user4 = await prisma.user.upsert({
    where: { username: "sample@user.com" },
    update: {},
    create: {
      username: "sample@user.com",
      password: bcrypt.hashSync("samplepwd", salt),
      email: "sample@user.com",
      firstName: "Sample",
      lastName: "User",
      middleName: "S",
      preferredName: "Sam",
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
