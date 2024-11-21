import './App.css';
import About from './Components/About/About';
import Header from './Components/header/Header';
import Home from './Components/Home/Home';
import Qualification from './Components/Qualification/Qualification';
// import Services from './Components/Service/Service';
import Skills from './Components/Skills2/Skills';

import Contact from './Components/contact/Contact';
import Footer from './Components/Footer/Footer';
import ScrollUp from './Components/Scroll-up/Scroll-up';
import Testimonials from './Components/testimonials/Testimonials';
import Projects from './Components/Projects/IndexProject';
import  ProjectDetails  from "./Components/ProjectDetails/Index";
import { useState } from 'react';

const App = () => {
    const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
  <>
  <Header/>
  <main className="main">
    <Home/>
    <About/>
    <Skills/>
     {/* <Services/> */}
    <Qualification/>
    <Projects openModal={openModal} setOpenModal={setOpenModal} />
<Testimonials/>
    {/* <Portfolio/> */}

    {openModal.state &&
    <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
    {/* <Works1/> */}
    <Contact/>
    <Footer/>
    </main>
<ScrollUp/>

  </>
  )
}

export default App
