import Link from "next/link";

export default function BuketItem({ bukety }) {
    return <li className="min-w-[300px] snap-center">
        <div className="max-w-sm rounded overflow-hidden h-full">
            <Link href={'/contact'}>
                <img
                    className="w-full h-48 object-cover"
                    src={bukety.image}
                    alt={`Картинка ${bukety.title}`}
                />
            </Link>

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{bukety.title}</div>
                <p className="text-gray-700 text-base">
                    {bukety.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {
                    bukety.events.map((item, index) => <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={index}>{item}</span>)
                }
            </div>
        </div>
    </li>
}
