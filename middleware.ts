import { NextResponse } from "next/server";
import { authmiddleware } from "./middlewares/api/authMiddleware";
import { logMiddleware } from "./middlewares/api/logMiddleware";

export const config = {
  matcher: "/api/:path*",
};

export default function middleware(request: Request) {
  const authResult = authmiddleware(request);
  if (request.url.includes("/api/blogs")) {
    const logResult = logMiddleware(request);
    console.log(`Request: ${logResult.response}`);
  }

  if (!authResult.isValid) {
    return new NextResponse(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
  }
  return NextResponse.next();
}
