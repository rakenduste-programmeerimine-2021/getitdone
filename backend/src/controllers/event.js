const db = require("../db");

exports.listEvents = async (req, res) => {
    const events = await db.manyOrNone("SELECT * FROM events");
    res.status(200).json({ data: events });
  };

exports.createEvent = async ({ body }, res) => {
// API requirements {"name":"test", "user_id":"test"}    
  await db.any(
    "INSERT INTO events(event_name, event_members) VALUES (${name},ARRAY [${user_id}])",
    body
  );
  res.status(200).send();
};