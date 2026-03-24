import { useContext } from "react";
import { appContext } from "../context/AppContext";
import FoodCard from "./FoodCard";

const DisplayFood = ({ category }) => {
  const { foodList } = useContext(appContext);

  return (
    <div className="bg-base-100 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 max-w-2xl">
          <div className="badge badge-accent badge-outline mb-3 px-4 py-3 font-medium">
            Top picks
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl">Top Dishes!</h2>
          <p className="mt-4 text-base leading-7 opacity-80">
            Pick from the dishes below and add them to your cart.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {foodList.map((food) => {
            if (category === "All" || category === food.category) {
              return <FoodCard key={food._id} food={food} />;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};
export default DisplayFood;
