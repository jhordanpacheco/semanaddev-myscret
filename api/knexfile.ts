import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
    development: {
        client: 'pg',
        connection: {
            host: 'localhost',
            database: 'mysecret',
            port: 5432,
            user: 'postgres',
            password: 'password'
        },
        migrations: {
            directory: './migrations'
        },
    },
    production: {
        client: 'pg',
        connection: {
            host: 'localhost',
            database: 'mysecret',
            port: 5432,
            user: 'postgres',
            password: 'password'
        },
        migrations: {
            directory: './migrations'
        },
    }
};

export default config;