import { useEffect, useState } from "react";
import PopularClassCards from "./PopularClassCards";

const PopularClasses = () => {
  const [popularClass, setPopularClass] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setPopularClass(data));
  }, []);

  return (
    <>
      <div className="text-center font-bold">
        <h1 className="text-3xl mt-2">Our Popular Classes</h1>
        <p className="m-2">
          Join us to vibrant energy of summer as you embark on a thrilling
          journey of dance.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-1 mx-auto p-2 m-2">
        {popularClass.map((popularClass) => (
          <PopularClassCards
            key={popularClass._id}
            popularClass={popularClass}
          ></PopularClassCards>
        ))}
      </div>
    </>
  );
};

export default PopularClasses;
