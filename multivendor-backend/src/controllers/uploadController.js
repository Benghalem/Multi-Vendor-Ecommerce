import https from "https";
import fs from "fs";
import expressAsyncHandler from "express-async-handler";

/*  ========== BUNNY CDN ========== */
const BASE_HOSTNAME = "storage.bunnycdn.com";
const HOSTNAME = BASE_HOSTNAME;
const ACCESS_KEY = "3577476e-eb03-4ac7-a0b49054b6b0-8931-439e";
const STORAGE_ZONE_NAME = "mve-eco";

/*  ========== Upload File ========== */
export const uploadFile = expressAsyncHandler(async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file attached" });
  }
  console.log(req.file);

  const file = req.file;
  const filePath = file.path;
  const fileName = encodeURIComponent(file.originalname);

  const readStream = fs.createReadStream(filePath);

  const options = {
    method: "PUT",
    hostname: HOSTNAME,
    path: `/${STORAGE_ZONE_NAME}/${fileName}`,
    headers: {
      Accesskey: ACCESS_KEY,
      "Content-Type": "application/octet-stream",
    },
  };

  const reqBunny = https.request(options, (response) => {
    let responseBody = "";
    response.on("data", (chunk) => {
      responseBody += chunk;
    });
    response.on("end", () => {
      console.log(response.statusCode);
      if (response.statusCode === 201 || response.statusCode === 200) {
        fs.unlink(filePath, (err) => {
          if (err) {
            console.log("Error deleting file: ", err);
          } else {
            console.log("File Removed Successfully");
          }
        });
        res.status(201).json({
          status: true,
          message: "File uploaded successfully",
          path: `${STORAGE_ZONE_NAME}/${fileName}`,
        });
      } else {
        console.log("File upload failed", responseBody);

        res.status(response.statusCode).json({
          status: false,
          message: "File upload failed",
          response: responseBody,
        });
      }
    });
  });

  reqBunny.on("error", (error) => {
    console.error("Request error: ", error);
    fs.unlink(filePath, (err) => {
      if (err) {
        console.log("Error in removing file: ", err);
      }
    });
    res.status(500).json({
      status: false,
      message: "File upload failed",
      error: error.message,
    });
  });

  readStream.pipe(reqBunny);
});

/*  ========== Delete File ========== */
export const deleteFile = expressAsyncHandler(async (req, res) => {
  const url = `https://${HOSTNAME}/${STORAGE_ZONE_NAME}/${req.params.fileName}`;
  const options = {
    method: "DELETE",
    headers: {
      Accesskey: ACCESS_KEY,
    },
  };
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      res.status(200).json({ status: true, msg: "File deleted successfully" });
    } else {
      const errorText = await response.text();
      res
        .status(response.status)
        .json({ status: false, msg: `Error in deleting file : ${errorText}` });
    }
  } catch (error) {
    res.status(500).json({ status: false, msg: "Error in deleting file" });
  }
});
