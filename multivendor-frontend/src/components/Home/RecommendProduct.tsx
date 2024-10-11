import { SyntheticEvent, useState } from "react";
/* import components from MUI library */
import { Box, Card, CardMedia, Container, Grid } from "@mui/material";
import Tab from "@mui/material/Tab";
/* import MUI/lab components  */
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
/* import components */
import ProductCard from "../hooks/ProductCard";
// Sample  product data
import productData from "@/pages/api/productData";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const RecommendProduct = () => {
  /* state for managing tabs */
  const [value, setValue] = useState("1");
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box className="sm:hidden px-4 mb-4 ">
        <Grid item xs={12}>
          <Card className="rounded-lg shadow">
            <CardMedia
              component="img"
              image="assets/image/slider/banner-image-7.png"
              alt="Black Friday limited time offer with earbuds and 50% off"
            />
          </Card>
        </Grid>
      </Box>
      <Box className="mt-4 px-0 lg:px-20 mb-4 ">
        <Container maxWidth="xl">
          <Box className="flex justify-center items-center flex-col ">
            {/* Title */}
            <Grid item xs={12}>
              <h2 className="text-black text-[24px] ">
                <span className="text-primary">Recommended</span> for you
              </h2>
            </Grid>

            {/* Tabs Component */}
            <TabContext value={value}>
              <Box /* sx={{ borderBottom: 1, borderColor: "divider" }} */>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab
                    label="Featured Products"
                    value="1"
                    className="text-[12px] "
                  />
                  <Tab label="Best Seller" value="2" className="text-[12px] " />
                  <Tab
                    label="Latest Products"
                    value="3"
                    className="text-[12px] "
                  />
                </TabList>
              </Box>

              <Box className="bg-white rounded-md mt-4">
                {/* View All */}
                <Grid item xs={6}>
                  <Box className="flex justify-end items-center gap-3 mt-4 ">
                    <Box className="me-3">
                      <Link
                        href={"#"}
                        className="flex items-center gap-1 text-primary text-[14px]"
                      >
                        View All <MdKeyboardArrowRight size={20} />
                      </Link>
                    </Box>
                  </Box>
                </Grid>

                <TabPanel value="1">
                  {/* Product Grid */}
                  <Grid container spacing={3}>
                    {productData.map((product) => (
                      <Grid
                        key={product.id}
                        item
                        xs={6} // On mobile (12 columns grid), full-width (1 item per row)
                        sm={6} // On tablets, 2 items per row
                        md={4} // On medium screens, 3 items per row
                        lg={3} // On large screens, 4 items per row
                        className="flex justify-center xl:w-[1300px]"
                      >
                        <ProductCard {...product} />
                      </Grid>
                    ))}
                  </Grid>
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
              </Box>
            </TabContext>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default RecommendProduct;
