const db = require("../db");

exports.listTasks = async (req, res) => {
    const tasks = await db.manyOrNone("SELECT * FROM tasks");
    res.status(200).json({ data: tasks });
  };

  exports.createTask = async ({ body }, res) => {
    // API requirements {"event_id":"test", "task_name":"test"}    
    let taskQuery = await db.one(
       "INSERT INTO tasks(task_name) VALUES (${task_name}) RETURNING task_id",
        body
    );
    //TODO make this better
    body.task_id = taskQuery.task_id;
    console.log(body);
    await db.any(
      "UPDATE events SET event_tasks = array_append(event_tasks, ${task_id}) WHERE event_id = ${event_id}",
      body
    );
    res.status(200).send();
};