import React, { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter
import Layout from "@/components/Layout";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Image from "next/image";

// Validation schema using Yup
const VendorRegistrationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm Password is required"),
});

const BecomeAVendor: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const router = useRouter(); // Get router instance

  return (
    <Layout>
      <Box className="mt-4 px-0 sm:px-20 mb-4">
        <Container maxWidth="xl">
          {/* Top Section  */}
          <Box className="bg-store-background rounded-md">
            <Grid
              container
              className="bg-blue-50 opacity-95 rounded-lg shadow-lg flex w-full p-6"
            >
              {/* Left side section with illustration */}
              <Grid
                item
                xs={12}
                md={4}
                className="flex pr-4 rounded-l-lg flex-col "
              >
                <Typography
                  variant="h4"
                  className="text-[20px] text-black mb-2 "
                >
                  Vendor Registration
                </Typography>
                <Typography className="text-gray-600 mb-4 text-[12px]">
                  Create your own store. Already have a store?{" "}
                  <a href="#" className="text-blue-500">
                    Login
                  </a>
                </Typography>
                {/*  Illustration image    */}
                <Image
                  src="/assets/icons/seller-registration.png"
                  width={400}
                  height={300}
                  alt="Illustration of a person using a mobile app to sell products"
                  className="w-full mt-6"
                />
              </Grid>

              {/* Form Section */}
              <Grid item xs={12} md={8} className="bg-white rounded-md p-8">
                <Typography
                  variant="h5"
                  className="text-2xl text-black font-medium mb-6"
                >
                  Create an Account
                </Typography>

                <Formik
                  initialValues={{
                    email: "",
                    phone: "",
                    password: "",
                    confirmPassword: "",
                  }}
                  validationSchema={VendorRegistrationSchema}
                  onSubmit={(values) => {
                    console.log(values);
                    // Navigate to BecomeAVendorRegister page
                    router.push("/become-a-vendor-2");
                  }}
                >
                  {({ errors, touched, setFieldValue, values }) => (
                    <Form>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          {/* Email Field */}
                          <label className="block text-gray-700 mb-2">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <Field
                            name="email"
                            as={TextField}
                            label="Email"
                            fullWidth
                            required
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                            variant="outlined"
                            className="mb-4"
                          />

                          {/* Password Field */}
                          <Box className="mb-4">
                            <label className="block text-gray-700 mb-2">
                              Password <span className="text-red-500">*</span>
                            </label>
                            <Field
                              name="password"
                              as={TextField}
                              label="Password"
                              fullWidth
                              required
                              type={showPassword ? "text" : "password"}
                              error={
                                touched.password && Boolean(errors.password)
                              }
                              helperText={touched.password && errors.password}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      onClick={() =>
                                        setShowPassword(!showPassword)
                                      }
                                    >
                                      {showPassword ? (
                                        <VisibilityOff />
                                      ) : (
                                        <Visibility />
                                      )}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                              variant="outlined"
                            />
                          </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                          {/* Phone Field */}
                          <Box className="mb-4 text-black">
                            <label className="block text-gray-700 mb-2">
                              Phone <span className="text-red-500">*</span>
                            </label>
                            <PhoneInput
                              country={"us"}
                              value={values.phone}
                              onChange={(phone) =>
                                setFieldValue("phone", phone)
                              }
                              inputStyle={{
                                height: "56px",
                                width: "100%",
                                borderRadius: "8px",
                                border: "1px solid #ced4da",
                                fontSize: "16px",
                              }}
                              containerStyle={{ width: "100%" }}
                              inputClass="rounded-md border-gray-300 w-full"
                            />
                            {touched.phone && errors.phone && (
                              <div className="text-red-500 text-sm mt-1">
                                {errors.phone}
                              </div>
                            )}
                          </Box>

                          {/* Confirm Password Field */}
                          <Box className="mb-6">
                            <label className="block text-gray-700 mb-2">
                              Confirm Password{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <Field
                              name="confirmPassword"
                              as={TextField}
                              label="Confirm Password"
                              fullWidth
                              required
                              type={showConfirmPassword ? "text" : "password"}
                              error={
                                touched.confirmPassword &&
                                Boolean(errors.confirmPassword)
                              }
                              helperText={
                                touched.confirmPassword &&
                                errors.confirmPassword
                              }
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      onClick={() =>
                                        setShowConfirmPassword(
                                          !showConfirmPassword
                                        )
                                      }
                                    >
                                      {showConfirmPassword ? (
                                        <VisibilityOff />
                                      ) : (
                                        <Visibility />
                                      )}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                              variant="outlined"
                            />
                          </Box>
                        </Grid>
                      </Grid>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="bg-primary hover:bg-blue-700 text-white py-2 rounded-lg "
                      >
                        Proceed To Next
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Grid>
            </Grid>
          </Box>
          {/* Why Sell With Us Section */}
          <Box className="m-10">
            <Box textAlign="center" className="mb-8">
              <Typography
                variant="h4"
                className="text-[24px] text-gray-800 mb-4"
              >
                Why Sell With Us
              </Typography>
              <Typography
                variant="body1"
                className="text-gray-600 text-[14px] mb-8"
              >
                Boost your sales! Join us for a seamless, profitable experience
                with vast buyer reach and top-notch support. Sell smarter today!
              </Typography>
              <Box className="flex justify-center mb-12">
                <Image
                  src="/assets/icons/sell-with-us.png"
                  width={600}
                  height={400}
                  alt="Illustration of business people shaking hands with various icons around them"
                  className="w-[395px] h-[350px] sm:w-[600px] sm:h-[400px]"
                />
              </Box>
            </Box>
            {/* Features Section */}
            <Box className="overflow-x-scroll whitespace-nowrap" p={2}>
              <Grid container spacing={4} className="flex-nowrap" wrap="nowrap">
                {/* Easy Onboarding */}
                <Grid item xs={12} md={3} className="flex-shrink-0">
                  <Box textAlign="center">
                    <Typography
                      variant="h6"
                      className="text-gray-800 font-Mulish text-[18px] mb-2"
                    >
                      Easy Onboarding
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-gray-600 text-wrap "
                    >
                      Start selling quickly with our user-friendly onboarding
                      process designed to get you up and running fast.
                    </Typography>
                  </Box>
                </Grid>

                {/* 24/7 Support */}
                <Grid item xs={12} md={3} className="flex-shrink-0">
                  <Box textAlign="center">
                    <Typography
                      variant="h6"
                      className="text-gray-800 text-[18px] mb-2"
                    >
                      24/7 Support
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-gray-600 text-wrap"
                    >
                      Our support team is here for you 24/7, ensuring you
                      receive assistance whenever you need it.
                    </Typography>
                  </Box>
                </Grid>

                {/* Secure Payments */}
                <Grid item xs={12} md={3} className="flex-shrink-0">
                  <Box textAlign="center">
                    <Typography
                      variant="h6"
                      className="text-gray-800 text-[18px] mb-2"
                    >
                      Secure Payments
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-gray-600 text-wrap"
                    >
                      Enjoy safe and secure payment methods that protect you and
                      your customers.
                    </Typography>
                  </Box>
                </Grid>

                {/* Global Reach */}
                <Grid item xs={12} md={3} className="flex-shrink-0">
                  <Box textAlign="center">
                    <Typography
                      variant="h6"
                      className="text-gray-800 text-[18px] mb-2"
                    >
                      Global Reach
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-gray-600 text-wrap"
                    >
                      Expand your business with access to a worldwide audience
                      eager to discover your products.
                    </Typography>
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

export default BecomeAVendor;
