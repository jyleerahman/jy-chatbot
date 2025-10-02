import type { Route } from "./+types/home";
import { Link } from "react-router-dom"

export default function Main() {
    return (
        <div className="flex justify-center">
            <Link to="/chat"><img src="../app/font/Ask_fractal.png" />Ask Andrew</Link>
            <Link to="/chat/paris"><img src="../app/font/Ask_fractal.png" />Ask Paris</Link>
            <Link to="/chat/david"><img src="../app/font/Ask_fractal.png" />Ask David</Link>
        </div>
    )
}
