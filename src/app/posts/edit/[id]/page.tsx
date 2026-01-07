interface EditProps {

  id: string;

}


export default async function EditPage(params: Promise<EditProps>) {

  const { id } = await params;

  console.log(id);
  return (
    <div>



    </div>
  )
}
