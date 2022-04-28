'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class leagueClub extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      leagueClub.belongsTo(models.league)
      leagueClub.belongsTo(models.club)
    }
  };
  leagueClub.init({
    leagueId: DataTypes.INTEGER,
    clubId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'leagueClub',
  });
  return leagueClub;
};