const knex = require('../db/knex');
// import AccessibleStations from '../../frontend/src/components/AccessibleStations';

class Favorite {

  static async addFav(user_id, rt_stop_id, stop_name, gtfs_lat, gtfs_lon) {
    // dynamically inserting values into a query to avoid SQL injection attacks 
    const query = `INSERT INTO favorites (user_id, rt_stop_id, stop_name, gtfs_lat, gtfs_lon) 
                  VALUES (?, ?, ?, ?, ?) RETURNING *;`
    // console.log(user_id, rt_stop_id, stop_name, gtfs_lat, gtfs_lon);
    const result = await knex.raw(query, [user_id, rt_stop_id, stop_name, gtfs_lat, gtfs_lon]);
    // console.log("ROWS:", result.rows[0]);
    return result.rows[0];
  }

  static async listFavs(user_id) {
    const query = `SELECT * FROM favorites WHERE user_id = ?;`;
    const result = await knex.raw(query, [user_id]);
    // console.log("ROWS:", result.rows[0]);
    return result.rows;
  }

  static async removeFav(user_id, rt_stop_id) {
    const query = `DELETE FROM favorites WHERE user_id = ? AND rt_stop_id = ?;`;
    const result = await knex.raw(query, [user_id, rt_stop_id]);
    // console.log("DELETE:", result.rows[0]);
    return result.rows[0];
  }
}

module.exports = Favorite;
