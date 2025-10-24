import Swal from 'sweetalert2'
const AddCoffee = () => {

    // handle add coffee

    const handleAddCoffee = (e) => {
     e.preventDefault()
     const form = e.target
     const formData = new FormData(form)
     const coffeeData = Object.fromEntries(formData.entries())
     console.log(coffeeData)

    // Object.fromEntries() → turns key-value pairs into a plain JavaScript object
   // formData.entries() → gives you all form fields as [key, value] pairs
  
  // send coffee data to the db   
   
  fetch('http://localhost:3000/coffees', {
    method : 'POST',
    headers : {
        'content-type' : 'application/json'
    },
    body : JSON.stringify(coffeeData)
  })
  .then(res => res.json())
  .then (data => {
   if(data.insertedId){
  Swal.fire({
  title: "☕ Good job!",
  text: "Your coffee has been added successfully!",
  icon: "success",
  confirmButtonText: "Awesome!",
  background: "#f0fdf4",
  color: "#065f46",
  iconColor: "#22c55e",
  customClass: {
    popup: 'rounded-xl shadow-lg',
    title: 'text-lg font-semibold',
    confirmButton: 'bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600'
  }
});
   }
  })
   
    }

    return (
        <div className="md:p-24 p-8">
            <div className="text-center space-y-4">
                <h1 className="md:text-6xl text-3xl">
                    Add New Coffe
                </h1>
                <p className="md:px-8 px-0 ">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                     as opposed to using Content here.</p>
            </div>

            <form onSubmit={handleAddCoffee} className="bg-[#e9e6e5] p-12 my-8">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
            
        <fieldset className="fieldset  rounded-box ">
     <label className="label">Name</label>
     <input type="text" className="input w-full" name="name" placeholder="Enter Coffee Name" />
    </fieldset>

        <fieldset className="fieldset  rounded-box ">
     <label className="label">Chef</label>
     <input type="text" className="input w-full" name="chef" placeholder="Enter Coffee Chef" />
    </fieldset>

        <fieldset className="fieldset  rounded-box ">
     <label className="label">Supplier</label>
     <input type="text" className="input w-full" name="supplier" placeholder="Enter Coffee Supplier" />
    </fieldset>

        <fieldset className="fieldset  rounded-box ">
     <label className="label">Price</label>
     <input type="text" className="input w-full" name="price" placeholder="Enter Coffee price" />
    </fieldset>

        <fieldset className="fieldset  rounded-box ">
     <label className="label">Category</label>
     <input type="text" className="input w-full" name="category" placeholder="Enter Coffee Category" />
    </fieldset>

        <fieldset className="fieldset  rounded-box ">
     <label className="label">Details</label>
     <input type="text" className="input w-full" name="details" placeholder="Enter Coffee Details" />
    </fieldset>

       </div>
             <fieldset className="fieldset  rounded-box my-5">
     <label className="label">Photo</label>
     <input type="text" className="input w-full" name="photo" placeholder="Enter Photo Url" />
    </fieldset>

    <button className="btn bg-[#533834] text-white w-full text-lg font-bold">Add Coffee</button>
           </form> 
        </div>
    );
};

export default AddCoffee;