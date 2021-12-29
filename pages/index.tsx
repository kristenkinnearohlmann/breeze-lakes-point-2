import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AppLayout from "../components/appLayout";

const Home: NextPage = () => {
  return (
    <div>
      <AppLayout></AppLayout>
    </div>
  );
};

export default Home;
