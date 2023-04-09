'use client';
import '../assets/scss/_slider.scss';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import pic1 from '../assets/images/slider/Pic1.jpg'
import pic2 from '../assets/images/slider/Pic2.jpg'
import pic3 from '../assets/images/slider/Pic3.jpg'
import pic4 from '../assets/images/slider/Pic4.jpg'
import pic5 from '../assets/images/slider/Pic5.jpg'
import pic6 from '../assets/images/slider/Pic6.jpg'
import pic7 from '../assets/images/slider/Pic7.jpg'
import pic8 from '../assets/images/slider/Pic8.jpg'

export default function SimpleSlider() {
  return (
    
    <Swiper 
      loop={true}
        centeredSlides={true}

        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
      >
      <SwiperSlide><Image src={pic6} alt='' className='slider-img' /></SwiperSlide>
      <SwiperSlide><Image src={pic7} alt='' className='slider-img' /></SwiperSlide>
      <SwiperSlide><Image src={pic1} alt='' className='slider-img' /></SwiperSlide>
      <SwiperSlide><Image src={pic2} alt='' className='slider-img' /></SwiperSlide>
      <SwiperSlide><Image src={pic3} alt='' className='slider-img' /></SwiperSlide>
      <SwiperSlide><Image src={pic4} alt='' className='slider-img' /></SwiperSlide>
      <SwiperSlide><Image src={pic5} alt='' className='slider-img' /></SwiperSlide>
      <SwiperSlide><Image src={pic8} alt='' className='slider-img' /></SwiperSlide>
    </Swiper>
  );
}
