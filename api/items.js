const prisma = require("../lib/prisma");

const FIELDS = ["kind","client","title","status","side","owner","notes","due","start","date",
  "platform","variable","objective","budget","kpi","participants","summary","decisions","next"];

const pick = (b = {}) => Object.fromEntries(FIELDS.filter(k => k in b).map(k => [k, String(b[k] ?? "")]));

module.exports = async (req, res) => {
  try {
    const { id } = req.query;
    if (req.method === "GET") {
      const rows = await prisma.item.findMany({ orderBy: { createdAt: "asc" } });
      return res.status(200).json(rows);
    }
    if (req.method === "POST") {
      const row = await prisma.item.create({ data: pick(req.body) });
      return res.status(201).json(row);
    }
    if (!id) return res.status(400).json({ error: "id obrigatorio" });
    if (req.method === "PUT" || req.method === "PATCH") {
      const row = await prisma.item.update({ where: { id }, data: pick(req.body) });
      return res.status(200).json(row);
    }
    if (req.method === "DELETE") {
      await prisma.item.delete({ where: { id } });
      return res.status(204).end();
    }
    res.setHeader("Allow", "GET, POST, PUT, PATCH, DELETE");
    return res.status(405).end();
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "erro interno" });
  }
};
