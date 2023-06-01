import { motion } from 'framer-motion';



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
        }}><div className='block text-3xl dark:hidden grayscale sm:grayscale-0 md:grayscale-0 hover:grayscale-0 duration-300' id='darkIcon'>{"🌙"}</div>
        <div className='hidden grayscale sm:grayscale-0 md:grayscale-0 hover:grayscale-0 text-3xl dark:block hover:text-primary duration-300' id='lightIcon'>{"☀️"}</div></motion.button>
    )
}