const Card = ({ image, description, title, price, badge }) => (
  <div className="sm:w-1/2 w-full h-[350px] rounded-lg overflow-hidden">
    <div
      className="img-container h-69/100 w-full bg-center bg-cover p-4"
      style={{ backgroundImage: ` url(${image})` }}
    >
      <p className="bg-[red] w-[60px] text-center rounded-md text-white">
        {badge}
      </p>
    </div>
    <div className="bg-white h-31/100 p-4 relative">
        <h3 className="font-bold">{title}</h3>
        <p>{description}</p>
        <p>{price}</p>
      <button className="add-to-cart-btn absolute hover:scale-106 transition-all duration-300 ease-in bottom-[14px] w-[150px] font-semibold rounded-md text-white h-[30px] right-[70px] bg-blue-700">Add To Cart</button>
    </div>
  </div>
);

export default Card;
