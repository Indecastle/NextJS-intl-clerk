import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
 
import createMiddleware from "next-intl/middleware";

import { NextResponse } from "next/server";
 
const locales = ['en', 'ru'];
const publicPages = [
  "/",
  "/:locale",
  "/:locale/about",
  "/:locale/sign-in",
  "/:locale/sign-up"];

const intlMiddleware = createMiddleware({
  locales: locales,
  defaultLocale: "en",
  // localeDetection: false,
  // localePrefix: "as-needed"
});
 
export default authMiddleware({
  beforeAuth: (req) => {
    const x= intlMiddleware(req)
    // console.log(x)
    // Execute next-intl middleware before Clerk's auth middleware
    return x;
  },

  afterAuth(auth, req, evt) {
    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      const pattern = `^(/(${locales.join('|')}))?/`
      const matched = req.nextUrl.pathname.match(pattern)
      const locale = matched ? matched[2] : 'en'

      if (auth.isPublicRoute) {
        return NextResponse.next();
      } else {
        return NextResponse.rewrite(new URL(`/${locale}/404`, req.url));
      }
      // return redirectToSignIn({ returnBackUrl: req.url });
    }

    // If the user is logged in and trying to access a protected route, allow them to access route
    if (auth.userId && !auth.isPublicRoute) {
      return NextResponse.next()
    }
    // Allow users visiting public routes to access them
    return NextResponse.next();
  },
 
  // Ensure that locale specific sign-in pages are public
  publicRoutes: publicPages,
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};