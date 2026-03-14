const prisma = require('../database/prismaClient');

exports.createSale = async (data) => {
  return prisma.sale.create({ data });
};

exports.getAllSales = async () => {
  return prisma.sale.findMany();
};

exports.getSaleById = async (id) => {
  return prisma.sale.findUnique({ where: { id } });
};

exports.updateSale = async (id, data) => {
  return prisma.sale.update({ where: { id }, data });
};

exports.deleteSale = async (id) => {
  return prisma.sale.delete({ where: { id } });
};
