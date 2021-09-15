const seedUsers = require('./userData');
const seedRecipes = require('./recipeData');

const sequelize = require('../config/connection');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  await seedRecipes();
  console.log('\n----- RECIPES SEEDED -----\n');

  process.exit(0);
};

seedDatabase();
