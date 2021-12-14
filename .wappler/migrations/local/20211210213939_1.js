
exports.up = function(knex) {
  return knex.schema
    .createTable('roadcondition', function (table) {
      table.increments('id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('roadcondition')
};
