import HorizontalScroll from "react-scroll-horizontal"
import GetInTouch from "./component/GetInTouch"
import About from "./component/About"


export default function App() {
  return (
    <div className="bg-[#EDF2F6] flex flex-col">
      <div className="flex flex-col w-full h-full px-[35px] py-[40px] items-center bg-[#EDF2F6] gap-20">
        <About />
        <GetInTouch />
      </div>
    </div>
  )
}

