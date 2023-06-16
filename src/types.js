/**
 * @typedef CreatableUser Expected body of the /users POST endpoint
 *
 * @property {string} name
 * @property {string} email
 * @property {string} cpf
 * @property {string} telephone
 * @property {string} password
 * @property {("TUTOR"|"DOGWALKER")} role
}
 */

/**
 * @typedef Login Expected body of the /generate-token POST endpoint
 *
 * @property {string} email
 * @property {string} password
 */

/**
 * @typedef LoginResponse Expected response from the /generate-token POST endpoint
 *
 * @property {string} name
 * @property {string} email
 * @property {string} telephone
 * @property {string} id
 * @property {string} role
 * @property {string} createdAt
 * @property {string} cpf
 * @property {string} addresses
 */

/**
 * @typedef Trip
 *
 * @property {string} walker
 * @property {string} time
 * @property {number} slots
 */