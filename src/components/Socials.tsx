import { socials } from "../layouts/portfolio"

import { MailOutlined, PrinterOutlined } from '@ant-design/icons';

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
                <MailOutlined style={{fontSize:'2rem'}}></MailOutlined>
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
                <svg className="hover:fill-primary dark:hover:fill-primary duration-300 dark:fill-white" height="2rem" version="1.1" viewBox="0 0 512 512" width="2rem" xmlns="http://www.w3.org/2000/svg"><g id="_x32_7-artstation"><g><path d="M26,365.896l38.925,67.261c7.695,15.208,23.354,25.617,41.55,25.617h258.357l-53.591-92.878H26z     M478.44,341.094L327.989,77.938c-7.785-14.664-23.265-24.713-41.099-24.713h-80.023l232.919,405.186l36.843-63.818    C478.35,391.697,495.64,367.706,478.44,341.094z M273.131,299.903L168.576,118.856L64.02,299.903H273.131z"/></g></g><g id="Layer_1"/></svg>
                </a>
            </Social>
            <Social><a target="_blank" href="https://docs.google.com/document/d/13OUqTOunyhWkEVVocGyN95YlEgKotKBheBdvKYyhIfI/edit?usp=share_link">
                <PrinterOutlined style={{fontSize:'2rem'}}></PrinterOutlined>
                </a>
            </Social>
        </ul>
    )
}