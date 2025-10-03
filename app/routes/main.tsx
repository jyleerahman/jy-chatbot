import type { Route } from "./+types/home";
import { Link } from "react-router-dom"

export default function Main() {
    return (
        <>
            <div className="bg-[#68699B] w-full h-10 p-2 pl-3 text-[#FFFFFD]"> Home | About | Help | Corporate Services</div>
            <div className="flex justify-center m-10 pl-10">
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
        </>
    )
}
