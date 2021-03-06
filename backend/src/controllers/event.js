const db = require("../db");

exports.listEvents = async (req, res) => {
    const events = await db.manyOrNone("SELECT * FROM events");
    res.status(200).json({ data: events });
};

exports.createEvent = async ({ body }, res) => {
    // API requirements {"name":"test", "user_id":"test", "event_details": "test", "event_image_url":"url" }    
    await db.any(
        "INSERT INTO events(event_name, event_members, event_details, event_image_url) VALUES (${name},ARRAY [${user_id}], ${event_details}, ${event_image_url})",
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

exports.getEventDetails = async ({body}, res) => {
    //API requirements {"event_id":"uuid"}
    const eventDetails = await db.one("Select * From events Where event_id = ${event_id}",
    body
    );
    console.log(eventDetails);
    res.status(200).send(eventDetails);
  };
  
  
  exports.changeEventDetails = async ({body}, res) => {
    //API requirements {"event_id":"uuid", "event_name":"test","event_image_url":"url", "event_details":"details"}
    await db.any("Update events Set event_name = ${event_name}, event_image_url = ${event_image_url}, event_details = ${event_details} Where event_id = ${event_id}", 
    body);
  
    res.status(200).send();
  };

  exports.getTaskAmount = async ({body}, res) => {
    //API requirements {"event_id":"uuid"}
    const amounts = {};
        amounts.taskAmount = await db.one("Select cardinality(event_tasks) From events Where event_id = ${event_id}", body);


    res.status(200).send(amounts);
  };

  exports.getUserEvents = async ({body}, res) => {
    //API requirements {"user_id":"uuid"}
    const events = {};
    events.userEvents = await db.any("Select * From events Where ${user_id} = Any(event_members)", 
    body
    );
    res.status(200).send(events);

  };

  exports.deleteEvent = async ({body}, res) => {
    //API requirements {"event_id":"uuid"}
    await db.any("Delete From tasks Where event_id = ${event_id}",
    body
    );
    await db.any("Delete From events Where event_id = ${event_id}",
    body
    );
    res.status(200).send();
  };

