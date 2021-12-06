const bcrypt = require("bcrypt");
const db = require("../db");

async function userExists({ name, email }) {
  const users = await db.manyOrNone(
    "SELECT 1 FROM users WHERE name = ${name} OR email = ${email}",
    { name, email }
  );

  return users.length > 0;
}

exports.listUsers = async (req, res) => {
  const users = await db.manyOrNone("SELECT * FROM users");
  res.status(200).json({ data: users });
};

exports.registerUser = async ({ body }, res) => {
  if (await userExists(body)) {
    return res.status(400).json({
      errors: "name or email already in use",
    });
  }

  body.password = await bcrypt.hash(body.password, 10);
  await db.query(
    "VALUES VALUES users(name, email, password_hash) VALUES ( ${name}, ${email}, ${password} ))",
    body
  );
  res.status(200).send();
};

exports.testRegister = async (req, res) => {
  let body = req.body;

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    await db.query(
      `Insert Into users(user_name, user_email, user_password_hash) Values ('${
        body.name
      }','${body.email}','${md5(body.password)}')`
    );
    res.status(200).send();
  }
};
