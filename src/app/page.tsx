import DeleteNews from "@/components/DeleteNews";
import { getNews } from "@/lib/actions"
import { NewsModel } from "@/models/model";

export default async function Home() {
  const res = await getNews();

  const news: NewsModel[] = res.data ?? [];
  return (
    <div>

      {news.map((news: any) => {
        return (
          <div key={news.id} className="bg-white shadow-md rounded p-4 mb-4">
            <h2 className="text-lg font-semibold">{news.title}</h2>
            <p className="text-gray-600">{news.description}</p>
            <DeleteNews id={news._id.toString()} />
          </div>
        )
      })}



    </div>
  )
}
