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
      <p>sample</p>
      <style jsx>{`
        P {
          background-color: red;
        }
      `}</style>
    </div>
  );
};

export default Home;
