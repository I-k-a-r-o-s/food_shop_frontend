import { useState } from "react";

const SpecialOffer = () => {
    const [showAll,setShowAll]=useState(false)
  return (
    <div className="hero min-h-[calc(100vh-4rem)] bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Today's Offers!</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        </div>
      </div>
    </div>
  );
};
export default SpecialOffer;
