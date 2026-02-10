import { useGetTop5Query } from "./productApi.js"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

export default function Top5Products() {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const { isLoading, data, error } = useGetTop5Query();

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>{error.data?.message || error.error}</p>

  console.log(data);

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-40 sm:max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {data.map(({ title, image, _id }) => (
          <CarouselItem key={_id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{title}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}





