// src/models/User.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createUser(firstName, lastName, phoneNumber, emailAddress) {
  try {
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        phoneNumber,
        emailAddress,
      },
    });
    return user;
  } catch (error) {
    throw new Error('Error creating user');
  }
}

async function getUserById(userId) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    return user;
  } catch (error) {
    throw new Error('Error fetching user');
  }
}

async function updateUser(userId, data) {
  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data,
    });
    return updatedUser;
  } catch (error) {
    throw new Error('Error updating user');
  }
}

async function deleteUser(userId) {
  try {
    await prisma.user.delete({
      where: {
        id: userId,
      },
    });
    return 'User deleted successfully';
  } catch (error) {
    throw new Error('Error deleting user');
  }
}

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
