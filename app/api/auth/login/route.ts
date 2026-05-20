import { NextRequest, NextResponse } from "next/server";
import { ApiError, globalApi } from "../../api";
import { cookies } from "next/headers";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const response = await globalApi.post("/users/signin", body);
    console.log(response.headers);

    const cookieStore = await cookies();

    cookieStore.set("token", response.data.token);

    return NextResponse.json(response.data);
  } catch (error) {
    const err = error as ApiError;
    return NextResponse.json(
      {
        error: err.response?.data.message || err.message,
      },
      {
        status: err.status || 500,
      },
    );
  }
};
