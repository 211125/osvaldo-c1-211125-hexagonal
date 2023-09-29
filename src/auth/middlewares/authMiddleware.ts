import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).send({ status: 'error', message: 'Token requerido' });

    try {
        const payload = verifyToken(token);
        req.user = payload.userId;  // Puedes guardar la información decodificada del token en el objeto req
        next();
    } catch (error) {
        res.status(401).send({ status: 'error', message: 'Token inválido' });
    }
}
