const knex = require('../db/knex');
// import AccessibleStations from '../../frontend/src/components/AccessibleStations';

class Favorite {
  
  static async addFav(user_id, gtfs_complex_id, rt_stop_id, stop_name, gtfs_lon, gtfs_lat) { 
    // dynamically inserting values into a query to avoid SQL injection attacks 
    const query = `INSERT INTO favorites (user_id, gtfs_complex_id, rt_stop_id, stop_name, gtfs_lon, gtfs_lat, created_at, updated_at) 
                  VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW()) RETURNING *;` 
    // 
    console.log(user_id, gtfs_complex_id, rt_stop_id, stop_name, gtfs_lon, gtfs_lat)
    const result = await knex.raw(query, [user_id, gtfs_complex_id, rt_stop_id, stop_name, gtfs_lon, gtfs_lat]);
    console.log("ROWS:", result.rows[0]);
    return result.rows[0];
  }

  static async listFavs(user_id) {
    const query = `SELECT * FROM favorites WHERE user_id = ?;`;
    const result = await knex.raw(query, [user_id]);
    console.log("ROWS:", result.rows[0]);
    return result.rows[0];
  }

  static async removeFav(user_id, gtfs_complex_id) {
    const query = `DELETE FROM favorites WHERE user_id = ? AND gtfs_complex_id = ?;`;
    const result = await knex.raw(query, [user_id, gtfs_complex_id]);
    console.log("DELETE:", result.rows[0]);
    return result.rows[0];
  }
}


////////////////
// TESTING 
////////////////
// const main = async () => {
//   // properties: user_id, gtfs_complex_id, rt_stop_id, stop_name, gtfs_lon, gtfs_lat 
//   const addingLoc1 = await Favorite.addFav(1, 22, 35, "36st", 98, 73);
//   const addingLoc2 = await Favorite.addFav(2, 47, 89, "somewhere-st", 56, 63);
//   const addingLoc3 = await Favorite.addFav(3, 37, 67, "somewhere-st", 88, 41);

//   const listingFavs = await Favorite.listFavs(); 
//   const deleteALoc = await Favorite.removeFav(47); // addingLoc2 

//   console.log('Location 1:', addingLoc1);
//   console.log('Location 2:', addingLoc2);
//   console.log('Location 3:', addingLoc3);
//   console.log('Favorites:', listingFavs);
//   console.log('Deleting:', deleteALoc);
//   console.log('Favorites:', listingFavs);

//   knex.destroy();
// }

// main();


module.exports = Favorite;
