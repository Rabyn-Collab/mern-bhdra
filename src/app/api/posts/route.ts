export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);


  console.log(searchParams);



  return Response.json({
    message: "hello world"
  });
}


export async function POST(request: Request) {
  console.log(await request.json());

  return Response.json({
    message: "hello world"
  });
}