import type { Knex } from "knex";

/**
 * @param {Knex} knex
 * @returns {Promise<void>}
 */
export const up = (knex: Knex): Promise<void> =>{
    return knex.schema.createTable('show', function (table) {
        table.uuid('show_id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.text('title').notNullable();
        table.text('description');
        table.text('genre');
        table.date('release_date');
        table.decimal('average_rating', 3, 2).defaultTo(0);
        table.integer('total_ratings').defaultTo(0);
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
      });
    };

/**
 * @param {Knex} knex
 * @returns {Promise<void>}
 */
export const down = (knex: Knex): Promise<void> =>{
    return knex.schema.dropTable('show');
};
