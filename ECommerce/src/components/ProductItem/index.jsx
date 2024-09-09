import React from 'react';
import { AiOutlineFullscreen } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";

import { Button, Rating } from '@mui/material';

const ProductItem = () => {
 return (
  
   <div className='item productItem'>
    <div className='imgWrapper'>
     <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" alt="" className='w-100' />
     <span className='badge badge-primary'>28%</span>

     <div className='actions'>
      <Button><AiOutlineFullscreen /></Button>
      <Button><FaRegHeart /></Button>
     </div>
    </div>
    <div className='info'>
     <h4>All Natural Italian-Style Chicken Meatballs</h4>
     <span className='text-success d-block'>In Stock</span>
     <Rating className='mt-2 mb-2' name="read-only" value={2.5} readOnly size='small' precision={0.5} />
     <div className='d-flex'>
      <span className='oldPrice'>$20.00</span>
      <span className='netPrice text-danger ml-2'>$14.00</span>
     </div>
    </div>
   </div>

 )
}

export default ProductItem;
