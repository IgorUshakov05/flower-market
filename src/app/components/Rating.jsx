import reviews from "../data/rating"
import RatingItem from "./RatingItem"


export default function Rating() {
    return (
        <div className="bg-white py-24 sm:py-32" id="rating">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Отзывы наших клиентов</h2>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-2 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {reviews.map((post) => (
                        <RatingItem key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    )
}
