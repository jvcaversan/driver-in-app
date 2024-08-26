import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
  const sql = neon(
    "postgresql://JSM_Ryde_owner:1uFpd5eQXDyL@ep-jolly-silence-a5tawyf5.us-east-2.aws.neon.tech/JSM_Ryde?sslmode=require"
  );
  const { name, email, clerkId } = await request.json();

  try {
    if (!name || !email || !clerkId) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const response = await sql`
  INSERT INTO users (name, email, clerk_id)
  VALUES (
    ${name},
    ${email},
    ${clerkId}
  );`;

    console.log("Usuário inserido com sucesso:", response);

    return new Response(JSON.stringify({ data: response }), { status: 201 });
  } catch (error) {
    console.log(error);
    return Response.json({ error: error }, { status: 500 });
  }
}
