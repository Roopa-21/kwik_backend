const express = require("express");
const app = express();
const http = require("http").Server(app);
const connectDB = require("./config/database");
const checkApiKey = require("./config/checkapikey");
const userRoutes = require("./routes/user_routes");
const productRoutes = require("./routes/product_routes");
const brandRoutes = require("./routes/brand_routes");
const categoryRoutes = require("./routes/category_routes");
const subcategoryRoutes = require("./routes/sub_category_routes");
const warehouseRoutes = require("./routes/warehouse_routes");
const authRoutes = require("./routes/auth_Routes");

// MongoDB Connection
connectDB();

// Middleware to log requests
app.use((req, res, next) => {
  // console.log(`${req.method} request for '${req.url}'`);
  next();
});

// Middleware to parse JSON body data
app.use(express.json());

// Apply checkApiKey middleware for all routes (or you can apply it selectively)
app.use(checkApiKey);
//
// Use user routes
app.use("/users", userRoutes);
app.use("/product", productRoutes);
app.use("/brand", brandRoutes);
app.use("/category", categoryRoutes);
app.use("/subcategory", subcategoryRoutes);
app.use("/warehouse", warehouseRoutes);
app.use("/auth", authRoutes);

// Start the server
http.listen(3000, function () {
  console.log("Server running on http://localhost:3000");
});
