import { AiFillDelete } from 'react-icons/ai';
import { FaEye } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const CoffeeCard = ({coffee}) => {
    const {name,price,chef,photo, _id} = coffee

   const handleDelete = (_id) => {
   console.log(_id)

//    sweet alert

Swal.fire({
  title: "Confirm Deletion",
  text: "This coffee entry will be permanently removed. Are you sure you want to proceed?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it",
  cancelButtonText: "Cancel"
})
.then((result) => {
  if (result.isConfirmed) {

//    start delete

fetch(`http://localhost:3000/coffees/${_id}`, {
    method: 'DELETE'
}

)
.then(res => res.json())
.then(data =>{
     if(data.deletedCount){
      Swal.fire({
  title: "Deleted Successfully",
  text: `"${name}" has been removed from your coffee list.`,
  icon: "success"
});

     }
})

   
  }
});
   }

    return (
        <div>
            <div className="card card-side bg-[#F5F4F1] shadow-sm p-4 mx-6 md:mx-2">
  <figure>
    <img
      src={photo}
      alt="Movie" />
  </figure>
  <div className="flex justify-around items-center mt-4  w-full ">
    <div className='space-y-2'>
    <h2 className="card-title text-xs md:text-lg">{name}</h2>
    <h2 className='text-xs md:text-lg'>{chef}</h2>
     <p className='text-xs md:text-lg'>Price: {price}</p>
    </div>
    
    <div className="flex flex-col gap-2">
        <Link to={`coffees/${_id}`}><button className="btn bg-[#ac9679] text-white">< FaEye/></button></Link>
      <Link to={`updateCoffees/${_id}`}><button className="btn bg-orange-950 text-white"><AiFillEdit/></button></Link>
      <button onClick={()=>handleDelete(_id)} className="btn bg-red-700 text-white"><AiFillDelete/></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CoffeeCard;