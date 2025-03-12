import { assets } from "../../assets/assets";

const Home = () => {
    return (
        <div className="my-10 flex gap-[50px]">
            <div className="w-1/3 text-center">
                <img src={assets.filter} alt="filter" className="mx-auto" />
            </div>
            <div className="flex-1 flex flex-col items-center">
                <h1 className="text-xl font-bold">Sorry, no results were found for "cakescascsa"</h1>
                <img src={assets.not_found_icon} alt="not_found_icon" className="my-4" />
                <p>We have all your Independence Day sweets covered</p>
                <div className="flex gap-5 mt-4">
                    <button className="px-2.5 py-1.5 bg-gray-300 rounded-md text-pink-400 border-none">Sweet Cake</button>
                    <button className="px-2.5 py-1.5 bg-gray-300 rounded-md text-purple-400 border-none">Black Cake</button>
                    <button className="px-2.5 py-1.5 bg-gray-300 rounded-md text-pink-500 border-none">Pozole Verde</button>
                    <button className="px-2.5 py-1.5 bg-gray-300 rounded-md text-teal-700 border-none">Healthy food</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
