import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/Portfolio-Card'

import { projects } from '../../data/constants'


const IndexProject = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (

    <section id="portfolio" className='section'>
      <Wrapper className='container'>
        <h2 className='section__title'>Projects</h2>
        <span className='section__subtitle'>I have worked on a wide range of projects. From web apps to Web3 apps. Here are some of my projects</span>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'frontend' ?
            <ToggleButton active value="frontend" onClick={() => setToggle('frontend')}>Fronted</ToggleButton>
            :
            <ToggleButton value="frontend" onClick={() => setToggle('frontend')}>Fronted</ToggleButton>
          }
          <Divider />
          {toggle === 'MERN' ?
            <ToggleButton active value="MERN" onClick={() => setToggle('MERN')}>MERN</ToggleButton>
            :
            <ToggleButton value="MERN" onClick={() => setToggle('MERN')}>MERN</ToggleButton>
          }
          <Divider />
          {toggle === 'UI' ?
            <ToggleButton active value="UI" onClick={() => setToggle('UI')}>UI </ToggleButton>
            :
            <ToggleButton value="UI" onClick={() => setToggle('UI')}>UI</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </section>
  )
}

export default IndexProject
