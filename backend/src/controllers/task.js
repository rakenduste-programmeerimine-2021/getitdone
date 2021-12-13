const db = require("../db");

exports.listTasks = async (req, res) => {
    const tasks = await db.manyOrNone("SELECT * FROM tasks");
    res.status(200).json({ data: tasks });
  };

  exports.createTask = async ({ body }, res) => {
    // API requirements {"event_id":"test", "task_name":"test", "task_deadline":"2021-1-17", "task_detail":"test", "task_image_url":"url"}    
    let taskQuery = await db.one(
       "INSERT INTO tasks(task_name, event_id, task_deadline, task_details, task_image_url) VALUES (${task_name}, ${event_id}, ${task_deadline}, ${task_details}, ${task_image_url}) RETURNING task_id",
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

exports.getTaskDetails = async ({body}, res) => {
  //API requirements {"task_id":"uuid"}
  const taskDetails = await db.one("Select * From tasks Where task_id = ${task_id}",
  body
  );
  console.log(taskDetails);
  res.status(200).send(taskDetails);
};


exports.changeTaskDetails = async ({body}, res) => {
  //API requirements {"task_id":"uuid", "task_name":"test","task_deadline":"2021-12-17" ,"task_image_url":"url", "task_details":"details"}
  await db.any("Update tasks Set task_name = ${task_name},  task_deadline = ${task_deadline}, task_image_url = ${task_image_url}, task_details = ${task_details} Where task_id = ${task_id}", 
  body);

  res.status(200).send();
};

exports.getEventTasks = async ({body}, res) => {
  	 //API requirements {"event_id":"uuid"}
     const tasks = {};
     tasks.eventTasks = await db.any("Select * From tasks Where event_id = ${event_id}", 
     body
     );
     console.log(tasks);
     res.status(200).send(tasks);
};

// task amount in event
// task done status boolean
///complete task endpoint

exports.completeTask = async ({body}, res) => {
  //API requirements {"task_id":"uuid", "user_id":"uuid"}
  console.log(body);
  await db.any("Update tasks Set task_completed_by = ${user_id} Where task_id = ${task_id}", 
  body
  );
  res.status(200).send();
};

