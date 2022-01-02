import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async () => {};

export const getServerSideProps = async () => {
  const appSecret = process.env.BREEZE_LAKES_POINT_SECRET;

  return {
    props: {
      appSecret,
    },
  };
};
