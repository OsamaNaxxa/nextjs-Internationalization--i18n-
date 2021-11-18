import { User, UserManager } from 'oidc-client';

interface OptionalParams {
    redirect_Uri?: string
}

const settings = {
    authority: process.env.IDENTITY_ISSUER,
    client_id: process.env.IDENTITY_CLIENT_ID,
    redirect_uri: process.env.IDENTITY_CALLBACK_URL,
    silent_redirect_uri: process.env.IDENTITY_CALLBACK_URL,
    post_logout_redirect_uri: "http://localhost:3000",
    response_type: 'code',
    scope: process.env.IDENTITY_SCOPES
}

export default class Auth {
    static userManager: UserManager;

    static init() {
        Auth.userManager = new UserManager(settings);
    }

    static fetchUser(): Promise<User | null> {
        return Auth.userManager.getUser();
    }

    static login(optionalParams: OptionalParams = {}): void {
        Auth.userManager.signinRedirect({
            state: optionalParams
        });
    }

    static token(): Promise<User> {
        return Auth.userManager.signinRedirectCallback();
    }

    static logout(): void {
        Auth.userManager.clearStaleState().then(() => {
            Auth.userManager.signoutRedirect();
        })
    }

    static refreshToken(): Promise<User> {
        return Auth.userManager.signinSilent();
    }
}