import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Grid, Rating, Typography } from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Categories } from "@/types/index.js";
import { FaEye } from "react-icons/fa";

interface SliderSettings {
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed?: number;
  arrows: boolean;
  pauseOnHover: boolean;
  rows?: number;
}

interface ProductCategoriesProps {
  categories: Categories[];
  sliderRef: React.RefObject<Slider>;
}

const ProductCategories = ({
  categories,
  sliderRef,
}: ProductCategoriesProps) => {
  /* rating   */
  const [value, setValue] = useState<number | null>(5);
  // State to store the number of slides to show
  const [slidesToShow, setSlidesToShow] = useState(3); // Default to 2
  const [slidesToShowRow, setSlidesToShowRow] = useState(2); // Default to 2
  // Function to handle window resize and set slidesToShow accordingly
  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width < 650) {
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
    autoplay: false,
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
          <Box key={index} className="px-2 ">
            <Box className=" bg-secondary rounded-md">
              <Box className="flex justify-between items-start p-4">
                <div>
                  <h1 className="text-black text-[16px] ">{category.title}</h1>
                  <p className="text-gray-500 text-[12px]">
                    {category.items.reduce(
                      (sum, item) => sum + item.quntite,
                      0
                    )}{" "}
                    Products
                  </p>

                  {/* rating */}
                  <Rating
                    name="simple-controlled"
                    size="small"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </div>
              </Box>
              <Box className="">
                <Grid container spacing={3}>
                  <Grid
                    item
                    xs={12}
                    className="flex justify-center items-center gap-3 "
                  >
                    {category.items.map((product, idx) => (
                      <Box
                        key={idx}
                        className="flex flex-col gap-3 items-center justify-center px-2 "
                      >
                        {/* Image with overlay */}
                        <Box className="relative w-auto h-auto">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={107}
                            height={107}
                            className="mx-auto mb-2 rounded"
                          />
                          {/* Overlay */}
                          <Box
                            className="absolute inset-0  bg-black bg-opacity-50 opacity-0 hover:opacity-100 
                             flex flex-col justify-center items-center transition-opacity duration-300 rounded"
                          >
                            <FaEye className="text-white text-4xl" />
                          </Box>
                        </Box>

                        {/* Brand Name */}
                        <Typography className=" text-primary text-[14px] mb-4 text-black ">
                          ${product.price}
                        </Typography>
                      </Box>
                    ))}
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductCategories;
