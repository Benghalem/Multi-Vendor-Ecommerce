import { useRef } from "react";
import Link from "next/link";
/* import components from MUI library */
import { Box, Container, Grid } from "@mui/material";
/* import icons */
import { MdKeyboardArrowRight } from "react-icons/md";
import ProductStore from "../hooks/ProductStore";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
/*  Create Slider ref for Carousel */
import Slider from "react-slick";
// Sample categories data
import categories from "@/pages/api/categories";

const TopStores = () => {
  /*  Create Slider ref for Carousel */
  const sliderRef = useRef<Slider>(null);

  /* Handle Previous and Next */
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <Box className="mt-4 px-0 lg:px-20 mb-4 ">
      <Container maxWidth="xl">
        <Grid container className="bg-white p-4 rounded-md mb-6">
          {/* title Top Stores */}
          <Grid item xs={6}>
            <h2 className="text-black text-[24px] font-bold">
              <span className="text-primary">Top</span> Stores
            </h2>
          </Grid>
          {/* Arrow Icons */}
          <Grid item xs={6}>
            <Box className="flex justify-end items-center gap-3 ">
              <Box className="me-3">
                <Link
                  href={"#"}
                  className=" flex items-center gap-1 text-primary text-[14px]"
                >
                  View All <MdKeyboardArrowRight size={20} />
                </Link>
              </Box>
              <Box
                className="flex justify-center items-center  w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-xl text-white bg-primary cursor-pointer"
                onClick={handlePrev}
              >
                <IoIosArrowBack />
              </Box>
              <Box
                className="flex justify-center items-center  w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-white rounded-xl bg-primary cursor-pointer"
                onClick={handleNext}
              >
                <IoIosArrowForward />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <ProductStore categories={categories} sliderRef={sliderRef} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TopStores;
