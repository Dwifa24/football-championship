'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class league extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      league.belongsToMany(models.club, {through: models.leagueClub})
    }
  };
  league.init({
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
    level: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Status can not be empty."
          }
        }
    },
    description: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    },
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'league',
  });
  return league;
};