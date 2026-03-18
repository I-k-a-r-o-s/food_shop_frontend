const FoodCard = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src="" alt="" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title text-2xl">
            Title
            <div className="badge badge-secondary">NEW</div>
          </h2>

          <span className="text-xl">$29/mo</span>
        </div>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};
export default FoodCard;
