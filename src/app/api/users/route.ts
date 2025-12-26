import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  console.log(params.get('number'));
  return NextResponse.json({ name: 'John Doe' }, { status: 200 });
}



export async function POST(req: NextRequest) {
  const body = await req.json();


  return NextResponse.json({ name: 'John Doe' }, { status: 200 });

}