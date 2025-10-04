import type { Route } from "./+types/home";
import { Link } from "react-router-dom"

export default function Main() {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex items-center m-5">
                    <img src="../app/font/fractal_logo.png" className="w-50" />
                    <p className="ml-60 font-extrabold text-[#CB0302] text-[30px]">Are you <span className="text-[35px] text-shadow-sm">STUCK?</span><span className="text-[35px] text-shadow-sm"> ASK</span> your instructor!</p>
                </div>


                <div className="flex justify-center ml-30">
                    <Link to="/chat/1"><img width="250px" src="../app/font/andrew.png" />
                        <p className="mt-4 ml-3 text-2xl underline text-blue-700">Ask Andrew</p>
                    </Link>
                    <Link to="/chat/2"><img width="250px" src="../app/font/paris.png" />
                        <p className="mt-5 ml-3 text-2xl underline text-blue-700">Ask Paris</p>
                    </Link>
                    <Link to="/chat/3"><img width="250px" src="../app/font/david.png" />
                        <p className="mt-5 ml-3 text-2xl underline text-blue-700">Ask David</p>
                    </Link>
                </div>
            </div>
        </>
    )
}
