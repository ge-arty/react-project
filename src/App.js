import "./App.css";
import "./reset.css";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <div className="window">
        <Header />
        <Section />
        <Footer />
      </div>
    </div>
  );
}

export default App;
