const USE_PROXY = process.env.REACT_APP_USE_PROXY === 'true' ? true : false;
const SERVER_URL = process.env.REACT_APP_SERVER_URL || '';

const Config = {
  USE_PROXY,
  SERVER_URL,
};

export default Config;
