import express from "express";
import Data2 from "../../Controllers/dataBuscarController";
import Data1 from './../../Controllers/dataActualizarController';
import Data3 from "../../Controllers/dataEliminarController";
import Data4 from "../../Controllers/dataPublicarController";
let router = express.Router();

router.post("/", async (req, res, next) => {
  res.send(await Data4.publicar(req, res));
});
router.get("/", async (req, res, next) => {
  res.send(await Data2.buscar(req, res));
});
router.put("/", async (req, res, next) => {
  res.send(await Data1.actualizar(req, res));
});
router.delete("/", async (req, res, next) => {
  res.send(await Data3.eliminar(req, res));
});

export default router;
