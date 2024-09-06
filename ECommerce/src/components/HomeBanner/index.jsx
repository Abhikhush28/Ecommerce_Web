import React from 'react'
import Slider from 'react-slick/lib/slider';

const HomeBanner = () => {

 var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay:true
 };

 return (
  <>
   <div className="homeBannerSection">
    <Slider {...settings}>
     <div className='item'>
      <img src="https://cmsimages.shoppersstop.com/static_web_Adidas_puma_and_more_fc269fe01d/static_web_Adidas_puma_and_more_fc269fe01d.png"  className='w-100' alt="" />
     </div>
     <div className='item'>
      <img src="https://cmsimages.shoppersstop.com/th_web_eb365ad4f1/th_web_eb365ad4f1.png"  className='w-100' alt="" />
     </div>
     <div className='item'>
      <img src="https://cmsimages.shoppersstop.com/USPA_web_ace89daa8e/USPA_web_ace89daa8e.png"  className='w-100' alt="" />
     </div>
     <div className='item'>
      <img src="https://cmsimages.shoppersstop.com/J_and_J_web_913d8c62e6/J_and_J_web_913d8c62e6.png"  className='w-100' alt="" />
     </div>

    </Slider>
   </div>
  </>
 )
}

export default HomeBanner;
