const router = require("express").Router();
const db = require("../config/connection").mysql();

router.get("/", (req, res) => {
  const sql = `SELECT id, department_name FROM department`;
  db.query(sql, (err, departments) => {
    if (err) {
      return res.status(500).json({ message: "error", error: message });
    }
    res.json({
      message: "success",
      data: departments,
    });
  });
});

module.exports = router;
