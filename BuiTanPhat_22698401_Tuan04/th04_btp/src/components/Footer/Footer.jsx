export default function Footer() {
    return (
        <>
            <div className="footer bg-gray-800 text-white p-10 grid grid-cols-2">
                <div className="leftFooter grid grid-rows-2">
                    <div className="send">
                        <h4 className="text-lg font-bold">About us</h4>
                        <span>Welcome to our website, a wonderful place
                            to explore and learn how to cook like a pro
                        </span>
                        <div>
                            <input className="bg-gray-400 rounded-md p-1" placeholder="Enter your email" type="text" name="" id="" />
                            <button className="ml-4 bg-pink-300 p-1 px-2 rounded-md mt-2">Send</button>
                        </div>
                    </div>
                    <div className="copyright flex items-center gap-4">
                        <div className="logo">
                            <img className="size-10 w-full" src="/white_chefify.png" alt="" />
                        </div>
                    
                        <h1>2023 Chelify Company</h1>
                        <h1>Team of Servical Privacy Policy</h1>
                    </div>
                </div>
                <div className="rightFooter grid grid-cols-2">
                    <div className="learn_shop">
                        <div className="learnmore">
                            <ul>
                                <li className="text-lg font-bold">Learn More</li>
                                <li>Our Cooks</li>
                                <li>See Our Features</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div className="shop mt-5">
                            <ul>
                                <li className="text-lg font-bold">Shop</li>
                                <li>Gift Subscription</li>
                                <li>Send Us Feedback</li>
                            </ul>
                        </div>
                    </div>
                    <div className="recipes">
                        <ul>
                            <li className="text-lg font-bold">Recipes</li>
                            <li>What to Cook This Week</li>
                            <li>Pasta</li>
                            <li>Dinner</li>
                            <li>Healthy</li>
                            <li>Vegetarian</li>
                            <li>Vegan</li>
                            <li>Christmas</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}