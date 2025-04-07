import { NavLink } from "react-router-dom";
import { images } from "../assets/assets";

const SideBar = () => {
    return (
        <div className="p-5 border-r-1 border-r-gray-300">
            <img src={images.Image_1858} alt="" />
            <div className="mt-5 flex flex-col gap-5 text-gray-500">
                <NavLink to='/' className="flex gap-3 px-3 py-1.5 rounded">
                    <img src={images.Squares_four_1} alt="Squares_four_1" className="text-gray-700" />
                    <p>Dashboard</p>
                </NavLink>
                <NavLink to='/projects' className="flex gap-3 px-3 py-1.5 rounded">
                    <img src={images.Folder} alt="Folder" />
                    <p>Projects</p>
                </NavLink>
                <NavLink to='/teams' className="flex gap-3 px-3 py-1.5 rounded">
                    <img src={images.Groups} alt="Groups" />
                    <p>Teams</p>
                </NavLink>
                <NavLink to='/analytics' className="flex gap-3 px-3 py-1.5 rounded">
                    <img src={images.Pie_chart} alt="Pie_chart" />
                    <p>Analytics</p>
                </NavLink>
                <NavLink to='/messages' className="flex gap-3 px-3 py-1.5 rounded">
                    <img src={images.Chat} alt="Chat" />
                    <p>Messages</p>
                </NavLink>
                <NavLink to='/integrations' className="flex gap-3 px-3 py-1.5 rounded">
                    <img src={images.Code} alt="Code" />
                    <p>Integrations</p>
                </NavLink>
            </div>
            <div className="mt-20 bg-[#EFF6FF] p-5 flex flex-col gap-5 items-center">
                <img src={images.Group} alt="Group" />
                <p className="font-medium text-2xl">V2.0 is available</p>
                <button className="bg-white text-blue-700 border border-blue-700 px-3 py-1.5 w-full rounded hover:bg-blue-700 hover:text-white transition-all duration-300">Try now</button>
            </div>
        </div>
    )
}

export default SideBar;