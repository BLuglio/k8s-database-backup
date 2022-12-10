import { DatabaseCredentials } from "$/shared/types/databaseCredentials";

export abstract class DatabaseHelper {
    protected credentials: DatabaseCredentials;

    constructor(credentials: DatabaseCredentials){
        this.credentials = credentials;
    }

    getCredentials(): DatabaseCredentials {
        return this.credentials;
    }

    abstract checkConnection(databaseName: string): Promise<boolean>;

    abstract executeBackup(databaseName: string, destinationFile: string): Promise<boolean>;
}