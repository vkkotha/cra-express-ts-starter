import process from 'process';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

function loadConfig() {
  dotenv.config();
  console.log(`Environment: ${process.env.NODE_ENV || ''}`);
  if (process.env.NODE_ENV) {
    const envOverrideFile = `.env.${process.env.NODE_ENV}`;
    try {
      const envConfig = dotenv.parse(fs.readFileSync(envOverrideFile));
      for (const k in envConfig) {
        process.env[k] = envConfig[k];
      }
    } catch (e) {
      console.error(`Unable to load environment config file ${envOverrideFile}`, e);
      throw e;
    }
  }
}

loadConfig();
const PORT = process.env.PORT ? (process.env.PORT as unknown as number) : 0;
let ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || '').split(',');
ALLOWED_ORIGINS = ALLOWED_ORIGINS.map((s) => s.trim());
const PUBLIC_PATH = process.env.PUBLIC_PATH
  ? path.join(process.cwd(), process.env.PUBLIC_PATH)
  : path.join(__dirname, '../public');

interface Config {
  PORT: number;
  ALLOWED_ORIGINS: string[];
  PUBLIC_PATH: string;
}

const config: Config = {
  PORT: PORT,
  ALLOWED_ORIGINS,
  PUBLIC_PATH,
};

export default config;
