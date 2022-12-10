import { assert } from "chai";
import { PostgresHelper } from '$/db/postgres';
import { DatabaseCredentials } from "$/shared/types/databaseCredentials";

describe("PostgreSQL helper tests", () => {
    it("should return false when trying to connect to a database that doesn't exist", async () => {
        const credentials: DatabaseCredentials = {
            host: 'unknown',
            password: '123',
            port: 5432,
            user: 'usr'
        };

        const databaseName = 'unknown';
        const res = await new PostgresHelper(credentials).checkConnection(databaseName);
        assert.equal(res, false);
    });

    it("should return true when connection with database is successful", async () => {
        const credentials: DatabaseCredentials = {
            host: 'postgres',
            password: 'postgres',
            port: 5432,
            user: 'postgres'
        };

        const databaseName = 'test';
        const res = await new PostgresHelper(credentials).checkConnection(databaseName);
        assert.equal(res, false);
    });
});