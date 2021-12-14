
exports.up = function(knex) {
  return knex.schema
    .table('roadcondition', function (table) {
      table.renameColumn('id', 'rc_id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('roadcondition', function (table) {
      table.renameColumn('rc_id', 'id');
    })
};
