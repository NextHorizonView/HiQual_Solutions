import HorizontalScroll from "react-scroll-horizontal"
import GetInTouch from "./component/GetInTouch"
import About from "./component/About"
import Projects from "./component/Projects"
import AboutLg from "./component/AboutLg"
import ProjectsLg from "./component/ProjectsLg"
import GetInTouchLg from "./component/GetInTouchLg"


export default function App() {
  return (
    <div className="bg-[#EDF2F6] flex flex-col">
      <div className="flex flex-col w-full h-full px-[35px] py-[40px] items-center bg-[#EDF2F6] gap-20 lg:hidden">
        <About />
        <Projects />
        <GetInTouch />
      </div>
      <div className="hidden w-screen h-screen lg:flex max-h-[900px]">
        <HorizontalScroll reverseScroll={true}>
          <div className="flex items-center bg-[#EDF2F6] gap-20 lg:p-8 xl:p-14">
            <AboutLg />
            <ProjectsLg />
            <GetInTouchLg />
          </div>
        </HorizontalScroll>
      </div>
    </div>
  )
}

