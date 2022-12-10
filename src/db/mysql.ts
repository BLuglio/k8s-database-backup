import { DatabaseHelper } from "./base";

export class MySQLHelper extends DatabaseHelper {
    checkConnection(databaseName: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    executeBackup(databaseName: string, destinationFile: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}