import express from "express"; // import express
import dotenv from "dotenv"; // import dotenv
import { dbConnect } from "./src/utils/utils.js"; // import database connection
import helmet from "helmet"; // import helmet
import morgan from "morgan"; // import morgan
import cors from "cors"; // import cors
import {
  errorHandler,
  notFoundErrorhandler,
} from "./src/middlewares/errorHandler.js"; // import error handler
import userRouter from "./src/routes/userRouter.js"; // import user router

/* ========  Load Environment Variables from .env file ======== */
dotenv.config();

/* =========== database connection setup ========== */
dbConnect();

/* ============ Initialize Express app  ==========*/
const app = express();

/*  ============ Middleware setup  ==========*/
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

/* ========== API Routes ============= */
app.use("/api/user", userRouter);

/*  ========== Error handling middleware  =========*/
app.use(notFoundErrorhandler); // Not fount error handler
app.use(errorHandler);

/* ==========  Start the server  =========*/
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
