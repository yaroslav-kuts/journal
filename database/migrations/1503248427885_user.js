'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments();
      table.string('firstname', 80).notNullable();
      table.string('lastname', 80).notNullable();
      table.string('email', 255).notNullable();
      table.string('password', 80).notNullable();
      table.string('code', 80).notNullable();
      table.boolean('verified');
      table.timestamps();
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
