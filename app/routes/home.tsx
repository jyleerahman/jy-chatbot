import type { Route } from "./+types/home";
import { Link } from "react-router-dom"
import { LogIn } from "~/routes/login";
import { SignUp } from "~/routes/signup";
import { Protected } from "~/routes/protected"
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "JY ChatGPT" },
    { name: "description", content: "Welcome to NEW CHATBOT!" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>Welcome!</h1>
      <nav>
        <Link to="/login">Log In</Link> |{" "}
        <Link to="/signup">Sign Up</Link> |{" "}
        <Link to="/protected">Protected</Link>
      </nav>
    </div>
  )
}
