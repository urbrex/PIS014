'use strict';
module.exports = (sequelize, DataTypes) => {
  const Elo = sequelize.define('Elo', {
    playerId: DataTypes.INTEGER,
    sportId: DataTypes.INTEGER,
    elo: DataTypes.INTEGER
  }, {});
  Elo.associate = function(models) {
    // associations can be defined here
  };
  return Elo;
};