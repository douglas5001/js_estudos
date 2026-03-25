const prisma = require('../database/prisma');

class UserService {
  async getAll() {
    return await prisma.user.findMany();
  }

  async getById(id) {
    return await prisma.user.findUnique({
      where: { id: parseInt(id) }
    });
  }

  async create(data) {
    return await prisma.user.create({
      data
    });
  }

  async update(id, data) {
    return await prisma.user.update({
      where: { id: parseInt(id) },
      data
    });
  }

  async delete(id) {
    return await prisma.user.delete({
      where: { id: parseInt(id) }
    });
  }
}

module.exports = new UserService();
