const userRoute = require("./user");
const productRoute = require("./product");
const categoryRoute = require("./category");
const blogCategoryRoute = require("./blogCategory");
const blog = require("./blog");
const brand = require("./brand");
const coupon = require("./coupon");

const { notFound, errHandler } = require("../middlewares/errorHandler");
//....
const routes = (app) => {
  app.use("/api/user", userRoute);
  app.use("/api/product", productRoute);
  app.use("/api/category", categoryRoute);
  app.use("/api/blogcategory", blogCategoryRoute);
  app.use("/api/blog", blog);
  app.use("/api/brand", brand);
  app.use("/api/coupon", coupon);

  app.use(notFound);
  app.use(errHandler);
};

module.exports = routes;
