import express, { NextFunction, Request, Response } from "express";
import * as core from "express-serve-static-core";

export interface RouterEntry {
  method: 'get' | 'post' | 'put' | 'delete' | 'patch',
  route: string,
  controllerFn: (req: Request, res: Response, next: NextFunction) => Promise<any>

}

export function routerFactory(routes: RouterEntry[]): core.Router {
  const router = express.Router()
  for (let route of routes) {
    // console.log(route)
    // @ts-ignore
    router[route.method](route.route, route.controllerFn)
  }
  // console.log(router)

  return router
}
