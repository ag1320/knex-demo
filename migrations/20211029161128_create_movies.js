
exports.up = function(knex) {
  return knex.schema.createTable('movies', table => {
      table.increments('id'); //adds an auto icrementing primary key
      table.string('title').notNullable();
      table.string('genre');
      table.date('release_date');
      table.timestamps(true, true); //adds created_at and updated_at
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('movies');  
};
