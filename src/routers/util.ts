import express, { NextFunction, Request, Response } from "express";
import * as core from "express-serve-static-core";

export interface RouterEntry {
  method: 'get' | 'post' | 'put' | 'delete' | 'patch',
  route: string,
  middlewares?: Array<(req: Request, res: Response, next: NextFunction) => Promise<any>>,
  controllerFn: (req: Request, res: Response, next: NextFunction) => Promise<any>

}

export function routerFactory(routes: RouterEntry[]): core.Router {
  const router = express.Router();

  routes.forEach(route => {
    const { method, route: path, middlewares = [], controllerFn } = route;
    (router as any)[method](path, ...middlewares, controllerFn);
  });

  return router;
}


// export function routerFactory(routes: RouterEntry[]): core.Router {
//   const router = express.Router()
//   for (let route of routes) {
//     // console.log(route)
//     // @ts-ignore
//     router[route.method](route.route, route.controllerFn)
//   }
//   // console.log(router)

//   return router
// }
