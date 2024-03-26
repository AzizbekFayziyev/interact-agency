import { useEffect, useState } from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import Header from "./components/Main/Header";
import Services from "./components/Main/Services";
import BuildingProgress from "./components/Main/BuildingProgress";
import Faq from "./components/Main/Faq";
import ContactForm from "./components/Main/ContactForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/Main/AboutUs";
import { Fab, Zoom } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";

const App = () => {
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    // Aos init
    AOS.init();

    window.addEventListener("scroll", () => {
      window.scrollY >= 300 ? setScrollTop(true) : setScrollTop(false);
    });
  }, []);

  // Scroll to top
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Components */}
      <Navbar />

      <Header />
      <Services />

      {/* <Technologies /> */}
      <AboutUs />
      <BuildingProgress />
      <Faq />
      <ContactForm />

      <Footer />

      <Zoom in={scrollTop}>
        <Fab
          onClick={toTop}
          color="primary"
          sx={{ position: "fixed", bottom: 15, right: 15 }}
        >
          <ArrowUpward fontSize="large" />
        </Fab>
      </Zoom>
    </>
  );
};

export default App;
