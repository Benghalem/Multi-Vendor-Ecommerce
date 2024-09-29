import Image from "next/image";
/* import components from MUI library */
import { Box, Container, Grid } from "@mui/material";
/* import icons */
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ProductCategories from "@/components/hooks/ProductCategories";

const CategoryCollection = () => {
  return (
    <Box className="mt-4 px-0 sm:px-20 mb-4 ">
      <Container maxWidth={"xl"}>
        <Grid container spacing={2}>
          {/* Category Banner */}
          <Grid item xs={3}>
            <Box className="h-full">
              <Image
                src="/assets/image/category-banner.png"
                alt="feature"
                width={600}
                height={700}
              />
            </Box>
          </Grid>
          {/* Category Collection */}
          <Grid item xs={9} className="">
            <Box className="bg-white p-4 ] rounded-md border border-background">
              {/* Category Collection Header */}
              <Grid container spacing={3}>
                {/* title Find What you need */}
                <Grid item xs={6}>
                  <h2 className="text-black text-[24px] font-bold">
                    <span className="text-primary">Find</span> What you need
                  </h2>
                </Grid>
                {/* Arrow Icons */}
                <Grid item xs={6}>
                  <Box className="flex justify-end items-center gap-3 ">
                    <Box className="flex justify-center items-center w-[40px] h-[40px] rounded-md   bg-primary">
                      <FaArrowLeft />
                    </Box>
                    <Box className="flex justify-center items-center w-[40px] h-[40px] rounded-md bg-primary">
                      <FaArrowRight />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              {/* Category Collection Body  */}
              <ProductCategories />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoryCollection;

/* 

<Box className="mt-5">
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Box className="p-4 bg-secondary">
                      <Box className="flex justify-between items-start">
                        <div>
                          <h1 className="text-black font-bold text-[16px] ">
                            Mobile Accessories
                          </h1>
                          <p className="text-gray-500 text-[12px]">
                            7 products
                          </p>
                        </div>
                        <div>
                          <Link
                            href={"#"}
                            className=" flex items-center gap-1 text-black text-[14px]"
                          >
                            View all <MdKeyboardArrowRight size={20} />
                          </Link>
                        </div>
                      </Box>
                      <Box className="mt-5">
                        <Grid container spacing={3}>
                          <Grid
                            item
                            xs={12}
                            className="flex justify-center items-center gap-3 "
                          >
                            <Box className="flex flex-col gap-3 items-center justify-center">
                              <Image
                                src="/assets/image/product/Pro Plus 32 Inch TV.png"
                                alt="feature"
                                width={120}
                                height={120}
                              />
                              <p className="text-black text-[12px]">Charger</p>
                            </Box>
                            <Box className="flex flex-col gap-3 items-center justify-center">
                              <Image
                                src="/assets/image/product/Pro Plus 32 Inch TV.png"
                                alt="feature"
                                width={120}
                                height={120}
                              />
                              <p className="text-black text-[12px]">Charger</p>
                            </Box>
                            <Box className="flex flex-col gap-3 items-center justify-center">
                              <Image
                                src="/assets/image/product/Pro Plus 32 Inch TV.png"
                                alt="feature"
                                width={120}
                                height={120}
                              />
                              <p className="text-black text-[12px]">Charger</p>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box className="p-4 bg-secondary">
                      <Box className="flex justify-between items-start">
                        <div>
                          <h1 className="text-black font-bold text-[16px] ">
                            Mobile Accessories
                          </h1>
                          <p className="text-gray-500 text-[12px]">
                            7 products
                          </p>
                        </div>
                        <div>
                          <Link
                            href={"#"}
                            className=" flex items-center gap-1 text-black text-[14px]"
                          >
                            View all <MdKeyboardArrowRight size={20} />
                          </Link>
                        </div>
                      </Box>
                      <Box className="mt-5">
                        <Grid container spacing={3}>
                          <Grid
                            item
                            xs={12}
                            className="flex justify-center items-center gap-3 "
                          >
                            <Box className="flex flex-col gap-3 items-center justify-center">
                              <Image
                                src="/assets/image/product/Pro Plus 32 Inch TV.png"
                                alt="feature"
                                width={120}
                                height={120}
                              />
                              <p className="text-black text-[12px]">Charger</p>
                            </Box>
                            <Box className="flex flex-col gap-3 items-center justify-center">
                              <Image
                                src="/assets/image/product/Pro Plus 32 Inch TV.png"
                                alt="feature"
                                width={120}
                                height={120}
                              />
                              <p className="text-black text-[12px]">Charger</p>
                            </Box>
                            <Box className="flex flex-col gap-3 items-center justify-center">
                              <Image
                                src="/assets/image/product/Pro Plus 32 Inch TV.png"
                                alt="feature"
                                width={120}
                                height={120}
                              />
                              <p className="text-black text-[12px]">Charger</p>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box className="p-4 bg-secondary">
                      <Box className="flex justify-between items-start">
                        <div>
                          <h1 className="text-black font-bold text-[16px] ">
                            Mobile Accessories
                          </h1>
                          <p className="text-gray-500 text-[12px]">
                            7 products
                          </p>
                        </div>
                        <div>
                          <Link
                            href={"#"}
                            className=" flex items-center gap-1 text-black text-[14px]"
                          >
                            View all <MdKeyboardArrowRight size={20} />
                          </Link>
                        </div>
                      </Box>
                      <Box className="mt-5">
                        <Grid container spacing={3}>
                          <Grid
                            item
                            xs={12}
                            className="flex justify-center items-center gap-3 "
                          >
                            <Box className="flex flex-col gap-3 items-center justify-center">
                              <Image
                                src="/assets/image/product/Pro Plus 32 Inch TV.png"
                                alt="feature"
                                width={120}
                                height={120}
                              />
                              <p className="text-black text-[12px]">Charger</p>
                            </Box>
                            <Box className="flex flex-col gap-3 items-center justify-center">
                              <Image
                                src="/assets/image/product/Pro Plus 32 Inch TV.png"
                                alt="feature"
                                width={120}
                                height={120}
                              />
                              <p className="text-black text-[12px]">Charger</p>
                            </Box>
                            <Box className="flex flex-col gap-3 items-center justify-center">
                              <Image
                                src="/assets/image/product/Pro Plus 32 Inch TV.png"
                                alt="feature"
                                width={120}
                                height={120}
                              />
                              <p className="text-black text-[12px]">Charger</p>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box className="p-4 bg-secondary">
                      <Box className="flex justify-between items-start">
                        <div>
                          <h1 className="text-black font-bold text-[16px] ">
                            Mobile Accessories
                          </h1>
                          <p className="text-gray-500 text-[12px]">
                            7 products
                          </p>
                        </div>
                        <div>
                          <Link
                            href={"#"}
                            className=" flex items-center gap-1 text-black text-[14px]"
                          >
                            View all <MdKeyboardArrowRight size={20} />
                          </Link>
                        </div>
                      </Box>
                      <Box className="mt-5">
                        <Grid container spacing={3}>
                          <Grid
                            item
                            xs={12}
                            className="flex justify-center items-center gap-3 "
                          >
                            <Box className="flex flex-col gap-3 items-center justify-center">
                              <Image
                                src="/assets/image/product/Pro Plus 32 Inch TV.png"
                                alt="feature"
                                width={120}
                                height={120}
                              />
                              <p className="text-black text-[12px]">Charger</p>
                            </Box>
                            <Box className="flex flex-col gap-3 items-center justify-center">
                              <Image
                                src="/assets/image/product/Pro Plus 32 Inch TV.png"
                                alt="feature"
                                width={120}
                                height={120}
                              />
                              <p className="text-black text-[12px]">Charger</p>
                            </Box>
                            <Box className="flex flex-col gap-3 items-center justify-center">
                              <Image
                                src="/assets/image/product/Pro Plus 32 Inch TV.png"
                                alt="feature"
                                width={120}
                                height={120}
                              />
                              <p className="text-black text-[12px]">Charger</p>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>


*/
