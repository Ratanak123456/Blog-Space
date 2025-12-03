// src/app/api/profile/route.ts
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(JSON.stringify({ error: "Not authenticated" }), { status: 401 });
  }

  return new Response(
    JSON.stringify({
      name: session.user?.name,
      email: session.user?.email,
      role: session.user?.role,
    }),
    { status: 200 }
  );
}
