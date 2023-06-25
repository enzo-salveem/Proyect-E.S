import { Router } from "express";
import data from './data/index'
const handler = (routes: Router) => {

    routes.use('/data',data)
}
export default handler
