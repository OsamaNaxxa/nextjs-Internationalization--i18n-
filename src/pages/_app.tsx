import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import App, { AppProps } from 'next/app';
import Head from "next/head";
import Router, { useRouter } from "next/router";
import IdentityAuth from "utils/identityAuth";
import { appWithTranslation } from 'next-i18next';

import { UserContext } from "contexts/UserContext";
import PageChange from "common/components/PageChange/PageChange";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";
import { User } from "oidc-client";

interface CustomAppProps extends Omit<AppProps, "Component"> {
  Component: AppProps["Component"] & { layout: React.FC<any> };
}

type FCProps = { children: React.ReactNode };

const MyApp: React.FC<AppProps> = (props) => {

  const { Component, pageProps, } = props as CustomAppProps;
  const Layout = Component.layout || (({ children }: FCProps) => <>{children}</>);
  const { locale } = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [fetchingUser, userFetched] = useState(true);

  useEffect(() => {
    IdentityAuth.init();
    IdentityAuth.fetchUser().then((identity: User | null) => {
      if (identity)
        setUser(identity);
      userFetched(false);
    })
  }, [])

  useEffect(() => {
    let dir = locale === "ar" ? "rtl" : "ltr";
    let _html = document.querySelector("html")!;
    if (_html.getAttribute("dir") !== dir)
      _html.setAttribute("dir", dir);
  }, [locale]);

  if (fetchingUser)
    return null

  return <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title> NextJS POC Project</title>
    </Head>
    <UserContext.Provider value={user}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  </>
}

export default appWithTranslation(MyApp)


Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition")!);
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition")!);
  document.body.classList.remove("body-page-transition");
});