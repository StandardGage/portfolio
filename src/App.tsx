import { AnimatePresence, motion } from 'framer-motion'
import './App.css'
import Greeting from './containers/Greeting'
import Header from './components/Header'
import ThemeToggle from './components/ThemeToggle'
import Skills from './containers/Skills'
import Projects from './containers/Projects'
import Education from './containers/Education'
import Experience from './containers/Experience'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

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
  const [mobileMenu, setMobileMenu] = useState(true);

  return (
    <div className="App space-y-10">
      <Header>
        <div>
          <ul className='px-25 m-auto max-w-[1264px] flex justify-between space-x-2 text-center'>
            <div className=' max-w-sm text-center font-proza text-5xl cursor-default'>GS</div>
            <div className='flex-1 lg:block md:hidden sm:hidden'>
            <Navigator><a href='#skills'>Skills</a></Navigator>
            <Navigator><a href='#projects'>Projects</a></Navigator>
            <Navigator><a href='#education'>Education</a></Navigator>
            <Navigator><a href='#experience'>Experience</a></Navigator>
            <Navigator><a href='#contact'>Contact</a></Navigator>
            </div>
            <div className='flex'>
            <ThemeToggle></ThemeToggle>
            <motion.div onClick={()=> setMobileMenu(!mobileMenu)} initial={{scale:1.5}} whileTap={{scale:1}} whileHover={{scale:2}} className='ml-5 self-center lg:hidden md:block cursor-pointer'>{!mobileMenu && <AiOutlineMenu></AiOutlineMenu>}{mobileMenu && <AiOutlineClose></AiOutlineClose>}</motion.div>
            </div>
          </ul>
        </div>
      </Header>
      {mobileMenu && <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setMobileMenu(false)} className='p-5 mt-80 z-20 fixed w-full h-full justify-start items-center flex flex-col backdrop-blur-md'>
            <Navigator><a href='#skills'>Skills</a></Navigator>
            <Navigator><a href='#projects'>Projects</a></Navigator>
            <Navigator><a href='#education'>Education</a></Navigator>
            <Navigator><a href='#experience'>Experience</a></Navigator>
            <Navigator><a href='#contact'>Contact</a></Navigator>
      </motion.div>}
      <div className='p-20 m-auto max-w-[1264px] space-y-10 sm:p-2'>
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
