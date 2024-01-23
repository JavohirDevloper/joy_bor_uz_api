const express = require("express");
const config = require("./shared/config");
const cors = require("cors");
const db = require("./db");
const path = require("path");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger/swagger-output");

const handleError = require("./shared/errors/handle");

app.use(cors());
app.use(express.json());

const adminRoute = require("./modules/admin/_api");
const UserRoute = require("./modules/users/_api");
const ElonsRoute = require("./modules/elons/_api");
const BannerRoute = require("./modules/banner/_api");
const CategoryRoute = require("./modules/category/_api");

app.use(adminRoute);
app.use(UserRoute);
app.use(ElonsRoute);
app.use(BannerRoute);
app.use(CategoryRoute);

db();

app.use(handleError);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(5000, () => {
  console.log(`server ishlamoqda`);
});
