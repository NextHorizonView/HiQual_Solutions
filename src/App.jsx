import React, { useRef, useEffect } from "react";
import GetInTouch from "./component/GetInTouch";
import About from "./component/About";
import Projects from "./component/Projects";
import AboutLg from "./component/AboutLg";
import ProjectsLg from "./component/ProjectsLg";
import GetInTouchLg from "./component/GetInTouchLg";

export default function App() {
  const scrollContainerRef = useRef(null);
  const scrollPosition = useRef(0); // Track the current scroll position

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();

      // Calculate the position to scroll to
      const targetScrollPosition = elementRect.left - containerRect.left + container.scrollLeft;
      scrollPosition.current = targetScrollPosition; // Update scroll position

      container.scrollTo({
        left: targetScrollPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    let animationFrameId;

    const handleWheel = (event) => {
      if (scrollContainerRef.current) {
        scrollPosition.current += event.deltaY;

        // Constrain scroll position within bounds
        const maxScrollLeft = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
        scrollPosition.current = Math.max(0, Math.min(scrollPosition.current, maxScrollLeft));

        const smoothScroll = () => {
          const currentScrollLeft = scrollContainerRef.current.scrollLeft;
          const targetScrollLeft = scrollPosition.current;

          const newScrollLeft = currentScrollLeft + (targetScrollLeft - currentScrollLeft) * 0.1;

          if (Math.abs(newScrollLeft - targetScrollLeft) < 0.5) {
            scrollContainerRef.current.scrollLeft = targetScrollLeft;
            cancelAnimationFrame(animationFrameId);
          } else {
            scrollContainerRef.current.scrollLeft = newScrollLeft;
            animationFrameId = requestAnimationFrame(smoothScroll);
          }
        };

        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(smoothScroll);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel);
      return () => {
        container.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  return (
    <div className="bg-[#EDF2F6] flex flex-col">
      <div className="flex flex-col w-full h-full px-[35px] py-[40px] items-center bg-[#EDF2F6] gap-20 lg:hidden">
        <About />
        <Projects />
        <GetInTouch />
      </div>
      <div className="hidden w-screen h-screen lg:flex max-h-[900px]">
        <div
          ref={scrollContainerRef}
          className="flex items-center bg-[#EDF2F6] gap-20 lg:p-8 xl:p-14 overflow-x-auto hide-scrollbar"
        >
          <AboutLg scrollToElement={scrollToElement} />
          <ProjectsLg scrollToElement={scrollToElement} />
          <GetInTouchLg scrollToElement={scrollToElement} />
        </div>
      </div>
    </div>
  );
}
