import { useState } from "react";
import Banner from "../components/Banner";
import ExploreMenu from "../components/ExploreMenu";
import DisplayFood from "../components/DisplayFood";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className="space-y-0 bg-base-100">
      <Banner />
      <ExploreMenu category={category} setCategory={setCategory} />
      <DisplayFood category={category} />
    </div>
  );
};
export default Home;
