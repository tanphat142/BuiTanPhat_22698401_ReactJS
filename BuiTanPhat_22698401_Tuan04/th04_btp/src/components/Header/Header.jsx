export default function Header() {
    return (
        <>
            <div className="header px-10">
                <div className="nav flex justify-between items-center">
                    <div className="logo_search flex gap-5  items-center">
                        <div className="logo">
                            <img className="size-10 w-full" src="/chefify.png" alt="" />
                        </div>
        
                        <div className="searchBar flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <input className="border rounded-xl" placeholder="cakescasca" type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="menu">
                        <ul className="flex gap-3 text-gray-400">
                            <li>What to cook</li>
                            <li>Recipes</li>
                            <li>Ingredients</li>
                            <li>Ocasions</li>
                            <li>About us</li>
                        </ul>
                    </div>
                    <div className="personal flex gap-3  items-center">
                        <div className="recipeBox bg-pink-100 p-3 rounded-md">
                            <button className="text-lg text-pink-500">Your recipes box</button>
                        </div>
                        <div className="avatar">
                            <a href="">
                                <img className="size-10 rounded-full w-full" src="/avatar.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}