const express = require("express");
const app = express();

app.set('json spaces', 2);
app.use(express.json());
app.use(express.static(__dirname + '/'));
app.get("/", function (req, res) {
    res.sendFile("home.html", {root: __dirname + "/"});
});
app.listen(3000, function () {
    console.log("listening on port 3000!");
});