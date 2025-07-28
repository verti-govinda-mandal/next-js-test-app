import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://377bbca084ab91ebfb5209ef9acf1bce@o4509683998720000.ingest.us.sentry.io/4509684000292864",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,
  _experiments: { enableLogs: true },
  integrations: (defaultIntegrations) => [
    ...defaultIntegrations,
    Sentry.consoleLoggingIntegration({
      levels: ["log", "error", "warn", "info", "debug", "trace", "assert"],
    }),
    Sentry.rewriteFramesIntegration(),
  ],

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
