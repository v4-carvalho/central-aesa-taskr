require("dotenv/config");
const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const globalForPrisma = globalThis;

module.exports = globalForPrisma.__prisma || (globalForPrisma.__prisma = new PrismaClient({ adapter }));
