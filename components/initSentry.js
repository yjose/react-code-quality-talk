import * as Sentry from '@sentry/browser';

export default () => {
  const RELEASE = '0.1.0';
  if (process.env.NODE_ENV === 'production') {
    Sentry.init({
      dsn: 'https://7eedc8c4e38a4f64bd49283754b5ba63@sentry.io/1421776',
      release: RELEASE,
    });
  }
};
