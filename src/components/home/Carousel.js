import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageProp = ["https://bears.vn/wp-content/uploads/2019/08/4-2.jpg", "https://png.pngtree.com/png-clipart/20230326/ourlarge/pngtree-isolated-burger-on-transparent-background-png-image_6669724.png", "https://cdn.tgdd.vn/Files/2020/07/22/1272788/bo-tui-cach-lam-sua-lac-milkshake-thom-ngon-beo-ngay-nhu-trong-phim-my-202201131232467084.jpg"];

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
