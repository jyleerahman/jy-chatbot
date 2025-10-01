import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./src/db/db"
import * as schema from './src/db/schema'

<<<<<<< HEAD
export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    database: drizzleAdapter(db, {
        provider: "pg", // or "pg" or "mysql"
=======
debugger;
export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
        autoSignIn: false
    },
    database: drizzleAdapter(db, {
        provider: "pg",
>>>>>>> client-server-react-router
        schema: schema,
    }),
})