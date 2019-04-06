'use strict';
module.exports = (sequelize, DataTypes) => {
  const RoundsList = sequelize.define('RoundsList', {
    matchId: DataTypes.INTEGER,
    tournamentId: DataTypes.INTEGER,
    round: DataTypes.INTEGER
  }, {});
  RoundsList.associate = function(models) {
    // associations can be defined here
  };
  return RoundsList;
};