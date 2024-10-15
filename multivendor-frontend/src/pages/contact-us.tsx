import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  Avatar,
  Container,
  Grid,
} from "@mui/material";
import { Phone, Email, Place } from "@mui/icons-material";
import ReCAPTCHA from "react-google-recaptcha";
import Layout from "@/components/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  contactNumber: Yup.string()
    .matches(/^[0-9]+$/, "Only digits are allowed")
    .required("Contact number is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

const ContactUs: React.FC = () => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  // Formik setup for handling form state and validation
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contactNumber: "",
      countryCode: "+1",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (!captchaToken) {
        alert("Please complete the reCAPTCHA.");
        return;
      }
      // Submit form logic
      console.log(values, captchaToken);
    },
  });

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  return (
    <Layout>
      <Box className="mt-4 px-0 sm:px-20 mb-4">
        <Container maxWidth="xl">
          <Box className="bg-white p-10 rounded-lg shadow-lg w-full text-black">
            <Typography variant="h4" className="text-center font-bold mb-8">
              Get In<span className="text-blue-500">Touch</span>
            </Typography>
            <Grid container xs={12}>
              {/* Contact Info */}
              <Grid item xs={12} className="grid md:grid-cols-3 gap-8 mb-8">
                <Box className="text-center">
                  <Phone fontSize="large" className="text-blue-500" />
                  <Typography variant="body1" className="font-medium">
                    Call us
                  </Typography>
                  <Typography variant="body2">+8801xxxxxxxxx</Typography>
                </Box>
                <Box className="text-center">
                  <Email fontSize="large" className="text-blue-500" />
                  <Typography variant="body1" className="font-medium">
                    Mail us
                  </Typography>
                  <Typography variant="body2">
                    j*********@6amtech.com
                  </Typography>
                </Box>
                <Box className="text-center">
                  <Place fontSize="large" className="text-blue-500" />
                  <Typography variant="body1" className="font-medium">
                    Find us
                  </Typography>
                  <Typography variant="body2">
                    Kingston, New York 12401, USA
                  </Typography>
                </Box>
              </Grid>

              {/* Contact Form */}
              <Grid item xs={8} className="grid gap-8">
                <Box
                  component="form"
                  onSubmit={formik.handleSubmit}
                  className="space-y-4"
                >
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    variant="outlined"
                    type="email"
                  />
                  <Box className="grid grid-cols-2 gap-4">
                    <FormControl fullWidth>
                      <InputLabel>Country Code</InputLabel>
                      <Select
                        value={formik.values.countryCode}
                        name="countryCode"
                        onChange={formik.handleChange}
                        variant="outlined"
                        label="Country Code"
                      >
                        <MenuItem value="+1">+1</MenuItem>
                        <MenuItem value="+880">+880</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      fullWidth
                      label="Contact Number"
                      name="contactNumber"
                      value={formik.values.contactNumber}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.contactNumber &&
                        Boolean(formik.errors.contactNumber)
                      }
                      helperText={
                        formik.touched.contactNumber &&
                        formik.errors.contactNumber
                      }
                      variant="outlined"
                      type="tel"
                    />
                  </Box>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.subject && Boolean(formik.errors.subject)
                    }
                    helperText={formik.touched.subject && formik.errors.subject}
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.message && Boolean(formik.errors.message)
                    }
                    helperText={formik.touched.message && formik.errors.message}
                    variant="outlined"
                  />

                  {/* Google reCAPTCHA */}
                  <Box className="g-recaptcha mb-4 text-center">
                    <ReCAPTCHA
                      sitekey="YOUR_SITE_KEY" // Replace this with your real reCAPTCHA site key
                      onChange={handleCaptchaChange}
                    />
                  </Box>

                  {/* Submit Button */}
                  <Box className="text-center">
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button>
                  </Box>
                </Box>
              </Grid>

              {/* Illustration Section */}
              <Grid item xs={4}>
                <Box className="hidden md:flex justify-center items-center">
                  <Avatar
                    variant="rounded"
                    src="/assets/svg/contactUs.svg"
                    alt="Illustration"
                    sx={{ width: 300, height: 300 }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default ContactUs;
