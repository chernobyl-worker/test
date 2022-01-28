const app = require("express")();

const port = process.env.port || 5000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
});

app.get("/data", (req, res) => {
    res.json({"id":1, "data":"hello world"});
});

app.listen(port, console.log(`Listening on port ${port}`));

module.exports = app;