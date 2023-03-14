import { Fragment } from "react";
import DayNightMood from "./DayNightMood";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className="main-left pp-main-section">{children}</main>
      <DayNightMood />
    </Fragment>
  );
};
export default Layout;
