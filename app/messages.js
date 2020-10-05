const router = require("express").Router();
const db = require("../fileDB");

router.get("/", (req,res) => {
    const messages = db.getItems();
    res.send(messages);
});
router.post("/", (req,res) => {
    const message = db.addItem(req.body);
    res.send(message);
});

module.exports = router;