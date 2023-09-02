const router = require("express").Router();
const db = require("../config/connection").mysql();

router.get("/", (req, res) => {
  const sql = `SELECT id, title, salary, department_id FROM roles`;
  db.query(sql, (err, roles) => {
    if (err) {
      return res.status(500).json({ message: "error", error: message });
    }
    res.json({
      message: "success",
      data: roles,
    });
  });
});

module.exports = router;
