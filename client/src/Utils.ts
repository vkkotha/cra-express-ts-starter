import Config from './Config';

function serverUrl(uri: string): string {
  if (Config.USE_PROXY) {
    return uri;
  } else {
    return `${Config.SERVER_URL}${uri}`;
  }
}

const Utils = {
  serverUrl,
};

export default Utils;
