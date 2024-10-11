/* import components */
import CategoryDropdown from "@/components/hooks/CategoryDropdown";
/* MUI Components */
import { Box, Card, CardMedia, Grid, Container } from "@mui/material";
/* Carousel */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CouponSection from "../hooks/CouponSection";
// Sample  product data
import coupons from "@/pages/api/couponData";

// Carousel responsive settings
const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

// Category dropdown component

// Main Hero component
const Hero = () => {
  return (
    <Box className="mt-4  px-0 lg:px-20  ">
      <Container maxWidth="xl">
        <Grid
          container
          className="bg-white py-8 rounded-md border border-background"
        >
          {/* Sidebar */}
          <Grid item xs={3} className="hidden xl:block">
            <CategoryDropdown />
          </Grid>
          {/* Main Content */}
          <Grid item xs={12} lg={9} className="">
            <Box className="flex flex-col space-y-4">
              <Grid container spacing={2} className="p-3 md:p-0">
                {/* Carousel Section */}
                <Grid item xs={12} md={12} lg={8}>
                  <Grid
                    container
                    spacing={2}
                    className="p-0 sm:p-5 flex items-center justify-center"
                  >
                    <Grid item xs={12} className=" ">
                      <Carousel
                        responsive={responsive}
                        showDots
                        autoPlay={true} /* Enable autoplay */
                        autoPlaySpeed={3000} /* Set the autoplay speed in ms */
                        infinite={true} /* Loop infinitely */
                        keyBoardControl={true} /* Enable keyboard control */
                      >
                        {[
                          "banner-l-image-2.png",
                          "banner-l-image-3.png",
                          "banner-l-image-4.png",
                          "banner-l-image-1.png",
                        ].map((image, index) => (
                          <Card key={index} className="rounded-lg shadow">
                            <CardMedia
                              component="img"
                              image={`assets/image/slider/${image}`}
                              alt="Cyber Monday Big Sale"
                            />
                          </Card>
                        ))}
                      </Carousel>
                    </Grid>
                    {/* Other images */}
                    <Grid item xs={6} lg={6} className="hidden sm:block">
                      <Card className="rounded-lg shadow">
                        <CardMedia
                          component="img"
                          image="assets/image/slider/banner-image-6.png"
                          alt="Black Friday limited time offer with earbuds and 50% off"
                        />
                      </Card>
                    </Grid>
                    <Grid item xs={6} lg={6} className="hidden sm:block">
                      <Card className="rounded-lg shadow">
                        <CardMedia
                          component="img"
                          image="assets/image/slider/banner-image-7.png"
                          alt="Black Friday sale on all items with a watch and 50% off"
                        />
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>

                {/* Coupon Section */}
                <Grid item xs={12} lg={4} md={12} className="hidden sm:block ">
                  <CouponSection coupons={coupons} />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
