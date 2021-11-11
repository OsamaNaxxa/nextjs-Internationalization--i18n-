# Next.js Internationalization

This has a basic implementation for i18n that uses.

* [next-i18next](https://www.npmjs.com/package/next-i18next)
* [tailwind css](https://tailwindcss.com/)
* [typescript](https://www.typescriptlang.org/docs/handbook/react.html)

## Running locally in development mode

To get started, just clone the repository and run `yarn install && yarn run dev`:

    git clone https://github.com/OsamaNaxxa/nextjs-Internationalization-i18n.git
    yarn install
    yarn run dev

- Go to [http://localhost:3000/](http://localhost:3000/) - package content is displayed correctly.

## Building and deploying in production

If you wanted to run this site in production, you should install modules then build the site with `yarn run build` and run it with `yarn start`:

    yarn install
    yarn run build
    yarn start

You should run `yarn run build` again any time you make changes to the site.

Note: If you are already running a webserver on port 80 (e.g. Macs usually have the Apache webserver running on port 80) you can still start the example in production mode by passing a different port as an Environment Variable when starting (e.g. `PORT=3000 yarn start`).
