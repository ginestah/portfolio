import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css";

export default function Layout(props) {
  return (
    <div className="layout">
      <Header />
      <div className="children">{props.children}</div>
      <Footer />
    </div>
  );
}
