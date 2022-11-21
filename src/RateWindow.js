import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";
export default function RateWindow(props) {
  return (
    <>
      <Header />
      <Section />
      <Footer rate={props.rate} click={props.click} change={props.change} />
    </>
  );
}
