'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      player.belongsTo(models.club)
    }
  };
  player.init({
    back_number: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Name can not be empty."
          }
        }
      },  
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Name can not be empty."
        }
      }
    },
    nationality: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Status can not be empty."
        }
      }
    },
    born: {
        type: DataTypes.STRING,
    },
    height: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    },
    clubId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'player',
  });
  return player;
};