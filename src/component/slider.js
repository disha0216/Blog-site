import React  from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  };
  return (
    <div class=" m-1  mb-5 ">
    <div class='text-3xl p-6'>
      <p>Recent Blogs</p> 
    </div>
    <Slider {...settings}>
       {/* SECTION */}
       <div class="max-w-xs ml-2 overflow-hidden ">
        <img class="w-48 h-56 object-cover  lg:w-full " src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80s" alt="avatar"/>
        <div class="text-center">
            <a href="#" class="block text-base font-serif pt-4 text-gray-800 font-bold">How To Get A Perfect Makeup</a>
         <button class="px-2 py-3 mt-3 my-2 text-center  bg-pink-200 text-xs text-gray-900 font-bold uppercase hover:text-yellow-600 focus:bg-gray-400">READ MORE</button>
        </div>
    </div>
       {/* SECTION */}
       <div class="max-w-xs ml-1 mr-1 overflow-hidden">
        <img class="w-48 h-56 object-cover lg:w-full " src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80s" alt="avatar"/>
        <div class="text-center">
            <a href="#" class="block text-base font-serif pt-4 text-gray-800 font-bold">How To Get A Perfect Makeup</a>
         <button class="px-2 py-3 mt-3 my-2 text-center  bg-pink-200 text-xs text-gray-900 font-bold uppercase hover:text-yellow-600 focus:bg-gray-400">READ MORE</button>
        </div>
    </div>
       {/* SECTION */}
       <div class="max-w-xs ml-1 mr-1 overflow-hidden">
        <img class="w-48 h-56 object-cover lg:w-full " src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80s" alt="avatar"/>
        <div class="text-center">
            <a href="#" class="block text-base font-serif pt-4 text-gray-800 font-bold">How To Get A Perfect Makeup</a>
         <button class="px-2 py-3 mt-3 my-2 text-center  bg-pink-200 text-xs text-gray-900 font-bold uppercase hover:text-yellow-600 focus:bg-gray-400">READ MORE</button>
        </div>
    </div>
      
       {/* SECTION */}
    </Slider>
  </div>
);
}