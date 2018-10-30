module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('profile', {
    address: {
      type: DataTypes.STRING,
      required: true,
      unique: true,
      set(val) {
        this.setDataValue('address', val.toLowerCase());
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    name: DataTypes.STRING,
    website: DataTypes.STRING,
    org: DataTypes.STRING,
    picture: DataTypes.STRING,
  });

  return Profile;
};
