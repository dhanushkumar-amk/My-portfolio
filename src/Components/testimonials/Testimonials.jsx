import './testimonials.css';

import { Data } from './Data';

// Import Swiper React components
 import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
    <section className='testimonials section container'>
      <h2 className='section__title'>Testimonial</h2>
      <span className='section__subtitle'>My clients say</span>

      <Swiper
        className='testimonials__container'
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}>
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide
              className='testimonials__card'
              key={id}>
              <img
                src={image}
                className='testimonials__img'
              />

              <h3 className='testimonials__name'>{title}</h3>
              <p className='testimonials__description'>{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
