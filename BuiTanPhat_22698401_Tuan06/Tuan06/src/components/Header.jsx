import { useEffect, useState } from "react";
import { images } from "../assets/assets";

const Header = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3002/overview");
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);
  
  return (
    <>
      <div className="flex justify-between p-5 border-b border-gray-300">
        <p className="text-2xl font-bold text-[#E64F84]">Dashboard</p>
        <div className="flex items-center gap-5">
          <div className="flex item-center gap-3 bg-[#F3F4F6] px-3 py-1.5 rounded">
            <img src={images.Search} alt="Search" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none w-[250px]"
            />
          </div>
          <img src={images.Bell_1} alt="Bell_1" />
          <img src={images.Question_1} alt="Question_1" />
          <img src={images.avatar_331} alt="avatar_331" />
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3">
          <img src={images.Squares_four_1} alt="Squares_four_1" />
          <p className="text-2xl font-bold">Overview</p>
        </div>
      </div>
      {data.length > 0 && (
        <div className="flex gap-6 p-5">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-30 justify-between p-5 rounded-md flex-1"
              style={{ backgroundColor: item.bg }}
            >
              <div className="flex flex-col gap-2">
                <p className="text-lg font-medium">{item.title}</p>
                <p className="text-3xl font-bold">${item.price}</p>
                <p className="text-sm text-gray-500">
                  <span className="text-green-700 font-bold">
                    {item.discount}%
                  </span>{" "}
                  period of change
                </p>
              </div>
              <img src={images[item.icon]} alt={item.icon} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
