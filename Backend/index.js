import express from "express";
import cors from "cors";
import bodyParser from "body-parser"

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/api/campusLead",(req,res)=>{
    
    res.send();
});

app.get("/",(req,res)=>{
const obj = {
    name:"anil21",
}
res.send(obj);
});
app.post("/api/campusLead",(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const college = req.body.college;
    const description = req.body.description;
})
app.post("/CLMessage",(req,res)=>{
    const name= req.body.name;
    const email= req.body.email;
    const message = req.body.message;
    console.log([name,email,message]);
    return res.status(200).send({ status: 200});
})

app.get("/CLMessage",(req,res)=>{

})


app.listen(8000,()=>{
    console.log("backend connected");
});