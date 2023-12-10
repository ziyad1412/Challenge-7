import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import { Model } from "objection";
import { CarsService } from "./services/cars-services";
import { OrderService } from "./services/orders-services";
import { UserService } from "./services/users-services";
import * as config from "./knexfile";


const PORT = 5000;
const ENV = "development";
// @ts-expect-error
const knexInstance = knex(config[ENV]);

// Connect ORM to Database
Model.knex(knexInstance);

const app: Express = express();
app.use((cors as (options: cors.CorsOptions) => express.RequestHandler)({}));

// app.set("view engine", "ejs");
app.set('view engine', 'ejs'); // Menggunakan EJS sebagai template engine
app.use(express.json());

app.use(express.static("public"));


app.get('/admin', (req, res) => {
  res.render('admin'); // Mengirim file EJS
});

// Register Cars Service
new CarsService(app).init();
new OrderService(app).init();
new UserService(app).init();



app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
