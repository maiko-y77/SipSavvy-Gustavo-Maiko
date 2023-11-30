export { default } from "next-auth/middleware"

export const config = { matcher: [
    "/feed",
    "/first-login",
    "/articles/[id]",
    "/messages",
    "/my-collections",
    "/collection",
    "/writer",
    "/articles",
    "/dashboard",
    "/users",
    "/writer/[id]"
]} 