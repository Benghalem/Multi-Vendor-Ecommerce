import React, { useState } from "react";
import Layout from "@/components/Layout";
import {
  TextField,
  Box,
  Button,
  Grid,
  Typography,
  Container,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { UploadFile } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha"; // npm install react-google-recaptcha
import { useRouter } from "next/router"; // To handle "Back" button routing

interface FormValues {
  firstName: string;
  lastName: string;
  storeName: string;
  storeAddress: string;
  vendorImage: File | null;
  storeImage: File | null;
  storeBanner: File | null;
  storeSecondaryBanner: File | null;
  agreeTerms: boolean;
  captchaToken: string | null;
}

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  storeName: Yup.string().required("Store Name is required"),
  storeAddress: Yup.string().required("Store Address is required"),
  agreeTerms: Yup.bool().oneOf(
    [true],
    "You must agree to terms and conditions"
  ),
  captchaToken: Yup.string().required("Please complete the reCAPTCHA"),
});

const BecomeAVendorRegister: React.FC = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const router = useRouter(); // For handling back navigation

  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      storeName: "",
      storeAddress: "",
      vendorImage: null,
      storeImage: null,
      storeBanner: null,
      storeSecondaryBanner: null,
      agreeTerms: false,
      captchaToken: null,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // Add your submission logic here
    },
  });

  /* File upload handler */
  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    if (event.currentTarget.files) {
      formik.setFieldValue(field, event.currentTarget.files[0]);
    }
  };
  /*  reCAPTCHA handler */
  const onCaptchaChange = (token: string | null) => {
    formik.setFieldValue("captchaToken", token);
    setCaptchaVerified(!!token);
  };

  return (
    <Layout>
      <Box className="mt-4 px-4 sm:px-20 mb-4">
        <Container maxWidth="xl">
          <Box className="bg-white p-8 rounded-lg shadow-md ">
            {/* Create Account Section */}
            <Typography variant="h4" className="text-2xl  mb-6 text-black">
              Create An Account
            </Typography>
            {/* Form Container Section */}
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <Box className="border p-6 rounded-lg">
                <Typography variant="h6" className="text-black mb-4">
                  Vendor Information
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="First Name *"
                      id="firstName"
                      name="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.firstName &&
                        Boolean(formik.errors.firstName)
                      }
                      helperText={
                        formik.touched.firstName && formik.errors.firstName
                      }
                      className="mb-4"
                    />
                    <TextField
                      fullWidth
                      label="Last Name *"
                      id="lastName"
                      name="lastName"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.lastName &&
                        Boolean(formik.errors.lastName)
                      }
                      helperText={
                        formik.touched.lastName && formik.errors.lastName
                      }
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    className="flex flex-col items-center"
                  >
                    <Box className="border-dashed border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center w-40 h-40">
                      <input
                        accept="image/*"
                        style={{ display: "none" }}
                        id="vendorImage"
                        name="vendorImage"
                        type="file"
                        onChange={(e) => handleFileUpload(e, "vendorImage")}
                      />
                      <label htmlFor="vendorImage">
                        <IconButton component="span">
                          <UploadFile className="text-gray-400 text-2xl" />
                        </IconButton>
                      </label>
                      <Typography variant="body2" className="text-gray-400">
                        {formik.values.vendorImage
                          ? formik.values.vendorImage.name
                          : "Upload File"}
                      </Typography>
                    </Box>
                    <Typography
                      variant="caption"
                      className="text-sm text-gray-500 mt-2"
                    >
                      VENDOR IMAGE
                    </Typography>
                    <Typography
                      variant="caption"
                      className="text-sm text-gray-500"
                    >
                      Image Ratio 1:1
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

              {/* Shop Information Section */}
              <Box className="border p-6 rounded-lg">
                <Typography variant="h6" className="text-lg text-black mb-4">
                  Shop Information
                </Typography>
                {/*  Store Name */}
                <TextField
                  fullWidth
                  label="EX: XYZ Store "
                  id="storeName"
                  name="storeName"
                  value={formik.values.storeName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.storeName && Boolean(formik.errors.storeName)
                  }
                  helperText={
                    formik.touched.storeName && formik.errors.storeName
                  }
                  className="mb-4"
                />
                {/* Store Address */}
                <TextField
                  fullWidth
                  label="Store Address *"
                  id="storeAddress"
                  name="storeAddress"
                  value={formik.values.storeAddress}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.storeAddress &&
                    Boolean(formik.errors.storeAddress)
                  }
                  helperText={
                    formik.touched.storeAddress && formik.errors.storeAddress
                  }
                  multiline
                  rows={4}
                  className="mb-4"
                />
                {/* Store Image */}
                <Grid
                  container
                  className="flex flex-col items-center justify-center"
                >
                  <Grid
                    item
                    xs={12}
                    md={12}
                    className="flex p-4 items-center justify-center border border-gray-300 w-full  rounded-md"
                  >
                    {/* Store Image */}
                    <Box className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center w-[200px]">
                      <input
                        accept="image/*"
                        style={{ display: "none" }}
                        id="storeImage"
                        name="storeImage"
                        type="file"
                        onChange={(e) => handleFileUpload(e, "storeImage")}
                      />
                      <label htmlFor="storeImage">
                        <IconButton component="span">
                          <UploadFile className="text-gray-400 text-3xl" />
                        </IconButton>
                      </label>
                      <Typography variant="body2" className="text-gray-600">
                        {formik.values.storeImage
                          ? formik.values.storeImage.name
                          : "Upload File"}
                      </Typography>
                      <Typography
                        variant="caption"
                        className="text-gray-500 text-sm mt-2"
                      >
                        STORE IMAGE
                      </Typography>
                      <Typography
                        variant="caption"
                        className="text-gray-500 text-xs"
                      >
                        Image Ratio 1:1 | Max Size: 2 MB
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    className="flex p-4 mt-4 items-center justify-center border border-gray-300 w-full  rounded-md"
                  >
                    {/* Store Banner */}
                    <Box className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center w-[300px]">
                      <input
                        accept="image/*"
                        style={{ display: "none" }}
                        id="storeBanner"
                        name="storeBanner"
                        type="file"
                        onChange={(e) => handleFileUpload(e, "storeBanner")}
                      />
                      <label htmlFor="storeBanner">
                        <IconButton component="span">
                          <UploadFile className="text-gray-400 text-3xl" />
                        </IconButton>
                      </label>
                      <Typography variant="body2" className="text-gray-600">
                        {formik.values.storeBanner
                          ? formik.values.storeBanner.name
                          : "Upload File"}
                      </Typography>
                      <Typography
                        variant="caption"
                        className="text-gray-500 text-sm mt-2"
                      >
                        STORE BANNER
                      </Typography>
                      <Typography
                        variant="caption"
                        className="text-gray-500 text-xs"
                      >
                        Image Ratio 2:1 | Max Size: 2 MB
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    className="flex p-4 mt-4 items-center justify-center border border-gray-300 w-full   rounded-md"
                  >
                    {/* Store Secondary Banner */}
                    <Box className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center w-[300px]">
                      <input
                        accept="image/*"
                        style={{ display: "none" }}
                        id="storeSecondaryBanner"
                        name="storeSecondaryBanner"
                        type="file"
                        onChange={(e) =>
                          handleFileUpload(e, "storeSecondaryBanner")
                        }
                      />
                      <label htmlFor="storeSecondaryBanner">
                        <IconButton component="span">
                          <UploadFile className="text-gray-400 text-3xl" />
                        </IconButton>
                      </label>
                      <Typography variant="body2" className="text-gray-600">
                        {formik.values.storeSecondaryBanner
                          ? formik.values.storeSecondaryBanner.name
                          : "Upload File"}
                      </Typography>
                      <Typography
                        variant="caption"
                        className="text-gray-500 text-sm mt-2"
                      >
                        STORE SECONDARY BANNER
                      </Typography>
                      <Typography
                        variant="caption"
                        className="text-gray-500 text-xs"
                      >
                        Image Ratio 2:1 | Max Size: 2 MB
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              {/* Google reCAPTCHA */}
              <ReCAPTCHA
                sitekey="YOUR_RECAPTCHA_SITE_KEY" // Replace with your reCAPTCHA site key
                onChange={onCaptchaChange}
              />
              {formik.touched.captchaToken && formik.errors.captchaToken && (
                <Typography variant="caption" className="text-red-500 mt-2">
                  {formik.errors.captchaToken}
                </Typography>
              )}

              {/* Terms and Conditions */}
              <Box className="flex items-center">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formik.values.agreeTerms}
                      onChange={formik.handleChange}
                      name="agreeTerms"
                      color="primary"
                    />
                  }
                  label={
                    <Typography
                      variant="body2"
                      className="text-[14px] text-black font-Mulish"
                    >
                      I have read and agree to the{" "}
                      <span className="text-primary underline">
                        Terms & Conditions
                      </span>
                    </Typography>
                  }
                />
                {formik.touched.agreeTerms && formik.errors.agreeTerms && (
                  <Typography variant="caption" className="text-red-500">
                    {formik.errors.agreeTerms}
                  </Typography>
                )}
              </Box>

              {/* Buttons */}
              <Box className="flex justify-end gap-4 mt-8">
                <Button
                  variant="outlined"
                  onClick={() => router.back()} // Navigate back
                  className="px-8 py-2 bg-[#f58300] text-white"
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className="px-8 py-2 "
                  disabled={!captchaVerified} // Disable Submit until reCAPTCHA is verified
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default BecomeAVendorRegister;
