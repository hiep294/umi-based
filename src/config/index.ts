if (!process.env.API_DOMAIN) {
  // eslint-disable-next-line no-alert
  window.alert(
    'Please config .env! (copy .env.example to .env in root project folder!)',
  );
}

const configDev = {
  APP_ENV: 'dev',
  API_DOMAIN: 'https://jsonplaceholder.typicode.com',
};
const configStaging = {
  APP_ENV: 'staging',
  API_DOMAIN: 'https://jsonplaceholder.typicode.com',
};
const configProd = {
  APP_ENV: 'prod',
  API_DOMAIN: 'https://jsonplaceholder.typicode.com',
};

const env = process.env.APP_ENV;
const configs =
  env === 'dev' ? configDev : env === 'staging' ? configStaging : configProd;

export default configs;
