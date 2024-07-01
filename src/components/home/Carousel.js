import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageProp = ["https://bears.vn/wp-content/uploads/2019/08/4-2.jpg", "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?cs=srgb&dl=pexels-valeriya-1639557.jpg&fm=jpg", "https://watermark.lovepik.com/photo/20211125/large/lovepik-cocktail-picture_500985831.jpg"];

function CarouselComponent() {
  return (
    <Carousel
      autoPlay
      navButtonsAlwaysVisible
      infiniteLoop
      showStatus={false}
      emulateTouch
      showThumbs={false}
    >
      {imageProp.map((image, index) => {
        return (
          <div
            key={index}
            style={{ maxHeight: "36rem" }}
            className="object-center brightness-50"
          >
            <img
              src={image}
              alt="pizza"
            />
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselComponent;
