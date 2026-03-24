import { useContext } from "react";
import { appContext } from "../context/AppContext";
import { LiaMinusCircleSolid } from "react-icons/lia";

const Cart = () => {
  const {
    cartItems,
    foodList,
    removeFromCart,
    currency,
    getTotalCartAmount,
    deliveryFee,
    navigate,
  } = useContext(appContext);

  return (
    <div className="bg-base-100 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 max-w-2xl">
          <div className="badge badge-primary badge-outline mb-3 px-4 py-3 font-medium">
            Shopping cart
          </div>
          <h1 className="text-3xl font-bold sm:text-4xl">Your Cart</h1>
          <p className="mt-4 text-base leading-7 opacity-80">
            Review the items you added and continue to checkout when you are
            ready.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-base-300/60 bg-base-100 shadow-sm">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th></th>
                  <th>Items</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {foodList.map((item, index) => {
                  if (cartItems[item._id] > 0) {
                    return (
                      <tr key={index}>
                        <td></td>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle h-12 w-12">
                                <img src={item.image} alt={item.name} />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold capitalize">
                                {item.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          {currency} {item.price}
                        </td>
                        <td>{cartItems[item._id]}</td>
                        <td>
                          {currency} {item.price * cartItems[item._id]}
                        </td>
                        <td>
                          <button
                            className="btn btn-ghost btn-circle btn-sm text-error"
                            onClick={() => removeFromCart(item._id)}
                            aria-label={`Remove ${item.name}`}
                          >
                            <LiaMinusCircleSolid size={22} />
                          </button>
                        </td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th></th>
                  <th>SubTotal</th>
                  <th>Delivery Fee</th>
                  <th>Total</th>
                  <th></th>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    {currency} {getTotalCartAmount()}
                  </td>
                  <td>
                    {currency} {getTotalCartAmount() === 0 ? 0 : deliveryFee}
                  </td>
                  <td className="font-semibold">
                    {currency}{" "}
                    {getTotalCartAmount() === 0
                      ? 0
                      : getTotalCartAmount() + deliveryFee}
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="join">
                      <input
                        type="text"
                        className="input join-item input-bordered"
                        placeholder="Promo Code"
                      />
                      <button className="btn btn-ghost btn-neutral join-item">Add</button>
                    </div>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      disabled={getTotalCartAmount() === 0}
                      onClick={() => navigate("/order")}
                    >
                      Checkout
                    </button>
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
