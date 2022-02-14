const express = require("express");
const mongoose=require("mongoose");
const app=express();
const cors = require("cors")

const postModel = require("./model/post");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Search");

var postsArr = [{
  "title": "Indonesia",
  "link": "http://cdc.gov"
}, {
  "title": "Portugal",
  "link": "https://google.com."
}, {
  "title": "Thailand",
  "link": "https://jimdo.com"
}, {
  "title": "Burkina Faso",
  "link": "http://cbc.ca"
}, {
  "title": "India",
  "link": "https://facebook.com"
}, {
  "title": "Madagascar",
  "link": "http://guardian.co.uk"
}, {
  "title": "China",
  "link": "https://github.io"
}, {
  "title": "Brazil",
  "link": "https://microsoft.com"
}, {
  "title": "Democratic Republic of the Congo",
  "link": "https://webmd.com"
}, {
  "title": "China",
  "link": "https://cyberchimps.com"
}, {
  "title": "Azerbaijan",
  "link": "http://umich.edu"
}, {
  "title": "China",
  "link": "http://posterous.com"
}, {
  "title": "South Korea",
  "link": "http://yahoo.com"
}, {
  "title": "China",
  "link": "https://cafepress.com"
}, {
  "title": "Philippines",
  "link": "http://sina.com.cn"
}, {
  "title": "China",
  "link": "http://cargocollective.com"
}, {
  "title": "Pakistan",
  "link": "http://examiner.com"
}, {
  "title": "Philippines",
  "link": "https://redcross.org"
}, {
  "title": "Serbia",
  "link": "http://huffingtonpost.com"
}, {
  "title": "China",
  "link": "http://github.com"
}]

// insert data to database
const insert=async()=>{
    try{
        await postModel.create(postsArr)
        console.log("inserted data");

    } catch(error){
        console.log(error);
    }
}
 insert();

 app.get("/",async(req,res)=>{
   res.send("Hello")
 })


//  To get all datas 
 app.get("/search", async(req, res) =>{

    try{
        postModel.find({},(err,result)=>{
          if(err){
            res.send(err);
          }
          res.send(result)
        })

    } catch(error){
        res.send(error);
    }

});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
})

// Made by Abhishek Dash
