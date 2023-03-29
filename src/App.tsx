import { motion } from 'framer-motion'
import './App.css'
import Greeting from './containers/Greeting'
import Header from './components/Header'
import ThemeToggle from './components/ThemeToggle'
import Skills from './containers/Skills'
import Projects from './containers/Projects'
import Education from './containers/Education'

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
          <ul className='flex-1 flex-nowrap space-x-2 text-center'>
            <div className='text-center font-proza text-5xl float-left cursor-default'>GS</div>
            <Navigator><a href='#skills'>Skills</a></Navigator>
            <Navigator><a href='#projects'>Projects</a></Navigator>
            <Navigator><a href='#education'>Education</a></Navigator>
            <Navigator><a href='#experience'>Experience</a></Navigator>
            <Navigator><a href='#contact'>Contact</a></Navigator>
            <ThemeToggle className='float-right'></ThemeToggle>
          </ul>
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
