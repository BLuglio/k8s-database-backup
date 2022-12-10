import { GlobalConstantsResources } from '$/shared/constant';
import { DatabaseCredentials } from '$/shared/types/databaseCredentials';

export const envConfig = {
  env: process.env.ENVIRONMENT || GlobalConstantsResources.ENVIRONMENT_LOCAL,
  mode: process.env.MODE || GlobalConstantsResources.DEFAULT_MODE,
  dbEngine:
    process.env.DATABASE_ENGINE && process.env.DATABASE_ENGINE.trim() !== ''
      ? process.env.DATABASE_ENGINE
      : GlobalConstantsResources.DATABASE_ENGINE_POSTGRES,
  dbList:
    process.env.TARGET_DB_LIST && process.env.TARGET_DB_LIST.trim() !== ''
      ? Array.from(process.env.TARGET_DB_LIST)
      : [],
  dbUser: '',
  dbPassword: '',
  dbHost: '',
  dbPort: 1234,
  backupPath: process.env.BACKUP_PATH ? process.env.BACKUP_PATH : '/tmp/',
};

if (envConfig.mode === GlobalConstantsResources.DATABASE_ENGINE_POSTGRES) {
  envConfig.dbUser = process.env.PG_USER ? process.env.PG_USER : 'postgres';
  envConfig.dbPassword = process.env.PG_PASS ? process.env.PG_PASS : 'postgres';
  envConfig.dbHost = process.env.PG_HOST ? process.env.PG_HOST : 'localhost';
  envConfig.dbPort = process.env.PG_PORT ? parseInt(process.env.PG_PORT) : 5432;
}

// ADD MORE ENGINES HERE ...

export function getGlobalConfig() {
  const dbConfig: DatabaseCredentials = {
    host: envConfig.dbHost,
    port: envConfig.dbPort,
    user: envConfig.dbUser,
    password: envConfig.dbPassword,
  };

  return {
    app: envConfig,
    database: dbConfig,
  };
}
