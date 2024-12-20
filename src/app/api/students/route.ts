import { createClient } from "@/utils/supabase/server";
import { PrismaClient, Prisma } from "@prisma/client";

export async function GET() {
  const supabase = createClient();
  const prisma = new PrismaClient();
  const data = await prisma.students.findMany();
  const serializedData = JSON.stringify(data, (key, value) =>
    typeof value === "bigint" ? value.toString() : value
  );

  return new Response(serializedData, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
