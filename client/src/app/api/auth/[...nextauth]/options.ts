import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
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
        async jwt({ token, user }) {
            if (user) token.role = user.role
            return token
        },
        async session({ session, user, token }) {
            if (session?.user) session.user.role = token.role
            return session
        },
    },
    secret: process.env.NEXT_AUTH_SECRET,
  }