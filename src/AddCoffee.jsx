import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = e =>
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
        const newCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(newCoffee);

        //server e pathao
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
                form.reset();
            }
        })
    }
  return (
    <div className="bg-[#F4F3F0]">
      <h2 className="text-3xl text-center mb-10 font-bold">Add Coffee</h2>
      <form onSubmit={handleAddCoffee} className="p-36" action="">
        <div className="mx-auto mb-4 flex ">
        <div className="join ml-10 w-1/2">
        <button className="btn join-item rounded-r-full">Name</button>
          <input type="text"
            className="input input-bordered join-item w-full"
            placeholder="Coffee Name" name="name"
          />
        </div>
        <div className="join ml-10 w-1/2">
        <button className="btn join-item rounded-r-full">Available Quantity</button>
          <input type="text"
            className="input input-bordered join-item w-full"
            placeholder="Available Quantity" name="quantity"
          />
        </div>
        </div>
        <div className="mx-auto  mb-4 flex">
        <div className="join ml-10 w-1/2">
        <button className="btn join-item rounded-r-full">Supplier</button>
          <input type="text"
            className="input input-bordered join-item w-full"
            placeholder="Supplier Name" name="supplier"
          />
        </div>
        <div className="join ml-10 w-1/2">
        <button className="btn join-item rounded-r-full">Taste</button>
          <input type="text"
            className="input input-bordered join-item w-full"
            placeholder="Taste" name="taste"
          />
        </div>
        </div>
        <div className="mx-auto  mb-4 flex">
        <div className="join ml-10 w-1/2">
        <button className="btn join-item rounded-r-full">Category</button>
          <input type="text"
            className="input input-bordered join-item w-full"
            placeholder="Category" name="category"
          />
        </div>
        <div className="join ml-10 w-1/2">
        <button className="btn join-item rounded-r-full">Details</button>
          <input type="text"
            className="input input-bordered join-item w-full"
            placeholder="Details" name="details"
          />
        </div>
        </div>
        <div className=" mb-4">
        <div className="join ml-10 w-1/2">
        <button className="btn join-item rounded-r-full">Photo Url</button>
          <input type="text"
            className="input input-bordered join-item w-full"
            placeholder="PhotoUrl" name="photo"
          />
        </div>
        </div>
        <input className="btn btn-block bg-black text-white" type="submit" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
