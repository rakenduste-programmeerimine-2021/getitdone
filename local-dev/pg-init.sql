
 - sellega lisab uuid andmetüübi
CREATE EXTENSION "uuid-ossp";

CREATE TABLE users (
    user_id uuid DEFAULT uuid_generate_v4(),
    user_name TEXT,
    user_email TEXT,
    user_password_hash TEXT,
    user_profile_image_url TEXT,
    user_details TEXT,
    PRIMARY KEY (user_id)
);

CREATE TABLE events(
    event_id uuid DEFAULT uuid_generate_v4(),
    event_name TEXT,
    event_image_url TEXT,
    event_details TEXT,
    event_members TEXT [],
    event_tasks TEXT [],
    PRIMARY KEY (event_id),
);

CREATE TABLE events_tasks(
    event_id uuid not null,
    task_id uuid not null,
    FOREIGN KEY (event_id) REFERENCES events (event_id),
    FOREIGN KEY (task_id) REFERENCES tasks (task_id)
);

CREATE TABLE tasks(
    task_id uuid DEFAULT uuid_generate_v4(),
    task_name TEXT,
    task_deadline TIMESTAMP,
    task_details TEXT,
    task_image_url TEXT,
    task_completed_by TEXT,
    task_members TEXT [],
    PRIMARY KEY (task_id),
);