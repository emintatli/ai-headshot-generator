
export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard/:path*","/api/premium","/api/upload/:path*","/api/upload","/api/unlock/:path*"] }
