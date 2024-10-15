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
import { graphqlHTTP } from "express-graphql"; // import graphql

/* ========== Start Import API Routes ========== */
import userRouter from "./src/routes/userRouter.js"; // import user router
import vendorRouter from "./src/routes/vendorRouter.js"; // import vendor router
import productRouter from "./src/routes/productRouter.js"; // import product router
import brandRouter from "./src/routes/brandRouter.js"; // import brand router
import categoryRouter from "./src/routes/categoryRouter.js";
import subCategoryRouter from "./src/routes/subCategoryRouter.js"; // import subcategory router
import wishlisteRouter from "./src/routes/wishlistRouter.js"; // import wishliste router
import reviewRouter from "./src/routes/reviewRouter.js"; // import review router
import uploadRouter from "./src/routes/uploadRouter.js"; // import upload router
import orderRouter from "./src/routes/orderRoutes.js";
import supportRouter from "./src/routes/supportRouter.js";
/* ========== END Import API Routes ========== */
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
app.use("/api/vendor", vendorRouter);
app.use("/api/product", productRouter);
app.use("/api/brand", brandRouter);
app.use("/api/wishlist", wishlisteRouter);
app.use("/api/category", categoryRouter);
app.use("/api/subcategory", subCategoryRouter);
app.use("/api/review", reviewRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/order", orderRouter);
app.use("/api/support", supportRouter);

/*  ========== Error handling middleware  =========*/
app.use(notFoundErrorhandler); // Not fount error handler
app.use(errorHandler);

/* ==========  GraphQL    =========*/

import { graphql, buildSchema } from "graphql";
/* ==========  graphql    =========*/
var rootValue = { hello: () => "Hello world!" };

var schema = buildSchema(` 
  type Query {
      hello: String
  }
`);
var source = `
  {
    hello
  }
`;

graphql({ schema, source, rootValue }).then((result) => {
  console.log(result);
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
);

/* ==========  Start the server  =========*/
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
