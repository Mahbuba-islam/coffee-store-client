import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
    const coffeeData = useLoaderData()
    console.log(coffeeData)
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto my-18 ">
                {
                    coffeeData.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;