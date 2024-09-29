import Link from "next/link";
/* import components from MUI library */
import { Box, Container, Grid } from "@mui/material";
/* import icons */
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProductStore from "../hooks/ProductStore";

const TopStores = () => {
  /* props for handlind style and content */

  return (
    <Box className="mt-4 px-0 sm:px-20 mb-4 ">
      <Container maxWidth="xl">
        <Grid container className="bg-white p-4 rounded-md mb-6">
          {/* title Top Stores */}
          <Grid item xs={6}>
            <h2 className="text-black text-[24px] font-bold">
              <span className="text-primary">Top</span> Stores
            </h2>
          </Grid>
          {/* Arrow Icons */}
          <Grid item xs={6}>
            <Box className="flex justify-end items-center gap-3 ">
              <Box className="me-3">
                <Link
                  href={"#"}
                  className=" flex items-center gap-1 text-primary text-[14px]"
                >
                  View All <MdKeyboardArrowRight size={20} />
                </Link>
              </Box>
              <Box className="flex justify-center items-center w-[40px] h-[40px] rounded-md   bg-primary">
                <FaArrowLeft />
              </Box>
              <Box className="flex justify-center items-center w-[40px] h-[40px] rounded-md bg-primary">
                <FaArrowRight />
              </Box>
            </Box>
          </Grid>
          <Grid container spacing={3}>
            <ProductStore />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TopStores;
