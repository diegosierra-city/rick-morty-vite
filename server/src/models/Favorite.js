const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false,
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      status: {
         type: DataTypes.ENUM('Alive','Dead','unknow'),
         allowNull: false,
      },
      species: {
         type: DataTypes.STRING,
         allowNull: false
      },
      gender: {
         type: DataTypes.ENUM('Male','Female','Genderless','unknow'),
         allowNull: false,
         defaultValue: 'unknow'
      },
      origin: {
         type: DataTypes.JSON,
         allowNull: false
      },
      image: {
         type: DataTypes.STRING,
         allowNull: false
      }
   }, { timestamps: false });
};
