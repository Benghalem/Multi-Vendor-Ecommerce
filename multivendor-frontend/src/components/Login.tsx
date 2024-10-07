import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
/* import components from MUI library */
import {
  Box,
  Grid,
  Typography,
  Button,
  Checkbox,
  TextField,
  Divider,
  IconButton,
  InputAdornment,
  Container,
  Modal,
} from "@mui/material";
/* import icons and images */
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
/* import component  */
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import SignUp from "./SignUp";
// Import reCAPTCHA
import ReCAPTCHA from "react-google-recaptcha";
import Close from "@mui/icons-material/Close";

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("Email / Phone is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  rememberMe: Yup.boolean(),
});

interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

export const Login = () => {
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  // state to manage modal open and close
  const [openLoginModal, setOpenLoginModal] = useState(true);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  // Function to open the sign-up modal
  const handleOpenModalSignUp = () => {
    setOpenLoginModal(false); // Close login modal
    setOpenSignUpModal(true); // Open sign-up modal
  };

  // Function to close the sign-up modal
  const handleCloseModalSignUp = () => setOpenSignUpModal(false);

  // State to handle reCAPTCHA and password visibility
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false); // State to toggle password visibility

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  // Function to toggle password visibility
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); // Toggle between showing and hiding password
  };

  // Form submission handler
  const onSubmit = (values: LoginFormValues) => {
    if (recaptchaToken) {
      // Proceed with form submission, pass the reCAPTCHA token
      console.log("Form Values:", values);
      console.log("reCAPTCHA Token:", recaptchaToken);
    } else {
      alert("Please complete the reCAPTCHA");
    }
  };

  return (
    <Box className="flex justify-center items-center   ">
      <Grid item>
        {/* Close Icon */}
        <Grid item xs={4} className=" flex justify-end">
          <IconButton className="text-black text-sm ">
            <Close />
          </IconButton>
        </Grid>
        {/* Logo */}
        <Grid item xs={4}>
          <Box className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              alt="6Valley logo"
              className="mr-2"
              width={200}
              height={100}
            />
          </Box>
        </Grid>
        {/*  Login Content  */}
        <Grid container className="flex justify-center items-center">
          {/*  Login Header  */}
          <Grid item xs={5}>
            {/* Login Header */}
            <Typography variant="h5" className="font-bold text-black mb-2">
              Login
            </Typography>
            <Typography className="text-gray-600 mb-2 text-[14px] ">
              Login to your account. Don’t have an account?{" "}
              <Link
                href="#"
                className="text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenModalSignUp();
                }}
              >
                Sign Up
              </Link>
            </Typography>

            {/* Formik Form */}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ errors, touched, handleChange, handleBlur }) => (
                <Form>
                  {/* Email/Phone Field */}
                  <Field
                    as={TextField}
                    name="email"
                    label="Email / Phone"
                    variant="outlined"
                    margin="normal"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="bg-white w-[376px] h-[45px] mb-5 rounded-md"
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />

                  {/* Password Field with Eye Icon for Visibility Toggle */}
                  <Field
                    as={TextField}
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"} // Conditionally show/hide password
                    variant="outlined"
                    margin="normal"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="bg-white w-[376px] h-[45px] mb-5  rounded-md"
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    InputProps={{
                      // Add an icon to the end of the input field for showing/hiding password
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleTogglePasswordVisibility}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  {/* Remember Me and Forgot Password */}
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                    className="my-4 text-[14px] "
                  >
                    <Grid item>
                      <Field
                        as={Checkbox}
                        name="rememberMe"
                        color="primary"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Typography
                        component="span"
                        className="ml-2 text-gray-700 text-[14px]"
                      >
                        Remember Me
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Link href="#" className="text-primary">
                        Forgot Password?
                      </Link>
                    </Grid>
                  </Grid>

                  {/* reCAPTCHA */}
                  <Box className="mb-4">
                    <ReCAPTCHA
                      sitekey="YOUR_RECAPTCHA_SITE_KEY" // Replace with your reCAPTCHA site key
                      onChange={handleRecaptchaChange}
                    />
                  </Box>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="py-2 rounded-lg w-[376px]  hover:bg-blue-700"
                  >
                    Login
                  </Button>
                </Form>
              )}
            </Formik>
          </Grid>
          {/* Divider with "Or Sign in with" */}
          <Grid
            item
            alignItems="center"
            justifyContent="center"
            className="flex flex-col justify-between items-center gap-20 "
          >
            <Grid item>
              {/* Vertical Divider */}
              <Divider
                orientation="vertical"
                sx={{ height: 80, borderColor: "gray.300" }} // Adjust height as needed
              />
            </Grid>

            <Grid item>
              {/* Rotated Text */}
              <Typography
                className="mx-4 text-gray-500"
                sx={{
                  transform: "rotate(90deg)", // Rotate the text by 90 degrees
                  whiteSpace: "nowrap", // Prevent text from wrapping
                }}
              >
                Or Sign in with
              </Typography>
            </Grid>

            <Grid item>
              {/* Vertical Divider */}
              <Divider
                orientation="vertical"
                sx={{ height: 80, borderColor: "gray.300" }} // Adjust height as needed
              />
            </Grid>
          </Grid>
          {/* Social Login Buttons */}
          <Grid item className="flex flex-col justify-between items-center ">
            <Grid item>
              {/* Rotated Text */}
              <Typography className="mx-4 text-gray-500 mb-8">
                Or continue with
              </Typography>
            </Grid>
            {/* Social Login Buttons */}
            <Grid item>
              <Button
                variant="outlined"
                startIcon={<GoogleIcon />}
                className="px-4 py-2 border  w-[376px] mb-3 rounded-lg hover:bg-gray-100"
              >
                Google
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                startIcon={<FacebookIcon />}
                className="px-4 py-2 bg-primary w-[376px] text-white rounded-lg hover:bg-blue-700"
              >
                Facebook
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Sign Up Modal */}
      <Modal
        open={openSignUpModal}
        onClose={handleCloseModalSignUp}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition // Ensure modal closes correctly after transition
      >
        <Box
          className="bg-white pb-6 mt-6 rounded-lg shadow-lg w-[1000px] mx-auto overflow-y-auto"
          /*   sx={{ display: "flex", justifyContent: "center", width: "100%" }} */
          onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
        >
          <SignUp />
        </Box>
      </Modal>
    </Box>
  );
};

export default Login;
