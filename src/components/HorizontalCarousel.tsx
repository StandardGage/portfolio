export default function HorizontalCarousel(props: { children: any[]; }) {
    
    return (
        <div className="flex space-x-4 justify-start items-center overflow-scroll">
            {props.children}
        </div>
    )
}