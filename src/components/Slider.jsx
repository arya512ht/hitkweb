import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './SliderStyle.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <div className='review-back'>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card">

              <p>bnnnnA glass-like card to demonstrate the <strong>Glassmorphism UI design</strong> trend.</p>
              <p className="card-footer">Created by Rahul C.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <p>A glass-like card to demonstrate the <strong>Glassmorphism UI design</strong> trend.</p>
              <p className="card-footer">Created by Rahul C.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img className="card-img" src="images/arya.jpg" alt="review" />
              <p className="card-main">vvxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvA glass-like card to demonstrate the <strong>Glassmorphism UI design</strong> trend.</p>
              <p className="card-footer">Arya Das</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img className="card-img" src="images/tathagata.jpg" alt="review" />
              <p className="card-main">hitk rockrz--<strong>The sky is pink</strong></p>
              <p className="card-footer">Tathagata Ghosh</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <p>A glass-like card to demonstrate the <strong>Glassmorphism UI design</strong> trend.</p>
              <p className="card-footer">Created by Rahul C.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <p>A glass-like card to demonstrate the <strong>Glassmorphism UI design</strong> trend.</p>
              <p className="card-footer">Created by Rahul C.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <p>A glass-like card to demonstrate the <strong>Glassmorphism UI design</strong> trend.</p>
              <p className="card-footer">Created by Rahul C.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <p>A glass-like card to demonstrate the <strong>Glassmorphism UI design</strong> trend.</p>
              <p className="card-footer">Created by Rahul C.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <p>A glass-like card to demonstrate the <strong>Glassmorphism UI design</strong> trend.</p>
              <p className="card-footer">Created by Rahul C.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </>
  );
}