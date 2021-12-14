
exports.up = function(knex) {
  return knex.schema
    .table('roadcondition', function (table) {
      table.datetime('timestamp').defaultTo(knex.fn.now()).alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('roadcondition', function (table) {
      table.string('timestamp', 255).defaultTo().alter();
    })
};
