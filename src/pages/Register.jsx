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
      <div className="hero-content text-center">
        {/* keep layout width controlled so the hero positioning is preserved */}
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="card bg-base-200 border border-base-300 rounded-lg shadow-sm p-6">
            {/* header */}
            <div className="mb-3">
              <h2 className="text-2xl font-bold">Create an account</h2>
              <p className="text-sm opacity-70">
                Register to access full features
              </p>
            </div>

            {/* name */}
            <div className="form-control mb-3 text-left">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                className="input input-bordered w-full"
                placeholder="Your full name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>

            {/* email */}
            <div className="form-control mb-3 text-left">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                className="input input-bordered w-full"
                placeholder="you@example.com"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>

            {/* password with inline toggle */}
            <div className="form-control mb-3 text-left relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              {/* wrapper is relative so the toggle can be absolutely placed */}
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pr-10 validator"
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
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 pr-2 hover:cursor-pointer"
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </div>

              <p className="text-xs opacity-60 mt-2">
                Use at least 8 characters — mix letters and numbers for a
                stronger password.
              </p>
            </div>

            {/* primary action */}
            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
