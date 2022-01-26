const seedCategories = require('./category-seeds');
const seedProducts = require('../../../uncc-virt-bo-fsf-pt-10-2021-u-b/13-ORM/02-Challenge/Develop/seeds/product-seeds');
const seedTags = require('../../../uncc-virt-bo-fsf-pt-10-2021-u-b/13-ORM/02-Challenge/Develop/seeds/tag-seeds');
const seedProductTags = require('../../../uncc-virt-bo-fsf-pt-10-2021-u-b/13-ORM/02-Challenge/Develop/seeds/product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
