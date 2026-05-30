import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  const isDev = process.env.NODE_ENV === 'DEV';

  if (isDev) console.log(`[${req.method}] ${req.url}`);

  next();
}
