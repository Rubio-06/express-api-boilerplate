import { ApiError } from '@utils/ApiError';
import { Request, Response, NextFunction } from 'express';

export const notFound = (req: Request, res: Response, next: NextFunction) => {
    next(new ApiError(404, 'Resource not found'));
};