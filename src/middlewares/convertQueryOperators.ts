import { NextFunction, Request, Response } from 'express';

const convertQueryOperators = (req: Request, res: Response, next: NextFunction) => {
  const operators: { [key: string]: string } = {
    gte: ">=",
    lte: "<=",
    gt: ">",
    lt: "<",
    eq: "=",
    neq: "!=",
  };

  if (req.query) {
    for (const key in req.query) {
      const pair = req.query[key];
      if (typeof pair === "object" && pair !== null) {
        const newPair: { [key: string]: any } = {};
        for (const pairKey in pair) {
          const newKey = operators[pairKey] || pairKey;
          newPair[newKey] = (pair as { [key: string]: any })[pairKey]; // Explicit type assertion
        }
        req.query[key] = newPair;
      }
    }
  }

  next();
};

export default convertQueryOperators;
