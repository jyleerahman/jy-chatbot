import { authClient } from "../lib/auth-client"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form } from "react-router-dom"

export default function SignUp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    let nav = useNavigate()

    async function signUp() {
        debugger;
        await authClient.signUp.email({
            email,
            password,
            name
        }, {
            onRequest: (ctx) => {
            },
            onSuccess: (ctx) => {
                nav('/home')
            },
            onError: (ctx) => {
                alert(ctx.error.message);
            },
        });
    }

    return (
        <div className="m-5 text-xl border-solid border-2 p-3 w-130">
            <h2>✍️Sign Up✍️</h2>
            <Form onSubmit={signUp} className="flex flex-col w-100">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="border-solid border-1 m-1"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="border-solid border-1 m-1"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="border-solid border-1 m-1"
                />
                <button type="submit" className="border-solid border-1 pl-1 pr-1">
                    Sign Up
                </button>
            </Form>
        </div>
    )
}