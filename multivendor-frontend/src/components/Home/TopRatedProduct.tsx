import { useRef } from "react";
/* import components from MUI */
import { Box, Container, Grid } from "@mui/material";

/* Carousel import */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

/* import icons */
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Sample product data
import productData from "@/pages/api/productData";
import ProductCard from "../hooks/ProductCard";

// Carousel responsive settings
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 6 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
  tablet1: { breakpoint: { max: 1024, min: 760 }, items: 4 },
  tablet: { breakpoint: { max: 760, min: 500 }, items: 3 },
  mobile: { breakpoint: { max: 500, min: 0 }, items: 2 },
};

// Define an interface to explicitly include the next and previous methods
interface CustomCarousel extends Carousel {
  next: () => void;
  previous: () => void;
}
const TopRatedProduct = () => {
  // Create a typed ref for the carousel
  const carouselRef = useRef<CustomCarousel | null>(null); // Use a more specific type here

  // Arrow click handlers
  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <Box className="mt-4 px-0 lg:px-20 mb-4">
      <Container maxWidth="xl">
        <Grid container className="rounded-md mt-8">
          {/* Title */}
          <Grid item xs={6}>
            <h2 className="text-black text-[24px]">
              <span className="text-primary">Top</span> rated products
            </h2>
          </Grid>

          {/* Dynamic Arrow Controls */}
          <Grid item xs={6}>
            <Box className="flex justify-end items-center gap-3">
              <Box
                className="flex justify-center items-center w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-xl text-white bg-primary cursor-pointer"
                onClick={handlePrev}
              >
                <IoIosArrowBack />
              </Box>
              <Box
                className="flex justify-center items-center w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-white rounded-xl bg-primary cursor-pointer"
                onClick={handleNext}
              >
                <IoIosArrowForward />
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Product Carousel */}
        <Grid container spacing={3} className="mt-2 ">
          <Grid item xs={12} md={12}>
            <Carousel
              responsive={responsive}
              ref={carouselRef} // Reference the carousel for arrow control
              arrows={false} // Hide default arrows
              autoPlay={true} // Enable autoplay
              autoPlaySpeed={2000} // Set the autoplay speed in ms
              infinite={true} // Enable infinite scrolling
            >
              {productData.map((product) => (
                <div key={product.id} className="flex justify-center">
                  <ProductCard key={product.id} {...product} />
                </div>
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TopRatedProduct;
