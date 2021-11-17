import NextAuth from "next-auth";
import IdentityServer4Provider from "next-auth/providers/identity-server4";

export default NextAuth({
    providers: [
        IdentityServer4Provider({
            authorization: {
                params: {
                    redirect_uri: process.env.IDENTITY_CALLBACK_URL,
                    response_type: "code",
                    scope: process.env.IDENTITY_SCOPES
                }
            },
            client: {
                token_endpoint_auth_method: 'none',
            },
            issuer: process.env.IDENTITY_ISSUER,
            clientId: process.env.IDENTITY_CLIENT_ID,
            clientSecret: "any secret here",
            
        }),
    ],

    secret: process.env.NEXTAUTH_SECRET,
    session: {
        jwt: true
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        signingKey: process.env.JWT_SIGNING_KEY,
        // verificationOptions: {
        //     algorithms: ['HS256']
        // },
        encryption: true,
        encryptionKey: "",
        // decryptionOptions: {
        //     algorithms: ['A256GCM']
        // }
    },

    pages: {
        signIn: 'http://localhost:3000/auth/signin'
    },

    debug: false
})