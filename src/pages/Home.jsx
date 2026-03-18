import { useState } from "react";
import Banner from "../components/Banner";
import ExploreMenu from "../components/ExploreMenu";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Banner />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  );
};
export default Home;
