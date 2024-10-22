/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('hero_actions').del();

  const accessibilityStatus = await knex('accessibility_status').select('id', 'user_id');

  const heroActions = accessibilityStatus
    .filter(status => status.user_id !== null) //filtering out null user_ids as these were updated by the mta
    .map(status => ({
      user_id: status.user_id,
      accessibility_status_id: status.id
    }));

  if (heroActions.length > 0) { //only inserting if there are valid entries
    await knex('hero_actions').insert(heroActions);
  }
};
