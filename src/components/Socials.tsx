import { socials } from "../portfolio"

import {HiOutlinePrinter, HiMail} from "react-icons/hi"
import {FaArtstation} from "react-icons/fa"
import { motion } from "framer-motion"

export function Social(props: {children:any}) {
    return (
        <motion.li
            initial={{scale:2}}
            whileInView={{scale:2}}
            whileHover={{scale:3}}
            whileTap={{scale:1}}>
                {props.children}
        </motion.li>
    )
}

export default function Socials() {
    return (
        <ul className="flex justify-center items-center space-x-10 m-24">
            <Social><a href="mailto:gageschu@udel.edu">
                <i><HiMail></HiMail></i>
                </a>
            </Social>
            {socials.socials.map((social, i) => {
                return (
                    <Social key={social.logo}>
                        <a href={social.link} target="_blank">
                        <i className={social.logo}></i>
                        </a>
                    </Social>
                )
            })}
            <Social><a target="_blank" href="https://www.artstation.com/standardgage">
                <i><FaArtstation></FaArtstation></i>
                </a>
            </Social>
            <Social><a target="_blank" href="https://docs.google.com/document/d/13OUqTOunyhWkEVVocGyN95YlEgKotKBheBdvKYyhIfI/edit?usp=share_link">
                <i><HiOutlinePrinter></HiOutlinePrinter></i>
                </a>
            </Social>
        </ul>
    )
}