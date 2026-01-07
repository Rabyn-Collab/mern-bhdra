import EditPost from "@/components/EditPost";
import { Post } from "@/models/post";
import { db } from "@/utils/firebaseFirestore";
import { doc, getDoc } from "@firebase/firestore";

interface EditProps {

  id: string;

}


export default async function EditPage({ params }: { params: Promise<EditProps> }) {

  const { id } = await params;

  const response = await getDoc(doc(db, 'posts', id));
  const post = response.data() ?? {};
  return (
    <div>

      <EditPost post={{
        id: response.id,
        title: post.title,
        detail: post.detail,
        image: post.image
      }} />



    </div>
  )
}
