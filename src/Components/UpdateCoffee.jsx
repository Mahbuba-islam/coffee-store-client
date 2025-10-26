import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const updateCoffee = useLoaderData()
     const { name, price, chef, photo, category, _id, supplier, taste, details } = updateCoffee ;

   
    const handleupdateCoffee = (e) => {
     e.preventDefault()
     const form = e.target
      const formData = new FormData(form)
     const coffeeData = Object.fromEntries(formData.entries())
     console.log(coffeeData)

     fetch(`http://localhost:3000/coffees/${_id}`, {
      method:'PUT',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(coffeeData)
     }
       
     )
     .then(res => res.json())
    .then(data => {
  if (data.modifiedCount) {
    Swal.fire({
      title: 'Updated!',
      text: 'Coffee updated successfully.',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    });
  }
});
    }
    return (
        <div>
           <div className="md:p-24 p-8">
            <div className="text-center space-y-4">
                <h1 className="md:text-6xl text-3xl">
                    Update Coffee
                </h1>
              
            </div>

            <form onSubmit={handleupdateCoffee} className="bg-[#e9e6e5] p-12 my-8">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
            
        <fieldset className="fieldset  rounded-box ">
     <label className="label">Name</label>
     <input type="text" defaultValue={name} className="input w-full" name="name" placeholder="Enter Coffee Name" />
    </fieldset>

        <fieldset className="fieldset  rounded-box ">
     <label className="label">Chef</label>
     <input type="text" defaultValue={chef} className="input w-full" name="chef" placeholder="Enter Coffee Chef" />
    </fieldset>

        <fieldset className="fieldset  rounded-box ">
     <label className="label">Supplier</label>
     <input type="text" defaultValue={supplier} className="input w-full" name="supplier" placeholder="Enter Coffee Supplier" />
    </fieldset>

        <fieldset className="fieldset  rounded-box ">
     <label className="label">Price</label>
     <input type="text" defaultValue={price} className="input w-full" name="price" placeholder="Enter Coffee price" />
    </fieldset>

        <fieldset className="fieldset  rounded-box ">
     <label className="label">Category</label>
     <input type="text" defaultValue={category}  className="input w-full" name="category" placeholder="Enter Coffee Category" />
    </fieldset>

        <fieldset className="fieldset  rounded-box ">
     <label className="label">Details</label>
     <input type="text" defaultValue={details} className="input w-full" name="details" placeholder="Enter Coffee Details" />
    </fieldset>

       </div>
             <fieldset className="fieldset  rounded-box my-5">
     <label className="label">Photo</label>
     <input type="text" defaultValue={photo} className="input w-full" name="photo" placeholder="Enter Photo Url" />
    </fieldset>

    <button className="btn bg-[#533834] text-white w-full text-lg font-bold">Add Coffee</button>
           </form> 
        </div>
        </div>
    );
};

export default UpdateCoffee;