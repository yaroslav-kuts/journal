'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments();
      table.text('text', 'mediumtext').notNullable();
      table.integer('user_id').notNullable().unsigned();
      table.timestamps();
      table.foreign('user_id').references('users.id');
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostSchema
