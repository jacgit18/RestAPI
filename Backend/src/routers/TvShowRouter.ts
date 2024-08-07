import tvShowController from "../controllers/TvShowController"
import { RouterEntry, routerFactory } from "./util"



const tvShowRoutes: RouterEntry[] = [
  {
    method: 'post',
    route: '/add/show',
    middlewares:[],
    controllerFn: tvShowController.createShow
  }
  ,
  {
    method: 'get',
    route: '/:keyword/:id',
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

export default routerFactory(tvShowRoutes)
