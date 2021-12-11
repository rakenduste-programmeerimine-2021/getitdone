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

exports.addMember = async ({ body }, res) => {
    // API requirements {"event_id":"test", "user_id":"test"} 
    await db.any(
        "UPDATE events SET event_members = array_append(event_members, ${user_id}) WHERE event_id = ${event_id}",
        body
    );
    res.status(200).send();
};

exports.addTask = async ({ body }, res) => {
    //TODO this function is redundant but im leaving it here anyway..
    // API requirements {"event_id":"test", "task_id":"test"} 
    await db.any(
        "UPDATE events SET event_tasks = array_append(event_tasks, ${task_id}) WHERE event_id = ${event_id}",
        body
    );
    res.status(200).send();
};

