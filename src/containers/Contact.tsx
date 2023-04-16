import Socials from "../components/Socials";

export default function Contact() {
    return (
            <div onClick={(e)=>e.stopPropagation()} className="flex flex-col justify-between bg-[#dfdede] dark:bg-[#2d2d30] rounded-xl shadow-md w-3/5 h-3/5 sm:w-4/5 p-5">
                <div className="font-proza sm:text-2xl md:text-6xl lg:text-6xl">Contact Me</div>
                <div className="font-telex text-4xl">Thanks for stopping by!</div>

                <div className="flex text-2xl flex-col m-2">
                <div className="font-taviraj">Email: <a className="underline" href="mailto:gageschu@udel.edu">gageschu@udel.edu</a></div>
                <div className="font-taviraj">Resume: <a className="underline" target="_blank" href="https://docs.google.com/document/d/13OUqTOunyhWkEVVocGyN95YlEgKotKBheBdvKYyhIfI/edit">document</a></div>
                </div>
                <div className="justify-end">
                <Socials></Socials>
                </div>
        </div>
    )
}