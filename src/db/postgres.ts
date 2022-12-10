import * as util from 'util';
import { exec } from 'child_process';
import { Logger } from 'tslog';
import { DatabaseHelper } from './base';
import { DatabaseCredentials } from '$/shared/types/databaseCredentials';
const execPromise = util.promisify(exec);

export class PostgresHelper extends DatabaseHelper {

  private logger: Logger<any>;

  constructor(credentials: DatabaseCredentials) {
    super(credentials);
    this.logger = new Logger({ name: 'PostgresHelper' });
  }

  async checkConnection(databaseName: string): Promise<boolean> {
    try {
      const output = execPromise(`pg_isready -d ${databaseName} -h ${this.credentials.host} -p ${this.credentials.port} -U ${this.credentials.user}`);

      // TODO: validate output
      return true;
    }catch(error) {
      this.logger.error(error);
      return false;
    }
  }

  async executeBackup( databaseName: string, destinationFile: string): Promise<boolean> {
    try {
      execPromise(
        `pg dump --dbname=postgresql://${this.credentials.user}:${this.credentials.password}@${this.credentials.host}:${this.credentials.port}/${databaseName} 
          -Fc 
          -w 
          -f ${destinationFile} 
          -v`,
      );
      this.logger.info('PostgreSQL database dump successful');
      return true;
    } catch (error) {
      this.logger.error(error);
      return false;
    }
  }
}
