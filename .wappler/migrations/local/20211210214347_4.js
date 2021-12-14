
exports.up = function(knex) {
  return knex.schema
    .table('roadcondition', function (table) {
      table.renameColumn('id', 'rc_id');
      table.string('timestamp');
      table.string('surf_temp');
      table.string('air_temp');
      table.string('surf_cond');
      table.string('friction');
      table.string('humidity');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('roadcondition', function (table) {
      table.renameColumn('rc_id', 'id');
      table.dropColumn('timestamp');
      table.dropColumn('surf_temp');
      table.dropColumn('air_temp');
      table.dropColumn('surf_cond');
      table.dropColumn('friction');
      table.dropColumn('humidity');
    })
};
