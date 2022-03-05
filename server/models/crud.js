'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class crud extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  crud.init({
    hari: DataTypes.STRING,
    matakuliah: DataTypes.STRING,
    dosen: DataTypes.STRING,
    kelas: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'crud',
  });
  return crud;
};