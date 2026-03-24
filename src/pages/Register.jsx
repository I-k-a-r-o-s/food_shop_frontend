import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      toast.success("Registered! Please Login");
      //navigate to home
    } catch (error) {
      toast.error("Error!");
      console.log("Error", error);
    }
  };

  return (
    <div className="hero min-h-[calc(100vh-4rem)] bg-base-100">
      <div className="hero-content w-full max-w-7xl px-4 py-10">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="card border border-base-300/60 bg-base-100 p-6 shadow-2xl sm:p-8">
            <div className="text-center">
              <div className="badge badge-secondary badge-outline mb-3 px-4 py-3 font-medium">
                Join now
              </div>
              <h2 className="text-3xl font-bold">Create an account</h2>
              <p className="mt-2 text-sm opacity-70">
                Register to access full features
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="text-left">
                <label className="label px-0 pb-1 pt-0">
                  <span className="label-text font-medium">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  className="input input-bordered w-full rounded-2xl"
                  placeholder="Your full name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>

              <div className="text-left">
                <label className="label px-0 pb-1 pt-0">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  className="input input-bordered w-full rounded-2xl"
                  placeholder="you@example.com"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>

              <div className="text-left">
                <label className="label px-0 pb-1 pt-0">
                  <span className="label-text font-medium">Password</span>
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input input-bordered w-full rounded-2xl pr-12"
                    minLength="8"
                    placeholder="Create a strong password"
                    required
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
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-0 flex items-center rounded-r-2xl px-3 text-base-content/60 hover:text-base-content"
                  >
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </button>
                </div>
                <p className="mt-2 text-xs opacity-60">
                  Use at least 8 characters — mix letters and numbers for a
                  stronger password.
                </p>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full rounded-2xl"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
