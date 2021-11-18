import React, { ComponentType, useContext } from 'react';
import Router from "next/router";

import { UserContext } from 'contexts/UserContext';

const AuthenticatedRoute = (WrappedComponent: ComponentType) => {

    return (props: any) => {

        const user = useContext(UserContext);

        React.useEffect(() => {
            if (!user)
                Router.push({
                    pathname: `/${Router.locale}/auth/signin`,
                    query: {
                        redirect_Uri: Router.asPath
                    }
                });
        }, [user])

        if (!user) return null
        return <WrappedComponent {...props} />
    }
};


export default AuthenticatedRoute;