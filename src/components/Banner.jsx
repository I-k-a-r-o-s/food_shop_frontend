import { FaArrowDown } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      id="banner"
      className="hero relative overflow-hidden min-h-[calc(100vh-4rem)] bg-base-200"
    >
      <div className="hero-content w-full max-w-7xl flex-col gap-10 px-4 py-10 lg:flex-row lg:items-center lg:px-8">
        <div className="relative w-full max-w-xl overflow-hidden rounded-3xl shadow-2xl">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Delicious meal"
            className="aspect-4/3 w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/10 to-transparent" />
        </div>

        <div className="max-w-xl text-center lg:text-left">
          <div className="badge badge-primary badge-outline mb-4 px-4 py-3 font-medium">
            Fresh & tasty
          </div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl xl:text-6xl">
            Find your Favorite Meal!
          </h1>
          <p className="mt-5 text-base leading-7 opacity-80 sm:text-lg">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <a
              href="#menu"
              className="btn btn-primary btn-lg rounded-full px-8"
            >
              View Menu
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-sm font-medium opacity-70">
        <span>Scroll</span>
        <FaArrowDown className="h-5 w-5 animate-bounce" />
      </div>
    </div>
  );
};
export default Banner;
