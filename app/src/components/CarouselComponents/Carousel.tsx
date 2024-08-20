import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../css/sample/Carousel.css'

import { CarouselTable } from './CarouselTable';

export const Carousel = () => {

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    initialSlide: 1,
    speed: 500,
    centerMode: true,
    centerPadding: '26%', // 要調整
    slidesToShow: 2,
  };

  return(
    <>
      {/* <h2>カルーセル</h2> */}
      <div className='carousel'>
        <Slider {...settings}>
          <div>
            <CarouselTable headName='AAA' rows={10} />
          </div>
          <div>
            <CarouselTable headName='BBB' rows={10} />
          </div>
          <div>
            <CarouselTable headName='CCC' rows={10} />
          </div>
        </Slider>
      </div>
    </>
  );
}