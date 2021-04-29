const express = require('express');
const app = express();
const hbs = require("hbs");
const PORT = process.env.PORT || 5000;
const path = require('path');

tapme=[];

//set views
app.set("views", path.join(__dirname, "views"));
//set view engine
app.set("view engine", "hbs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//set public folder as static folder for static files
app.use("/assets", express.static(__dirname + "/public"));

app.get("/",(req,res) => {
  var outar=tapme.reverse();
  res.render("page",{
    tapped: outar,
  });
});
app.post("/boobsie", (req,res) => {
  let date=new Date();
  let sen="Boobsie checked in at "+date;
  tapme.push(sen);
  console.log(sen);
  res.redirect("/");
});
app.post("/bumsie", (req,res) => {
  let date=new Date();
  let sen="Bumsie checked in at "+date;
  tapme.push(sen);
  res.redirect("/");
});
app.get("")
app.listen(8000, "0.0.0.0", () => {
  console.log("Server at port 8000");
});
