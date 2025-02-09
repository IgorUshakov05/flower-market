import Link from "next/link";

export default function CardItem({ product }) {
  return (
    <>
      <div>

        <h2 className="text-3xl font-bold text-left  py-3 tracking-wide uppercase min-h-28">
          {product.name}
        </h2>
        <Link key={product.id} href={"/contact"} className="group">
          <img
            alt={product.imageAlt}
            src={product.imageSrc}
            className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
          />
          <h3 className="mt-4 text-sm text-gray-700">{product.subcategories.map((item, index) => <div key={index}><svg
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="mx-2 inline size-0.5 fill-current"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>{item.name}</div>)}</h3>
        </Link>
      </div>
    </>
  );
}
