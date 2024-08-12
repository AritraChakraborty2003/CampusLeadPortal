import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mysql2 from "mysql2"

const app = express();
app.use(cors());
app.use(bodyParser.json());

const conn= mysql2.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"Anil@12345",
    database:"codemapcommunity",
    port:3306,

});



app.get("/api/campusLead",(req,res)=>{
   
    
});

app.get("/user",(req,res)=>{
    const sql="SELECT * FROM user;";
    conn.query(sql, (err,data)=>{
        if(err) console.log(err);
        return res.json(data);
    });


});
app.post("/api/campusLead",(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const college = req.body.college;
    const description = req.body.description;

    const sql="INSERT INTO user (name,email,college,description) VALUES(?,?,?,?);";

    conn.query(sql,[name,email,college,description],(err,data)=>{
        if(err) console.log(err);
        else{
            return res.status(200).send({ status:200});
        }
    });


    
})
app.listen(8000,()=>{
    console.log("backend connected");
});