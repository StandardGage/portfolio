import { motion } from 'framer-motion'
import './App.css'
import Greeting from './containers/Greeting'
import Header from './components/Header'
import ThemeToggle from './components/ThemeToggle'
import Skills from './containers/Skills'
import Projects from './containers/Projects'
import Education from './containers/Education'
import Experience from './containers/Experience'

import { AiOutlineMenu } from 'react-icons/ai'

function Navigator(props: any) {
  return (
    <motion.nav
      style={{backfaceVisibility: "hidden"}}
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
          <ul className='px-25 m-auto max-w-[1264px] flex justify-between space-x-2 text-center'>
            <div className=' max-w-sm text-center font-proza text-5xl cursor-default'>GS</div>
            <div className='flex-1 lg:block md:hidden'>
            <Navigator><a href='#skills'>Skills</a></Navigator>
            <Navigator><a href='#projects'>Projects</a></Navigator>
            <Navigator><a href='#education'>Education</a></Navigator>
            <Navigator><a href='#experience'>Experience</a></Navigator>
            <Navigator><a href='#contact'>Contact</a></Navigator>
            </div>
            <div className='flex'>
            <ThemeToggle></ThemeToggle>
            <motion.div initial={{scale:1.5}} whileHover={{scale:2}} className='m-5 self-center lg:hidden md:block'><AiOutlineMenu></AiOutlineMenu></motion.div>
            </div>
          </ul>
        </div>
      </Header>
      <div className='p-20 m-auto max-w-[1264px] space-y-10'>
      <Greeting></Greeting>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <Experience></Experience>
      </div>
    </div>
  )
}

export default App
