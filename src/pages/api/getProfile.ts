import { NextApiRequest, NextApiResponse } from 'next';
import auth0 from 'pages/api/utils/auth0';

export default async function getProfile(req: NextApiRequest, res: NextApiResponse<any>) {
    try {
        await auth0.handleProfile(req, res);
    } catch (error: any) {
        console.error(error);
        res.status(error.status || 500).end(error.message);
    }
}