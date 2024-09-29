import Image from "next/image";
import Link from "next/link";
/*  import MUI components */
import { Box, Container, Grid, Typography } from "@mui/material";
/* Carousel import */
import Carousel from "react-multi-carousel";
/* import components */
import CountdownTimer from "../hooks/CountDownTimer";
import ProductCard from "../hooks/ProductCard";
// Sample  product data
import productData from "@/lib/productData";

// Carousel responsive settings
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
};

const FlashDeals = () => {
  return (
    <Box className="my-4 px-0 sm:px-20 ">
      <Container maxWidth={"xl"}>
        <Box className="bg-white p-5 rounded-md ">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box className="flex  justify-end   ">
                <Link href={"#"} className="text-primary">
                  View All
                </Link>
              </Box>
            </Grid>
            {/* Flash Deals section */}
            <Grid item xs={12} md={3}>
              <Box className="flex flex-col  justify-center items-center gap-3 ">
                <Image
                  src="/assets/flash-deal.svg"
                  alt="flash deals"
                  width={150}
                  height={150}
                />

                <Grid className="flex mt-4 gap-3">
                  <Typography variant="h2" className="text-primary text-[24px]">
                    Hurry Up !
                  </Typography>
                  <span className="text-black">Offer ends in:</span>
                </Grid>
                {/* Countdown Timer */}
                <Box className="flex gap-8 mt-4">
                  <CountdownTimer />
                </Box>
              </Box>
            </Grid>

            {/* Product Carousel section */}
            <Grid item xs={12} md={9}>
              <Carousel responsive={responsive} className="gap-3">
                {productData.map((product) => {
                  return (
                    <div key={product.id} className="mx-3">
                      <ProductCard key={product.id} {...product} />
                    </div>
                  );
                })}
              </Carousel>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default FlashDeals;
