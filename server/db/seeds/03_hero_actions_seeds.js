/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('hero_actions').del();

  const accessibilityStatus = await knex('accessibility_status').select('user_id', 'id');

  const heroCount = {}; //keeping track of each user's hero count based on their contributions to updating accessibility statuses
  const heroActions = accessibilityStatus
    .filter(status => status.user_id !== null) //filtering out null user_ids as these were updated by the mta
    .reduce((hero, status) => { //accessibility_status table has many users, so for each user
      const userId = status.user_id; //id of the user who performed the action
      heroCount[userId] = (heroCount[userId] || 0) + 1; //cumulative count of actions taken by that user; incrementing it by 1 or init it to 1 when a user updates their first accessibility status; they just completed a status rescue!

      hero.push({
        user_id: userId,
        hero_count: heroCount[userId],
        accessibility_status_id: status.id,
      });

      return hero;
    }, []); //init hero accum as en empty arr; pushing each field entry as an obj

  if (heroActions.length > 0) { //only inserting if there are valid entries
    await knex('hero_actions').insert(heroActions);
  };
};