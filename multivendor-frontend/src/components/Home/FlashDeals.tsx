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
import productData from "@/pages/api/productData";

// Carousel responsive settings
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1374 }, items: 5 },
  desktop: { breakpoint: { max: 1374, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 694 }, items: 4 },
  mobile: { breakpoint: { max: 694, min: 520 }, items: 3 },
  mobilesm: { breakpoint: { max: 520, min: 479 }, items: 2 },
  mobilesm2: { breakpoint: { max: 479, min: 0 }, items: 3 },
};

const FlashDeals = () => {
  return (
    <Box className="my-4 px-0 lg:px-20 ">
      <Container maxWidth={"xl"}>
        <Box className="bg-white p-4 rounded-md ">
          <Grid container spacing={3}>
            {/* Flash Deals section */}
            <Grid item xs={12} md={3}>
              <Box className="flex sm:flex-col justify-around  sm:justify-center sm:items-center gap-3 ">
                <Box className="flex sm:flex-col sm:items-center gap-3 ">
                  <Image
                    src="/assets/flash-deal.svg"
                    alt="flash deals"
                    width={150}
                    height={150}
                    className=" w-[50px] h-[50px] sm:w-[150px] sm:h-[150px] "
                  />

                  <Box className="sm:flex flex-col mt-4 gap-3">
                    <Typography
                      variant="h6"
                      className="text-primary text-[14px] sm:text-[22px]"
                    >
                      Hurry Up !
                    </Typography>
                    <span className="text-black text-[9px] sm:text-[14px]  ">
                      Offer ends in:
                    </span>
                  </Box>
                </Box>

                {/* Countdown Timer */}
                <Box className="flex  ml-8 mt-4">
                  <CountdownTimer />
                </Box>
              </Box>
            </Grid>

            {/* Product Carousel section */}
            <Grid item xs={12} md={9}>
              {/*  view all */}
              <Grid item xs={12}>
                <Box className="flex  justify-end  mb-4 ">
                  <Link href={"#"} className="text-primary">
                    View All
                  </Link>
                </Box>
              </Grid>
              <Carousel
                responsive={responsive}
                autoPlay={true} /* Enable autoplay */
                autoPlaySpeed={2000} /* Set the autoplay speed in ms */
                infinite={true} /* Loop infinitely */
                keyBoardControl={true} /* Enable keyboard control */
                className="gap-2"
              >
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
