import type { Route } from "./+types/home";
import { Link } from "react-router-dom"

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "JY ChatGPT" },
    { name: "description", content: "Welcome to NEW CHATBOT!" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>helloh!</h1>
      <nav>
        <Link to="/login">Log In</Link> |{" "}
        <Link to="/signup">Sign Up</Link> |{" "}
        <Link to="/protected">Protected</Link>
      </nav>
    </div>
  )
}
