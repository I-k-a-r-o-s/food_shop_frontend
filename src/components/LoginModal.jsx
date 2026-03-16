import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { TbUserPlus } from "react-icons/tb";
import { Link } from "react-router";

const LoginModal = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log(formData);
      toast.success("Login Successfull!");
    } catch (error) {
      console.log("Error in handleSubmit:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("login_modal").showModal()}
      >
        Login
      </button>

      <dialog id="login_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-full max-w-md bg-base-200">
          <h3 className="font-bold text-lg text-center">
            Please Login to Continue.
          </h3>

          {/* Center form and allow it to take full width */}
          <div className="mt-6 flex items-center flex-col">
            <form onSubmit={handleSubmit} className="w-full">
              <fieldset className="w-full space-y-4">
                <div className="space-y-1">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    className="input input-bordered w-full validator"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="space-y-1">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="input input-bordered w-full validator pr-10"
                      placeholder="Password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                    />
                    <button
                      type="button"
                      title={showPassword ? "Hide password" : "Show password"}
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 pr-2 hover:cursor-pointer"
                    >
                      {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                    </button>
                  </div>
                </div>

                <button className="btn btn-primary w-full mt-2" type="submit">
                  {loading ? (
                    <span className="loading loading-ring loading-lg"></span>
                  ) : (
                    <>
                      Login
                      <LuLogIn size={20} />
                    </>
                  )}
                </button>
              </fieldset>
            </form>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <Link
                to={"/register"}
                onClick={() => document.getElementById("login_modal").close()}
              >
                <span className="btn btn-ghost">
                  <TbUserPlus />
                  Create New Account
                </span>
              </Link>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default LoginModal;
