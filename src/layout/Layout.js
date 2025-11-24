import DayNightMood from "./DayNightMood";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main-left pp-main-section">{children}</main>
      <DayNightMood />
    </>
  );
};
export default Layout;
