import React from 'react'
import HomeBanner from '../../components/HomeBanner';
import banner1 from "../../assets/images/banner1.png"
import { Button } from '@mui/material';
import { MdArrowRightAlt } from "react-icons/md";
import Slider from "react-slick";

const Home = () => {
  var productSliderOptions = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <>
      <HomeBanner />
      <section className='homeProducts'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <div className='banner'>
                <img src={banner1} alt="" className='cursor w-100' />
              </div>
            </div>


            <div className='col-md-9 productRow'>

              <div className='d-flex align-items-center'>
                <div className='info w-75'>
                  <h3 className='mb-0 hd'>BEST SELLERS</h3>
                  <p className='text-light text-sml mb-0'> Do not miss the current offers until the end of March.</p>
                </div>
                <Button className='viewAllBtn ml-auto' >View all <MdArrowRightAlt /></Button>
              </div>

              <div className='product_row'>
                <Slider {...productSliderOptions}>
                  <div className='item'>
                    w
                    9
                  </div>
                </Slider>
              </div>


            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
