import { ApiError, globalApi } from "@/app/api/api";

import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: Promise<{ id: string }>;
}

export const POST = async (req: NextRequest, { params }: Params) => {
  try {
    const { id } = await params;
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const response = await globalApi.post(`/words/add/${id}`, null, {
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
