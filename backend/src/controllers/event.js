const db = require("../db");

exports.listEvents = async (req, res) => {
    const events = await db.manyOrNone("SELECT * FROM events");
    res.status(200).json({ data: events });
  };