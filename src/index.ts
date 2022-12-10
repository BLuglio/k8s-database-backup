import '$/upload/cos';
import { PostgresHelper } from '$/db/index';
import { Logger } from 'tslog';
import { getGlobalConfig } from './config/app.config';
import { GlobalConstantsResources } from './shared/constant';

const logger = new Logger();

const targetDbList = getGlobalConfig().app.dbList;
let backupPath = getGlobalConfig().app.backupPath;
if (!backupPath.endsWith('/')) {
  backupPath += '/';
}

const dateTimeString = new Date().toISOString();

await Promise.all(
  targetDbList.map(async (db) => {
    const filename = `backup-${dateTimeString}-${db}.dump`;
    const localFilePath = `${backupPath}${filename}`;
    if (getGlobalConfig().app.dbEngine === GlobalConstantsResources.DATABASE_ENGINE_POSTGRES) {
      await new PostgresHelper(getGlobalConfig().database)
        .executeBackup(db, localFilePath)
        .then((isBackupOK) => {
          if (isBackupOK) {
            logger.debug(`Archiving file ${filename}`);
            // TODO: Store in archive
          } else {
            logger.debug(`File ${filename} not archived`);
          }
        });
    }
  })
);


logger.info('Execution completed');
