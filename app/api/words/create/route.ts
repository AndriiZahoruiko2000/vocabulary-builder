import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { ApiError, globalApi } from "../../api";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const response = await globalApi.post("/words/create", body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
