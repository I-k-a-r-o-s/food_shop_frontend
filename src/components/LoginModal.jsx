const LoginModal = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
          <div className="mt-6 flex justify-center">
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
                  />
                </div>

                <div className="space-y-1">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    className="input input-bordered w-full validator"
                    placeholder="Password"
                  />
                </div>

                <button className="btn btn-neutral w-full mt-2" type="submit">Login</button>
              </fieldset>
            </form>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default LoginModal;
