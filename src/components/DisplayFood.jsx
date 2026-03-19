import { useContext } from "react";
import { appContext } from "../context/AppContext";
import FoodCard from "./FoodCard";

const DisplayFood = ({category}) => {
  const { foodList } = useContext(appContext);
  return (
    <div className="bg-base-200">
      <h2 className="text-3xl">Top Dishes!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {foodList.map((food) => {
          if (category === "All" || category === food.category) {
            return <FoodCard key={food._id} food={food} />;
          }
        })}
      </div>
    </div>
  );
};
export default DisplayFood;
