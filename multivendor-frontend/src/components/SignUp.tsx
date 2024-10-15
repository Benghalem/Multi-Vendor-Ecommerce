import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  InputAdornment,
  IconButton,
  Grid,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { FaGoogle, FaFacebook } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
import { Close } from "@mui/icons-material";

// Yup validation schema
const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),
  referCode: Yup.string(),
  terms: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
  recaptcha: Yup.string().required("Please verify that you are not a robot"),
});

interface SignUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  referCode: string;
  terms: boolean;
  recaptcha: string;
}

const SignUp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  // Function to toggle password visibility
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const initialValues: SignUpFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    referCode: "",
    terms: false,
    recaptcha: "",
  };

  const handleSubmit = (values: SignUpFormValues) => {
    console.log("Form values", values);
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  return (
    <Box className="flex justify-center items-center ">
      <Grid container>
        {/* Close Icon */}
        <Grid item xs={12} className=" flex justify-end">
          <IconButton className="text-black text-sm ">
            <Close />
          </IconButton>
        </Grid>
        {/* Logo */}
        <Grid item xs={12}>
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
        {/* Form Header text and login link */}
        <Grid item xs={12} className=" pl-10 ">
          <Typography variant="h5" className="text-black font-semibold mb-2">
            Sign Up
          </Typography>
          <Typography className="text-sm text-gray-500 mb-4">
            Login to your account. Don’t have account?{" "}
            <a href="#" className="text-primary">
              Login
            </a>
          </Typography>
        </Grid>
        <Grid container className="px-10">
          <Grid item xs={12}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({
                errors,
                touched,
                handleChange,
                handleBlur,
                setFieldValue,
                isSubmitting,
              }) => (
                <Form>
                  {/* Scrollable form fields container */}
                  <Box
                    className="overflow-y-auto"
                    style={{ maxHeight: "250px" }}
                  >
                    {/* Name and last name fields */}
                    <Box className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                      <Field
                        as={TextField}
                        name="firstName"
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.firstName && Boolean(errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                      />
                      <Field
                        as={TextField}
                        name="lastName"
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.lastName && Boolean(errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                      />
                    </Box>
                    {/* Email & Phone fields */}
                    <Box className="grid grid-cols-1 text-gray-500 md:grid-cols-2 gap-4 mb-4">
                      <Field
                        as={TextField}
                        name="email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                      />
                      <div>
                        <label className="block text-sm text-black font-medium mb-1">
                          Phone
                        </label>
                        <PhoneInput
                          country={"dz"}
                          value={initialValues.phone}
                          onChange={(phone) => setFieldValue("phone", phone)}
                          inputClass="w-full  px-3 py-2 border rounded-r"
                          inputStyle={{ width: "100%" }}
                          containerStyle={{ width: "100%" }}
                          enableSearch
                        />
                        {touched.phone && errors.phone && (
                          <Typography color="error" variant="caption">
                            {errors.phone}
                          </Typography>
                        )}
                      </div>
                    </Box>
                    {/* Password fields */}
                    <Box className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <Field
                        as={TextField}
                        name="password"
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleTogglePasswordVisibility}
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
                      />
                      <Field
                        as={TextField}
                        name="confirmPassword"
                        label="Confirm Password"
                        type={showPassword ? "text" : "password"}
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.confirmPassword &&
                          Boolean(errors.confirmPassword)
                        }
                        helperText={
                          touched.confirmPassword && errors.confirmPassword
                        }
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleTogglePasswordVisibility}
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
                      />
                    </Box>
                    {/* Refer code field */}
                    <Box className="mb-4">
                      <Field
                        as={TextField}
                        name="referCode"
                        label="Refer Code (Optional)"
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Box>

                    {/* Terms and conditions checkbox */}
                    <Box className="mb-4 flex justify-center items-center">
                      <Field as={Checkbox} name="terms" />
                      <Typography className="text-[16px] text-black">
                        I Agree With{" "}
                        <a href="#" className="text-teal-300">
                          The Terms & Conditions
                        </a>
                      </Typography>
                    </Box>
                    {/* Recaptcha component */}
                    <Box className="mb-4">
                      <ReCAPTCHA
                        sitekey="YOUR_RECAPTCHA_SITE_KEY" // Replace this with your actual reCAPTCHA site key
                        onChange={handleRecaptchaChange}
                      />
                      {touched.recaptcha && errors.recaptcha && (
                        <Typography color="error" variant="caption">
                          {errors.recaptcha}
                        </Typography>
                      )}
                    </Box>
                  </Box>

                  {/* Fixed Sign Up Button */}
                  <Box className="flex justify-center mt-4">
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting}
                      className="py-2 px-10 bg-primary hover:bg-blue-700 text-white rounded-lg mt-4"
                    >
                      Sign Up
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Grid>
          {/* Social login section */}
          <Grid
            item
            xs={12}
            className="text-center mt-4 text-gray-500 text-[14px]"
          >
            <Typography className="text-sm mb-2">Or continue with</Typography>
            <Box className="flex justify-center space-x-4">
              <IconButton className="bg-white border p-2">
                <FaGoogle className="text-xl text-red-600" />
              </IconButton>
              <IconButton className="bg-white border p-2">
                <FaFacebook className="text-xl text-blue-600" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUp;
