/* import components from MUI library */
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
/* import icons and images */
import { Close } from "@mui/icons-material";

export default function PromoBanner() {
  return (
    <Box className="bg-[#1455ac80]">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box
              component={"div"}
              className="flex justify-between items-center py-[6px] text-white  "
            >
              <IconButton>
                <Close className="text-white text-[16px] sm:text-[20px] cursor-pointer" />
              </IconButton>
              <Typography
                className=" text-start md:text-center w-full text-[12px] sm:text-[14px] "
                variant="body2"
              >
                Get 50% discount in all product from june 2024 to December 2024
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
