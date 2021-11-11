import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { members } from "utils/members";

const testUsers = {
    test1: 0,
    test2: 1,
    test3: 2,
    test4: 3
};

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            async authorize(credentials, req) {

                let testUser = testUsers[credentials.email];
                if(testUser === null || testUser < 0){
                    return null;
                }

                // const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }

                // if (user) {
                    return await members[testUser];
                // } else {
                //     return null
                // }
            }
        })
    ],

    callbacks: {
        jwt: ({ token, user }) => {
            if (user) {
                token.id = user.id;
                token.profession = user.profession;
                token.profileImage = user.profileImage;
            }

            return token;
        },
        session: ({ session, token }) => {
            if (token) {
                session.user.id = token.id;
                session.user.profession = token.profession;
                session.user.profileImage = token.profileImage;
            }

            return session;
        }
    },

    pages: {
        signIn: '/auth/signin',
        error: '/auth/error',
    },

    secret: "test",

    jwt: {
        secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
        encryption: true
    },

    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60, // 24 hours
    },

    debug: true,
})