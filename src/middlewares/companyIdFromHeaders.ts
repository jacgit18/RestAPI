import express from 'express'
export const appUserHeaderProperty = 'appuser_id'




export const appUserIdFromHeaders = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const appUserHeader = req.headers[appUserHeaderProperty]
  //@ts-ignore
  req.appuser_id = appUserHeader
  next()
}



