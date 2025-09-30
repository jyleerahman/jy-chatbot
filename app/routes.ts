import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("signin", "routes/signin.tsx"),
    route("protected", "routes/protected.tsx"),
    route("signup", "routes/signup.tsx"),
    route("/api/auth/*", "routes/api.auth.$.ts"),
    route("tests", "routes/test.tsx")

] satisfies RouteConfig;
