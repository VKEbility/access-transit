/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('favorites').del();

  const users = await knex('users').select('id');

  const stops = [
    { rt_stop_id: 'R36S', stop_name: '36 St', gtfs_lon: -74.00355056, gtfs_lat: 40.65514273 },
    { rt_stop_id: 'R31N', stop_name: 'Atlantic Av-Barclays Ctr', gtfs_lon: -73.97881025, gtfs_lat: 40.68366917 },
    { rt_stop_id: '635S', stop_name: '14 St-Union Sq', gtfs_lon: -73.98995283, gtfs_lat: 40.73466963 },
    { rt_stop_id: 'F16S', stop_name: 'East Broadway', gtfs_lon: -73.99016867, gtfs_lat: 40.71371547 },
    { rt_stop_id: 'A19S', stop_name: '96 St', gtfs_lon: -73.96469992, gtfs_lat: 40.79164157 },
    { rt_stop_id: 'E01S', stop_name: 'World Trade Center', gtfs_lon: -74.00978285, gtfs_lat: 40.71258232 },
    { rt_stop_id: 'A27S', stop_name: '42 St-Port Authority Bus Terminal', gtfs_lon: -73.98973699, gtfs_lat: 40.75730552 },
    { rt_stop_id: 'G10S', stop_name: '63 Dr-Rego Park', gtfs_lon: -73.86160183, gtfs_lat: 40.72984927 },
    { rt_stop_id: 'R30', stop_name: 'Fulton St', gtfs_lon: -74.00951305, gtfs_lat: 40.71036999 },
    { rt_stop_id: 'L03/R20', stop_name: 'Delancey St-Essex St', gtfs_lon: -73.98811822, gtfs_lat: 40.71860777 },
    { rt_stop_id: 'F15N', stop_name: 'Jamaica-179 St', gtfs_lon: -73.98811822, gtfs_lat: 40.71860777 },
    { rt_stop_id: 'A15', stop_name: 'Coney Island-Stillwell Av', gtfs_lon: -73.96469992, gtfs_lat: 40.79164157 },
    { rt_stop_id: 'A31/L01', stop_name: '145 St', gtfs_lon: -73.95035576, gtfs_lat: 40.82655319 },
    { rt_stop_id: 'F15S', stop_name: 'Dyckman St', gtfs_lon: -73.92553452, gtfs_lat: 40.86052951 },
    { rt_stop_id: 'F16N', stop_name: 'Brooklyn Bridge-City Hall', gtfs_lon: -73.98995283, gtfs_lat: 40.73466963 },
    { rt_stop_id: 'L03', stop_name: 'Brooklyn Bridge-City Hall', gtfs_lon: -73.98995283, gtfs_lat: 40.73466963 },
  ];

  const favorites = [];

  users.forEach(user => {
    const randomNum = Math.floor(Math.random() * (9 - 2 + 1)) + 2; //getting a random num between 2 and 9
    const shuffledStops = [...stops].sort(() => 0.5 - Math.random()); //shuffling the arr by sorting randomly
    const userFavorites = shuffledStops.slice(0, 9).map(stop => ({ //ensuring each user has at least 2 to 9 favorite stations
      user_id: user.id,
      rt_stop_id: stop.rt_stop_id,
      stop_name: stop.stop_name,
      gtfs_lon: stop.gtfs_lon,
      gtfs_lat: stop.gtfs_lat
    }));

    favorites.push(...userFavorites);
  });

  if (favorites.length > 0) {
    await knex('favorites').insert(favorites);
  };
};
