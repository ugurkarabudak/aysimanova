import { NextRequest, NextResponse } from "next/server";
import { fallbackLng, languages, cookieName } from "./i18n/settings";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|studio|locales|.*\\..*).*)",
  ],
};

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  const pathnameHasLocale = languages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Use saved cookie preference, default to English
  const cookieValue = req.cookies.get(cookieName)?.value;
  const lng =
    cookieValue && languages.includes(cookieValue) ? cookieValue : fallbackLng;

  const newUrl = new URL(`/${lng}${pathname}`, req.url);
  newUrl.search = req.nextUrl.search;

  const response = NextResponse.redirect(newUrl);
  response.cookies.set(cookieName, lng, { path: "/", maxAge: 31536000 });
  return response;
}
