import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("signin", "routes/signin.tsx"),
    route("signup", "routes/signup.tsx"),
    route("/api/auth/*", "routes/api.auth.$.ts"),
    route("/ai", "routes/ai.tsx"),
    route("main", "routes/main.tsx"),
    route("chat/:chatId", "routes/chat.tsx")
] satisfies RouteConfig;