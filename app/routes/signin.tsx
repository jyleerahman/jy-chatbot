import { useState } from "react"
import { Form, useNavigate } from "react-router"
import { authClient } from "../lib/auth-client"

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const nav = useNavigate()

    const signIn = async () => {
        debugger;
        await authClient.signIn.email(
            {
                email,
                password
            },
            {
                onRequest: (ctx) => {
                },
                onSuccess: () => {
                    nav("/chat")
                },
                onError: (ctx) => {
                    alert(ctx.error)
                },
            },
        )
    }

    return (
        <>
            <div className="whitespace-pre-wrap border mt-4 p-2 bg-white shadow-md m-5 text-xl border-solid border-2 p-3 h-60">
                <h1 className="font-extrabold">Sign in</h1>
                <Form onSubmit={signIn} className="flex flex-col w-100">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-solid border-1 m-1"></input>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-solid border-1 m-1"></input>
                    <button type="submit" className="border-solid border-1 pl-1 pr-1">Sign In</button>
                </Form>
            </div>
        </>
    )
}