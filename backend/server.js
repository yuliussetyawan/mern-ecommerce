import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();
// using ES module, so need to add the file format for the import (.js)
import productRoutes from "./routes/productRoutes.js";

const port = process.env.PORT || 5000;
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use('/api/products',productRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
