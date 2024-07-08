import type { Knex } from "knex";

/**
 * @param {Knex} knex
 * @returns {Promise<void>}
 */
export const up = (knex: Knex): Promise<void> =>{
    return knex.raw(`CREATE EXTENSION IF NOT EXISTS "pg_stat_statements";`)
};

/**
 * @param {Knex} knex
 * @returns {Promise<void>}
 */
export const down = (knex: Knex): Promise<void> =>{
    return knex.raw(`DROP EXTENSION IF EXISTS "pg_stat_statements";`)
};
