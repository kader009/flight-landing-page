import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../index.css';

import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Box } from '@mui/material';

const slides = [
  { image: '/sliderimg1.webp' },
  { image: '/sliderimg2.webp' },
  { image: '/sliderimg3.webp' },
  { image: '/sliderimg4.webp' },
  { image: '/sliderimg5.webp' },
];

const BannerCarousel = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
      }}
    >
      <Swiper
        pagination={{ clickable: true, el: '.custom-pagination' }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1000}
        effect='fade'
        modules={[Pagination, Autoplay, EffectFade]}
        style={{
          width: '80%',
          height: '100%',
          borderRadius: '8px',
          overflow: 'hidden',
          position:'relative'
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
              }}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </SwiperSlide>
        ))}

        {/* Pagination */}
        <div className="custom-pagination" />
      </Swiper>
    </Box>
  );
};

export default BannerCarousel;
