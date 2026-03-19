import { useState } from "react";
import Banner from "../components/Banner";
import ExploreMenu from "../components/ExploreMenu";
import DisplayFood from "../components/DisplayFood";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Banner />
      <ExploreMenu category={category} setCategory={setCategory} />
      <DisplayFood/>
    </div>
  );
};
export default Home;
