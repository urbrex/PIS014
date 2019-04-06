'use strict';
module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    team1Id: DataTypes.INTEGER,
    team2Id: DataTypes.INTEGER,
    score1: DataTypes.INTEGER,
    score2: DataTypes.INTEGER,
    koloId: DataTypes.INTEGER
  }, {});
  Match.associate = function(models) {
    // associations can be defined here
  };
  return Match;
};