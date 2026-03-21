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
    deliveryFee,navigate
  } = useContext(appContext);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
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
                          <div className="font-bold">{item.name}</div>
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
                      <LiaMinusCircleSolid
                        className="btn btn-ghost btn-circle btn-xs"
                        onClick={() => removeFromCart(item._id)}
                      />
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th>SubTotal</th>
              <th>Delivery Fee</th>
              <th>Total</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                {currency} {getTotalCartAmount()}
              </td>
              <td>
                {currency} {deliveryFee}
              </td>
              <td>
                {currency} {getTotalCartAmount() + deliveryFee}
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div className="join">
                  <input
                    type="text"
                    className="input join-item"
                    placeholder="Promo Code"
                  />
                  <button className="btn join-item">Add</button>
                </div>
              </td>
              <td>
                <button className="btn btn-primary" onClick={()=>navigate("/order")}>Checkout</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
export default Cart;
