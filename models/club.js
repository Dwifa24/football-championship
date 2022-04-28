'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class club extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      club.belongsToMany(models.league, {through: models.leagueClub})
      club.hasMany(models.player)
    }
  };
  club.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Name can not be empty."
        }
      }
    },
    founded: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Status can not be empty."
        }
      }
    },
    manager: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Status can not be empty."
          }
        }
    },
    stadium: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    },
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'club',
  });
  return club;
};