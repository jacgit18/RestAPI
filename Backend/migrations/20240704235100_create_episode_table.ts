import type { Knex } from "knex";

/**
 * @param {Knex} knex
 * @returns {Promise<void>}
 */
export const up = (knex: Knex): Promise<void> =>{
    return knex.schema.createTable('episode', function (table) {
        table.uuid('episode_id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.uuid('show_id').notNullable().references('show_id').inTable('show').onDelete('CASCADE');
        table.integer('season_number').notNullable();
        table.integer('episode_number').notNullable();
        table.text('title').notNullable();
        table.text('description');
        table.date('air_date');
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
    return knex.schema.dropTable('episode');
};
