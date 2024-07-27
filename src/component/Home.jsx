import React, { useRef, useEffect, useState } from "react";
import GetInTouch from "./GetInTouch";
import About from "./About";
import Projects from "./Projects";
import AboutLg from "./AboutLg";
import ProjectsLg from "./ProjectsLg";
import GetInTouchLg from "./GetInTouchLg";

const Home = () => {
    const scrollContainerRef = useRef(null);
    const scrollPosition = useRef(0);

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
            if (windowSize.width < 1024) {
                // For smaller devices, scroll vertically
                element.scrollIntoView({ behavior: "smooth" });
            } else if (scrollContainerRef.current) {
                // For larger devices, scroll horizontally
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
                    if (!scrollContainerRef.current) return; // Check if the ref is still valid
                    const currentScrollLeft = scrollContainerRef.current.scrollLeft;
                    const targetScrollLeft = scrollPosition.current;

                    const newScrollLeft = currentScrollLeft + (targetScrollLeft - currentScrollLeft) * 0.1;

                    if (Math.abs(newScrollLeft - targetScrollLeft) < 0.5) {
                        if (scrollContainerRef.current) {
                            scrollContainerRef.current.scrollLeft = targetScrollLeft;
                        }
                        cancelAnimationFrame(animationFrameId);
                    } else {
                        if (scrollContainerRef.current) {
                            scrollContainerRef.current.scrollLeft = newScrollLeft;
                            animationFrameId = requestAnimationFrame(smoothScroll);
                        }
                    }
                };

                cancelAnimationFrame(animationFrameId);
                animationFrameId = requestAnimationFrame(smoothScroll);
            }
        };

        const attachWheelEvent = () => {
            const container = scrollContainerRef.current;
            if (container) {
                container.addEventListener("wheel", handleWheel);
            }
        };

        const detachWheelEvent = () => {
            const container = scrollContainerRef.current;
            if (container) {
                container.removeEventListener("wheel", handleWheel);
            }
        };

        if (windowSize.width >= 1024) {
            attachWheelEvent();
        } else {
            detachWheelEvent();
        }

        return () => {
            detachWheelEvent();
        };
    }, [windowSize.width]);

    return (
        <div className="bg-[#EDF2F6] flex flex-col">
            {windowSize.width < 1024 ? (
                <div className="flex flex-col w-full h-full px-[35px] py-[40px] items-center bg-[#EDF2F6] gap-20">
                    <About scrollToElement={scrollToElement} />
                    <Projects scrollToElement={scrollToElement} />
                    <GetInTouch />
                </div>
            ) : (
                <div className="w-screen h-screen flex lg:max-h-[700px] 2xl:max-h-[1000px]">
                    <div
                        ref={scrollContainerRef}
                        className="flex items-center bg-[#EDF2F6] gap-20 lg:p-8 xl:p-14 overflow-x-auto hide-scrollbar"
                    >
                        <AboutLg scrollToElement={scrollToElement} />
                        <ProjectsLg scrollToElement={scrollToElement} />
                        <GetInTouchLg scrollToElement={scrollToElement} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
