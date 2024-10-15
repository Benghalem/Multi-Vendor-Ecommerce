import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Categories } from "@/types/index.js";

interface SliderSettings {
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed?: number;
  arrows: boolean;
  pauseOnHover: boolean;
  rows: number;
}

interface ProductCategoriesProps {
  categories: Categories[];
  sliderRef: React.RefObject<Slider>;
}

const ProductCategories = ({
  categories,
  sliderRef,
}: ProductCategoriesProps) => {
  // State to store the number of slides to show
  const [slidesToShow, setSlidesToShow] = useState(2); // Default to 2
  const [slidesToShowRow, setSlidesToShowRow] = useState(2); // Default to 2
  // Function to handle window resize and set slidesToShow accordingly
  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width < 464) {
      setSlidesToShow(1); // Show 1 slide on mobile
      setSlidesToShowRow(1); // Show 1 slide on mobile
    } else if (width < 1024) {
      setSlidesToShow(2); // Show 2 slides on tablet
      setSlidesToShowRow(2); // Show 2 slides on tablet
    } else {
      setSlidesToShow(3); // Show 3 slides on desktop
      setSlidesToShowRow(2); // Show 3 slides on desktop
    }
  };

  // Effect to set up event listener for window resize
  useEffect(() => {
    updateSlidesToShow(); // Initial call
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const sliderSettings: SliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable default arrows
    pauseOnHover: true,
    rows: slidesToShowRow, // Two rows in the slider
  };

  return (
    <Box className="my-5 mx-1 h-full">
      {/* Carousel Slider */}
      <Slider ref={sliderRef} {...sliderSettings}>
        {categories.map((category, index) => (
          <div key={index} className="px-2 mb-3">
            <Box className="p-4 bg-secondary rounded-md">
              <Box className="flex justify-between items-start">
                <div>
                  <h1 className="text-black font-bold text-[14px] truncate ...">
                    {category.title}
                  </h1>
                  <p className="text-gray-500 text-[12px]">
                    {category.productsCount} Products
                  </p>
                </div>
                <div>
                  <Link
                    href={category.link}
                    className="flex items-center gap-1 text-black text-[14px]"
                  >
                    View all <MdKeyboardArrowRight size={20} />
                  </Link>
                </div>
              </Box>
              <Box className="mt-5">
                <Grid container spacing={3}>
                  <Grid
                    item
                    xs={12}
                    className="flex justify-center items-center gap-3"
                  >
                    {category.items.map((item, idx) => (
                      <Box
                        key={idx}
                        className="flex flex-col gap-3 items-center justify-center"
                      >
                        <Box className="relative w-full h-full">
                          <Image
                            src={item.image}
                            alt="feature"
                            width={96}
                            height={80}
                          />
                          {/* Overlay */}
                          <Box
                            className="absolute inset-0 bg-primary bg-opacity-50 opacity-0 hover:opacity-70 
                            flex flex-col justify-center items-center transition-opacity duration-300 rounded"
                          >
                            <h6 className="text-white text-[12px]">
                              {item.quntite} Products
                            </h6>
                          </Box>
                        </Box>
                        <p className="text-black text-[12px]">{item.name}</p>
                      </Box>
                    ))}
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductCategories;
