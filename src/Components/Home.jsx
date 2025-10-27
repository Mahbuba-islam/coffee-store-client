import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

const Home = () => {
    const initialCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(initialCoffees)
   
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto my-18 ">
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} 
                     coffees={coffees}   setCoffees={setCoffees} ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;