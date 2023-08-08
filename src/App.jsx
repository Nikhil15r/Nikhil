import React from 'react';
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Skills_section from "./Main_Components/Skills_Section/Skills_section";
import About_section from "./Main_Components/About_Section/About_section";
import Contact_section from "./Main_Components/Contact_Section/Contact_section";
import Education_section from "./Main_Components/Education_Section/Education_section";
import Experience_section from "./Main_Components/Experience_Section/Experience_section";
import Project_section from "./Main_Components/Project_Section/Project_section";

const App = () => {
  return ( 
    <>
      <Header />
      <About_section />
      <Experience_section />
      <Project_section />
      <Skills_section />
      <Education_section />
      <Contact_section />
      <Footer />
    </>
  );
}

export default App;