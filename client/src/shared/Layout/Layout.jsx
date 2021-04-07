import Header from "../Header/Header";
export default function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}