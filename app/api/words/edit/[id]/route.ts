import { NextRequest } from "next/server";

interface PatchParams {
  params: Promise<{ id: string }>;
}

export const PATCH = async (req: NextRequest, { params }: PatchParams) => {
  const body = await req.json();
  const { id } = await params;
};
