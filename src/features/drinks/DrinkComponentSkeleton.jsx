import { Skeleton } from "../../components/ui/skeleton";

export default function DrinkComponentSkeleton() {
  return (
    <div className="p-5 grid grid-cols-4 gap-5 ">
      <DrinkSkeleton />
      <DrinkSkeleton />
      <DrinkSkeleton />
      <DrinkSkeleton />
      <DrinkSkeleton />
      <DrinkSkeleton />
      <DrinkSkeleton />
      <DrinkSkeleton />
      <DrinkSkeleton />
    </div>
  )
}




function DrinkSkeleton() {
  return (
    <div className="space-y-3 ">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-72 " />
    </div>
  )
}
