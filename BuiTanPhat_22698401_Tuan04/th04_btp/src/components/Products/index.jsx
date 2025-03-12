import { useEffect, useState } from "react";
import Item from "../Item";

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://67c865040acf98d070866108.mockapi.io/hieu")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(data);

  return (
    <>
      <div className="products px-30 mb-10">
        <div className="menu my-5">
          <ul className="flex gap-5 font-bold text-gray-500">
            <li className="text-pink-400">Saved Recipes</li>
            <li>Folders</li>
            <li>Recipes By Genevieve</li>
          </ul>
        </div>
        <div className="items grid grid-cols-4 grid-rows-2 gap-3">
          {/* <div className="col-span-1"> */}
            {data.map((item) => (
              <div className="col-span-1" key={item.id}>
                <div
                  className="card"
                  style={{
                    height: "200px",
                    width: "300px",
                    border: "1px solid",
                    boxShadow: "2px 2px 2px blue",
                  }}
                >
                  <img
                    src={item.img}
                    alt=""
                    style={{
                      height: "150px",
                      width: "299px",
                      border: "2px solid",
                    }}
                  />
                  <h4>{item.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pages"></div>
      {/* </div> */}
    </>
  );
}
