
export default async function User({ params, searchParams }: { params: Promise<{ id: string }>, searchParams: Promise<{ a: string }> }) {


  const { id } = await params;
  const { a } = await searchParams;
  console.log(a);

  return (
    <div>User</div>
  )
}
