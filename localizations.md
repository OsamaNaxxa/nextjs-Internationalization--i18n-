https://daily.dev/blog/internationalization-i18n-in-nextjs
The standard format for defining locales is the UTS Locale Identifiers, the general format for locales is language-region-script.

https://www.i18next.com/overview/getting-started
https://www.npmjs.com/package/next-i18next?activeTab=readme

##  useTranslation with multiple namespaces
https://react.i18next.com/latest/usetranslation-hook
t('key', { ns: 'ns2' }); // will be looked up from namespace ns2

https://github.com/i18next/react-i18next/issues/732
const { t } = useTranslation(['common','header']);
{t("header:demoPages")} // Picks from header
{t("h1")} // Picks directly from common