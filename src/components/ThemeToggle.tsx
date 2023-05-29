import { motion } from 'framer-motion';
//import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import * as Icons from 'react-icons/md';


export default function ThemeToggle(props:any) {
    return (
        <motion.button
        initial={{opacity:0}}
        whileHover={{scale:1.3}}
        whileTap={{scale:.8}}
        whileInView={{opacity:1}}
        onClick={() => {
            var theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
            if (theme === 'light') {
                localStorage.setItem('theme', 'dark')
                document.documentElement.classList.add('dark')
                document.documentElement.classList.remove('light')
            } else {
                localStorage.setItem('theme', 'light')
                document.documentElement.classList.remove('dark')
                document.documentElement.classList.add('light')
            }
        }}><Icons.MdOutlineDarkMode size={30} className='block dark:hidden hover:text-primary duration-300' id='darkIcon'></Icons.MdOutlineDarkMode>
        <Icons.MdOutlineLightMode size={30} className='hidden dark:block hover:text-primary duration-300' id='lightIcon'></Icons.MdOutlineLightMode></motion.button>
    )
}