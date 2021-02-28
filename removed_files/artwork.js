'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artwork = sequelize.define('Artwork', {
    artistId: DataTypes.INTEGER,
    imageUrl: DataTypes.INTEGER,
    title: DataTypes.INTEGER,
    height: DataTypes.FLOAT,
    width: DataTypes.FLOAT,
    depth: DataTypes.FLOAT,
    measurementUnit: DataTypes.STRING,
    seconds: DataTypes.INTEGER,
    year: DataTypes.INTEGER
  }, {});
  Artwork.associate = function(models) {
    // associations can be defined here
  };
  return Artwork;
};