import reactImg from "../assets/react.svg";

const ExploreMenu = ({ category, setCategory }) => {
  const menu_list = [
    { menu_name: "All", menu_image: reactImg },
    { menu_name: "salad", menu_image: reactImg },
    { menu_name: "fruit", menu_image: reactImg },
    { menu_name: "sandwitch", menu_image: reactImg },
  ];
  return (
    <div className=" bg-base-200" id="menu">
      <h1 className="mb-5 text-5xl font-bold">Explore the Menu!</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>

      <div className="carousel carousel-start bg-base-300 rounded-box max-w-full space-x-4 p-4">
        {menu_list.map((menu, index) => (
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
            <div className="indicator">
              <span
                className={
                  category === menu.menu_name
                    ? "indicator-item indicator-bottom indicator-center status status-success"
                    : ""
                }
              ></span>
              <div className="card bg-base-200 w-52">
                <div className="card-body items-center text-center">
                  <div className="hover-3d">
                    {/* content */}
                    <figure>
                      <img src={menu.menu_image} alt={menu.menu_name} />
                    </figure>
                    {/* 8 empty divs needed for the 3D effect */}
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <h2 className="card-title">{menu.menu_name}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ExploreMenu;
