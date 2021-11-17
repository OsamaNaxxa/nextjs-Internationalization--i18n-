import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
    clientID: process.env.IDENTITY_CLIENT_ID,
    clientSecret: process.env.NEXTAUTH_SECRET,
    baseURL: "http://localhost:3000",
    issuerBaseURL: process.env.IDENTITY_ISSUER,
    secret: process.env.NEXTAUTH_SECRET,
    authorizationParams: {
        response_type: 'code',
        redirect_uri: process.env.IDENTITY_CALLBACK_URL,
        scope: process.env.IDENTITY_SCOPES,
        
    },
    routes: {
        postLogoutRedirect: "/" //logout to homepage
    },
    session: {
        name: "next_auth0",
    }
});