/* import components from MUI */
import { Box, Container, Grid } from "@mui/material";

/* Carousel import */
import Carousel from "react-multi-carousel";
/* import icons */
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// Sample  product data
import productData from "@/lib/productData";
import ProductCard from "../hooks/ProductCard";

// Carousel responsive settings
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
};
const TopRatedProduct = () => {
  return (
    <Box className="mt-4 px-0 sm:px-20 mb-4 ">
      <Container maxWidth="xl">
        <Grid container className="  rounded-md mt-8">
          {/* title Top Stores */}
          <Grid item xs={6}>
            <h2 className="text-black text-[24px] font-bold">
              <span className="text-primary">Top</span> rated products
            </h2>
          </Grid>
          {/* Arrow Icons */}
          <Grid item xs={6}>
            <Box className="flex justify-end items-center gap-3 ">
              <Box className="flex justify-center items-center w-[40px] h-[40px] rounded-md   bg-primary">
                <FaArrowLeft />
              </Box>
              <Box className="flex justify-center items-center w-[40px] h-[40px] rounded-md bg-primary">
                <FaArrowRight />
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* Product Carousel section */}
        <Grid container spacing={3} className="mt-2">
          <Grid item xs={12} md={12}>
            <Carousel responsive={responsive}>
              {productData.map((product) => {
                return (
                  <div key={product.id} className="mx-1">
                    <ProductCard key={product.id} {...product} />
                  </div>
                );
              })}
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TopRatedProduct;
