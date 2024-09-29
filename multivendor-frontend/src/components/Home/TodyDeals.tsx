/*  import components from MUI */
import { Box, Container, Grid } from "@mui/material";
import Link from "next/link";

const TodyDeals = () => {
  return (
    <Box className="mt-4 px-0 sm:px-20 mb-4 ">
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
          className="bg-deals-img  bg-cover rounded-md  h-[300px] object-cover block"
        >
          <Grid item xs={12}>
            <Box className=" py-10 px-20">
              <p className="font-bold text-primary">
                Do Not Miss Today`s Deal!
              </p>
              <h5 className="text-[32px] text-black font-bold mb-8">
                Let Us Shopping Today
              </h5>
              <Link
                href={"#"}
                className="bg-primary py-3 px-6 text-white rounded-sm  courser-pointer"
              >
                Shop Now
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TodyDeals;
