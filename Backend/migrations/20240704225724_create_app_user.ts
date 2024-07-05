import type { Knex } from "knex";

/**
 * @param {Knex} knex
 * @returns {Promise<void>}
 */
export const up = (knex: Knex): Promise<void> =>{
  return knex.schema.createTable('user', function (table) {
    table.uuid('user_id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.text('username').notNullable().unique();
    table.text('email').notNullable().unique();
    table.text('password').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 * @returns {Promise<void>}
 */
export const down = (knex: Knex): Promise<void> =>{
  return knex.schema.dropTable('user');
};
