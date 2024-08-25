const { User } = require('../models');

const userData = [
  {
    name: 'Alex',
    email: 'Alex@gmail.com',
    password: 'password12345',
  },
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password123',
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    password: 'password456',
  },
  {
    name: 'Amiko',
    email: 'amiko2k20@aol.com',
    password: 'password12345',
  }
];

const seedUsers = async () => {
  try {
    await User.bulkCreate(userData, {
      individualHooks: true,
    });
    console.log('Users seeded successfully');
  } catch (err) {
    console.error('Error seeding users:', err);
  }
};

module.exports = seedUsers;
