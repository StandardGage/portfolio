import { socials } from "../layouts/portfolio"

//import {HiOutlinePrinter, HiMail} from "react-icons/hi"
//import {FaArtstation} from "react-icons/fa"
import * as Icons from 'react-icons/hi'
import * as FIcons from 'react-icons/fa'
import { motion } from "framer-motion"

export function Social(props: {children:any}) {
    return (
        <li className="flex justify-center items-center hover:text-primary duration-300">
                {props.children}
        </li>
    )
}

export default function Socials() {
    return (
        <ul className="flex justify-center items-center space-x-10 m-24">
            <Social><a href="mailto:gageschu@udel.edu">
                <Icons.HiMail size={'2rem'}></Icons.HiMail>
                </a>
            </Social>
            {socials.socials.map((social, i) => {
                return (
                    <Social key={social.logo}>
                        <a href={social.link} target="_blank" className={social.logo} style={{fontSize: '2rem'}}/>
                    </Social>
                )
            })}
            <Social><a target="_blank" href="https://www.artstation.com/standardgage">
                <FIcons.FaArtstation size={'2rem'}></FIcons.FaArtstation>
                </a>
            </Social>
            <Social><a target="_blank" href="https://docs.google.com/document/d/13OUqTOunyhWkEVVocGyN95YlEgKotKBheBdvKYyhIfI/edit?usp=share_link">
                <Icons.HiOutlinePrinter size={'2rem'}></Icons.HiOutlinePrinter>
                </a>
            </Social>
        </ul>
    )
}