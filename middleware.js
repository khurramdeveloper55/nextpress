import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET = process.env.JWT_SECRET_KEY;

// Helper to verify JWT with jose
async function verifyToken(token) {
  try {
    const encoder = new TextEncoder();
    const { payload } = await jwtVerify(token, encoder.encode(SECRET));
    return payload;
  } catch (error) {
    console.error("JWT verification failed:", error.message);
    return null;
  }
}

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Public routes → allow
  if (
    pathname.startsWith("/posts/") ||
    pathname.startsWith("/categories/") ||
    pathname.startsWith("/api/auth") ||
    pathname === "/"
  ) {
    return NextResponse.next();
  }

  // Get token from cookies
  const token = req.cookies.get("token")?.value;
  if (!token) {
    console.log("No token found, redirecting to login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const decoded = await verifyToken(token);
  if (!decoded) {
    console.log("Token invalid, redirecting to login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const role = decoded.role;

  // Role-based access rules
  if (pathname.startsWith("/dashboard")) {
    if (role === "admin" || role === "author") {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (pathname.startsWith("/posts")) {
    if (role === "admin" || role === "author") {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (pathname.startsWith("/categories")) {
    if (role === "admin") {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/posts", "/categories"],
};
