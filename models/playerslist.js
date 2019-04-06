'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlayersList = sequelize.define('PlayersList', {
    playerId: DataTypes.INTEGER,
    tournamentId: DataTypes.INTEGER,
    confirmed: DataTypes.BOOLEAN
  }, {});
  PlayersList.associate = function(models) {
    // associations can be defined here
  };
  return PlayersList;
};