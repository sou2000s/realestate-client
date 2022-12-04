import React from 'react';

const Card = ({data}) => {
    console.log(data);
 const {image , name , price ,address , description     } = data

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt={name} /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{price}$/month</p>
          <p>{address}</p>
          <ul className='flex justify-evenly'>
          {description.map(x => {
            return <li>{x}</li>
          })}
          </ul>
        
        </div>
      </div>
    );
};

export default Card;