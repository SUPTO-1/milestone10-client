import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const updateCoffee = e =>
    {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(updatedCoffee);

        //server e pathao
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  });
                  form.reset();
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0]">
      <h2 className="text-3xl text-center mb-10 font-bold">Update Coffee</h2>
      <form onSubmit={updateCoffee} className="p-36" action="">
        <div className="mx-auto mb-4 flex ">
        <div className="join ml-10 w-1/2">
        <button className="btn join-item rounded-r-full">Name</button>
          <input type="text"
            className="input input-bordered join-item w-full"
            defaultValue={name} name="name"
          />
        </div>
        <div className="join ml-10 w-1/2">
        <button className="btn join-item rounded-r-full">Available Quantity</button>
          <input type="text"
            className="input input-bordered join-item w-full"
            defaultValue={quantity} name="quantity"
          />
        </div>
        </div>
        <div className="mx-auto  mb-4 flex">
        <div className="join ml-10 w-1/2">
        <button className="btn join-item rounded-r-full">Supplier</button>
          <input type="text"
            className="input input-bordered join-item w-full"
            defaultValue={supplier} name="supplier"
          />
        </div>
        <div className="join ml-10 w-1/2">
        <button className="btn join-item rounded-r-full">Taste</button>
          <input type="text"
            className="input input-bordered join-item w-full"
            defaultValue={taste} name="taste"
          />
        </div>
        </div>
        <div className="mx-auto  mb-4 flex">
        <div className="join ml-10 w-1/2">
        <button className="btn join-item rounded-r-full">Category</button>
          <input type="text"
            className="input input-bordered join-item w-full"
            defaultValue={category} name="category"
          />
        </div>
        <div className="join ml-10 w-1/2">
        <button className="btn join-item rounded-r-full">Details</button>
          <input type="text"
            className="input input-bordered join-item w-full"
            defaultValue={details} name="details"
          />
        </div>
        </div>
        <div className=" mb-4">
        <div className="join ml-10 w-1/2">
        <button className="btn join-item rounded-r-full">Photo Url</button>
          <input type="text"
            className="input input-bordered join-item w-full"
            defaultValue={photo} name="photo"
          />
        </div>
        </div>
        <input className="btn btn-block bg-black text-white" type="submit" value="Update Coffee" />
      </form>
    </div>
    );
};

export default UpdateCoffee;