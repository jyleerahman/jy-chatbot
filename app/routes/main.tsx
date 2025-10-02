import type { Route } from "./+types/home";
import { Link } from "react-router-dom"

export default function Main() {
    return (
        <div className="flex justify-center m-10">
            <Link to="/chat"><img width="250px" src="../app/font/andrew.png" />Ask Andrew</Link>
            <Link to="/chat/paris"><img width="250px" src="../app/font/paris.png" />Ask Paris</Link>
            <Link to="/chat/david"><img width="250px" src="../app/font/david.png" />Ask David</Link>
        </div>
    )
}
