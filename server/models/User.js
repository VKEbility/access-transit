const knex = require('../db/knex');
const authUtils = require('../utils/auth-utils');

class User {
  #passwordHash = null; // a private property

  // This constructor is NOT how a controller creates a new user in the database.
  // Think of it more like a formatter function. It is used by each of the User 
  // static methods to hide the hashed password of users before sending user data 
  // to the client. Since we want to keep the #passwordHash property private, we 
  // provide the isValidPassword instance method as a way to indirectly access it.
  constructor({ id, username, password_hash, email, language }) {
    this.id = id;
    this.username = username;
    this.#passwordHash = password_hash;
    this.email = email;
    this.language = language;
  }

  // This instance method takes in a plain-text password and returns true if it matches
  // the User instance's hashed password. Can be used by controllers.
  isValidPassword = async (password) => (
    authUtils.isValidPassword(password, this.#passwordHash)
  )

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

  // Same as above but uses the email to find the user
  static async findByEmail(email) {
    const query = `SELECT * FROM users WHERE email = ?`;
    const result = await knex.raw(query, [email]);
    const rawUserData = result.rows[0];
    return rawUserData ? new User(rawUserData) : null;
  }

  static async findByUsername(username) {
    const query = `SELECT * FROM users WHERE username = ?`;
    const result = await knex.raw(query, [username]);
    const rawUserData = result.rows[0];
    return rawUserData ? new User(rawUserData) : null;
  }

  // Hashes the given password and then creates a new user
  // in the users table. Returns the newly created user, using
  // the constructor to hide the passwordHash. 
  static async create(username, password, email, language) {
    // hash the plain-text password using bcrypt before storing it in the database
    const passwordHash = await authUtils.hashPassword(password);

    const query = `INSERT INTO users (username, password_hash, email, language)
      VALUES (?, ?, ?, ?) RETURNING *`;
    const result = await knex.raw(query, [username, passwordHash, email, language]);
    const rawUserData = result.rows[0];
    return new User(rawUserData);
  }

  // Updates the user that matches the given id with a new username.
  // Returns the modified user, using the constructor to hide the passwordHash. 
  static async update(id, username = null, password = null, email = null) {
    const fields = [], values = [];

    if (username) {
      fields.push("username=?");
      values.push(username);
    }

    if (password) {
      const passwordHash = await authUtils.hashPassword(password);
      fields.push("password_hash=?");
      values.push(passwordHash);
    }

    if (email) {
      fields.push("email=?");
      values.push(email);
    }
    fields.push("updated_at=CURRENT_TIMESTAMP");
    values.push(id);

    const query = `
      UPDATE users
      SET ${fields.join(", ")}
      WHERE id=?
      RETURNING *
    `;
    const result = await knex.raw(query, values)
    const rawUpdatedUser = result.rows[0];
    return rawUpdatedUser ? new User(rawUpdatedUser) : null;
  }

  static async updateLanguage(userId, selectedLanguage) {
    const query = `
      UPDATE users
      SET language=?, updated_at=CURRENT_TIMESTAMP
      WHERE id=?
      RETURNING *
    `;
    const result = await knex.raw(query, [selectedLanguage, userId]);
    const updatedUser = result.rows[0];
    return updatedUser ? new User(updatedUser) : null;
  }

  static async deleteUser(id) {
    return knex('users').where({ id }).del();
  }

  static async deleteAll() {
    return knex('users').del()
  }
}

module.exports = User;
