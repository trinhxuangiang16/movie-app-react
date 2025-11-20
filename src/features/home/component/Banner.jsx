import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import Slider from "react-slick";
import { useEffect } from "react";
import { getBanner } from "../redux/homeAsyncThunk";

export default function Banner() {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.homeSlice.banner);

  useEffect(() => {
    dispatch(getBanner());
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true, // hiệu ứng fade
    draggable: true,
    swipe: true,
    responsive: [], // vô hiệu responsive mặc định
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className="slide" key={idx}>
            <img src={img.hinhAnh} alt={`slide-${idx}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
