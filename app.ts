import express from "express";
import dotenv from "dotenv";
import handler from "./Routes/handler";

dotenv.config();

const app = express();
app.use(express.json());

//handler(app); //rutas de la app

app.listen(process.env.EXPRESS_PORT || 3002, async () => {
console.log(`Proyecto E.S en el puerto: 3002 `);
});

