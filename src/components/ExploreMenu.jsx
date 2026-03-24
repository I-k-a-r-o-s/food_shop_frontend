import reactImg from "../assets/react.svg";

const ExploreMenu = ({ category, setCategory }) => {
  const menu_list = [
    { menu_name: "All", menu_image: reactImg },
    { menu_name: "salad", menu_image: reactImg },
    { menu_name: "fruit", menu_image: reactImg },
    { menu_name: "sandwitch", menu_image: reactImg },
  ];

  return (
    <div id="menu" className="bg-base-100 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <div className="badge badge-secondary badge-outline mb-3 px-4 py-3 font-medium">
            Browse categories
          </div>
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Explore the Menu!
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 opacity-80">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>

        <div className="carousel carousel-center mt-8 w-full space-x-4 rounded-box bg-base-200 p-4 shadow-sm lg:p-5">
          {menu_list.map((menu, index) => {
            const isActive = category === menu.menu_name;

            return (
              <div
                id={index}
                key={index}
                className="carousel-item cursor-pointer"
                onClick={() =>
                  setCategory((prev) =>
                    prev === menu.menu_name ? "All" : menu.menu_name,
                  )
                }
              >
                <div
                  className={`card w-52 border border-base-300/60 bg-base-100 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg ${
                    isActive
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-base-200"
                      : ""
                  }`}
                >
                  <div className="card-body items-center text-center p-4">
                    <figure className="w-full rounded-2xl bg-base-200 p-4">
                      <img
                        src={menu.menu_image}
                        alt={menu.menu_name}
                        className="h-24 w-24 object-contain"
                      />
                    </figure>
                    <h2 className="card-title mt-1 text-lg capitalize">
                      {menu.menu_name}
                    </h2>
                    <p className="text-xs opacity-60">
                      {isActive ? "Selected" : "Tap to filter"}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ExploreMenu;
