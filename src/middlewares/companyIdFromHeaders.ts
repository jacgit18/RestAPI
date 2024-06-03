import { NextFunction, Request, Response } from 'express'

export const appUserHeaderProperty = 'appuser_id'

export const appUserIdFromHeaders = (req: Request, res: Response, next: NextFunction) => {
  const appUserHeader = req.headers[appUserHeaderProperty]
  //@ts-ignore
  req.appuser_id = appUserHeader
  next()
}



