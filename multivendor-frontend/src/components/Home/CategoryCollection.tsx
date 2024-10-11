import { useRef } from "react";
import Image from "next/image";
/* import components from MUI library */
import { Box, Card, CardMedia, Container, Grid } from "@mui/material";
/* import icons */
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ProductCategories from "@/components/hooks/ProductCategories";
import Slider from "react-slick";
// Sample categories data
import categories from "@/pages/api/categories";

const CategoryCollection = () => {
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
    <>
      <Box className="sm:hidden px-4 mb-4 ">
        <Grid item xs={12}>
          <Card className="rounded-lg shadow">
            <CardMedia
              component="img"
              image="assets/image/slider/banner-image-6.png"
              alt="Black Friday limited time offer with earbuds and 50% off"
            />
          </Card>
        </Grid>
      </Box>
      <Box className="mt-4 px-0 lg:px-20 mb-4 ">
        <Container maxWidth={"xl"}>
          <Grid container spacing={2} className="">
            {/* Category Banner */}
            <Grid item xs={12} md={3} className=" hidden sm:block">
              <Box className="h-full">
                <Image
                  src="/assets/image/category-banner.png"
                  alt="feature"
                  width={600}
                  height={700}
                  className="rounded-md h-full w-full"
                />
              </Box>
            </Grid>
            {/* Category Collection */}
            <Grid item xs={12} md={9} className="">
              <Box className="bg-white p-4 rounded-md border border-background">
                {/* Category Collection Header */}
                <Grid container spacing={3}>
                  {/* title Find What you need */}
                  <Grid item xs={8}>
                    <h2 className="text-black font-Mulish- text-[18px] sm:text-[24px] ">
                      <span className="text-primary">Find</span> What you need
                    </h2>
                  </Grid>
                  {/* Arrow Icons */}
                  <Grid item xs={4}>
                    <Box className="flex justify-end items-center gap-3">
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
                </Grid>

                {/* Category Collection Body */}
                <ProductCategories
                  categories={categories}
                  sliderRef={sliderRef}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default CategoryCollection;
