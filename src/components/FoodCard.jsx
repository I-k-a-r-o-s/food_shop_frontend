import { useContext } from "react";
import { appContext } from "../context/AppContext";
import { LiaMinusCircleSolid, LiaPlusCircleSolid } from "react-icons/lia";

const FoodCard = ({ food }) => {
  const { currency, cartItems, addToCart, removeFromCart } =
    useContext(appContext);

  return (
    <div className="card w-full overflow-hidden rounded-3xl border border-base-300/60 bg-base-100 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="hover-3d">
        <figure className="bg-base-200 px-5 pt-5">
          <img
            src={food.image}
            alt={food.name}
            className="aspect-4/3 w-full rounded-2xl object-cover"
          />
        </figure>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="card-body gap-4 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h2 className="card-title text-xl capitalize sm:text-2xl">
            {food.name}
          </h2>
          <span className="badge badge-primary badge-outline px-3 py-3 text-sm font-semibold">
            {currency} {food.price}
          </span>
        </div>

        <p className="text-sm leading-6 opacity-75">{food.description}</p>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="rating rating-sm">
            <div
              className="mask mask-star bg-warning"
              aria-current="true"
            ></div>
            <div
              className="mask mask-star bg-warning"
              aria-current="true"
            ></div>
            <div
              className="mask mask-star bg-warning"
              aria-current="true"
            ></div>
            <div
              className="mask mask-star bg-warning"
              aria-current="true"
            ></div>
            <div
              className="mask mask-star bg-warning"
              aria-current="true"
            ></div>
          </div>

          <div className="flex items-center gap-2">
            {!cartItems[food._id] ? (
              <button
                className="btn btn-primary btn-sm rounded-full px-4"
                onClick={() => addToCart(food._id)}
              >
                <LiaPlusCircleSolid size={20} />
                Add
              </button>
            ) : (
              <>
                <button
                  className="btn btn-circle btn-sm btn-outline"
                  onClick={() => removeFromCart(food._id)}
                  aria-label={`Decrease ${food.name}`}
                >
                  <LiaMinusCircleSolid size={20} />
                </button>
                <span className="min-w-8 text-center text-sm font-bold">
                  {cartItems[food._id]}
                </span>
                <button
                  className="btn btn-circle btn-sm btn-primary"
                  onClick={() => addToCart(food._id)}
                  aria-label={`Increase ${food.name}`}
                >
                  <LiaPlusCircleSolid size={20} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FoodCard;
