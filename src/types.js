/**
 * @typedef {("TUTOR"|"DOGWALKER")} UserRoles All possible application user roles.
 */

/**
 * @typedef CreatableUser Expected body of the /users POST endpoint
 *
 * @property {string} name
 * @property {string} email
 * @property {string} cpf
 * @property {string} telephone
 * @property {string} password
 * @property {UserRoles} role
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
 * @property {Array<Address>} addresses
 */

/**
 * @typedef Trip
 *
 * @property {string} id
 * @property {string} walkerId
 * @property {string} duration
 * @property {number} slots
 * @property {string} dogType
 * @property {string} dogs
 * @property {string} startDate
 * @property {string} addressId
 */

/**
 * @typedef Dog
 *
 * @property {string} id
 * @property {string} createdAt
 * @property {string} deletedAt
 * @property {string} name
 * @property {string} breed
 * @property {string} size
 * @property {string} birthDate
 * @property {string} temperament
 * @property {string} tutorId
 */

/**
 * @typedef Address
 *
 * @property {string}   id
 * @property {string}    street
 * @property {number}    number
 * @property {string}    [complement]
 * @property {string}    city
 * @property {string}    district
 * @property {string}   state
 * @property {string}    country
 * @property {string}   zipCode
 * @property {string}   createdAt
 * @property {string}   [deletedAt]
 */
