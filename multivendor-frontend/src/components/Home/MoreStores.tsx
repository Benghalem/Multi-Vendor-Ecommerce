import Image from "next/image";
import Link from "next/link";
/*  import MUI components */
import { Box, Container, Grid } from "@mui/material";
/*  import icons */
import { MdKeyboardArrowRight } from "react-icons/md";
// Sample  product data
import storeIcData from "@/lib/storeIconData";

const MoreStores = () => {
  return (
    <Box className="mt-4 px-0 sm:px-20 mb-4 ">
      <Container maxWidth="xl">
        <Grid container className=" rounded-md mt-8">
          {/* title Top Stores */}
          <Grid item xs={6}>
            <h2 className="text-black text-[24px] font-bold">More Stores</h2>
          </Grid>
          {/* View All  */}
          <Grid item xs={6}>
            <Box className="flex justify-end items-center gap-3  ">
              <Box className="me-3">
                <Link
                  href={"#"}
                  className=" flex items-center gap-1 text-black hover:text-primary text-[14px] coursor-pointer"
                >
                  View All <MdKeyboardArrowRight size={20} />
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box className="flex justify-center items-center gap-16 mt-6 ">
                {storeIcData.map((store) => {
                  return (
                    <div key={store.id} className="flex flex-col items-center">
                      <Image
                        src={store.imageUrl}
                        alt={store.storeName}
                        width={110}
                        height={110}
                        className="rounded-full"
                      />
                      <h6 className="text-black text-[14px] mt-2 hover:text-primary coursor-pointer">
                        {store.storeName}
                      </h6>
                      <div>
                        <h4 className="text-gray-500 text-[12px] mt-1 coursor-pointer">
                          {store.productNumper} Products
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MoreStores;
