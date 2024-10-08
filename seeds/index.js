const sequelize = require('../config/connection');
const userSeeds = require('./userSeeds');
const postSeeds = require('./postSeeds');
const commentSeeds = require('./commentSeeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await userSeeds(); 
  await postSeeds();
  await commentSeeds();
  console.log('All seeds have been planted!');
  process.exit(0);
};

seedAll();
