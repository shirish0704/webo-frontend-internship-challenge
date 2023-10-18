import "./App.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Companies from "./components/Companies/Companies";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Companies />
      <About />
      <Features />
      <Blog />
      <Footer />
    </>
  );
};

export default App;
