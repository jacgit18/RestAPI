import type { Knex } from "knex";

/**
 * @param {Knex} knex
 * @returns {Promise<void>}
 */
export const up = (knex: Knex): Promise<void> =>{
    return knex.schema.createTable('rating', function (table) {
        table.uuid('rating_id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.uuid('user_id').notNullable().references('user_id').inTable('user').onDelete('CASCADE');
        table.uuid('show_id').references('show_id').inTable('show').onDelete('CASCADE');
        table.uuid('episode_id').references('episode_id').inTable('episode').onDelete('CASCADE');
        table.integer('score').notNullable();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      });
    };
    

/**
 * @param {Knex} knex
 * @returns {Promise<void>}
 */
export const down = (knex: Knex): Promise<void> =>{
    return knex.schema.dropTable('rating');
};

