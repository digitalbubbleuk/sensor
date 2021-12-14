
exports.up = function(knex) {
  return knex.schema
    .createTable('roadcondition', function (table) {
      table.increments('rc_id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('roadcondition')
};
