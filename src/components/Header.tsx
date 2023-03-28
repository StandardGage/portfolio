import { useEffect, useState } from "react";


export default function Header(props: { children: any}) {
    const scrollDirection = useScrollDirection();
    return (
      <div className={`bg-transparent -mx-[8.6%] sticky z-40 -my-8 box-border  ${ scrollDirection === "down" ? "-top-24" : scrollDirection === "up" ? "top-0 dark:bg-neutral-900 bg-white" : "bg-transparent top-0"} h-24 transition-all duration-300`}>
        <div className="p-5 font-bold">{props.children}</div>
      </div>
    );
};

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 2 || scrollY - lastScrollY < 10)) {
        setScrollDirection(direction);
      }
      if (scrollY == 0) {
        setScrollDirection("neutral");
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
};