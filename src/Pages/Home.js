
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Card from '../Components/Card';

const Home = () => {
const [houses , setHouses] = useState([])





// const {data: allhouses , } = useQuery({
//     queryKey:['allhouses'],
//     queryFn: async()=>{
//         const res = await fetch('http://localhost:5000/allHousess')
//         const data = await res.json()
//         return data;
//     }
// })

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${year}-${month}-${day}`
console.log(currentDate);

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

        fetch('https://realestate-server-nu.vercel.app' , {
         method: "PUT",    
         headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(filter)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data.length);
             if(!data.length){
              setHouses([])
             }
            setHouses(data)
        } )

    }
    return (
        <div>
           <h1 className='text-black text-4xl ml-28'>Search Properties for rent </h1>
           <form onSubmit={handleSearch} className='flex justify-evenly mt-9'> 
              <div>
              <label htmlFor="">Location</label>
              <select  name='location' className="select select-info w-full max-w-xs">
                <option>New york</option>
                <option>Canada</option>
                <option>Los angle</option>
                <option>Italy</option>
                <option>London</option>
                <option>Uk</option>
            
                </select>
              </div>
              <div>
              <label htmlFor="">When</label>
              <input name='when' min="2022-12-05" max="2022-12-10" type="date" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
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
              <div className='mt-6'>
               <button className='btn btn-primary bg-[#5f5fc9] text-white' type='submit'>Search</button>
             
              </div>
           </form>

          <div className='flex justify-center '>
          <div className='mt-28 grid gap-6 grid-cols-3 '>
            { houses.map(house => <Card data={house} key={house._id}/>)  }
           </div>
          </div>
        
        </div>
    );
};

export default Home;