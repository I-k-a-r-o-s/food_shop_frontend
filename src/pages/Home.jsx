import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search?", searchQuery);
  };
  return (
    <div className="hero min-h-[calc(100vh-4rem)] bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <form onSubmit={handleSearch}>
            <div className="join">
              <label className="input join-item" data-theme="light">
                <IoSearchOutline size={20} />
                <input
                  type="search"
                  required
                  placeholder="Discover"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </label>
              <button type="submit" className="btn btn-primary join-item">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="mb-2">Scoll</span>
        <FaArrowDown className="h-5 w-5 animate-bounce" />
      </div>
    </div>
  );
};
export default Home;
