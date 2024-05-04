require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes will be directed to their corresponding API's into the `./routes/product.route.js` file
app.use("/api/products", productRoute);

mongoose
	.connect(process.env.MONGODB_URI)	// goto .env file and setup the password first
	.then(() => {
		console.log("Connected to database!");
		app.listen(3000);
	})
	.catch(() => {
		console.log("Connected failed!");
	});
