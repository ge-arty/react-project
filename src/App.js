import "./App.css";
import "./reset.css";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";
import Thanks from "./ThanksWindow";

function App() {
  return (
    <div className="container">
      <div className="window">
        {/* <Header />
        <Section />
        <Footer /> */}
        <Thanks />
      </div>
    </div>
  );
}

export default App;
