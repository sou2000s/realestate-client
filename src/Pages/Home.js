
import React, { useState } from 'react';
import Card from '../Components/Card';

const Home = () => {
const [houses , setHouses] = useState([])


    const handleSearch = (e) =>{
        e.preventDefault()
        console.log(e.target);
        const location = e.target.location.value
        const when = e.target.when.value
        const price = e.target.Price.value
        const SelectPropertyType = e.target.SelectPropertyType.value
        console.log(location , when , price , SelectPropertyType)
        const filter = {
            location,
            availableDate : when,
            price,
            propertyType: SelectPropertyType
        }

        fetch('http://localhost:5000/houses' , {
         method: "PUT",    
         headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(filter)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setHouses(data)
        } )

    }
    return (
        <div>
           <h1 className='text-black text-4xl ml-28'>Search Properties for rent </h1>
           <form onSubmit={handleSearch} className='flex justify-evenly mt-9'> 
              <div>
              <label htmlFor="">Location</label>
              <input name='location' type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
              </div>
              <div>
              <label htmlFor="">When</label>
              <input name='when' type="date" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
              </div>
              <div>
              <label htmlFor="">Price</label>
              <select  name='Price' className="select select-info w-full max-w-xs">
                <option >1000 - 2500 </option>
                <option >5000 - 6500 </option>
                <option >2000 - 4500 </option>
              
                </select>
              </div>
              <div>
              <label htmlFor="">Select Prperty Type</label>
              <select  name='SelectPropertyType' className="select select-info w-full max-w-xs">
                <option >House</option>
                <option>Independent House</option>
                <option>Flat</option>
                </select>
              </div>
              <div>
               <button className='btn btn-primary bg-[#5f5fc9] text-white' type='submit'>Search</button>
             
              </div>
           </form>

          <div className='flex justify-center '>
          <div className='mt-28 grid gap-6 grid-cols-3 '>
            {houses.map(house => <Card data={house} key={house._id}/>)}
           </div>
          </div>
        </div>
    );
};

export default Home;