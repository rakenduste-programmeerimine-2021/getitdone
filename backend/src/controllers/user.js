const bcrypt = require("bcrypt");
const db = require("../db");
const jwt = require("jsonwebtoken");

async function userExists({ name, email }) {
  const users = await db.manyOrNone(
    "SELECT 1 FROM users WHERE user_name = ${name} OR user_email = ${email}",
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
  console.log(body.password, "so far so good");
  body.password = await bcrypt.hash(body.password, 10);
  console.log(body.password);
  await db.any(
    "INSERT INTO users(user_name, user_email, user_password_hash) VALUES (${name}, ${email}, ${password})",
    body
  );
  res.status(200).send();
};

exports.loginUser = async ({body}, res) => {
    
  try {
    const user = await db.any("Select * From users Where user_email = ${email}",
    body
    );
    console.log(body, user);
    if(!user) throw Error("User with this email does not exist");

    console.log(body.password, user[0].user_password_hash);
    const passwordMatch = await bcrypt.compare(body.password, user[0].user_password_hash);

    if(!passwordMatch) throw Error("Incorrect password");
    console.log(passwordMatch);
    const userTemplate = {
      id: user[0].user_id,
      name: user[0].user_name,
      email: user[0].user_email
    }
    console.log(userTemplate);
    console.log(process.env);
    const token = jwt.sign(userTemplate, process.env.JWT_SECRET);
    if (!token) throw Error("Something happened to token");
    console.log(token);
    res.status(200).json({
      token,
      ...userTemplate
    });
  }catch (e){
    res.status(400).json({ error: e.message })
  }


  
  
  
};

