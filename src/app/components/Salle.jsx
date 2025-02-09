import bouquets from "../data/flowers";
import BuketItem from "./Bouquets";

function List() {

    return (
        <div className="bg-white py-5 sm:py-5 mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-2xl">Букеты</h2>
            <ul className="flex gap-4 overflow-x-auto py-3 snap-x snap-mandatory scrollbar-hide scrollStyle">
                {bouquets.map((bouquet, index) => <BuketItem bukety={bouquet} key={index} />)}
            </ul>
        </div >
    );
};

export default List;