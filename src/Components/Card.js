import React from 'react';

const Card = ({data}) => {
    console.log(data);
 const {image , name , price ,address ,  area ,  bedRooms,   bathrooms } = data

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt={name} /></figure>
        <div className="card-body">
          <p className='text-[#5f5fc9] text-3xl'>{price}$/month</p>
          <h2 className="card-title text-2xl text-[#5f5fc9]">{name}</h2>
          <p>{address}</p>
          <ul className='flex justify-evenly mr-12'>
          <li className='flex text-sm'><img src="https://cdn-icons-png.flaticon.com/512/3837/3837739.png" className='w-3' alt="" /> {bedRooms}</li>
          <li className='flex text-sm'><img src="https://cdn-icons-png.flaticon.com/512/3130/3130313.png" alt="" className='w-3' /> {bathrooms}</li>
          <li className='flex text-sm'><img src="https://cdn-icons-png.flaticon.com/512/2782/2782996.png" alt="" className='w-3' />{area}</li>
          </ul>
        
        </div>
      </div>
    );
};

export default Card;