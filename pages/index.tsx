import type { NextPage } from "next";
import Dashboard from "../components/dashboard";
import UserHeader from "../components/userHeader";
import { useMe } from "../lib/hooks";

const Home: NextPage = () => {
  const { user } = useMe();

  return (
    <div>
      <UserHeader user={user}></UserHeader>
      <Dashboard user={user}></Dashboard>
      <p>This is a placeholder for a sample JSX declaration.</p>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        p {
          background-color: blueviolet;
          font-size: 2.5em;
        }
      `}</style>
    </div>
  );
};

export default Home;
