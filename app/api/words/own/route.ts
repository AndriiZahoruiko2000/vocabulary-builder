import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { ApiError, globalApi } from "../../api";

export const GET = async (req: NextRequest) => {
  try {
    const params = Object.fromEntries(req.nextUrl.searchParams.entries());
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    console.log(token);

    const response = await globalApi.get("/words/own", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
    });

    return NextResponse.json(response.data);
  } catch (error) {
    const err = error as ApiError;
    return NextResponse.json(
      {
        err: err.response?.data.message || err.message,
      },
      {
        status: err.status || 500,
      },
    );
  }
};
