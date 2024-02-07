import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable('user', table => {
        table.string('pictureUrl').nullable();
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable('user', table => {
        table.dropColumn('pictureUrl');
    });
}
