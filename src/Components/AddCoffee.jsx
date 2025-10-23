
const AddCoffee = () => {
    return (
        <div className="md:p-24 p-8">
            <div className="text-center space-y-4">
                <h1 className="md:text-6xl text-3xl">
                    Add New Coffee
                </h1>
                <p className="md:px-8 px-0 ">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                     as opposed to using Content here.</p>
            </div>

            <div className="bg-[#e9e6e5] p-12 my-8">
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
     <label className="label">Taste</label>
     <input type="text" className="input w-full" name="taste" placeholder="Enter Coffee Taste" />
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
           </div> 
        </div>
    );
};

export default AddCoffee;