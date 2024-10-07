import { SyntheticEvent, useState } from "react";
/* import components from MUI library */
import { Box, Container, Grid } from "@mui/material";
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

/* interface RecommendProductProps {
  products: Product;
}
 */
const RecommendProduct = () => {
  /* state for managing tabs */
  const [value, setValue] = useState("1");
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box className="mt-4 px-0 sm:px-20 mb-4 ">
      <Container maxWidth="xl">
        <Box className="flex justify-center items-center flex-col ">
          {/* title Top Stores */}
          <Grid item xs={12}>
            <h2 className="text-black text-[24px] font-bold">
              <span className="text-primary">Recommended</span> for you
            </h2>
          </Grid>

          {/* Tabs Component */}
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Featured Products" value="1" />
                <Tab label="Best Seller" value="2" />
                <Tab label="Latest Products" value="3" />
              </TabList>
            </Box>
            <Box className="bg-white  rounded-md mt-4">
              {/* View All  */}
              <Grid item xs={6}>
                <Box className="flex justify-end items-center gap-3 mt-4 ">
                  <Box className="me-3">
                    <Link
                      href={"#"}
                      className=" flex items-center gap-1 text-primary text-[14px]"
                    >
                      View All <MdKeyboardArrowRight size={20} />
                    </Link>
                  </Box>
                </Box>
              </Grid>
              <TabPanel value="1">
                {/* Product Card component */}
                <Grid
                  container
                  spacing={3}
                  className="flex items-center justify-center "
                >
                  <Grid
                    item
                    xs={4}
                    className="flex items-center justify-center "
                  >
                    {productData.map((product) => {
                      return (
                        <div key={product.id} className="mx-3">
                          <ProductCard key={product.id} {...product} />
                        </div>
                      );
                    })}
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
              <TabPanel value="3">Item Three</TabPanel>
            </Box>
          </TabContext>
        </Box>
      </Container>
    </Box>
  );
};

export default RecommendProduct;
