const prisma = require('../database/prismaClient');

exports.createAutoPart = async (data) => {
  return prisma.autoPart.create({ data });
};

exports.getAllAutoParts = async () => {
  return prisma.autoPart.findMany();
};

exports.getAutoPartById = async (id) => {
  return prisma.autoPart.findUnique({ where: { id } });
};

exports.updateAutoPart = async (id, data) => {
  return prisma.autoPart.update({ where: { id }, data });
};

exports.deleteAutoPart = async (id) => {
  return prisma.autoPart.delete({ where: { id } });
};
