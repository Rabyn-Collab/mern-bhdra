import { Card, CardHeader, CardTitle, CardFooter, CardContent } from '@/components/ui/card'


export default function ProductCard() {

  return (
    <div className='relative max-w-md rounded-xl bg-linear-to-r from-neutral-600 to-violet-300 pt-0 shadow-lg'>
      <div className='flex h-60 items-center justify-center'>
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/components/card/image-11.png?width=300&format=auto'
          alt='Shoes'
          className='w-75'
        />
      </div>

      <Card className='border-none'>
        <CardHeader>
          <CardTitle>Nike Jordan Air Rev</CardTitle>

        </CardHeader>
        <CardContent>
          <p>
            Crossing hardwood comfort with off-court flair. &apos;80s-Inspired construction, bold details and
            nothin&apos;-but-net style.
          </p>
        </CardContent>
        <CardFooter className='justify-between gap-3 max-sm:flex-col max-sm:items-stretch'>
          <div className='flex flex-col'>
            <span className='text-sm font-medium uppercase'>Price</span>
            <span className='text-xl font-semibold'>$69.99</span>
          </div>

        </CardFooter>
      </Card>
    </div>
  )
}


