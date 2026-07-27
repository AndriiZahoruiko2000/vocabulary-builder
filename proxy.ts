import { NextRequest, NextResponse } from "next/server";
import { parse } from "cookie";

import { checkServerSession } from "@/services/serverApi";

const privateRoutes = ["/user-info", "/posts", "/profile"];
const publicRoutes = ["/sign-in", "/sign-up"];

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const accessToken = req.cookies.get("accessToken")?.value;
  const refreshToken = req.cookies.get("refreshToken")?.value;

  const isPrivateRoute = privateRoutes.some((route) =>
    pathname.startsWith(route),
  );

  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route),
  );

  // Користувач не має access token
  if (!accessToken) {
    // Пробуємо оновити сесію через refresh token
    if (refreshToken) {
      try {
        const data = await checkServerSession();

        const setCookie = data.headers["set-cookie"];

        if (setCookie) {
          const cookieArray = Array.isArray(setCookie)
            ? setCookie
            : [setCookie];

          const response = isPublicRoute
            ? NextResponse.redirect(new URL("/", req.url))
            : NextResponse.next();

          for (const cookieStr of cookieArray) {
            const parsed = parse(cookieStr);

            const options = {
              expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
              path: parsed.Path ?? "/",
              maxAge: parsed["Max-Age"] ? Number(parsed["Max-Age"]) : undefined,
              httpOnly: parsed.HttpOnly !== undefined,
              secure: parsed.Secure !== undefined,
              sameSite: parseSameSite(parsed.SameSite),
            };

            if (parsed.accessToken) {
              response.cookies.set("accessToken", parsed.accessToken, options);
            }

            if (parsed.refreshToken) {
              response.cookies.set(
                "refreshToken",
                parsed.refreshToken,
                options,
              );
            }
          }

          return response;
        }
      } catch (error) {
        console.error("Failed to refresh session:", error);
      }
    }

    // Неавторизованому користувачу дозволяємо публічні сторінки
    if (isPublicRoute) {
      return NextResponse.next();
    }

    // Неавторизованого користувача з приватної сторінки
    // перенаправляємо на sign-in
    if (isPrivateRoute) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    return NextResponse.next();
  }

  // Авторизований користувач не повинен бачити sign-in/sign-up
  if (isPublicRoute) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

function parseSameSite(
  value: string | undefined,
): "strict" | "lax" | "none" | undefined {
  const sameSite = value?.toLowerCase();

  if (sameSite === "strict" || sameSite === "lax" || sameSite === "none") {
    return sameSite;
  }

  return undefined;
}

export const config = {
  matcher: [
    "/user-info/:path*",
    "/posts/:path*",
    "/profile/:path*",
    "/sign-in",
    "/sign-up",
  ],
};
