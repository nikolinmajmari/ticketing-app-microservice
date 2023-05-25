import { NextFunction, Request, Response } from "express";
interface UserPayload {
    id: string;
    email: string;
}
declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}
export declare const currentUserHandler: (req: Request, res: Response, next: NextFunction) => void;
export {};
