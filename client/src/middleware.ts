import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    if (
      req.nextUrl.pathname.startsWith("/admin") &&
      req.nextauth.token?.role !== "admin"
    )
      return NextResponse.redirect(new URL("/feed", req.url));
  },
  {
    callbacks: {
      authorized: ({ token }: any) => !!token,
    },
  }
);

export const config = {
  matcher: [
    "/admin/:path*",
    "/feed",
    "/first-login",
    "/articles/:path*",
    "/messages",
    "/my-collections",
    "/collection",
    "/writer",
    "/articles",
    "/dashboard",
    "/users",
    "/writer/[id]",
  ],
};
