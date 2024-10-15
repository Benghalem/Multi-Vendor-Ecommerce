import { Box, Grid, Typography } from "@mui/material";
import React from "react";
/*  Import types */
import { Coupon } from "@/types/index";

const CouponSection = ({ coupons }: { coupons: Coupon[] }) => {
  return (
    <Box>
      <Box className="  rounded-lg  p-4 bg-background sm:bg-[#FAFAFA] sm:m-4 xl:mr-4 ">
        <Box className="flex flex-col ">
          <Typography variant="h6" className="text-primary text-[20px]">
            Happy Club
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary "
            className="text-[14px] mb-3"
          >
            Collect coupons from stores and apply to get special discounts from
            stores.
          </Typography>

          <Grid
            container
            spacing={2}
            className="xl:flex-col flex  mt-2 px-4 gap-2  "
          >
            {coupons.map((coupon, index) => (
              <Grid
                item
                lg={12}
                key={index}
                className="flex flex-col border border-primary rounded-lg p-4  md:px-10 xl:px-4 xl:mb-2 "
              >
                <Typography variant="h6" className="text-[16px]  w-[100px] ">
                  {coupon.title} <i className={coupon.icon}></i>
                </Typography>
                <Typography variant="h6" className="text-[12px]">
                  For {coupon.shop}
                </Typography>
                <Typography variant="h6" className="text-primary text-[12px]">
                  Code: {coupon.code}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default CouponSection;
