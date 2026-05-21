import { cookies } from "next/headers";
import { ApiError, globalApi } from "../../api";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const response = await globalApi.get("/words/statistics", {
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
