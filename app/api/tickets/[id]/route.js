import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
// 889s1ec0xToN54D2

export async function DELETE(_, { params }) {
  const id = params.id;
  const supabase = createRouteHandlerClient({ cookies });

  const { error } = await supabase.from("Tickets").delete().eq("id", id);

  return NextResponse.json({ error });
}
