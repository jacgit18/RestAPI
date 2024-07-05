import type { Knex } from "knex";

/**
 * @param {Knex} knex
 * @returns {Promise<void>}
 */
export const up = (knex: Knex): Promise<void> =>{
    return knex.schema.createTable('user_show', function (table) {
        table.uuid('user_show_id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.uuid('user_id').notNullable().references('user_id').inTable('user').onDelete('CASCADE');
        table.uuid('show_id').notNullable().references('show_id').inTable('show').onDelete('CASCADE');
        table.text('status');
        table.decimal('rating', 3, 2);
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
      });
    };

/**
 * @param {Knex} knex
 * @returns {Promise<void>}
 */
export const down = (knex: Knex): Promise<void> =>{
    return knex.schema.dropTable('user_show');
};
