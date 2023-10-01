import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';



dotenv.config();

interface TokenPayload {
    id: string;
    email: string;
}



export const tokenSigIn = (id:string, email:string ): string => {
    return jwt.sign(
        {
            id: id,
            email: email
        },
        process.env.KEY_TOKEN!,
        {
            expiresIn: '25h'
        }
    );
}

export const verifyToken = (token: string): TokenPayload | null => {
    try {
        return jwt.verify(token, process.env.KEY_TOKEN!) as TokenPayload;
    } catch (error) {
        return null;
    }
}


