import { NextApiRequest, NextApiResponse } from 'next';
import auth0 from 'pages/api/utils/auth0';

export default async function callback(req: NextApiRequest, res: NextApiResponse<any>) {
    try {
        await auth0.handleCallback(req, res, { redirectUri: '/profile' });
    } catch (error: any) {
        console.error(error);
        res.status(error.status || 400).end(error.message);
    }
}