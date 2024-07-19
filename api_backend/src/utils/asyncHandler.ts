import { Request, Response, NextFunction } from 'express';
const asyncHandler = (requestHandler: (req: Request, res: Response, next: NextFunction) => void) => {

    return (req: any, res: any, next: any) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export { asyncHandler }