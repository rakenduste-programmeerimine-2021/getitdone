const jwt = require("jsonwebtoken");
const { body, validationResult } = require('express-validator');
const db = require("..db");
const cors = require("cors");
const md5 = require("md5");
const secret = "0832c1202da8d382318e329a7c133ea0";

let app = express();

app.post('/register',
    body('name').trim(),  
    body('email').isEmail().trim().normalizeEmail(),
    body('password').trim().isLength({ min: 7 }),
    async(req, res) => {
       let body = req.body;
       
      // Finds the validation errors in this request and wraps them in an object with handy functions
      const errors = validationResult(req);
      let query1 = await db.query(`Select name From users Where name = '${body.name}';`);
      let query2 = await db.query(`Select email From users Where name = '${body.email}';`);
    
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }else if(query1.rowCount > 0){
        return res.status(400).json({ errors: "name already in use" });
      }else if(query2.rowCount > 0){
        return res.status(400).json({ errors: "email already in use" });
      }
      else{
        await db.query(`Insert Into users(name, email, password_hash) Values ('${body.name}','${body.email}','${md5(body.password)}')`);
        res.status(200).send();
      }
    });

