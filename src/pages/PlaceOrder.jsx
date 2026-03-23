import { useContext } from "react";
import { appContext } from "../context/AppContext";

const PlaceOrder = () => {
  const { getTotalCartAmount, currency, deliveryFee } = useContext(appContext);
  return (
    <form action="">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Delivery Information</legend>
            <label className="floating-label">
              <span>First Name</span>
              <input
                type="text"
                placeholder="First Name"
                className="input input-md"
              />
            </label>
            <label className="floating-label">
              <span>Last Name</span>
              <input
                type="text"
                placeholder="Last Name"
                className="input input-md"
              />
            </label>
            <label className="floating-label">
              <span>Email Address</span>
              <input
                type="email"
                placeholder="Email Address"
                className="input input-md"
              />
            </label>
            <label className="floating-label">
              <span>Street</span>
              <input
                type="text"
                placeholder="Street"
                className="input input-md"
              />
            </label>
            <label className="floating-label">
              <span>Zip Code</span>
              <input
                type="text"
                placeholder="Zip Code"
                className="input input-md"
              />
            </label>
            <label className="floating-label">
              <span>Country</span>
              <input
                type="text"
                placeholder="Country"
                className="input input-md"
              />
            </label>
            <label className="floating-label">
              <span>Phone</span>
              <input
                type="text"
                placeholder="Phone"
                className="input input-md"
              />
            </label>
          </fieldset>
        </div>
        <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">
          <table className="table">
            <thead>
              <tr>
                <th>SubTotal</th>
                <th>Delivery Fee</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {currency} {getTotalCartAmount()}
                </td>
                <td>
                  {currency} {getTotalCartAmount() === 0 ? 0 : deliveryFee}
                </td>
                <td>
                  {currency}{" "}
                  {getTotalCartAmount() === 0
                    ? 0
                    : getTotalCartAmount() + deliveryFee}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <button className="btn">Proceed to Payment</button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </form>
  );
};
export default PlaceOrder;
