import Layout from "@/components/Layout";
import { Box, Container, Grid, Rating } from "@mui/material";
import Image from "next/image";
import React from "react";

const ShopView: React.FC = () => {
  return (
    <Layout>
      <Box className="mt-4 px-0 sm:px-20 mb-4 ">
        <Container maxWidth="xl">
          <Box className="relative w-full h-[300px] mb-20">
            <Image
              src="/assets/image/stores-banner.jpg"
              alt="store"
              width={10000}
              height={300}
              className="absolute top-0 left-0 w-full h-[200px] rounded-t-md "
            />
            <Box className="p-4 text-black absolute top-40 bg-background w-full ">
              <Grid
                container
                spacing={3}
                className="flex items-center justify-center"
              >
                <Grid item xs={3}>
                  <Box className="  p-4 flex  gap-3 items-center justify-center">
                    <div>
                      <Image
                        src="/assets/image/storeicone/01 (1).png"
                        alt="store"
                        width={120}
                        height={120}
                      />
                    </div>
                    <div className="flex flex-col gap-3 items-start">
                      <h5> Tech Shop</h5>

                      <p>
                        {" "}
                        <Rating readOnly value={5} size="small" /> (5)
                      </p>
                      <div className="flex  items-center gap-3">
                        <p>1 Review</p>
                        <p>.</p>
                        <p>4.5</p>
                      </div>
                    </div>
                  </Box>
                </Grid>

                <Grid item xs={3}>
                  <Box className="bg-white p-8 flex flex-col items-center justify-center">
                    <h5 className="text-black text-[20px] font-bold text-primary">
                      100
                    </h5>
                    <p>Product Review</p>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="bg-white p-8 flex flex-col items-center justify-center">
                    <h5 className="text-black text-[20px] font-bold text-primary">
                      6
                    </h5>
                    <p>Products</p>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className=" bg-primary p-6 flex  gap-3 items-center justify-center">
                    <h5 className="text-white "> Chat With Vendor</h5>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default ShopView;
