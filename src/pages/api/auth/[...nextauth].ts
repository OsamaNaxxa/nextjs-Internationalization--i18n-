import NextAuth from "next-auth";
import IdentityServer4Provider from "next-auth/providers/identity-server4";

export default NextAuth({
    providers: [
        IdentityServer4Provider({
            authorization: {
                params: {
                    redirect_uri: "http://localhost:3000/signin-callback.html",
                    response_type: "code",
                    scope: "lookupapis openid roles profile baladyapi establishmentapi requestapi proxyapi companyapi userprofileapis delegationapi Invoicingapi offline_access"
                }
            },
            client: {
                token_endpoint_auth_method: 'none',
            },
            issuer: "https://www.sbc-stg.com",
            clientId: "BaladyLicenseClient",
            // clientSecret: "any secret here",
            checks: ["pkce"]
            
        }),
    ],

    callbacks: {
        async signIn({ user, account, profile }) {
            return true
        },
        async redirect({ url, baseUrl }) {
            return baseUrl
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            return token
        }
    },

    secret: process.env.SECRET,
    session: {
        jwt: true
    },
    jwt: {
        secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
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