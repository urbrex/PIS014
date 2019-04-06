'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrganizatorsList = sequelize.define('OrganizatorsList', {
    playerId: DataTypes.INTEGER,
    tournamentId: DataTypes.INTEGER
  }, {});
  OrganizatorsList.associate = function(models) {
    // associations can be defined here
  };
  return OrganizatorsList;
};