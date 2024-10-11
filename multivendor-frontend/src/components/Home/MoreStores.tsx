import Image from "next/image";
import Link from "next/link";
/*  import MUI components */
import { Box, Container, Grid } from "@mui/material";
/*  import icons */
import { MdKeyboardArrowRight } from "react-icons/md";
// Sample  product data
import storeIcData from "@/pages/api/storeIconData";

const MoreStores = () => {
  return (
    <>
      {/* Category Banner */}
      <Box className="sm:hidden px-4 mb-4 ">
        <Grid item xs={12} md={3}>
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
      </Box>
      {/* More Stores section */}
      <Box className="mt-4 px-0 lg:px-20 mb-4 ">
        <Container maxWidth="xl">
          <Grid container className=" rounded-md mt-8 ">
            {/* title Top Stores */}
            <Grid item xs={6}>
              <h2 className="text-black text-[24px]  ">More Stores</h2>
            </Grid>
            {/* View All  */}
            <Grid item xs={6}>
              <Box className="flex justify-end items-center mt-2 gap-3  ">
                <Box className="me-3 hover:text-primary ">
                  <Link
                    href={"#"}
                    className=" flex items-center gap-1 text-black  text-[14px] coursor-pointer"
                  >
                    View All <MdKeyboardArrowRight size={20} />
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid container spacing={4} className="flex justify-center">
              <Grid>
                <Box className="flex justify-center items-center gap-12 mt-14    ">
                  {storeIcData.map((store, index) => {
                    return (
                      <Grid
                        item
                        key={index}
                        className="flex flex-col items-center overflow-x-scroll scrollbar-hide "
                      >
                        <Image
                          src={store.imageUrl}
                          alt={store.storeName}
                          width={110}
                          height={110}
                          className="rounded-full"
                        />
                        <h6 className="text-black text-[12px] mt-2 hover:text-primary coursor-pointer truncate ...">
                          {store.storeName}
                        </h6>
                        <div>
                          <h6 className="text-gray-500 text-[11px] mt-1 coursor-pointer">
                            {store.productNumper} Products
                          </h6>
                        </div>
                      </Grid>
                    );
                  })}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default MoreStores;
