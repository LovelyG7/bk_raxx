import React from 'react';
import Itemcard from "./Itemcard";
import data from './data';

const Home = () => {
  console.warn(data.productData);

  return (
    <div>
     <h1 className="text-center mt-3">All Items</h1>
      <section className='py-4 container'></section>
        <div className='row justify-coontent-center'>
          {data.productData.map((item, index)=>{
            return(
              <Itemcard img={item.img} title={item.title} desc={item.desc} price={item.price} key={index} />
            )
          })}
          <Itemcard img="" title="title" desc="desc" />

        </div>
    </div>
  );
};

export default Home
