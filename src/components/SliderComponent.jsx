import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "../slider.css";

const NextArrowComponent = () => {
  return <div style={{ display: "none" }}></div>;
};
const PrevArrowComponent = () => {
  return <div style={{ display: "none" }}></div>;
};

const SliderComponent = ({ children }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrowComponent />,
    prevArrow: <PrevArrowComponent />,
    responsive: [
      {
        breakpoint: 1345,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 905,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="w-[95vw] pb-8">
      {children}
    </Slider>
  );
};

export default SliderComponent;
