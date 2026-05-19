import { cookies } from "next/headers";
import { globalApi } from "../../api";
import { NextResponse } from "next/server";

export const GET = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const response = await globalApi.get("/users/current", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return NextResponse.json(response.data);
};
