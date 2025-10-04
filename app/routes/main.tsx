import type { Route } from "./+types/home";
import { Link } from "react-router-dom"

export default function Main() {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex items-center m-5">
                    <img src="../app/font/fractal_logo.png" className="w-50" />
                </div>


                <div className="flex justify-center">
                    <Link to="/chat/1"><img className="w-[250px] ml-12" src="../app/font/andrew.png" />
                        <p className="ml-16 mt-5 text-2xl underline text-blue-700">Ask Andrew</p>
                    </Link>
                    <Link to="/chat/2"><img className="w-[250px] ml-12" src="../app/font/paris.png" />
                        <p className="ml-17 mt-6 text-2xl underline text-blue-700">Ask Paris</p>
                    </Link>
                    <Link to="/chat/3"><img className="w-[250px] ml-12" src="../app/font/david.png" />
                        <p className="ml-20 mt-6 text-2xl underline text-blue-700">Ask David</p>
                    </Link>
                </div>
            </div>
        </>
    )
}
