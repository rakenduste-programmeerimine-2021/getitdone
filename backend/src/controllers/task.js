const db = require("../db");

exports.listTasks = async (req, res) => {
    const tasks = await db.manyOrNone("SELECT * FROM tasks");
    res.status(200).json({ data: tasks });
  };