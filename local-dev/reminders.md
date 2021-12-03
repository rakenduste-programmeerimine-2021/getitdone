## Postgres

### docker

docker-compose up --build -d

### to access postgres in cli

    open cli from docker desktop
    commands:
        su postgres
        psql

### check database

\l - databases
\dt - tables in database

### cd to database

\c getitdone

### table generation

CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; - sellega lisab uuid andmetüübi

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
PRIMARY KEY (event_id)
);

CREATE TABLE tasks(
task_id uuid DEFAULT uuid_generate_v4(),
task_name TEXT,
task_deadline TIMESTAMP,
task_details TEXT,
task_image_url TEXT,
task_completed_by TEXT,
task_members TEXT [],
PRIMARY KEY (task_id)
);

CREATE TABLE contacts (
contact_id uuid DEFAULT uuid_generate_v4 (),
first_name VARCHAR NOT NULL,
last_name VARCHAR NOT NULL,
email VARCHAR NOT NULL,
phone VARCHAR,
PRIMARY KEY (contact_id)
);

## express

### start outside of docker

set DEBUG=backend:\* & npm start
