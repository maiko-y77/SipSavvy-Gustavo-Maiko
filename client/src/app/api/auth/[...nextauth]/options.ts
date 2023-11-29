import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUser } from "@/lib/UserAuth/data";

export const options: NextAuthOptions = {
  session: {strategy: 'jwt'},
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "youremail@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Please enter an email and password");
        }

        const res = await fetch(
          `http://localhost:3001/auth/login/${credentials?.email}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          }
        );

        const user = await res.json();

        if (user) {
          if (user.password !== credentials?.password) {
            return null;
          }
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, user, token }) {
      if (session.user) {
        session.user.id = token.id
        session.user.role = token.role
        session.user.name = token.name
        session.user.last_name = token.last_name
        session.user.avatar = token.avatar
        session.user.username = token.username
      }
      console.log(session)
      return session;
    },

    async jwt({ token, user }) {
      if (user){
        token.id = user.id
        token.role = user.role
        token.name = user.name
        token.last_name = user.last_name
        token.avatar = user.avatar
        token.username = user.username
      };
      return token;
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
};
