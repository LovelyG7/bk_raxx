import React from 'react';
import Itemcard from "./Itemcard";
import data from './data';

const Home = () => {
  console.warn(data.productData);

  return (
    <div>
    <h1 className='text-center mt-3'>BK-Raxx Has Everything To Make Your Home Feel Home-y</h1>
     <h2 className="text-center mt-3">All Items</h2>
      <section className='py-4 container'></section>
        <div className='row justify-coontent-center'>
          {data.productData.map((item, index)=>{
            return(
              <Itemcard 
              img={item.img} 
              title={item.title} 
              desc={item.desc} 
              price={item.price}
              item={item} 
              key={index} />
            )
          })}
         

        </div>
    </div>
  );
};

export default Home
