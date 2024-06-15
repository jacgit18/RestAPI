import tvShowController from "../controllers/TvShowController.ts"
import { RouterEntry, routerFactory } from "./util.ts"



const exampleRoutes: RouterEntry[] = [
  {
    method: 'post',
    route: '/add/show',
    middlewares:[],
    controllerFn: tvShowController.createShow
  }
  ,
  {
    method: 'get',
    route: '/:id',
    middlewares:[],
    controllerFn: tvShowController.getShowInfo
  },
  {
    method: 'put',
    route: '/:id/episodes',
    middlewares:[],
    controllerFn: tvShowController.updateFullShow
  },
  {
    method: 'patch',
    route: '/:id/ratings',
    middlewares:[],
    controllerFn: tvShowController.updatePartialShow
  },
  {
    method: 'delete',
    route: '/:id',
    middlewares:[],
    controllerFn: tvShowController.deleteShow
  }
]

export default routerFactory(exampleRoutes)
