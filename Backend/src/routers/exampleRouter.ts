import exampleController from "../controllers/exampleController"
import { RouterEntry, routerFactory } from "./util"

const exampleRoutes: RouterEntry[] = [
  {
    method: 'post',
    route: '/',
    controllerFn: exampleController.createStuff
  }
  ,
  {
    method: 'get',
    route: '/:id',
    controllerFn: exampleController.getStuff
  },
  {
    method: 'put',
    route: '/:id/episodes',
    controllerFn: exampleController.updateStuff
  },
  {
    method: 'patch',
    route: '/:id/ratings',
    controllerFn: exampleController.updateStuffTwo
  },
  {
    method: 'delete',
    route: '/:id',
    controllerFn: exampleController.deleteStuff
  }
]

export default routerFactory(exampleRoutes)
