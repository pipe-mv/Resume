import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects2 from "./components/Projects2";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects2 />
      <Contact />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
