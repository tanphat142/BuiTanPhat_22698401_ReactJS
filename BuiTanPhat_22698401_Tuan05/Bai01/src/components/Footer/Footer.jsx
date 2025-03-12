import { assets } from "../../assets/assets";

const Footer = () => {
    return (
        <div className="flex gap-[100px] bg-[#1D2228] text-white p-[5px] px-[40px] rounded-md">
            <div className="w-1/2">
                <p className="text-lg font-bold">About Us</p>
                <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro</p>
                <div className="mb-[90px]">
                    <input type="text" placeholder="Enter your email" className="p-[8px] px-[16px] rounded-md border-none mr-[10px] w-[300px]" />
                    <button className="p-[8px] px-[16px] bg-pink-500 text-white font-bold rounded-md border-none">Send</button>
                </div>
                <div className="flex gap-[30px] text-[12px] items-center">
                    <img src={assets.logo} alt="logo" />
                    <p>2023 Chefify Company</p>
                    <p>Terms of Service Privacy Policy</p>
                </div>
            </div>
            <div className="flex-1 flex gap-[200px] justify-center">
                <div>
                    <div className="mb-[30px]">
                        <h4 className="font-bold">Learn More</h4>
                        <ul className="list-none p-0 m-0">
                            <li>Our Cooks</li>
                            <li>See Our Features</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold">Shop</h4>
                        <ul className="list-none p-0 m-0">
                            <li>Gift Subscription</li>
                            <li>Send Us Feedback</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold">Recipes</h4>
                    <ul className="list-none p-0 m-0">
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
    );
};

export default Footer;
