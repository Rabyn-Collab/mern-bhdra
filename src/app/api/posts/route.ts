export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const token = request.headers.get('authorization');

  if (!token) {
    return Response.json({
      message: "hello world"
    }, {
      status: 401
    });
  }



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