import { AnimatePresence, motion } from 'framer-motion'
import './App.css'
import Greeting from './containers/Greeting'
import ThemeToggle from './components/ThemeToggle'
import Skills from './containers/Skills'
import Projects from './containers/Projects'
import Education from './containers/Education'
import Experience from './containers/Experience'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import Contact from './containers/Contact'

import RevealHeader from 'react-revealheader'

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
  const [mobileMenu, setMobileMenu] = useState(false);
  const [contact, setContact] = useState(false);

  return (
    <div className="App space-y-10 dark:text-white">
      <RevealHeader neutralColor='sm:dark:bg-neutral-900 sm:bg-white' upColor='dark:bg-neutral-900 bg-white'>
        <div className='p-8'>
          <ul className='px-25 m-auto max-w-[1264px] flex justify-between space-x-2 text-center'>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className=' max-w-sm text-center font-proza text-5xl cursor-default'>GS</motion.div>
            <div className='flex-1 lg:block md:hidden sm:hidden'>
            <Navigator><a href='#skills'>Skills</a></Navigator>
            <Navigator><a href='#projects'>Projects</a></Navigator>
            <Navigator><a href='#education'>Education</a></Navigator>
            <Navigator><a href='#experience'>Experience</a></Navigator>
            <Navigator><a onClick={()=>setContact(!contact)} href='#contact'>Contact</a></Navigator>
            </div>
            <div className='flex'>
            <ThemeToggle></ThemeToggle>
            <motion.div onClick={()=> setMobileMenu(!mobileMenu)} initial={{opacity: 0, scale:1.5}} whileInView={{opacity:1}} whileTap={{scale:1}} whileHover={{scale:2}} className='ml-5 self-center lg:hidden md:block cursor-pointer'>{!mobileMenu && <AiOutlineMenu></AiOutlineMenu>}{mobileMenu && <AiOutlineClose></AiOutlineClose>}</motion.div>
            </div>
          </ul>
        </div>
      </RevealHeader>
      {mobileMenu && <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setMobileMenu(false)} className='p-5 mt-80 z-20 fixed w-full h-full justify-start items-center flex flex-col backdrop-blur-md'>
            <Navigator><a href='#skills'>Skills</a></Navigator>
            <Navigator><a href='#projects'>Projects</a></Navigator>
            <Navigator><a href='#education'>Education</a></Navigator>
            <Navigator><a href='#experience'>Experience</a></Navigator>
            <Navigator><a onClick={()=>setContact(!contact)}>Contact</a></Navigator>
      </motion.div>}
      <AnimatePresence>
      {contact &&
      <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setContact(!contact)} className="fixed flex justify-center items-center z-20 w-full h-full">
        <Contact></Contact>
      </motion.div>}
      </AnimatePresence>
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
