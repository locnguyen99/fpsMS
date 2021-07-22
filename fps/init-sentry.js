var me = document.querySelector('script[selectorid="sentry"]');
var environment = me.getAttribute('SENTRY_ENVIRONMENT');
var dns = me.getAttribute('SENTRY_API_KEY');

if (environment != "develop"){
  Sentry.init({
    dsn: dns,
    maxBreadcrumbs: 50,
    debug: false,
    environment: environment
  });
}