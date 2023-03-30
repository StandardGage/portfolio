import { motion } from 'framer-motion';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'


export default function ThemeToggle(props:any) {
    return (
        <motion.button 
        initial={{scale:1.5}}
        whileHover={{scale:2}}
        whileTap={{scale:1}}
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
        }}><MdOutlineDarkMode className='block dark:hidden' id='darkIcon'></MdOutlineDarkMode>
        <MdOutlineLightMode className='hidden dark:block' id='lightIcon'></MdOutlineLightMode></motion.button>
    )
}