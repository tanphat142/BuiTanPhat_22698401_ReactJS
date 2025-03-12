import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";

const YourRecipe = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://67c819aa0acf98d07084d58f.mockapi.io/recipes")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="flex justify-between gap-20 py-20 px-30">
        <div className="min-w-30">
          <img src={assets.filter} alt="filter" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">Salad (32)</h1>
            <select className="px-4 py-2 border w-[100px]">
              <option value="a-z">A-Z</option>
            </select>
          </div>
          <div className="my-10 grid grid-cols-3 gap-20">
            {data.map((item, index) => (
              <div className="" key={index}>
                <img className="w-full rounded-[15px]" src={item.image} alt="" />
                <div className="">
                  <div className="flex gap-3 p-3 font-bold text-xl">
                    <h4>{item.name}</h4>
                    <img className="w-10 h-10" src={assets.save} alt="save" />
                  </div>
                  <p className="mt-2 text-xs text-pink-700 p-3">
                    {item.time} minutes
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default YourRecipe;
