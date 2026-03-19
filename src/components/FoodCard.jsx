import { useContext } from "react";
import { appContext } from "../context/AppContext";
import { LiaMinusCircleSolid, LiaPlusCircleSolid } from "react-icons/lia";

const FoodCard = ({ food }) => {
  const { currency, cartItems, addToCart, removeFromCart } =
    useContext(appContext);

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="hover-3d">
        <figure className="px-5 pt-5">
          <img src={food.image} alt={food.name} />
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
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title text-2xl">{food.name}</h2>
          <span className="text-xl">
            {food.price} {currency}
          </span>
        </div>
        <p>{food.description}</p>
        <div className="card-actions justify-between">
          <div className="rating rating-sm">
            <div className="mask mask-star bg-success" aria-current=""></div>
            <div className="mask mask-star bg-success" aria-current=""></div>
            <div
              className="mask mask-star bg-success"
              aria-current="true"
            ></div>
            <div className="mask mask-star bg-success" aria-current=""></div>
            <div className="mask mask-star bg-success" aria-current=""></div>
          </div>
          <div className="flex gap-2">
            {!cartItems[food._id] ? (
              <button
                className="btn   btn-sm"
                onClick={() => addToCart(food._id)}
              >
                <LiaPlusCircleSolid size={20} />
                Add
              </button>
            ) : (
              <>
                <button
                  className="btn btn-circle  btn-sm"
                  onClick={() => removeFromCart(food._id)}
                >
                  <LiaMinusCircleSolid size={20} />
                </button>
                <label className="label font-bold">{cartItems[food._id]}</label>
                <button
                  className="btn btn-circle  btn-sm"
                  onClick={() => addToCart(food._id)}
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
