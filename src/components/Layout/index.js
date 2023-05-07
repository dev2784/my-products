import Footer from "../Footer";
import Header from "../Header";
import "./style.scss";
const Layout = (props) => {
  return (
    <div className="base">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
export default Layout;
