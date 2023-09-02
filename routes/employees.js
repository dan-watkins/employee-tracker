const router = require("express").Router();
const db = require("../config/connection").mysql();

router.get("/", (req, res) => {
  const sql = `SELECT id, first_name, last_name, role_id, manager_id FROM employees`;
  db.query(sql, (err, employees) => {
    if (err) {
      return res.status(500).json({ message: "error", error: message });
    }
    res.json({
      message: "success",
      data: employees,
    });
  });
});

module.exports = router;
