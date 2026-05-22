import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { ApiError, globalApi } from "../../../api";

interface Params {
  params: Promise<{ id: string }>;
}

export const DELETE = async (req: NextRequest, { params }: Params) => {
  console.log("Word delete");

  try {
    const { id } = await params;
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const response = await globalApi.delete(`/words/delete/${id}`, {
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
