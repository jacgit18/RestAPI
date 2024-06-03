import tvShowController from "../controllers/TvShowController.ts"
import { RouterEntry, routerFactory } from "./util.ts"

const exampleRoutes: RouterEntry[] = [
  {
    method: 'post',
    route: '/',
    controllerFn: tvShowController.createShow
  }
  ,
  {
    method: 'get',
    route: '/:id',
    controllerFn: tvShowController.getShowInfo
  },
  {
    method: 'put',
    route: '/:id/episodes',
    controllerFn: tvShowController.updateFullShow
  },
  {
    method: 'patch',
    route: '/:id/ratings',
    controllerFn: tvShowController.updatePartialShow
  },
  {
    method: 'delete',
    route: '/:id',
    controllerFn: tvShowController.deleteShow
  }
]

export default routerFactory(exampleRoutes)
