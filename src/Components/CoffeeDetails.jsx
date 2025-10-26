import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const coffeeDetails = useLoaderData();
  const { name, price, chef, photo, category, _id, supplier, taste, details } = coffeeDetails;

  return (
    <div className="">
    <div className="max-w-4xl mt-20 py-5  shadow-lg rounded-lg flex flex-col md:flex-row items-center justify-center mx-auto">
      {/* Coffee Image */}
      <div className="w-full md:w-1/4 ">
        <img
          src={photo}
          alt={name}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Coffee Info */}
      <div className="w-1/3 space-y-4 ">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p><span className="font-semibold">Chef:</span> {chef}</p>
        <p><span className="font-semibold">Supplier:</span> {supplier}</p>
        <p><span className="font-semibold">Taste:</span> {taste}</p>
        <p><span className="font-semibold">Category:</span> {category}</p>
        <p><span className="font-semibold">Details:</span> {details}</p>
        <p><span className="font-semibold">Price:</span> ${price}</p>
      </div>
      
    </div>
    <div className="my-8 max-w-4xl mx-auto">
     <button className="btn bg-orange-900 text-white w-full  text-lg"><Link to='/'>Back To Home</Link></button>
    </div>
   
    </div>
  );
};

export default CoffeeDetails;