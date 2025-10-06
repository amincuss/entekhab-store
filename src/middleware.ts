// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const agencyCode = req.headers.get("agent-code"); // موبایل این Header را می‌فرستد

  if (agencyCode) {
    const res = NextResponse.next();
    res.cookies.set("agencyCode", agencyCode, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
