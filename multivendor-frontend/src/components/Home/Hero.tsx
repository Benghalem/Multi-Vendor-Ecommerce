/* import components */
import CategoryDropdown from "@/components/hooks/CategoryDropdown";
/* MUI Components */
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
} from "@mui/material";
/* Carousel */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
/* MUI Icons */

interface Coupon {
  title: string;
  shop: string;
  code: string;
  icon: string;
}

// Sample coupons data
const coupons: Coupon[] = [
  {
    title: "Free delivery",
    shop: "TECH SHOP",
    code: "pcuw655ytg",
    icon: "fas fa-truck",
  },
  {
    title: "$10.00 Off",
    shop: "ALL SHOPS",
    code: "856gmef66p",
    icon: "fas fa-dollar-sign",
  },
  {
    title: "75% Off",
    shop: "TECH SHOP",
    code: "Fhfx7XiCm",
    icon: "fas fa-percentage",
  },
];

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
    <Box className="mt-4  px-0 sm:px-20  ">
      <Container maxWidth="xl">
        <Grid
          container
          className="bg-white py-8 px-4 rounded-md border border-background"
        >
          {/* Sidebar */}
          <Grid item xs={3} className="hidden xl:block">
            <CategoryDropdown />
          </Grid>
          {/* Main Content */}
          <Grid item xs={12} md={9}>
            <Box className="flex flex-col space-y-4">
              <Grid container spacing={2} className="p-3 md:p-0">
                {/* Carousel Section */}
                <Grid item xs={12} md={12} lg={8}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Carousel responsive={responsive} showDots>
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
                    <Grid item xs={6} lg={6}>
                      <Card className="rounded-lg shadow">
                        <CardMedia
                          component="img"
                          image="assets/image/slider/banner-image-6.png"
                          alt="Black Friday limited time offer with earbuds and 50% off"
                        />
                      </Card>
                    </Grid>
                    <Grid item xs={6} lg={6}>
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
                <Grid item xs={12} lg={4} md={12}>
                  <Card className="  rounded-lg shadow p-4 bg-[#FAFAFA] ">
                    <CardContent className="flex flex-col">
                      <Typography variant="h6" className="text-primary">
                        Happy Club
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Collect coupons from stores and apply to get special
                        discounts from stores.
                      </Typography>

                      <Box className="flex lg:flex-col  mt-4 space-y-4">
                        {coupons.map((coupon, index) => (
                          <Card key={index} className="border rounded-lg p-4">
                            <Typography variant="body1" className="font-bold">
                              {coupon.title} <i className={coupon.icon}></i>
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              For {coupon.shop}
                            </Typography>
                            <Typography
                              variant="body2"
                              className="text-primary"
                            >
                              Code: {coupon.code}
                            </Typography>
                          </Card>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
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
