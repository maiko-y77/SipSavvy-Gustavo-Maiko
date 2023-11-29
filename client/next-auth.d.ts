// Ref: https://next-auth.js.org/getting-started/typescript#module-augmentation
import NextAuth from "next-auth/next"
import { DefaultSession, DefaultUser } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
    interface Session {
        user: {
            id: string,
            role: string,
            name: string,
            last_name: string,
            avatar: string,
            username: string,
        } & DefaultSession
    }

    interface User extends DefaultUser {
        id: string
        role: string,
        name: string,
        last_name: string,
        avatar: string,
        username: string
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        id: string
        role: string,
        name: string,
        last_name: string,
        avatar: string,
        username: string
    }
}