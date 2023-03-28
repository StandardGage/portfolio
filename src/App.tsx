import { useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import Greeting from './containers/Greeting'
import Header from './components/Header'
import Card from './components/Card'
import ThemeToggle from './components/ThemeToggle'
import Skills from './containers/Skills'
import Projects from './containers/Projects'
import Education from './containers/Education'

export function Navigator(props:any) {
  return (
    <motion.nav
      whileHover={{
        scale: 1.3,
      }}
      whileTap={{scale:0.9}}>
        {props.children}</motion.nav>
  )
}


function App() {
  return (
    <div className="App space-y-10">
      <Header>
        <div>
          <motion.ul initial={{opacity:0}} whileInView={{opacity:1}} className='flex-1 flex-nowrap space-x-2 text-center'>
            <div className='text-center font-proza text-5xl float-left cursor-default'>GS</div>
            <Navigator><a href='#skills'>Skills</a></Navigator>
            <Navigator><a href='#education'>Education</a></Navigator>
            <Navigator><a href='#employment'>Employment</a></Navigator>
            <Navigator><a href='#contact'>Contact</a></Navigator>
            <ThemeToggle className='float-right'></ThemeToggle>
          </motion.ul>
        </div>
      </Header>
      <Greeting></Greeting>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
    </div>
  )
}

export default App
