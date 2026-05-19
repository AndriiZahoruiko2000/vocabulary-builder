import { NextRequest, NextResponse } from "next/server";
import { globalApi } from "../../api";

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  const response = await globalApi.post("/users/signup", body);

  return NextResponse.json(response.data);
};
