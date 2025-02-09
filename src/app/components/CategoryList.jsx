import CardItem from "./CardItem";
import { flowerCategories } from "../data/category";


export default function Catalog() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8 pt-5">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 flex-col">
          {flowerCategories.map((product, index) => (
            <>

              <CardItem key={index} product={product} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
