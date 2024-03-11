import React, { useEffect } from "react";
import $ from "jquery";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Chatbot from "./components/Chatbot";
import { motion, useAnimation } from "framer-motion";
import {
  Animator,
  Fade,
  FadeUp,
  FadeIn,
  FadeOut,
  ZoomInVar,
  MoveIn,
  MoveOut,
  Move,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  ZoomIn,
  batch,
} from "react-scroll-motion";
const App = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 100,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    });
  }, [controls]);
  useEffect(() => {
    // NAVBAR CODE
    const navbar = document.getElementById("navbar");
    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      if (scroll < 100) {
        navbar.style.boxShadow = "none";
        navbar.style.backgroundColor = "white";
      }
      if (scroll > 100) {
        navbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, .2)";
        navbar.style.backgroundColor = "#ffffffde";
      }
    });
  }, []);

  return (
    <div className="App">
      <motion.div
        className="lazy-div"
        initial={{ opacity: 0 }}
        animate={controls}
      >
        <Navbar />
      </motion.div>
      <motion.div

        className="lazy-div"
        initial={{ opacity: 0, y: 25 }}
        animate={controls}
      >
        <Section1 />
      </motion.div>
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Chatbot />
        </div>
        );
};

        export default App;
