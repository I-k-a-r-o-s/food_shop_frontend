import { useContext } from "react";
import { appContext } from "../context/AppContext";

const PlaceOrder = () => {
  const { getTotalCartAmount, currency, deliveryFee } = useContext(appContext);
  return (
    <form action="">
      <div className="bg-base-100 py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card border border-base-300/60 bg-base-100 p-6 shadow-sm sm:p-8">
            <div className="mb-6">
              <div className="badge badge-secondary badge-outline mb-3 px-4 py-3 font-medium">
                Delivery information
              </div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Place your order
              </h2>
              <p className="mt-2 text-sm opacity-70">
                Fill in the delivery details below.
              </p>
            </div>

            <fieldset className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="form-control w-full">
                  <div className="label px-0 pt-0">
                    <span className="label-text font-medium">First Name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="input input-bordered w-full rounded-2xl"
                  />
                </label>
                <label className="form-control w-full">
                  <div className="label px-0 pt-0">
                    <span className="label-text font-medium">Last Name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="input input-bordered w-full rounded-2xl"
                  />
                </label>
              </div>

              <label className="form-control w-full">
                <div className="label px-0 pt-0">
                  <span className="label-text font-medium">Email Address</span>
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered w-full rounded-2xl"
                />
              </label>

              <label className="form-control w-full">
                <div className="label px-0 pt-0">
                  <span className="label-text font-medium">Street</span>
                </div>
                <input
                  type="text"
                  placeholder="Street"
                  className="input input-bordered w-full rounded-2xl"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="form-control w-full">
                  <div className="label px-0 pt-0">
                    <span className="label-text font-medium">Zip Code</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="input input-bordered w-full rounded-2xl"
                  />
                </label>
                <label className="form-control w-full">
                  <div className="label px-0 pt-0">
                    <span className="label-text font-medium">Country</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Country"
                    className="input input-bordered w-full rounded-2xl"
                  />
                </label>
              </div>

              <label className="form-control w-full">
                <div className="label px-0 pt-0">
                  <span className="label-text font-medium">Phone</span>
                </div>
                <input
                  type="text"
                  placeholder="Phone"
                  className="input input-bordered w-full rounded-2xl"
                />
              </label>
            </fieldset>
          </div>

          <div className="card border border-base-300/60 bg-base-100 p-6 shadow-sm sm:p-8">
            <div className="mb-6">
              <div className="badge badge-primary badge-outline mb-3 px-4 py-3 font-medium">
                Order summary
              </div>
              <h2 className="text-2xl font-bold sm:text-3xl">Payment</h2>
            </div>

            <div className="space-y-4 rounded-3xl bg-base-200 p-5">
              <div className="flex items-center justify-between">
                <span className="opacity-70">SubTotal</span>
                <span className="font-semibold">
                  {currency} {getTotalCartAmount()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="opacity-70">Delivery Fee</span>
                <span className="font-semibold">
                  {currency} {getTotalCartAmount() === 0 ? 0 : deliveryFee}
                </span>
              </div>
              <div className="divider my-0"></div>
              <div className="flex items-center justify-between text-lg font-bold">
                <span>Total</span>
                <span>
                  {currency}{" "}
                  {getTotalCartAmount() === 0
                    ? 0
                    : getTotalCartAmount() + deliveryFee}
                </span>
              </div>
            </div>

            <button className="btn btn-primary mt-6 w-full rounded-2xl">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default PlaceOrder;
