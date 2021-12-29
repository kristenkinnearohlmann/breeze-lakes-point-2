import TopNav from "./topNav";
import LeftNav from "./leftNav";

const AppLayout = ({ children }) => {
  return (
    <div>
      <TopNav></TopNav>
      <LeftNav></LeftNav>
    </div>
  );
};

export default AppLayout;
