const knex = require('../db/knex');
const authUtils = require('../utils/auth-utils');

class User {
  #passwordHash = null; // a private property

  // This constructor is NOT how a controller creates a new user in the database.
  // Think of it more like a formatter function. It is used by each of the User 
  // static methods to hide the hashed password of users before sending user data 
  // to the client. Since we want to keep the #passwordHash property private, we 
  // provide the isValidPassword instance method as a way to indirectly access it.
  constructor({ id, username, password_hash }) {
    this.id = id;
    this.username = username;
    this.#passwordHash = password_hash;
  }

  // This instance method takes in a plain-text password and returns true if it matches
  // the User instance's hashed password. Can be used by controllers.
  isValidPassword = async (password) => (
    authUtils.isValidPassword(password, this.#passwordHash)
  );



  // Fetches ALL users from the users table, uses the constructor
  // to format each user (and hide their password hash), and returns.
  static async list() {
    const query = `SELECT * FROM users`;
    const result = await knex.raw(query);
    return result.rows.map((rawUserData) => new User(rawUserData));
  }

  // Fetches A single user from the users table that matches
  // the given user id. If it finds a user, uses the constructor
  // to format the user and returns or returns null if not.
  static async find(id) {
    const query = `SELECT * FROM users WHERE id = ?`;
    const result = await knex.raw(query, [id]);
    const rawUserData = result.rows[0];
    return rawUserData ? new User(rawUserData) : null;
  }


  // Same as above but uses the username to find the user
  static async findByUsername(username) {
    const query = `SELECT * FROM users WHERE username = ?`;
    const result = await knex.raw(query, [username]);
    const rawUserData = result.rows[0];
    return rawUserData ? new User(rawUserData) : null;
  }

  // Hashes the given password and then creates a new user
  // in the users table. Returns the newly created user, using
  // the constructor to hide the passwordHash. 
  static async create(username, password) {
    // hash the plain-text password using bcrypt before storing it in the database
    const passwordHash = await authUtils.hashPassword(password);

    const query = `INSERT INTO users (username, password_hash)
      VALUES (?, ?) RETURNING *`;
    const result = await knex.raw(query, [username, passwordHash]);
    const rawUserData = result.rows[0];
    return new User(rawUserData);
  }

  // Updates the user that matches the given id with a new username.
  // Returns the modified user, using the constructor to hide the passwordHash. 
  static async update(id, username) {
    const query = `
      UPDATE users
      SET username=?
      WHERE id=?
      RETURNING *
    `
    const result = await knex.raw(query, [username, id])
    const rawUpdatedUser = result.rows[0];
    return rawUpdatedUser ? new User(rawUpdatedUser) : null;
  };

  static async deleteAll() {
    return knex('users').del()
  }

  static async updateLanguagePreference(userId, selectedLanguage) {
    // SQL query to update the user's language preference
    const query = `
      UPDATE user
      SET language_preference = ?
      WHERE user_id = ?;
    `;
  
    // Execute the raw query with the user's selected language and user ID
    const result = await knex.raw(query, [selectedLanguage, userId]);
  
    // Check if the update was successful
    return result.rowCount > 0; // true if at least one row was updated
  }

  static async filterAccessibleStations({ hasElevator, hasEscalator, wheelchairAccessible }) {
    // SQL query with dynamic filtering based on accessibility preferences
    const query = `
      SELECT * 
      FROM stations
      WHERE is_operational = 1
        AND (
          (has_elevator = ?)
          OR (? = false AND has_escalator = ?)
          OR (? = false AND wheelchair_accessible = ?)
        );
    `;
  
    // Execute the raw query with the user's preferences
    const result = await knex.raw(query, [
      hasElevator, 
      hasElevator, // for disabling escalator if elevator is selected
      hasEscalator, 
      hasElevator, // for disabling wheelchair accessible if elevator is selected
      wheelchairAccessible
    ]);
  
    // Return the list of filtered stations
    return result.rows;
  }

  static async listByPreferences({ hasElevator, hasEscalator, wheelchairAccessible }) {
    // Initialize the base query
    const query = knex('stations').where('is_operational', 1);
  
    // Add conditions based on user's preferences
    if (hasElevator) {
      query.andWhere('has_elevator', true);
    }
    if (hasEscalator) {
      query.andWhere('has_escalator', true);
    }
    if (wheelchairAccessible) {
      query.andWhere('wheelchair_accessible', true);
    }
  
    // Execute the query and return the results
    const result = await query;
    return result;
  }

  static async isUserSignedIn(username) {
    // SQL query to check if the user is signed in
    const query = `SELECT logged_in FROM users WHERE username = ?`;
  
    // Execute the query with the provided username
    const result = await knex.raw(query, [username]);
  
    // Extract the logged-in status
    const isLoggedIn = result.rows[0]?.logged_in;
  
    // Return true if the user is logged in, otherwise false
    return isLoggedIn === true;
  }
  /// When a user clicks on an icon, the switch switches
  /// frontend is going 
}

module.exports = User;
