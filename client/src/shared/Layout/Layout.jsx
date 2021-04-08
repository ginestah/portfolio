import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css";

export default function Layout(props) {
  return (
    <>
      <Header />
      <div className="children">{props.children}</div>
      <Footer />
    </>
  );
}
