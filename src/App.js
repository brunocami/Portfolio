import React, { useRef } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';

function App() {

const aboutSection = useRef(null)
const homeSection = useRef(null)
const projectsSection = useRef(null)
const contactSection = useRef(null)

  
const goToAboutSection = ()=>  window.scrollTo({
  top: aboutSection.current.offsetTop, 
  behavior: "smooth"
})

const goToHomeSection = ()=>  window.scrollTo({
  top: homeSection.current.offsetTop, 
  behavior: "smooth"
})

const goToProjectsSection = ()=>  window.scrollTo({
  top: projectsSection.current.offsetTop, 
  behavior: "smooth"
})

const goToContactSection = ()=>  window.scrollTo({
  top: contactSection.current.offsetTop, 
  behavior: "smooth"
})



  return (
    <div className="App">
        <Router>
            <Navbar goToAbout={goToAboutSection} goToHome={goToHomeSection} goToProjects={goToProjectsSection} />
            <Home goToHome={homeSection}/>
            <Project goToProjects={projectsSection}/>
            <About goToAbout={aboutSection} goToContact={goToContactSection}/>
            <Contact goToContact={contactSection}/>
        </Router>
    </div>
  );
}

export default App;
